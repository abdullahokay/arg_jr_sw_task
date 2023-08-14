import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Person {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public eMail: string,
    public birthDay: string
  ) { }
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./_display.component.scss']
})


export class DisplayComponent implements OnInit{

  constructor(
    private http: HttpClient
  ) { }

  Persons: Person[] = []

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    const apiUrl = 'https://localhost:7014/Test/GetUser'
    this.http.get(apiUrl).subscribe(
      (response => {
        console.log('get işlemi başarılı:', response);
        this.Persons = response as any[]
      }),
      (error => {
        console.error('get işlemi hatası:', error);
      })
    );
  }
}
