import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Models/Post';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http:HttpClient) { }
  private readonly User_Base_URL = "https://jsonplaceholder.typicode.com/users/"
  private readonly Post_Base_URL = "https://jsonplaceholder.typicode.com/posts/"
  private readonly Comments_Base_URL = "https://jsonplaceholder.typicode.com/comments/"



  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.User_Base_URL)
  }
  getUserPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.Post_Base_URL)
  }
  getPostComments():Observable<Comment[]>{
    return this.http.get<Comment[]>(this.Comments_Base_URL)
  }
}
}
