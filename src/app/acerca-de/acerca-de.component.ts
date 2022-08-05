import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 sendEmail(){
    this.router.navigate(['contact']);
    console.log('Intentando enviar email')
 }

}
