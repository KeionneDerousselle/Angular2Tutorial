import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
    pageTitle: string;
    product: IProduct;
    errorMessage: string;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService){}

    ngOnInit(): void{
        let id = +this._route.snapshot.params['id'];
        this._productService.getProduct(id)
                             .subscribe(product => this.product = product,
                                        error => this.errorMessage = <any>error);
    }

    onBack(): void{
        this._router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = message;
    }
}