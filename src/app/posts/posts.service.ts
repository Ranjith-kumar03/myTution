import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { Student } from './post.model';

const BACKEND_URL = environment.apiUrl + '/posts/';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Student[] = [];
  private postsUpdated = new Subject<{ posts: Student[]; postCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getPosts(postsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; posts: any; maxPosts: number }>(
        BACKEND_URL + queryParams
      )
      .pipe(
        map((postData) => {
          return {
            posts: postData.posts.map((student: any) => {
              return {
                name: student.name,
                age: student.age,
                gender: student.gender,
                timing: student.timing,
                content: student.content,
                id: student._id,
                imagePath: student.imagePath,
                creator: student.creator,
              };
            }),
            maxPosts: postData.maxPosts,
          };
        })
      )
      .subscribe((transformedPostData) => {
        this.posts = transformedPostData.posts;
        this.postsUpdated.next({
          posts: [...this.posts],
          postCount: transformedPostData.maxPosts,
        });
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{
      _id: string;
      name: string;
      age: string;
      gender: string;
      timing: string;
      content: string;
      imagePath: string;
      creator: string;
    }>(BACKEND_URL + id);
  }

  addPost(
    name: string,
    age: string,
    gender: string,
    timing: string,
    content: string,
    image: File
  ) {
    const postData = new FormData();
    postData.append('name', name);
    postData.append('age', age);
    postData.append('gender', gender);
    postData.append('timing', timing);
    postData.append('content', content);
    postData.append('image', image, name);
    this.http
      .post<{ message: string; post: Student }>(BACKEND_URL, postData)
      .subscribe((responseData) => {
        this.router.navigate(['/']);
      });
  }

  updatePost(id: string,  name: string,
    age: string,
    gender: string,
    timing: string,
    content: string,
     image: File) {
    let postData: Student | FormData;
    if (typeof image === "object") {
      postData = new FormData();
      postData.append('name', name);
    postData.append('age', age);
    postData.append('gender', gender);
    postData.append('timing', timing);
    postData.append('content', content);
    postData.append('image', image, name);
    } else {
      postData = {
        id: id,
         name: name,
      age: age,
      gender: gender,
      timing: timing,
      content: content,
      imagePath : image,
      creator: ''

      };
    }
    this.http
      .put(BACKEND_URL + id, postData)
      .subscribe(response => {
        this.router.navigate(["/"]);
      });
  }

  deletePost(postId: string) {
    return this.http.delete(BACKEND_URL + postId);
  }
}
