import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.mode';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  @Output() postCreated = new EventEmitter<Post>();
  
  onAddPost(form: NgForm) {
    if(form.invalid) return;
    // Przypisanie pobranych wartości do obiektu post
    const post: Post = {title: form.value.title, content: form.value.content }; 
    this.postCreated.emit(post); // Wysłanie eventu z obiektem post -> $event zawiera teraz wartość post
  }
  
 // enteredTitle = ''; -> Zmienna pobiera wartość przez ngModel
 // enteredContent = '';
  // onAddPost(postInput: HTMLTextAreaElement) {
    // this.newPost = postInput.value; -> Pobieranie wartości z referencji do inputa (Sposób pierwszy)
    // this.newPost = this.enteredValue; // Przypisanie wartości przez ngMNodel
 // }
}
