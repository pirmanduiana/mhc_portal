import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FinderComponent } from './finder/finder.component';
import { TermsComponent } from './terms/terms.component';
import { PxdetailComponent } from './pxdetail/pxdetail.component';
import { PxregisteredComponent } from './pxregistered/pxregistered.component';
import { PxuploadComponent } from './pxupload/pxupload.component';

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
        path: 'find/:id/:type',
        component: PxdetailComponent
    },
    {
        path: 'registered',
        component: PxregisteredComponent
    },
    {
        path: 'registered/:id',
        component: PxuploadComponent
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
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }