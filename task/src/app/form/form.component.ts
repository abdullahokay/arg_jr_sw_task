import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./_form.component.scss']
})
export class FormComponent {

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
      (response => {
        console.log('Post işlemi başarılı:', response);
        alert("Kaydetme İşlemi Başarılı!")
      }),
      (error => {
        console.error('Post işlemi hatası:', error);
        alert("Kaydetme İşlemi Başarısız!")
      })
    );
  }
}
