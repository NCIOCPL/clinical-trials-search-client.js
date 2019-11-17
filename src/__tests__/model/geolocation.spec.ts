/**
 * Tests for Geolocation class methods.
 * 
 * *NOTE:* Serialization tests are included in clinicaltrial-result.spec.ts.
 */
import { GeoLocation } from "../../model/clinicaltrial-result";

describe("Services.ClinicalTrials.Model.GeoLocation", () => {
    describe("isWithinRadius", () => {
        it("Should find identical locations are within the radius.", () => {
            
            const point: GeoLocation = new GeoLocation();
            point.latitude = 41.8204;
            point.longitude = -71.4128;

            const lat:number = 41.8204;                
            const lon:number = -71.4128;            

            expect(point.isWithinRadius(lat, lon, 20)).toBe(true);
        });

        it("Should find Bethesda more than 20 miles from Pittsburgh", () => {

            // NIH Clinical Center
            const point: GeoLocation = new GeoLocation();
            point.latitude = 39.0022586;
            point.longitude = -77.1111331;

            // Pittsburgh
            const lat: number = 40.4313472;
            const lon: number = -80.0507114;

            expect(point.isWithinRadius(lat, lon, 20)).toBe(false);
        });

        it("Should find Bethesda less than 20 miles from Rockville", () => {

            // NIH Clinical Center
            const point: GeoLocation = new GeoLocation();
            point.latitude = 39.0022586;
            point.longitude = -77.1111331;

            // Rockville
            const lat: number = 39.1034469;
            const lon: number = -77.197984;

            expect(point.isWithinRadius(lat, lon, 20)).toBe(true);
        });

        it("Should find the poles less than 15,000 miles apart", () => {

            const point: GeoLocation = new GeoLocation();
            point.latitude = 90;
            point.longitude = -77.1111331;

            const lat: number = -90;
            const lon: number = -80.0507114;

            expect(point.isWithinRadius(lat, lon, 15000)).toBe(true);
        });
    });
});