import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create-component.html',
  styleUrls: ['./post-create-component.css']
})
export class PostCreateComponent {
  newPost = '';
  enteredValue = '';

  onAddPost() {
    this.newPost = this.enteredValue; // Przypisanie wartości przez ngMNodel
  }
 // onAddPost(postInput: HTMLTextAreaElement) {
 //   this.newPost = postInput.value; -> Pobieranie wartości z referencji do inputa (Sposób pierwszy)
 // }
}
