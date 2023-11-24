import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ThanksComponent } from '../thanks/thanks.component';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-form-contact-us',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, ThanksComponent],
  templateUrl: './form-contact-us.component.html',
  styleUrl: './form-contact-us.component.scss'
})

export class FormContactUsComponent implements OnInit{
  title:string = 'Stay updated!';
  messageCTA:string = 'Join 60,000+ product managers receiving monthly updates on:';
  imagePathList:string = '../../assets/images/icon-list.svg';
  messageListOne:string = 'Product discovery and building what matters';
  messageListTwo:string = 'Measuring to ensure updates are a success';
  messageListThree:string = 'And much more!';
  labelMessage:string = 'Email address';
  errorMessage:string = '';
  btnTextCTA:string = 'Subscribe to monthly newsletter';
  backgroundAsideRight:string = '../../assets/images/illustration-sign-up-desktop.svg';
  inputText: FormControl = new FormControl("",[Validators.required, Validators.email]);
  dontshowModal:boolean = true;

  public post() {
    if(this.inputText.valid){
      this.errorMessage = '';
      this.inputText.reset();
      this.observerModal.modal.emit(false);
    }else{
      this.errorMessage = 'Valid email required';
    }
    console.log(this.inputText);
  }


  constructor(private observerModal: ModalService){
  }

  ngOnInit(): void {
    this.observerModal.modal.subscribe((x)=>{this.dontshowModal = x});
  }  
}
