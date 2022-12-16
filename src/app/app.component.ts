import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do';
  tasks: any[] = ["Walk"];
  taskForm = new FormGroup({
    dTask: new FormControl('', Validators.required)
  });

  register(){
    this.tasks.push(this.taskForm.value.dTask)
    this.taskForm.reset()
  }

  remove(T: string){
    this.tasks.splice (this.tasks.indexOf(T), 1)
  }
}
