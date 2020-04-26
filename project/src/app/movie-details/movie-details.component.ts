import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Movie, UserProfile, Comment, Genre, Actor } from '../models';
import { MovieService } from '../movie.service';
import { CommentService } from '../comment.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  actors: Actor[];
  comments: Comment[];
  imageAvatar:string = "assets/images/avatar.png"
  comment;
  len: number;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private commentService: CommentService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
    console.log(this.actors);
    console.log(this.movie);
    this.len = this.comments.length;
    console.log(this.len);
    this.comment = { text: '' , movie: this.movie.id, user: 1 };
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.movieService.getOneMovie(id)
      .then(movie => {this.movie = movie});

    this.movieService.getMovieActors(id)
        .then(actors => {this.actors = actors});

    this.commentService.getComments(id)
      .subscribe(comments => this.comments = comments);
  }

  createComment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.createComment(id, this.comment)
      .subscribe(
        data => {
          this.comments.push(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  goBack(): void {
    this.location.back();
  }
}
