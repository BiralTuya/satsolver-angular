import { SolverApiService } from './service/solver-api.service';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ts-ignore
  @ViewChild("dialog") dialogRef: TemplateRef<any>;

  title = 'CNF DIMACS Solver';
  cnfText="";
  // @ts-ignore
  file: File;

  constructor(private solverService: SolverApiService, private dialog: MatDialog) {}

  handleFile(event: any) {
    this.file = event.target.files[0];
  }

  solve() {
    if(this.file == undefined && this.cnfText == "") return;
    if(this.file != undefined) {
      this.solverService.post(this.file).subscribe((data)=>{
        this.dialog.open(this.dialogRef, {data:data});
      });
    }
    else if(this.cnfText != "") {
      this.solverService.postText(new Blob([this.cnfText], {type: 'text/plain'})).subscribe((data)=>{
        this.dialog.open(this.dialogRef, {data:data});
      });
    }
  }
}
