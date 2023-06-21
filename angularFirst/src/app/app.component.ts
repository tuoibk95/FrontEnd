import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularFirst';
  public agree : number = 0;
  public disgree : number = 0;
  public names = ['Mr A', 'Mr B', 'Mr C', 'Mr D']

  parentVote(agreePram: boolean) {
    if(agreePram) {
      this.agree++;
    }
    else{
      this.disgree++;
    }
  }
}
