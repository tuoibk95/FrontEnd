import { Component, ViewChild } from '@angular/core';
import { GreetComponent } from './greet/greet.component';


// decorrator
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


  @ViewChild(GreetComponent)
  private greetComponent!: GreetComponent;

  parentVote(agreePram: boolean) {
    if(agreePram) {
      this.agree++;
    }
    else{
      this.disgree++;
    }
  }

  changeName(){
    this.greetComponent.setName('change name is parent')
  }

}
