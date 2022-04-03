import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// import { MatSliderModule } from '@angular/material/slider';
import { MatNativeDateModule, ThemePalette } from '@angular/material/core';// 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';

const materialModules = [
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatGridListModule,
    MatSelectModule,
];

@NgModule({
    imports: [
        CommonModule,
        ...materialModules
    ],
    exports: [
        ...materialModules
    ],
})
export class AngularMaterialModule { }