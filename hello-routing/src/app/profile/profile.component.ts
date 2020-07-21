import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ROCPService} from '../services/rocp.service';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentHero = 'No Hero';

  // I am making a TS object version of my form that I will pair with the form I create on the HTML page.
  // This is the Reactive Forms Module
  todos = new FormGroup({
    title: new FormControl('')
  });
  
  constructor(private route: ActivatedRoute, private rocp: ROCPService) { }

  postTodoEc2(todoSub: FormGroup) {
    let form = JSON.stringify(todoSub.value);
    this.rocp.postTodo(form).subscribe(
      response => {
        console.log('success');
      }
    );
  }
  getTodosEc2() {
    this.rocp.getTodos().subscribe(
      response => {
        console.log(response);
      }
    );
  }
  
  ngOnInit(): void {
    this.currentHero = this.route.snapshot.paramMap.get('heroname');
  }

}
