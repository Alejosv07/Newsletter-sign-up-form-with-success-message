import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.scss'
})
export class ThanksComponent implements OnInit{
  imagePath:string = "../../assets/images/icon-success.svg";
  title:string = "Thanks for subscribing!";
  message1:string = "A confirmation email has been sent to";
  message2:string = ". Please open it and click the button inside to confirm your subscription.";
  email:string = "ash@loremcompany.com";
  btnCTA:string = "Dismiss message";
  dontshowModal:boolean = false;
  
  constructor(private observerModal: ModalService){
    console.log("hola entre al componente thanks y tengo valor local de "+this.dontshowModal);
  }
  
  ngOnInit(): void {
    this.observerModal.modal.subscribe((x)=>{this.dontshowModal = x});
  }
  
  public closeModal(){
    this.dontshowModal = true;
    setTimeout(() => {
      this.observerModal.modal.emit(true);
    }, 1000);
  }
}
