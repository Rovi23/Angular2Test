import { Component } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
    directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_TABS_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon
  ],
  providers: [MdIconRegistry],
})

export class AppComponent {
  views: Object[] = [
    {
      name: "Mi cuenta",
      description: "Accede a los datos de tu cuenta",
      icon: "assignment ind"
    },
    {
      name: "Videos",
      description: "Mis videos",
      icon: "pets"
    }
  ];

  videos: Object[] = [
    {
      _id: "TRcSBC58sdM",
      name: "EN LOS JUEGOS OLIMPICOS RÍO 2016"
    },
    {
      _id: "Exvc223s17k",
      name: "DECORANDO NUESTRA CASA | SURVILAND 3 | EPISODIO 16"
    },
    {
      _id: "3BdDFrXAU78",
      name: "4 SI TE RIES PIERDES MUY DIFICIL | Videos de Risa 2016 & Vine fails compilation"
    },
    {
      _id: "fplxnPMXaNg",
      name: "LA BODA DE NUESTRA HIJA | TROLLS IN LOVE 2 | EPISODIO 39"
    }
  ];
}
