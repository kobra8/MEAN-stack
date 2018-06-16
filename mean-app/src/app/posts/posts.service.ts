import { Injectable } from "@angular/core";
import { Post } from "./post.mode";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'}) // Ten wpis można dodac zamiast wpisywać serwis w app module -> tworzy jedną instancję dla acałej apki
export class PostsService {
  private posts: Post[] = []; //Pusta tablica Posts
  private postUpdated = new Subject<Post[]>();

  getPosts() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post); // Dodanie posta do tablicy
    this.postUpdated.next([...this.posts]); // Przekazanie do Subject uaktualnionej tabeli posts
    // [...this.posts] -> Create new array -> kopia zamiast referencji
  }
}