import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as utils from "tns-core-modules/utils/utils";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
    selected = {};

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.selected = JSON.parse(params["selected"]);
        });
    }

    launch(website) {
        utils.openUrl(website)
    }

    ngOnInit(): void {}
}
