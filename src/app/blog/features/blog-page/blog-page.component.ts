import { Component } from '@angular/core';
import { Datablog } from '../datablog';
import { FooterComponent } from '../../../shared/ui/footer/footer.component';
import { NavbarComponent } from '../../../shared/ui/navbar/navbar.component';
import { NgFor } from '@angular/common';
import { BlogDataService } from '../blog-data.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-blog-page',
  imports: [NavbarComponent, FooterComponent,NgFor,RouterLink],
  templateUrl: './blog-page.component.html',
  styles: ``
})
export default class BlogPageComponent {

  datablog: Datablog[] = [];

  constructor(private blogService: BlogDataService) {
    this.datablog = this.blogService.getAll();
  }

}
