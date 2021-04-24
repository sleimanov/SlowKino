import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import { Comment } from './models';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  BASE_URL = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.BASE_URL + '/api/movies/' + id + '/comments');
  }
  updateComment(id, text: String): Observable<any> {
    const body = { text: text };
    return this.http.put(this.BASE_URL + '/api/my_profile/comments/' + id + '/update', body,
    {headers: this.httpHeaders});
  }
  createComment(id, comment): Observable<any> {
    const body = {text: comment.text, movie: comment.movie, user: comment.user};
    return this.http.post(this.BASE_URL + '/api/movies/' + id + '/create_comment', body,
    {headers: this.httpHeaders});
  }
  deleteCompany(id): Observable<any> {
    return this.http.delete(this.BASE_URL + '/api/my_profile/comments/' + id + '/delete',
    {headers: this.httpHeaders});
  }

}
