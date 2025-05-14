import { Injectable } from '@angular/core';
import { Datablog } from './datablog';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  private blogs: Datablog[] = [
    {
      id: 1,
      type:"Articulo",
      title: "¿Está realmente regulada la maternidad subrogada en el Perú? Reflexiones sobre el caso Ricardo Morán y la situación legal de la maternidad subrogada.",
      image: "img/blog01.png",
      date: "2025-05-14",
      description: "Puede una pareja tranquilamente adoptar un niño. Siendo esta una medida de protección al niño por la cual, bajo la vigilancia del Estado, se establece una relación "
    },
    {
      id: 2,
      type:"Opinion",
      title: "El futuro del derecho ambiental en América Latina",
      image: "img/blog02.png",
      date: "2025-05-10",
      description: "Análisis sobre la legislación ambiental y los retos del desarrollo sostenible."
    }
  ];

  getAll(): Datablog[] {
    return this.blogs;
  }

  getById(id: number): Datablog | undefined {
    return this.blogs.find(blog => blog.id === id);
  }
  constructor() { }
}
