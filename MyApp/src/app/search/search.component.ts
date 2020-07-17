import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { NoticiasService } from "../domain/noticias.service";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html",    
})
export class SearchComponent implements OnInit {

    constructor(private ns: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.ns.agregar("Hola");        
        this.ns.agregar("Hola 1");
        this.ns.agregar("Hola 2");
        this.ns.agregar("Hola 3");

    
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
