import { ClinicaltrialResult } from './clinicaltrial-result';

/**
 * Represents a collection of clinical trials in the results of an
 * endpoint call.
 */
export class ClinicaltrialResults {

    /**
    * Total number of trials matching the criteria.
    */
    total: number;

    /**
     * Gets the trials in this batch.
     */
    trials: ClinicaltrialResult[];

    constructor() {
        this.total = 0;
        this.trials = [];
    }

    static fromJSON(json: any): ClinicaltrialResults {
        if (typeof json === 'string') {
            return JSON.parse(json, ClinicaltrialResults.reviver);
        } else {
            //Create an instance of the ClinicaltrialResults class
            let trialresults = Object.create(ClinicaltrialResults.prototype)

            //Copy all the fields from the json object.
            return Object.assign(trialresults, json, {
                //Convert any fields that have different names or need conversion.
                trials: json.trials.map(
                    (trialJson: any) => {
                        return ClinicaltrialResult.fromJSON(trialJson);
                    }
                ),
                total: json.total
            });
        }
    }

    /**
     * Reviver can be passed as the second parameter to JSON.parse to
     * automatically call User.fromJSON on the resulting value.
     * 
     * @param key 
     * @param value 
     */
    static reviver(key: string, value: any): any {
        return key === "" ? ClinicaltrialResults.fromJSON(value) : value;
    }
}