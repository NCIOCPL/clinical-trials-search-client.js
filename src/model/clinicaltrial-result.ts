/**
 * Represents a single clinical trial in the results of an
 * endpoint call.
 * 
 * NOTE: The class definitions for all of the child objects also
 *       appear in this file.
 */
export class ClinicaltrialResult {

  // nci_id
  nciID: string;

  // nct_id
  nctID: string;

  // protocol_id
  protocolID: string;

  // ccr_id
  ccrID: string;

  // ctep_id
  ctepID: string;

  // dcp_id
  dcpID: string;

  // other_ids
  otherTrialIDs: OtherId[];

  // phase
  trialPhase: Phase;

  // brief_title
  briefTitle: string;

  // official_title
  officialTitle: string;

  // brief_summary
  briefSummary: string;

  // detail_description
  detailedDescription: string;

  // eligibility
  eligibilityInfo: EligibilityInformation;

  // primary_purpose
  primaryPurpose: PrimaryPurposeInformation;

  // current_trial_status
  currentTrialStatus: string;

  // lead_org
  leadOrganizationName: string;

  //collaborators
  collaborators: Collaborator[];

  // principal_investigator
  principalInvestigator: string;

  // central_contact
  centralContact: CentralContactInformation;

  // sites
  sites: StudySite[]

  constructor() {
    this.nciID = null;
    this.nctID = null;
    this.protocolID = null;
    this.ccrID = null;
    this.ctepID = null;
    this.dcpID = null;
    this.otherTrialIDs = [];
    this.trialPhase = null;
    this.briefTitle = null;
    this.officialTitle = null;
    this.briefSummary = null;
    this.detailedDescription = null;
    this.eligibilityInfo = null;
    this.primaryPurpose = null;
    this.currentTrialStatus = null;
    this.leadOrganizationName = null;
    this.collaborators = null;
    this.principalInvestigator = null;
    this.centralContact = null;
    this.sites = null;
  }

  /**
   * Gets a list of of study sites within distance miles of the
   * point described by the latitude and longitude.
   * @param latitude Latitude, expressed in degrees.
   * @param longitude Longitude, expressed in degrees.
   * @param distance Maximum distance in miles from this Geolocation.
   * @returns An array of StudySite objects. If no sites meet the criteria,
   *          an empty array is returned.
   */
  filterSitesByGeolocation(latitude: number, longitude: number, distance: number): StudySite[] {

    let result: StudySite[] = [];

    let foo = <StudySite> this.sites[0];

    this.sites.forEach(site => {

    if (site.coordinates.isWithinRadius(latitude, longitude, distance)) {
        result.push(site);
      }
    });

    return result;
  }

  static fromJSON(json: any): ClinicaltrialResult {
    if (typeof json === 'string') {
      return JSON.parse(json, ClinicaltrialResult.reviver);
    } else {
      //Create an instance of the ClinicaltrialResult class
      let rtnTrial = new ClinicaltrialResult();

      //Loop over source
      Object.keys(json).forEach((key: string) => {
        switch (key) {
          case "nci_id": rtnTrial.nciID = json[key]; break;
          case "nct_id": rtnTrial.nctID = json[key]; break;
          case "protocol_id": rtnTrial.protocolID = json[key]; break;
          case "ccr_id": rtnTrial.ccrID = json[key]; break;
          case "ctep_id": rtnTrial.ctepID = json[key]; break;
          case "dcp_id": rtnTrial.dcpID = json[key]; break;
          case "other_ids": rtnTrial.otherTrialIDs = json[key]; break;
          case "phase": rtnTrial.trialPhase =
            (json[key] === null)
              ? null
              : Phase.fromJSON(json[key]); break;
          case "brief_title": rtnTrial.briefTitle = json[key]; break;
          case "official_title": rtnTrial.officialTitle = json[key]; break;
          case "brief_summary": rtnTrial.briefSummary = json[key]; break;
          case "detail_description": rtnTrial.detailedDescription = json[key]; break;
          case "eligibility": rtnTrial.eligibilityInfo =
            (json[key] === null)
              ? null
              : EligibilityInformation.fromJSON(json[key]); break;
          case "primary_purpose": rtnTrial.primaryPurpose =
            (json[key] === null)
              ? null
              : PrimaryPurposeInformation.fromJSON(json[key]); break;
          case "current_trial_status": rtnTrial.currentTrialStatus = json[key]; break;
          case "lead_org": rtnTrial.leadOrganizationName = json[key]; break;
          case "collaborators": rtnTrial.collaborators = 
            (json[key] === null)
              ? null
              : json.collaborators.map((collabJson:any) => {return Collaborator.fromJSON(collabJson)});
            break;
          case "principal_investigator": rtnTrial.principalInvestigator = json[key]; break;
          case "central_contact": rtnTrial.centralContact =
            (json[key] === null)
              ? null
              : CentralContactInformation.fromJSON(json[key]); break;
          case "sites": rtnTrial.sites =
            (json[key] === null)
              ? null
              : json.sites.map((siteJson: any) => { return StudySite.fromJSON(siteJson)})
            break;
        }
      })

      return rtnTrial;
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
    return key === "" ? ClinicaltrialResult.fromJSON(value) : value;
  }
}

/**
 * There's no need to create a full OtherId class as the TypeScript and JSON
 * properties have the same names. Instead, we will just assume that the returned
 * object matches the Interface and let TypeScript handle it from there.
 */
export interface OtherId {
  // name
  name: string

  // value
  value: string
}

export class Phase {
  // phase
  phaseNumber: string;

  // phase_other_text
  phaseOtherText: string;

  // phase_additional_qualifier_code
  phaseAdditionalQualifierCode: string;

  constructor() {
    this.phaseNumber = null;
    this.phaseOtherText = null;
    this.phaseAdditionalQualifierCode = null;
  }

  static fromJSON(json: any): Phase {
    if (typeof json === 'string') {
      return JSON.parse(json, Phase.reviver);
    } else {
      //Create an instance of the Phase class
      let rtnPhase = new Phase();

      //Loop over source
      Object.keys(json).forEach((key: string) => {
        switch (key) {
          case "phase": rtnPhase.phaseNumber = json[key]; break;
          case "phase_other_text": rtnPhase.phaseOtherText = json[key]; break;
          case "phase_additional_qualifier_code": rtnPhase.phaseAdditionalQualifierCode = json[key]; break;
        }
      })

      return rtnPhase;
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
    return key === "" ? Phase.fromJSON(value) : value;
  }
}

export class EligibilityInformation {

  // structured
  structuredCriteria: StructuredCriteriaInformation;

  // unstructured 
  unstructuredCriteria: UnstructuredCriterion[];

  constructor() {
    this.structuredCriteria = null;
    this.unstructuredCriteria = [];
  }

  static fromJSON(json: any): EligibilityInformation {
    if (typeof json === 'string') {
      return JSON.parse(json, EligibilityInformation.reviver);
    } else {
      //Create an instance of the Phase class
      let rtnPhase = new EligibilityInformation();

      //Loop over source
      Object.keys(json).forEach((key: string) => {
        switch (key) {
          case "structured": rtnPhase.structuredCriteria =
            (json[key] === null)
              ? null
              : StructuredCriteriaInformation.fromJSON(json[key]); break;
          case "unstructured": rtnPhase.unstructuredCriteria =
            (json[key] === null)
              ? null
              : json.unstructured.map((critJson: any) => { return UnstructuredCriterion.fromJSON(critJson) });
            break;
        }
      })

      return rtnPhase;
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
    return key === "" ? EligibilityInformation.fromJSON(value) : value;
  }
}

export class StructuredCriteriaInformation {

  // gender
  gender: string;

  // max_age
  maxAgeStr: string;

  // max_age_number
  maxAgeInt: number;

  // max_age_unit
  maxAgeUnits: string;

  // min_age
  minAgeStr: string;

  // min_age_number
  minAgeInt: number;

  // min_age_unit
  minAgeUnits: string;

  constructor() {
    this.gender = null;
    this.maxAgeStr = null;
    this.maxAgeInt = null;
    this.maxAgeUnits = null;
    this.minAgeStr = null;
    this.minAgeInt = null;
    this.minAgeUnits = null;
  }

  static fromJSON(json: any): StructuredCriteriaInformation {
    if (typeof json === 'string') {
      return JSON.parse(json, Phase.reviver);
    } else {
      //Create an instance of the Phase class
      let rtnStructure = new StructuredCriteriaInformation();

      //Loop over source
      Object.keys(json).forEach((key: string) => {
        switch (key) {
          case "gender": rtnStructure.gender = json[key]; break;
          case "max_age": rtnStructure.maxAgeStr = json[key]; break;
          case "max_age_number": rtnStructure.maxAgeInt = json[key]; break;
          case "max_age_unit": rtnStructure.maxAgeUnits = json[key]; break;
          case "min_age": rtnStructure.minAgeStr = json[key]; break;
          case "min_age_number": rtnStructure.minAgeInt = json[key]; break;
          case "min_age_unit": rtnStructure.minAgeUnits = json[key]; break;
        }
      })

      return rtnStructure;
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
    return key === "" ? StructuredCriteriaInformation.fromJSON(value) : value;
  }
}

export class UnstructuredCriterion {

  // inclusion_indicator
  isInclusionCriterion: boolean;

  // description
  description: string;

  constructor() {
    this.isInclusionCriterion = null;
    this.description = null;
  }

  static fromJSON(json: any): UnstructuredCriterion {
    if (typeof json === 'string') {
      return JSON.parse(json, UnstructuredCriterion.reviver);
    } else {
      //Create an instance of the Phase class
      let rtnStructure = new UnstructuredCriterion();

      //Loop over source
      Object.keys(json).forEach((key: string) => {
        switch (key) {
          case "inclusion_indicator": rtnStructure.isInclusionCriterion = json[key]; break;
          case "description": rtnStructure.description = json[key]; break;
        }
      })

      return rtnStructure;
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
    return key === "" ? StructuredCriteriaInformation.fromJSON(value) : value;
  }
}

export class PrimaryPurposeInformation {

  // primary_purpose_code
  code: string

  // primary_purpose_other_text
  otherText: string;

  // primary_purpose_additional_qualifier_code
  additionalQualifierCode: string;

  constructor() {
    this.code = null;
    this.otherText = null;
    this.additionalQualifierCode = null;
  }

  static fromJSON(json: any): PrimaryPurposeInformation {
    if (typeof json === 'string') {
      return JSON.parse(json, PrimaryPurposeInformation.reviver);
    } else {
      //Create an instance of the Phase class
      let rtnStructure = new PrimaryPurposeInformation();

      //Loop over source
      Object.keys(json).forEach((key: string) => {
        switch (key) {
          case "primary_purpose_code": rtnStructure.code = json[key]; break;
          case "primary_purpose_other_text": rtnStructure.otherText = json[key]; break;
          case "primary_purpose_additional_qualifier_code": rtnStructure.additionalQualifierCode = json[key]; break;
        }
      })

      return rtnStructure;
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
    return key === "" ? PrimaryPurposeInformation.fromJSON(value) : value;
  }
}

export class Collaborator {

  // name
  name: string

  // functional_role
  functionalRole: string;

  // status
  status: string

  constructor() {
    this.name = null;
    this.functionalRole = null;
    this.status = null;
  }

  static fromJSON(json: any): Collaborator {
    if (typeof json === 'string') {
      return JSON.parse(json, Collaborator.reviver);
    } else {
      //Create an instance of the Phase class
      let rtnStructure = new Collaborator();

      //Loop over source
      Object.keys(json).forEach((key: string) => {
        switch (key) {
          case "name": rtnStructure.name = json[key]; break;
          case "functional_role": rtnStructure.functionalRole = json[key]; break;
          case "status": rtnStructure.status = json[key]; break;
        }
      })

      return rtnStructure;
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
    return key === "" ? Collaborator.fromJSON(value) : value;
  }
}

export class CentralContactInformation {

  // central_contact_email
  email: string

  // central_contact_name
  name: string;

  // central_contact_phone
  phone: any

  // central_contact_type
  type: any

  constructor() {
    this.email = null;
    this.name = null;
    this.phone = null;
    this.type = null;
  }

  static fromJSON(json: any): CentralContactInformation {
    if (typeof json === 'string') {
      return JSON.parse(json, CentralContactInformation.reviver);
    } else {
      //Create an instance of the CentralContactInformation class
      let rtnStructure = new CentralContactInformation();

      //Loop over source
      Object.keys(json).forEach((key: string) => {
        switch (key) {
          case "central_contact_email": rtnStructure.email = json[key]; break;
          case "central_contact_name": rtnStructure.name = json[key]; break;
          case "central_contact_phone": rtnStructure.phone = json[key]; break;
          case "central_contact_type": rtnStructure.type = json[key]; break;
        }
      })

      return rtnStructure;
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
    return key === "" ? CentralContactInformation.fromJSON(value) : value;
  }
}
export class StudySite {

  // org_address_line_1
  addressLine1: string;

  // org_address_line_2
  addressLine2: string;

  // org_postal_code
  postalCode: string;

  // org_coordinates
  coordinates: GeoLocation;

  // org_city
  city: string;

  // org_state_or_province
  stateOrProvinceAbbreviation: string

  // org_country
  country: string;

  // org_va
  isVA: boolean;

  // org_name
  name: string;

  // org_family
  family: string;

  // org_to_family_relationship
  orgToFamilyRelationship: string;

  // org_email
  orgEmail:string;

  // org_fax
  orgFax: string;

  // org_phone
  orgPhone: string;

  // org_tty
  orgTty: string;

  // contact_email
  contactEmail: string;

  // contact_name
  contactName: string;

  // contact_phone
  contactPhone: string;

  // recruitment_status
  recruitmentStatus: string;

  // local_site_identifier
  localSiteIdentifier: string;

  constructor() {
    this.addressLine1 = null;
    this.addressLine2 = null;
    this.postalCode = null;
    this.coordinates = null;
    this.city = null;
    this.stateOrProvinceAbbreviation = null;
    this.country = null;
    this.isVA = null;
    this.name = null;
    this.family = null;
    this.orgToFamilyRelationship = null;
    this.orgEmail = null;
    this.orgFax = null;
    this.orgPhone = null;
    this.orgTty = null;
    this.contactEmail = null;
    this.contactName = null;
    this.contactPhone = null;
    this.recruitmentStatus = null;
    this.localSiteIdentifier = null;
  }

  static fromJSON(json: any): StudySite {
    if (typeof json === 'string') {
      return JSON.parse(json, StudySite.reviver);
    } else {
      //Create an instance of the StudySite class
      let rtnSite = new StudySite();
 
      //Loop over source
      Object.keys(json).forEach((key: string) => {
        switch (key) {
          case "org_address_line_1": rtnSite.addressLine1 = json[key]; break;
          case "org_address_line_2": rtnSite.addressLine2 = json[key]; break;
          case "org_postal_code": rtnSite.postalCode = json[key]; break;
          case "org_coordinates": rtnSite.coordinates = 
            (json[key] === null)
            ? null
            : GeoLocation.fromJSON(json[key]);break;
          case "org_city": rtnSite.city = json[key]; break;
          case "org_state_or_province": rtnSite.stateOrProvinceAbbreviation = json[key]; break;
          case "org_country": rtnSite.country = json[key]; break;
          case "org_va": rtnSite.isVA = json[key]; break;
          case "org_name": rtnSite.name = json[key]; break;
          case "org_family": rtnSite.family = json[key]; break;
          case "org_to_family_relationship": rtnSite.orgToFamilyRelationship = json[key]; break;
          case "org_email": rtnSite.orgEmail = json[key]; break;
          case "org_fax": rtnSite.orgFax = json[key]; break;
          case "org_phone": rtnSite.orgPhone = json[key]; break;
          case "org_tty": rtnSite.orgTty = json[key]; break;
          case "contact_email": rtnSite.contactEmail = json[key]; break;
          case "contact_name": rtnSite.contactName = json[key]; break;
          case "contact_phone": rtnSite.contactPhone = json[key]; break;
          case "recruitment_status": rtnSite.recruitmentStatus = json[key]; break;
          case "local_site_identifier": rtnSite.localSiteIdentifier = json[key]; break;
        }
      })

      return rtnSite;
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
    return key === "" ? StudySite.fromJSON(value) : value;
  }
}

export class GeoLocation {

  /**
   * Latitude
   */
  latitude: number;

  /**
   * Longitude
   */
  longitude: number;

  constructor() {
    this.latitude = null;
    this.longitude = null;
  }

  /**
   * Calculates whether the distance from a point (expressed as a latitude and longitude) is
   * within radius miles of this location.
   * @param lat Latitude, expressed in degrees.
   * @param lon Longitude, expressed in degrees.
   * @param radius Maximum distance in miles from this Geolocation.
   */
  isWithinRadius(lat: number, lon: number, radius: number): boolean {
    // Calculate the difference between this point and the other in miles,
    // using the Haversine formula.
    let resultDistance: number = 0.0;
    const avgRadiusOfEarth: number = 3960; //Radius of the earth differ, I'm taking the average.

    //Haversine formula
    //distance = R * 2 * aTan2 ( square root of A, square root of 1 - A )
    //                   where A = sinus squared (difference in latitude / 2) + (cosine of latitude 1 * cosine of latitude 2 * sinus squared (difference in longitude / 2))
    //                   and R = the circumference of the earth

    let differenceInLat: number = GeoLocation.degreeToRadian(this.latitude - lat);
    let differenceInLong: number = GeoLocation.degreeToRadian(this.longitude - lon);
    let aInnerFormula: number = Math.cos(GeoLocation.degreeToRadian(this.latitude)) * Math.cos(GeoLocation.degreeToRadian(lat)) * Math.sin(differenceInLong / 2) * Math.sin(differenceInLong / 2);
    let aFormula: number = (Math.sin((differenceInLat) / 2) * Math.sin((differenceInLat) / 2)) + (aInnerFormula);
    resultDistance = avgRadiusOfEarth * 2 * Math.atan2(Math.sqrt(aFormula), Math.sqrt(1 - aFormula));

    return (resultDistance <= radius);
  }

  /**
   * Converts a Degree to Radians.
   * @param val The value in degrees
   * @returns The value in radians.
   */
  private static degreeToRadian(val: number) {
    return (Math.PI / 180) * val;
  }

  /**
   * Create a GeoLocation object from the JSON representation.
   * 
   * @param json 
   *  JSON string containing a Geolocation represented as
   *  {"lat": number, "lon": number }
   */
  static fromJSON(json: any): GeoLocation {
    if (typeof json === 'string') {
      return JSON.parse(json, GeoLocation.reviver);
    } else {
      //Create an instance of the Geolocation class
      let rtnSite = new GeoLocation();

      //Loop over source
      Object.keys(json).forEach((key: string) => {
        switch (key) {
          case "lat": rtnSite.latitude = json[key]; break;
          case "lon": rtnSite.longitude = json[key]; break;
        }
      })

      return rtnSite;
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
    return key === "" ? GeoLocation.fromJSON(value) : value;
  }
}