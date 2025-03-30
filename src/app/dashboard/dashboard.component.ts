import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostService } from '../post.service';
import { BlogModel } from '../models/post.model';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  obsArray: BehaviorSubject<BlogModel[]> = new BehaviorSubject<BlogModel[]>([]);
  items$: Observable<BlogModel[]> = this.obsArray.asObservable();
  pageSize: number = 5;
  currentPage: number = 1;
  hasMore: boolean = true;
  isLoading: boolean = false;

  constructor(private router: Router, private postService: PostService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.isLoading = true;
    this.postService.getAllPosts(this.pageSize, this.currentPage).subscribe(
      (data) => {
        this.obsArray.next(data);
        this.hasMore = data.length === this.pageSize; // If full page is fetched, more might be available
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  nextPage(): void {
    if (this.hasMore) {
      this.currentPage++;
      this.loadPosts();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPosts();
    }
  }

  logout(): void {
    this.authService.logoutUser();
    this.router.navigate(['/login']);
  }
}
