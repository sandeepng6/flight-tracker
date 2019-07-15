import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { isIOS } from "tns-core-modules/platform";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { isAndroid } from "tns-core-modules/platform";
import { FlightTrackerService } from "../flight-tracker.service"
import { FlightTracker } from "../flight-tracker"
import { Router, NavigationExtras } from "@angular/router";

declare const IQKeyboardManager: any;

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    airlineData: FlightTracker[];

    searching = false;

    airlineItem: FlightTracker[];

    actionAndroid;

    selected = {};

   

    constructor(private flightTrackerService:FlightTrackerService, 
        private router: Router) {

        this.airlineData = this.flightTrackerService.getAirlinesData();
        this.actionAndroid = isAndroid;


        this.airlineItem = this.airlineData.filter((e) => {
            return e.logoURL && e.name && e.phone && e.site;
        });

        if (isIOS) {
            var keyboard = IQKeyboardManager.sharedManager();
            keyboard.shouldResignOnTouchOutside = true;
        }
    }

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
        searchBar.dismissSoftInput();
    }

    onSearch(searchValue) {
        if (searchValue !== "") {
            this.airlineItem = this.airlineData.filter((e) => {
                return (e.logoURL && e.name && e.phone && e.site) && (e.name.toLowerCase().includes(searchValue));
            });
    
        }
    }

    select(args) {
        this.selected = this.airlineItem[args.index];
            this.router.navigate(["/detail"], {
                queryParams: { selected: JSON.stringify(this.selected),
                }
            });
    }

    public onClear(args) {
        let searchBar = <SearchBar>args.object;
        searchBar.text = "";
        searchBar.hint = "Airline Filter...";
        this.airlineData.forEach(item => {
            this.airlineItem.push(item);
        })
        searchBar.dismissSoftInput();
        this.searching = false;
    }

    public onTextChange(args) {
        let searchBar = <SearchBar>args.object;
        this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
    }

    ngOnInit(): void {
     }
}
