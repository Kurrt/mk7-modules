import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretSettingsComponent } from './components/SecretSettings.component';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from './modules/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
    { path: '', component: SecretSettingsComponent }
];

@NgModule({
    declarations: [SecretSettingsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [SecretSettingsComponent]
})
export class SecretSettingsModule { }
