import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    DialogModule,
    ProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    DialogModule,
    ProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
})
export class SharedModule {}
