import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../interfaces/user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upsert-user-modal',
  templateUrl: './upsert-user-modal.component.html',
  styleUrls: ['./upsert-user-modal.component.scss']
})
export class UpsertUserModalComponent implements OnInit {

  @Input()  user: IUser;
  public dialogHeaderTxt: string
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  
    this.dialogHeaderTxt = !this.user._id ? "Insert User" : "Update User"; 
  }

  doUpsert() {
    this.activeModal.close(this.user);
  }
}
