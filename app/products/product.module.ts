import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';

import { ProductDetailGuard } from './product-guard.service';
import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', canActivate: [ ProductDetailGuard ], component: ProductDetailComponent },
        ])
    ],
    declarations:[
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    providers:[
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule{}