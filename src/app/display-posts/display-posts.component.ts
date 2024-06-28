import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../Services/twitter.service';
import { User } from '../Models/User';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Post } from '../Models/Post';

@Component({
  selector: 'app-display-posts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './display-posts.component.html',
  styleUrl: './display-posts.component.css'
})
export class DisplayPostsComponent implements OnInit {
  constructor(private ts: TwitterService) { }
  users!: User[]
  posts!:Post[]
  displayedUser!: User

  getUser(eventData: Event) {
    const id = +(eventData.target as HTMLSelectElement).value
    let selectedUser = this.users.find(u => u.id === id)
    if (selectedUser) {
      this.displayedUser = selectedUser
      this.posts.find(p =>p.userId !== this.displayedUser.id)
      
    }

  
  }
  ngOnInit(): void {
    this.ts.getAllUsers().subscribe(users => {
      this.users = users
      this.displayedUser = this.users[0]
      console.log(this.users)
    })

    this.ts.getUserPosts().subscribe(posts=>{
      this.posts = posts
      this.posts.find(p =>p.userId === this.displayedUser.id)
  })
}
}
