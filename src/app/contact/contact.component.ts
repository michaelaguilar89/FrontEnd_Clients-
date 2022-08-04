import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs,{ EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formContact= new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone : new FormControl('',[Validators.required]),
    message: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(250)])
  })

  serviceID = 'default_service';
  templateID = 'template_1g8k12r';
  publicKey = 'r1qMJAfu5Cu9xKtoO';
  constructor() { }

  ngOnInit(): void {
  }

  public sendEmail(e:Event){
    e.preventDefault();

   console.log(this.formContact.value);
    if(this.formContact.valid){
    

      emailjs.sendForm(this.serviceID,this.templateID,e.target as HTMLFormElement, this.publicKey)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('mensaje :'+result.text);
        this.formContact.reset();
        
        
      }, (error:any) => {
        console.log(error.text);
        alert('mensaje :'+error.text);
        
      });
    }else{
      alert('Faltan datos que agregar');
      console.log('No todos los datos son validos')
           
    }
        
  }

}
