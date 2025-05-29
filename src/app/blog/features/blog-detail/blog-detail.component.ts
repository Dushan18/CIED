import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { BlogDataService } from '../blog-data.service';
import { Datablog } from '../datablog';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { FooterComponent } from '../../../shared/ui/footer/footer.component';
import { NavbarComponent } from '../../../shared/ui/navbar/navbar.component';

@Component({
  selector: 'app-blog-detail',
  imports: [NavbarComponent, FooterComponent, NgFor, NgIf,CommonModule, RouterModule,RouterLink],
  templateUrl: './blog-detail.component.html',
  styles: ``
})
export default class BlogDetailComponent {
  blog: Datablog | undefined;

  constructor(private route: ActivatedRoute, private blogService: BlogDataService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogService.getById(id);
  }

  getInitials(author?: string): string {
  if (!author) return '';
  const parts = author.trim().split(' ');
  const first = parts[0]?.[0] || '';
  const second = parts[1]?.[0] || '';
  return (first + second).toUpperCase();
}

}
