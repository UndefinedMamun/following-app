import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  private userId;
  constructor(
    private rout: Router,
    private route: ActivatedRoute) { }

  submit(){
    this.rout.navigate(['/followers'], {
      queryParams:{page: 1, order:'newest'}
    })
  }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('userid');
    let username = this.route.snapshot.paramMap.get('username');
    console.log(this.userId + " UserName : " + username);
  }

}
