import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-entries',
    imports: [
        RouterModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule
    ],
    templateUrl: './entries.component.html',
})
export class EntriesComponent {

  }