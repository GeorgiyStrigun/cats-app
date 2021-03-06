import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
	cats: Cat[];

  constructor(private catService: CatService) { }

  ngOnInit() {
  	this.getCats();
  }
  
  getCats(): void {
     this.catService.getCats()
    .subscribe(cats => this.cats = cats);
  }
    delete(cat: Cat): void {
    this.cats = this.cats.filter(c => c !== cat);
    this.catService.deleteCat(cat).subscribe(); 
  }

}
