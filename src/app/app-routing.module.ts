import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FinderComponent } from './finder/finder.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'find',
        component: FinderComponent
    },
    {
        path: 'terms',
        component: TermsComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }