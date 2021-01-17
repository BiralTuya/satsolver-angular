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

  title = 'hello';
  file: File|undefined;

  constructor(private solverService: SolverApiService, private dialog: MatDialog) {}

  handleFile(event: any) {
    this.file = event.target.files[0];
  }

  solve() {
    if(this.file == undefined) return;
    this.solverService.post(this.file).subscribe((data)=>{
      console.log(data);
      this.dialog.open(this.dialogRef, {data:data});
    });
  }
}
