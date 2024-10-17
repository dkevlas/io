import { Component } from '@angular/core';
//import * as emailjs from '@emailjs/browser' //AGREGADO NADA MAS

interface Contact{
  phone: string,
  email: string,
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contact: Contact = {
    phone: '+51 922 912 558',
    email: 'dennisk.blas@gmail.com'
  }

}
