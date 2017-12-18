import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'my-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  posts: any[];

  constructor(private service: PostService) {  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts)
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = "";
    this.service.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id;
        this.posts.splice(0,0,post);
      }, (error:AppError) => {
        if(error instanceof BadInput)
          alert("Already Exist");
        else {
          throw error;
        }
      })
  }

  updatePost(post){
    this.service.update(post)
      .subscribe(updatedPost => console.log(updatedPost))
  }

  deletePost(post){
    let title = post.title;
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(null, 
        (error:AppError) => {
        if(error instanceof NotFoundError){
          alert(title+" is already deleted");
        } else {
          this.posts.splice(0,0,post); //optimistic error handling (getting back the data into the view)

          throw error;
        }
      })
  }

  

}
