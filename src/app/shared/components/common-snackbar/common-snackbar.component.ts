import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-common-snackbar',
  imports: [MatIconModule],
  templateUrl: './common-snackbar.component.html',
  styleUrl: './common-snackbar.component.scss'
})
export class CommonSnackbarComponent implements OnInit {
  constructor(
    public snackBarRef: MatSnackBarRef<CommonSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
