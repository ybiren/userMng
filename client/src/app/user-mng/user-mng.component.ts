import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';
import { UserMngService } from '../user-mng.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpsertUserModalComponent } from '../upsert-user-modal/upsert-user-modal.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-user-mng',
  templateUrl: './user-mng.component.html',
  styleUrls: ['./user-mng.component.scss']
})
export class UserMngComponent implements OnInit {

  public users :IUser[] = [];
  constructor(private svc: UserMngService, private modalService: NgbModal) { }

  ngOnInit() {
    this.svc.GetUsers().pipe(take(1)).subscribe(users => this.users=users);
  }

  updateUser(user: IUser){
    const modalRef = this.modalService.open(UpsertUserModalComponent, {centered: true, backdrop: 'static'});
    modalRef.componentInstance.user = Object.assign({}, user);
    modalRef.result.then((user: IUser) => {
      this.svc.UpdateUser(user).pipe(take(1)).subscribe(()=> {
        const userInd = this.users.findIndex((item) => {return item._id === user._id});
        this.users[userInd] = user; 
      });  
    });
  }

  insertUser() {
    const modalRef = this.modalService.open(UpsertUserModalComponent, {centered: true, backdrop: 'static'});
    const newUser: IUser = {_id: null, pname: "",fname: "", age:0, email:""};
    modalRef.componentInstance.user = newUser;
    modalRef.result.then((user: IUser) => {
      this.svc.InsertUser(user).pipe(take(1)).subscribe(() => this.users.push(user));  
    });
  }

  deleteUser(user: IUser) {
      this.svc.DeleteUser(user).pipe(take(1)).subscribe(() => {
        const delUserInd = this.users.findIndex((item) => {return item._id === user._id});
        this.users.splice(delUserInd,1);
      });  
  }
}
