import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'app-modal-dialog',
    templateUrl: './modal-dialog.component.html',
    styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {

    dialogResult = "";

    constructor(public dialog: MdDialog) { }

    ngOnInit() {
    }

    openDialog() {
        let dialogRef = this.dialog.open(LoginComponent, {
            width: '600px',
            data: 'Login Dialog'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog closed: ${result}`);
            this.dialogResult = result;
        })
    }

}
