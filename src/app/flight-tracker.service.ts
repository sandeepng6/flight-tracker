import { Injectable } from '@angular/core';
import { FlightTracker } from './flight-tracker'
import { airlines } from './mock-flight-tracker'

@Injectable({
  providedIn: 'root'
})
export class FlightTrackerService {

    getAirlinesData(): FlightTracker[] {
      return airlines;
    }
}
