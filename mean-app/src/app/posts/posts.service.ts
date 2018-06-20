import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'}) // Ten wpis można dodac zamiast wpisywać serwis w app module -> tworzy jedną instancję dla acałej apki
export class PostsService {
  private posts: Post[] = []; // Pusta tablica Posts
  private postsUpdated = new Subject<Post[]>();

  constructor(
    private httpClient: HttpClient
  ) {

  }

  getPosts() {
    this.httpClient.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts').subscribe( res => {
      this.posts = res.posts;
      this.postsUpdated.next([...this.posts]);
    },
  error => { });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};
    this.httpClient.post< {message: string }>('http://localhost:3000/api/posts', post)
    .subscribe(
      (res)=> {
       console.log(res.message); 
       // Zostawiono lokalną tablicę posts, która uaktualnia się jeżeli response success
       this.posts.push(post); // Dodanie posta do tablicy
       this.postsUpdated.next([...this.posts]); // Przekazanie do Subject uaktualnionej tabeli posts
       // [...this.posts] -> Create new array -> kopia zamiast referencji
      },
      error => {}
    )
  }
}
