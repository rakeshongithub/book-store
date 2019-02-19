import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books:any;

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.getAllBooks()
  }

  getAllBooks() {
    this.rest.getAllBooks().subscribe((data:any) => {
        console.log('=> Successfully get all books list', data.length);
        this.books = data;
    })
  }

}
