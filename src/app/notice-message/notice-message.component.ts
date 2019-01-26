import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-message',
  templateUrl: './notice-message.component.html',
  styleUrls: ['./notice-message.component.css']
})
export class NoticeMessageComponent implements OnInit {

  notice=[
    'भारत सरकार द्वारा स्वत्छ भारत मिशन (ग्रामीण /शहर ) को प्रदेश में क्रियान्वित करने के सम्बन्ध में',
    'पी- एच.डी. प्रोग्राम -2018 में प्रवेश हेतु आवश्यक सूचना (Application Form- 2018)',
    'Notification for disbursement of JRF/SRF fellowship to existing JRF/SRF holder and format of house rent receipt',
    'PUCRET (Ph.D. Entrance Exam) Result-2018',
    'Regarding depositing online fees for the main exam 2019',
    'भारत रत्न श्री अटल विहारी वाजपेयी जी के 95वी जयंती के महोत्सव के आयोजन के सम्बन्ध में',
    'पी- एच.डी. प्रोग्राम -2018 में प्रवेश हेतु आवश्यक सूचना (Application Form- 2018)'
  ];

  isDisabled:boolean=true;

  constructor() { }

  ngOnInit() {
  }

}
