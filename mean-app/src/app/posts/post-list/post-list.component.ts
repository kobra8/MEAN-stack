import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';
import { Post } from '../post.mode';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  // @Input() posts: Post[] = []; Sposób z bindingiem komponentów
  posts: Post[] = [];
  private postsSub: Subscription; // Zmienna subskrybcji tworzona w celu póxniejszego unsubscribe

  constructor(public postsService: PostsService) {
  }
  ngOnInit() {
    this.postsSub = this.postsService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
}
