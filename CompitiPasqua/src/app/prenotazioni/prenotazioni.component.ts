import { Component, OnInit } from '@angular/core';
import { PRENOTAZIONI } from '../mock-prenotazioni';
import { Prenotazione } from '../prenotazione';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-prenotazioni',
  templateUrl: './prenotazioni.component.html',
  styleUrls: ['./prenotazioni.component.css']
})
export class PrenotazioniComponent implements OnInit {

  prenotazione : Prenotazione[];

  selectedPrenotazione: Prenotazione;
  myForm: FormGroup;
 constructor(fb: FormBuilder) {
   this.prenotazione = Array<Prenotazione>();
  this.myForm = fb.group({
    'nome': ['nome', Validators.required],
    'cognome': ['cognome', Validators.required],
    'indirizzo': ['indirizzo', Validators.required],
    'data': ['gg/mm/2019', Validators.required],
    'ora': ['ora', Validators.required],
  });
 }
  ngOnInit() {
  }
  onSubmit(value: string): void {
    console.log('nome: ', this.myForm.controls['nome'].value );
    console.log('cognome: ', this.myForm.controls['cognome'].value)
    console.log('indirizzo: ', this.myForm.controls['indirizzo'].value)
    console.log('data: ', this.myForm.controls['data'].value)
    console.log('ora: ', this.myForm.controls['ora'].value)
    this.addPren();
  }
  onSelect(pr: Prenotazione): void {
    this.selectedPrenotazione = pr;
  }
  addPren(){
      let pren : Prenotazione = new Prenotazione();
      pren.nome = this.myForm.controls['nome'].value;
      pren.cognome = this.myForm.controls['cognome'].value;
      pren.indirizzo = this.myForm.controls['indirizzo'].value;
      pren.data = this.myForm.controls['data'].value;
      pren.ora = this.myForm.controls['ora'].value;
      this.prenotazione.push(pren);
      console.log("Aggiunto");
}
}
