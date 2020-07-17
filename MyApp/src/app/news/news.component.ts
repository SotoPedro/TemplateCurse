import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { from } from "rxjs";

@Component({
    selector: "News",
    templateUrl: "./news.component.html",    
})
export class NewsComponent implements OnInit {
    myText: string;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {       
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    
    if(android) {
        this.myText = 'Hola';
    }   
}
