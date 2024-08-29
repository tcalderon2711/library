import { Component } from '@angular/core';

@Component({
  selector: 'app-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.scss']
})
export class ReserveFormComponent {

messageText:string='';

reservedMessage() {
 this.messageText="Book reserved, thank you!";
}

}
