import { Component, OnInit , Input, Output , EventEmitter} from '@angular/core';

// Decorator
@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  @Input() name? : string;
  @Output() onVote = new EventEmitter<boolean>();

  public voted: boolean = false;
  public today = Date.now();
  public cities = [
    {
      Id: 1,
      Name: 'Ha Noi'
    },
    {
      Id: 2,
      Name: 'HCM'
    }
  ]

  vote(agree: boolean) {
    this.voted = agree;
    this.onVote.emit(agree);
  };

  setName(name: string){
    this.name = name;
  }

  
  onSubmit(value : any){
    console.log(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

  authors = [
    {
      firstName: "Lê Văn ",
      lastName: "Tươi",
      age: 27,
      genre: "A"
    },
    {
      firstName: "Lê Văn ",
      lastName: "Xuân",
      age: 29,
      genre: "B"
    },
    {
      firstName: "Nguyen Thi ",
      lastName: "Hoa",
      age: 48,
      genre: "Cs"
    }

]

}
