import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.scss']
})
export class ReserveFormComponent {

messageText:string='';

reservedMessage(form: NgForm) {
  if(form.valid){
    this.messageText="Book reserved, thank you!";
    form.resetForm();
  }
 
}

}
