import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormContactUsComponent } from "./form-contact-us/form-contact-us.component";
import { ThanksComponent } from './thanks/thanks.component';
import { ModalService } from './modal.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, FormContactUsComponent, ThanksComponent]
})
export class AppComponent implements OnInit{
    dontshowModal:boolean = true;

    constructor(private observerModal: ModalService){
    }
    ngOnInit(): void {
        this.observerModal.modal.subscribe((x)=>{this.dontshowModal = x});
    }
}
