import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';

  formData = {
    name: '',
    lastName: '',
    eMail: '',
    birthDay: '',
  };

  constructor(private http: HttpClient) { }

  postData() {
    const apiUrl = 'https://localhost:7014/SaveUser'; // API'nin URL'sini buraya ekleyin
    this.http.post(apiUrl, this.formData).subscribe(
      (response) => {
        console.log('Post işlemi başarılı:', response);
      },
      (error) => {
        console.error('Post işlemi hatası:', error);
      }
    );
  }
}
