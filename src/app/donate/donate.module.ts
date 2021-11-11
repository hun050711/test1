import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DonateComponent } from './containers/donate.component';
import { DonateRoutingModule } from './donate-routing.module';

@NgModule({
  declarations: [DonateComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    DonateRoutingModule,
  ],
})
export class DonateModule {}
