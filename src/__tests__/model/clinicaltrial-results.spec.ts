import { ClinicaltrialResult } from "../../model/clinicaltrial-result";
import { ClinicaltrialResults } from "../../model/clinicaltrial-results";

describe("Services.ClinicalTrials.Model.DiseaseResults", () => {
    describe("fromJSON", () => {
        it("Should deserialize a string with a single trial", () => {
            expect(1).toBe(1);
            let s: string = `
            {
                "total": 1,
                "trials": [
                    {
                        "nci_id": "NCI-2015-00054",
                        "nct_id": "NCT02465060",
                        "protocol_id": "EAY131",
                        "ccr_id": "ccr-123",
                        "ctep_id": "EAY131",
                        "dcp_id": "dcp-456",
                        "other_ids": [
                            {
                                "name": "Study Protocol Other Identifier",
                                "value": "EAY131"
                            },
                            {
                                "name": "Second identifier",
                                "value": "number two"
                            }
                        ],
                        "phase": {
                            "phase": "II",
                            "phase_other_text": "other text",
                            "phase_additional_qualifier_code": "NO"
                        },
                        "brief_title": "Targeted Therapy Directed by Genetic Testing in Treating Patients with Advanced Refractory Solid Tumors, Lymphomas, or Multiple Myeloma (The MATCH Screening Trial)",
                        "official_title": "Molecular Analysis for Therapy Choice (MATCH)",
                        "brief_summary": "This phase II MATCH trial studies how well treatment that is directed by genetic testing works in patients with solid tumors or lymphomas that have progressed following at least one line of standard treatment or for which no agreed upon treatment approach exists. Genetic tests look at the unique genetic material (genes) of patients' tumor cells. Patients with genetic abnormalities (such as mutations, amplifications, or translocations) may benefit more from treatment which targets their tumor's particular genetic abnormality. Identifying these genetic abnormalities first may help doctors plan better treatment for patients with solid tumors, lymphomas, or multiple myeloma.",
                        "detail_description": "PRIMARY OBJECTIVE: \\r\\nI. To evaluate the proportion of patients...",
                        "eligibility": {
                            "structured": {
                                "gender": "BOTH",
                                "max_age": "999 Years",
                                "max_age_number": 999,
                                "max_age_unit": "Years",
                                "min_age": "18 Years",
                                "min_age_number": 18,
                                "min_age_unit": "Years",
                                "max_age_in_years": 999,
                                "min_age_in_years": 18
                            }
                        },
                        "current_trial_status": "Active",
                        "lead_org": "ECOG-ACRIN Cancer Research Group",
                        "principal_investigator": "Keith Thomas Flaherty"
                    }
                ]
            }
            `;

            let expected: ClinicaltrialResults = new ClinicaltrialResults();
            let expectedTrial: ClinicaltrialResult = new ClinicaltrialResult();
            expectedTrial.nciID = "NCI-2015-00054";
            expectedTrial.nctID = "NCT02465060";
            expectedTrial.protocolID = "EAY131";
            expectedTrial.ccrID = "ccr-123";
            expectedTrial.ctepID = "EAY131";
            expectedTrial.dcpID = "dcp-456";
            expectedTrial.otherTrialIDs = [
                { name: "Study Protocol Other Identifier", value: "EAY131" },
                { name: "Second identifier", value: "number two" }
            ];
            expectedTrial.trialPhase = {
                phaseNumber: "II",
                phaseOtherText: "other text",
                phaseAdditionalQualifierCode: "NO"
            };
            expectedTrial.briefTitle = "Targeted Therapy Directed by Genetic Testing in Treating Patients with Advanced Refractory Solid Tumors, Lymphomas, or Multiple Myeloma (The MATCH Screening Trial)";
            expectedTrial.officialTitle = "Molecular Analysis for Therapy Choice (MATCH)";
            expectedTrial.briefSummary = "This phase II MATCH trial studies how well treatment that is directed by genetic testing works in patients with solid tumors or lymphomas that have progressed following at least one line of standard treatment or for which no agreed upon treatment approach exists. Genetic tests look at the unique genetic material (genes) of patients' tumor cells. Patients with genetic abnormalities (such as mutations, amplifications, or translocations) may benefit more from treatment which targets their tumor's particular genetic abnormality. Identifying these genetic abnormalities first may help doctors plan better treatment for patients with solid tumors, lymphomas, or multiple myeloma.";
            expectedTrial.detailedDescription = "PRIMARY OBJECTIVE: \r\nI. To evaluate the proportion of patients...";
            expectedTrial.eligibilityInfo = {
                structuredCriteria: {
                    gender: "BOTH",
                    maxAgeStr: "999 Years",
                    maxAgeInt: 999,
                    maxAgeUnits: "Years",
                    minAgeStr: "18 Years",
                    minAgeInt: 18,
                    minAgeUnits: "Years"
                },
                unstructuredCriteria: []
            };
            expectedTrial.currentTrialStatus = "Active";
            expectedTrial.leadOrganizationName = "ECOG-ACRIN Cancer Research Group";
            expectedTrial.principalInvestigator = "Keith Thomas Flaherty";

            expected.total = 1;
            expected.trials = [ expectedTrial ];

            let actual: ClinicaltrialResults = ClinicaltrialResults.fromJSON(s);

            // Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize an object with a single trial", () => {
            expect(1).toBe(1);
            let obj: any =
            {
                total: 1,
                trials: [
                    {
                        nci_id: "NCI-2015-00054",
                        nct_id: "NCT02465060",
                        protocol_id: "EAY131",
                        ccr_id: "ccr-123",
                        ctep_id: "EAY131",
                        dcp_id: "dcp-456",
                        other_ids: [
                            {
                                name: "Study Protocol Other Identifier",
                                value: "EAY131"
                            },
                            {
                                name: "Second identifier",
                                value: "number two"
                            }
                        ],
                        phase: {
                            phase: "II",
                            phase_other_text: "other text",
                            phase_additional_qualifier_code: "NO"
                        },
                        brief_title: "Targeted Therapy Directed by Genetic Testing in Treating Patients with Advanced Refractory Solid Tumors, Lymphomas, or Multiple Myeloma (The MATCH Screening Trial)",
                        official_title: "Molecular Analysis for Therapy Choice (MATCH)",
                        brief_summary: "This phase II MATCH trial studies how well treatment that is directed by genetic testing works in patients with solid tumors or lymphomas that have progressed following at least one line of standard treatment or for which no agreed upon treatment approach exists. Genetic tests look at the unique genetic material (genes) of patients' tumor cells. Patients with genetic abnormalities (such as mutations, amplifications, or translocations) may benefit more from treatment which targets their tumor's particular genetic abnormality. Identifying these genetic abnormalities first may help doctors plan better treatment for patients with solid tumors, lymphomas, or multiple myeloma.",
                        detail_description: "PRIMARY OBJECTIVE: \r\nI. To evaluate the proportion of patients...",
                        eligibility: {
                            structured: {
                                gender: "BOTH",
                                max_age: "999 Years",
                                max_age_number: 999,
                                max_age_unit: "Years",
                                min_age: "18 Years",
                                min_age_number: 18,
                                min_age_unit: "Years",
                                max_age_in_years: 999,
                                min_age_in_years: 18
                            }
                        },
                        current_trial_status: "Active",
                        lead_org: "ECOG-ACRIN Cancer Research Group",
                        principal_investigator: "Keith Thomas Flaherty"
                    }
                ]
            };

            let expected: ClinicaltrialResults = new ClinicaltrialResults();
            let expectedTrial: ClinicaltrialResult = new ClinicaltrialResult();
            expectedTrial.nciID = "NCI-2015-00054";
            expectedTrial.nctID = "NCT02465060";
            expectedTrial.protocolID = "EAY131";
            expectedTrial.ccrID = "ccr-123";
            expectedTrial.ctepID = "EAY131";
            expectedTrial.dcpID = "dcp-456";
            expectedTrial.otherTrialIDs = [
                { name: "Study Protocol Other Identifier", value: "EAY131" },
                { name: "Second identifier", value: "number two" }
            ];
            expectedTrial.trialPhase = {
                phaseNumber: "II",
                phaseOtherText: "other text",
                phaseAdditionalQualifierCode: "NO"
            };
            expectedTrial.briefTitle = "Targeted Therapy Directed by Genetic Testing in Treating Patients with Advanced Refractory Solid Tumors, Lymphomas, or Multiple Myeloma (The MATCH Screening Trial)";
            expectedTrial.officialTitle = "Molecular Analysis for Therapy Choice (MATCH)";
            expectedTrial.briefSummary = "This phase II MATCH trial studies how well treatment that is directed by genetic testing works in patients with solid tumors or lymphomas that have progressed following at least one line of standard treatment or for which no agreed upon treatment approach exists. Genetic tests look at the unique genetic material (genes) of patients' tumor cells. Patients with genetic abnormalities (such as mutations, amplifications, or translocations) may benefit more from treatment which targets their tumor's particular genetic abnormality. Identifying these genetic abnormalities first may help doctors plan better treatment for patients with solid tumors, lymphomas, or multiple myeloma.";
            expectedTrial.detailedDescription = "PRIMARY OBJECTIVE: \r\nI. To evaluate the proportion of patients...";
            expectedTrial.eligibilityInfo = {
                structuredCriteria: {
                    gender: "BOTH",
                    maxAgeStr: "999 Years",
                    maxAgeInt: 999,
                    maxAgeUnits: "Years",
                    minAgeStr: "18 Years",
                    minAgeInt: 18,
                    minAgeUnits: "Years"
                },
                unstructuredCriteria: []
            };
            expectedTrial.currentTrialStatus = "Active";
            expectedTrial.leadOrganizationName = "ECOG-ACRIN Cancer Research Group";
            expectedTrial.principalInvestigator = "Keith Thomas Flaherty";

            expected.total = 1;
            expected.trials = [expectedTrial];

            let actual: ClinicaltrialResults = ClinicaltrialResults.fromJSON(obj);

            // Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

    });
});
