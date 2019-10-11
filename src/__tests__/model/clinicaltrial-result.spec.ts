import { ClinicaltrialResult, EligibilityInformation } from "../../model/clinicaltrial-result";

describe("Services.ClinicalTrials.Model.ClinicaltrialResult", () => {
    describe("fromJSON", () => {
        it("Should deserialize a string with string properties", () => {
            let s: string = `
            {
                "nci_id": "NCI-2015-00054",
                "nct_id": "NCT02465060",
                "protocol_id": "EAY131",
                "ccr_id": "ccr-123",
                "ctep_id": "EAY131",
                "dcp_id": "dcp-456",
                "brief_title": "Targeted Therapy Directed by Genetic Testing in Treating Patients with Advanced Refractory Solid Tumors, Lymphomas, or Multiple Myeloma (The MATCH Screening Trial)",
                "official_title": "Molecular Analysis for Therapy Choice (MATCH)",
                "brief_summary": "This phase II MATCH trial studies how well treatment that is directed by genetic testing works in patients with solid tumors or lymphomas that have progressed following at least one line of standard treatment or for which no agreed upon treatment approach exists. Genetic tests look at the unique genetic material (genes) of patients' tumor cells. Patients with genetic abnormalities (such as mutations, amplifications, or translocations) may benefit more from treatment which targets their tumor's particular genetic abnormality. Identifying these genetic abnormalities first may help doctors plan better treatment for patients with solid tumors, lymphomas, or multiple myeloma.",
                "detail_description": "PRIMARY OBJECTIVE: \\r\\nI. To evaluate the proportion of patients...",
                "current_trial_status": "Active",
                "lead_org": "ECOG-ACRIN Cancer Research Group",
                "principal_investigator": "Keith Thomas Flaherty"
            }
            `;

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.nctID = "NCT02465060";
            expected.protocolID = "EAY131";
            expected.ccrID = "ccr-123";
            expected.ctepID = "EAY131";
            expected.dcpID = "dcp-456";
            expected.briefTitle = "Targeted Therapy Directed by Genetic Testing in Treating Patients with Advanced Refractory Solid Tumors, Lymphomas, or Multiple Myeloma (The MATCH Screening Trial)";
            expected.officialTitle = "Molecular Analysis for Therapy Choice (MATCH)";
            expected.briefSummary = "This phase II MATCH trial studies how well treatment that is directed by genetic testing works in patients with solid tumors or lymphomas that have progressed following at least one line of standard treatment or for which no agreed upon treatment approach exists. Genetic tests look at the unique genetic material (genes) of patients' tumor cells. Patients with genetic abnormalities (such as mutations, amplifications, or translocations) may benefit more from treatment which targets their tumor's particular genetic abnormality. Identifying these genetic abnormalities first may help doctors plan better treatment for patients with solid tumors, lymphomas, or multiple myeloma.";
            expected.detailedDescription = "PRIMARY OBJECTIVE: \r\nI. To evaluate the proportion of patients...";
            expected.currentTrialStatus = "Active";
            expected.leadOrganizationName = "ECOG-ACRIN Cancer Research Group";
            expected.principalInvestigator = "Keith Thomas Flaherty";

            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(s);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize an object with string-only properties", () => {

            let obj: any =
            {
                "nci_id": "NCI-2015-00054",
                "nct_id": "NCT02465060",
                "protocol_id": "EAY131",
                "ccr_id": "ccr-123",
                "ctep_id": "EAY131",
                "dcp_id": "dcp-456",
                "brief_title": "Targeted Therapy Directed by Genetic Testing in Treating Patients with Advanced Refractory Solid Tumors, Lymphomas, or Multiple Myeloma (The MATCH Screening Trial)",
                "official_title": "Molecular Analysis for Therapy Choice (MATCH)",
                "brief_summary": "This phase II MATCH trial studies how well treatment that is directed by genetic testing works in patients with solid tumors or lymphomas that have progressed following at least one line of standard treatment or for which no agreed upon treatment approach exists. Genetic tests look at the unique genetic material (genes) of patients' tumor cells. Patients with genetic abnormalities (such as mutations, amplifications, or translocations) may benefit more from treatment which targets their tumor's particular genetic abnormality. Identifying these genetic abnormalities first may help doctors plan better treatment for patients with solid tumors, lymphomas, or multiple myeloma.",
                "detail_description": "PRIMARY OBJECTIVE: \r\nI. To evaluate the proportion of patients...",
                "current_trial_status": "Active",
                "lead_org": "ECOG-ACRIN Cancer Research Group",
                "principal_investigator": "Keith Thomas Flaherty"
            };

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.nctID = "NCT02465060";
            expected.protocolID = "EAY131";
            expected.ccrID = "ccr-123";
            expected.ctepID = "EAY131";
            expected.dcpID = "dcp-456";
            expected.briefTitle = "Targeted Therapy Directed by Genetic Testing in Treating Patients with Advanced Refractory Solid Tumors, Lymphomas, or Multiple Myeloma (The MATCH Screening Trial)";
            expected.officialTitle = "Molecular Analysis for Therapy Choice (MATCH)";
            expected.briefSummary = "This phase II MATCH trial studies how well treatment that is directed by genetic testing works in patients with solid tumors or lymphomas that have progressed following at least one line of standard treatment or for which no agreed upon treatment approach exists. Genetic tests look at the unique genetic material (genes) of patients' tumor cells. Patients with genetic abnormalities (such as mutations, amplifications, or translocations) may benefit more from treatment which targets their tumor's particular genetic abnormality. Identifying these genetic abnormalities first may help doctors plan better treatment for patients with solid tumors, lymphomas, or multiple myeloma.";
            expected.detailedDescription = "PRIMARY OBJECTIVE: \r\nI. To evaluate the proportion of patients...";
            expected.currentTrialStatus = "Active";
            expected.leadOrganizationName = "ECOG-ACRIN Cancer Research Group";
            expected.principalInvestigator = "Keith Thomas Flaherty";

            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(obj);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize a string with null for array properties", () => {
            let s: string = `
            {
                "nci_id": "NCI-2015-00054",
                "nct_id": "NCT02465060",
                "protocol_id": "EAY131",
                "ccr_id": "ccr-123",
                "ctep_id": "EAY131",
                "dcp_id": "dcp-456",
                "other_ids": null,
                "brief_title": "Targeted Therapy Directed by Genetic Testing in Treating Patients with Advanced Refractory Solid Tumors, Lymphomas, or Multiple Myeloma (The MATCH Screening Trial)",
                "official_title": "Molecular Analysis for Therapy Choice (MATCH)",
                "brief_summary": "This phase II MATCH trial studies how well treatment that is directed by genetic testing works in patients with solid tumors or lymphomas that have progressed following at least one line of standard treatment or for which no agreed upon treatment approach exists. Genetic tests look at the unique genetic material (genes) of patients' tumor cells. Patients with genetic abnormalities (such as mutations, amplifications, or translocations) may benefit more from treatment which targets their tumor's particular genetic abnormality. Identifying these genetic abnormalities first may help doctors plan better treatment for patients with solid tumors, lymphomas, or multiple myeloma.",
                "detail_description": "PRIMARY OBJECTIVE: \\r\\nI. To evaluate the proportion of patients...",
                "eligibility": {
                    "structured": null,
                    "unstructured": null
                },
                "current_trial_status": "Active",
                "lead_org": "ECOG-ACRIN Cancer Research Group",
                "collaborators": null,
                "principal_investigator": "Keith Thomas Flaherty",
                "sites": null
            }
            `;

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.nctID = "NCT02465060";
            expected.protocolID = "EAY131";
            expected.ccrID = "ccr-123";
            expected.ctepID = "EAY131";
            expected.dcpID = "dcp-456";
            expected.otherTrialIDs = null;
            expected.briefTitle = "Targeted Therapy Directed by Genetic Testing in Treating Patients with Advanced Refractory Solid Tumors, Lymphomas, or Multiple Myeloma (The MATCH Screening Trial)";
            expected.officialTitle = "Molecular Analysis for Therapy Choice (MATCH)";
            expected.briefSummary = "This phase II MATCH trial studies how well treatment that is directed by genetic testing works in patients with solid tumors or lymphomas that have progressed following at least one line of standard treatment or for which no agreed upon treatment approach exists. Genetic tests look at the unique genetic material (genes) of patients' tumor cells. Patients with genetic abnormalities (such as mutations, amplifications, or translocations) may benefit more from treatment which targets their tumor's particular genetic abnormality. Identifying these genetic abnormalities first may help doctors plan better treatment for patients with solid tumors, lymphomas, or multiple myeloma.";
            expected.detailedDescription = "PRIMARY OBJECTIVE: \r\nI. To evaluate the proportion of patients...";
            expected.eligibilityInfo = new EligibilityInformation();
            expected.eligibilityInfo.structuredCriteria = null;
            expected.eligibilityInfo.unstructuredCriteria = null;
            expected.currentTrialStatus = "Active";
            expected.leadOrganizationName = "ECOG-ACRIN Cancer Research Group";
            expected.collaborators = null;
            expected.principalInvestigator = "Keith Thomas Flaherty";
            expected.sites = null;

            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(s);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize an object with null for array properties", () => {
            let obj: any =
            {
                nci_id: "NCI-2015-00054",
                nct_id: "NCT02465060",
                protocol_id: "EAY131",
                ccr_id: "ccr-123",
                ctep_id: "EAY131",
                dcp_id: "dcp-456",
                other_ids: null,
                brief_title: "Targeted Therapy Directed by Genetic Testing in Treating Patients with Advanced Refractory Solid Tumors, Lymphomas, or Multiple Myeloma (The MATCH Screening Trial)",
                official_title: "Molecular Analysis for Therapy Choice (MATCH)",
                brief_summary: "This phase II MATCH trial studies how well treatment that is directed by genetic testing works in patients with solid tumors or lymphomas that have progressed following at least one line of standard treatment or for which no agreed upon treatment approach exists. Genetic tests look at the unique genetic material (genes) of patients' tumor cells. Patients with genetic abnormalities (such as mutations, amplifications, or translocations) may benefit more from treatment which targets their tumor's particular genetic abnormality. Identifying these genetic abnormalities first may help doctors plan better treatment for patients with solid tumors, lymphomas, or multiple myeloma.",
                detail_description: "PRIMARY OBJECTIVE: \r\nI. To evaluate the proportion of patients...",
                eligibility: {
                    structured: null,
                    unstructured: null
                },
                current_trial_status: "Active",
                lead_org: "ECOG-ACRIN Cancer Research Group",
                collaborators: null,
                principal_investigator: "Keith Thomas Flaherty",
                sites: null
            };

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.nctID = "NCT02465060";
            expected.protocolID = "EAY131";
            expected.ccrID = "ccr-123";
            expected.ctepID = "EAY131";
            expected.dcpID = "dcp-456";
            expected.otherTrialIDs = null;
            expected.briefTitle = "Targeted Therapy Directed by Genetic Testing in Treating Patients with Advanced Refractory Solid Tumors, Lymphomas, or Multiple Myeloma (The MATCH Screening Trial)";
            expected.officialTitle = "Molecular Analysis for Therapy Choice (MATCH)";
            expected.briefSummary = "This phase II MATCH trial studies how well treatment that is directed by genetic testing works in patients with solid tumors or lymphomas that have progressed following at least one line of standard treatment or for which no agreed upon treatment approach exists. Genetic tests look at the unique genetic material (genes) of patients' tumor cells. Patients with genetic abnormalities (such as mutations, amplifications, or translocations) may benefit more from treatment which targets their tumor's particular genetic abnormality. Identifying these genetic abnormalities first may help doctors plan better treatment for patients with solid tumors, lymphomas, or multiple myeloma.";
            expected.detailedDescription = "PRIMARY OBJECTIVE: \r\nI. To evaluate the proportion of patients...";
            expected.eligibilityInfo = new EligibilityInformation();
            expected.eligibilityInfo.structuredCriteria = null;
            expected.eligibilityInfo.unstructuredCriteria = null;
            expected.currentTrialStatus = "Active";
            expected.leadOrganizationName = "ECOG-ACRIN Cancer Research Group";
            expected.collaborators = null;
            expected.principalInvestigator = "Keith Thomas Flaherty";
            expected.sites = null;

            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(obj);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize a string containing an array of OtherIds", () => {
            let s: string = `
        {
            "nci_id": "NCI-2015-00054",
            "other_ids": [
                {
                    "name": "Study Protocol Other Identifier",
                    "value": "EAY131"
                },
                {
                    "name": "Second identifier",
                    "value": "number two"
                }
            ]
        }
        `;

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.otherTrialIDs = [
                { name: "Study Protocol Other Identifier", value: "EAY131" },
                { name: "Second identifier", value: "number two" }
            ]

            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(s);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize an object containing an array of OtherIds", () => {
            let obj: any =
            {
                "nci_id": "NCI-2015-00054",
                "other_ids": [
                    {
                        "name": "Study Protocol Other Identifier",
                        "value": "EAY131"
                    },
                    {
                        "name": "Second identifier",
                        "value": "number two"
                    }
                ]
            };

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.otherTrialIDs = [
                { name: "Study Protocol Other Identifier", value: "EAY131" },
                { name: "Second identifier", value: "number two" }
            ]

            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(obj);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize a string containing a Phase", () => {
            let s: string = `
        {
            "nci_id": "NCI-2015-00054",
            "phase": {
                "phase": "II",
                "phase_other_text": "other text",
                "phase_additional_qualifier_code": "NO"
            }
        }
        `;

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.trialPhase =
                {
                    phaseNumber: "II",
                    phaseOtherText: "other text",
                    phaseAdditionalQualifierCode: "NO"
                }

            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(s);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize an object containing a Phase", () => {
            let obj: any =
            {
                "nci_id": "NCI-2015-00054",
                "phase": {
                    "phase": "II",
                    "phase_other_text": "other text",
                    "phase_additional_qualifier_code": "NO"
                }
            };

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.trialPhase =
                {
                    phaseNumber: "II",
                    phaseOtherText: "other text",
                    phaseAdditionalQualifierCode: "NO"
                }

            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(obj);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize a string containing structured criteria", () => {
            let s: string = `
        {
            "nci_id": "NCI-2015-00054",
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
            }
        }
        `;

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.eligibilityInfo =
                {
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
                }


            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(s);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize an object containing structured criteria", () => {
            let obj: any =
            {
                nci_id: "NCI-2015-00054",
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
                }
            }
                ;

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.eligibilityInfo =
                {
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
                }


            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(obj);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize a string containing unstructured criteria", () => {
            let s: string = `
        {
            "nci_id": "NCI-2015-00054",
            "eligibility": {
                "unstructured": [
                    {
                        "display_order": 1,
                        "inclusion_indicator": true,
                        "description": "ELIGIBILITY CRITERIA FOR SCREENING BIOPSY (STEP 0)"
                    },
                    {
                        "display_order": 2,
                        "inclusion_indicator": false,
                        "description": "Criterion 1\\r\\nCriterion 1a"
                    },
                    {
                        "display_order": 3,
                        "inclusion_indicator": true,
                        "description": "Criterion 2\\r\\nCriterion 2b"
                    }
                ]
            }
        }
        `;

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.eligibilityInfo =
                {
                    structuredCriteria: null,
                    unstructuredCriteria: [
                        {
                            isInclusionCriterion: true,
                            description: "ELIGIBILITY CRITERIA FOR SCREENING BIOPSY (STEP 0)"
                        },
                        {
                            isInclusionCriterion: false,
                            description: "Criterion 1\r\nCriterion 1a"
                        },
                        {
                            isInclusionCriterion: true,
                            description: "Criterion 2\r\nCriterion 2b"
                        }
                    ]
                }


            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(s);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize an object containing unstructured criteria", () => {
            let obj: any =
            {
                nci_id: "NCI-2015-00054",
                eligibility: {
                    unstructured: [
                        {
                            display_order: 1,
                            inclusion_indicator: true,
                            description: "ELIGIBILITY CRITERIA FOR SCREENING BIOPSY (STEP 0)"
                        },
                        {
                            display_order: 2,
                            inclusion_indicator: false,
                            description: "Criterion 1\r\nCriterion 1a"
                        },
                        {
                            display_order: 3,
                            inclusion_indicator: true,
                            description: "Criterion 2\r\nCriterion 2b"
                        }
                    ]
                }
            };

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.eligibilityInfo =
                {
                    structuredCriteria: null,
                    unstructuredCriteria: [
                        {
                            isInclusionCriterion: true,
                            description: "ELIGIBILITY CRITERIA FOR SCREENING BIOPSY (STEP 0)"
                        },
                        {
                            isInclusionCriterion: false,
                            description: "Criterion 1\r\nCriterion 1a"
                        },
                        {
                            isInclusionCriterion: true,
                            description: "Criterion 2\r\nCriterion 2b"
                        }
                    ]
                }


            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(obj);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize a string containing a list of collaborators", () => {
            let s: string = `
        {
            "nci_id": "NCI-2015-00054",
            "collaborators": [
                {
                    "name": "National Cancer Institute",
                    "functional_role": "FUNDING_SOURCE",
                    "status": "Status A"
                },
                {
                    "name": "Collaborator Two",
                    "functional_role": "Role Two",
                    "status": "Status B"
                }
            ]
        }
        `;

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.collaborators = [
                {
                    name: "National Cancer Institute",
                    functionalRole: "FUNDING_SOURCE",
                    status: "Status A"
                },
                {
                    name: "Collaborator Two",
                    functionalRole: "Role Two",
                    status: "Status B"
                }
            ];


            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(s);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize an object containing a list of collaborators", () => {
            let obj: any =
            {
                nci_id: "NCI-2015-00054",
                collaborators: [
                    {
                        name: "National Cancer Institute",
                        functional_role: "FUNDING_SOURCE",
                        status: "Status A"
                    },
                    {
                        name: "Collaborator Two",
                        functional_role: "Role Two",
                        status: "Status B"
                    }
                ]
            };

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.collaborators = [
                {
                    name: "National Cancer Institute",
                    functionalRole: "FUNDING_SOURCE",
                    status: "Status A"
                },
                {
                    name: "Collaborator Two",
                    functionalRole: "Role Two",
                    status: "Status B"
                }
            ];


            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(obj);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize a string containing a central contact", () => {
            let s: string = `
        {
            "nci_id": "NCI-2015-00054",
            "central_contact": {
                "central_contact_email": "TEST@TEST.TEST.TEST",
                "central_contact_name": "A central contact",
                "central_contact_phone": 
                    {
                        "This":"should",
                        "accomodate":"objects"
                    },
                "central_contact_type": 
                    {
                        "This":"should",
                        "accomodate":"them too"
                    }
            }
        }
        `;

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.centralContact =
                {
                    email: "TEST@TEST.TEST.TEST",
                    name: "A central contact",
                    phone:
                    {
                        "This": "should",
                        "accomodate": "objects"
                    },
                    type:
                    {
                        "This": "should",
                        "accomodate": "them too"
                    }
                };


            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(s);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize an object containing a central contact", () => {
            let obj: any =
            {
                nci_id: "NCI-2015-00054",
                central_contact: {
                    central_contact_email: "TEST@TEST.TEST.TEST",
                    central_contact_name: "A central contact",
                    central_contact_phone:
                    {
                        This: "should",
                        accomodate: "objects"
                    },
                    central_contact_type:
                    {
                        This: "should",
                        accomodate: "them too"
                    }
                }
            };

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.centralContact =
                {
                    email: "TEST@TEST.TEST.TEST",
                    name: "A central contact",
                    phone:
                    {
                        "This": "should",
                        "accomodate": "objects"
                    },
                    type:
                    {
                        "This": "should",
                        "accomodate": "them too"
                    }
                };


            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(obj);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize a string containing an array of site informations.", () => {
            let s: string = `
        {
            "nci_id": "NCI-2015-00054",
            "sites": [
                {
                    "org_address_line_1": "593 Eddy Street",
                    "org_address_line_2": "Address Line 2",
                    "org_postal_code": "02903",
                    "org_coordinates": null,
                    "org_city": "Providence",
                    "org_state_or_province": "RI",
                    "org_country": "United States",
                    "org_va": false,
                    "org_name": "Rhode Island Hospital",
                    "org_family": "Family 1",
                    "org_to_family_relationship": "family relationship 1",
                    "org_email": "org@test.test",
                    "org_fax": "123-456-7890",
                    "org_phone": "098-765-4321",
                    "org_tty": "111-111",
                    "contact_email": "contact@test.test",
                    "contact_name": "Site Public Contact",
                    "contact_phone": "401-444-1488",
                    "recruitment_status": "ACTIVE",
                    "local_site_identifier": "NONE"
                },
                {
                    "contact_email": "contact2@test.test",
                    "contact_name": "Site Public Contact",
                    "contact_phone": "801-408-1347",
                    "recruitment_status": "ACTIVE",
                    "recruitment_status_date": "2019-09-17",
                    "local_site_identifier": "",
                    "org_address_line_1": "Eighth Avenue and C Street",
                    "org_address_line_2": null,
                    "org_city": "Salt Lake City",
                    "org_country": "United States",
                    "org_email": "org2@test.test",
                    "org_family": null,
                    "org_fax": null,
                    "org_name": "LDS Hospital",
                    "org_to_family_relationship": null,
                    "org_phone": "801-408-1347",
                    "org_postal_code": "84143",
                    "org_state_or_province": "UT",
                    "org_status": "ACTIVE",
                    "org_status_date": "2018-06-23",
                    "org_tty": null,
                    "org_va": false,
                    "org_coordinates": null
                }
            ]
        }
        `;

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.sites = [
                {
                    addressLine1: "593 Eddy Street",
                    addressLine2: "Address Line 2",
                    postalCode: "02903",
                    coordinates: null,
                    city: "Providence",
                    stateOrProvinceAbbreviation: "RI",
                    country: "United States",
                    isVA: false,
                    name: "Rhode Island Hospital",
                    family: "Family 1",
                    orgToFamilyRelationship: "family relationship 1",
                    orgEmail: "org@test.test",
                    orgFax: "123-456-7890",
                    orgPhone: "098-765-4321",
                    orgTty: "111-111",
                    contactEmail: "contact@test.test",
                    contactName: "Site Public Contact",
                    contactPhone: "401-444-1488",
                    recruitmentStatus: "ACTIVE",
                    localSiteIdentifier: "NONE"
                },
                {
                    contactEmail: "contact2@test.test",
                    contactName: "Site Public Contact",
                    contactPhone: "801-408-1347",
                    recruitmentStatus: "ACTIVE",
                    localSiteIdentifier: "",
                    addressLine1: "Eighth Avenue and C Street",
                    addressLine2: null,
                    city: "Salt Lake City",
                    country: "United States",
                    orgEmail: "org2@test.test",
                    family: null,
                    orgFax: null,
                    name: "LDS Hospital",
                    orgToFamilyRelationship: null,
                    orgPhone: "801-408-1347",
                    postalCode: "84143",
                    stateOrProvinceAbbreviation: "UT",
                    orgTty: null,
                    isVA: false,
                    coordinates: null
                }
            ];


            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(s);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize an object containing an array of site informations.", () => {
            let obj: any =
            {
                "nci_id": "NCI-2015-00054",
                "sites": [
                    {
                        org_address_line_1: "593 Eddy Street",
                        org_address_line_2: "Address Line 2",
                        org_postal_code: "02903",
                        org_coordinates: null,
                        org_city: "Providence",
                        org_state_or_province: "RI",
                        org_country: "United States",
                        org_va: false,
                        org_name: "Rhode Island Hospital",
                        org_family: "Family 1",
                        org_to_family_relationship: "family relationship 1",
                        org_email: "org@test.test",
                        org_fax: "123-456-7890",
                        org_phone: "098-765-4321",
                        org_tty: "111-111",
                        contact_email: "contact@test.test",
                        contact_name: "Site Public Contact",
                        contact_phone: "401-444-1488",
                        recruitment_status: "ACTIVE",
                        local_site_identifier: "NONE"
                    },
                    {
                        contact_email: "contact2@test.test",
                        contact_name: "Site Public Contact",
                        contact_phone: "801-408-1347",
                        recruitment_status: "ACTIVE",
                        recruitment_status_date: "2019-09-17",
                        local_site_identifier: "",
                        org_address_line_1: "Eighth Avenue and C Street",
                        org_address_line_2: null,
                        org_city: "Salt Lake City",
                        org_country: "United States",
                        org_email: "org2@test.test",
                        org_family: null,
                        org_fax: null,
                        org_name: "LDS Hospital",
                        org_to_family_relationship: null,
                        org_phone: "801-408-1347",
                        org_postal_code: "84143",
                        org_state_or_province: "UT",
                        org_status: "ACTIVE",
                        org_status_date: "2018-06-23",
                        org_tty: null,
                        org_va: false,
                        org_coordinates: null
                    }
                ]
            };

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.sites = [
                {
                    addressLine1: "593 Eddy Street",
                    addressLine2: "Address Line 2",
                    postalCode: "02903",
                    coordinates: null,
                    city: "Providence",
                    stateOrProvinceAbbreviation: "RI",
                    country: "United States",
                    isVA: false,
                    name: "Rhode Island Hospital",
                    family: "Family 1",
                    orgToFamilyRelationship: "family relationship 1",
                    orgEmail: "org@test.test",
                    orgFax: "123-456-7890",
                    orgPhone: "098-765-4321",
                    orgTty: "111-111",
                    contactEmail: "contact@test.test",
                    contactName: "Site Public Contact",
                    contactPhone: "401-444-1488",
                    recruitmentStatus: "ACTIVE",
                    localSiteIdentifier: "NONE"
                },
                {
                    contactEmail: "contact2@test.test",
                    contactName: "Site Public Contact",
                    contactPhone: "801-408-1347",
                    recruitmentStatus: "ACTIVE",
                    localSiteIdentifier: "",
                    addressLine1: "Eighth Avenue and C Street",
                    addressLine2: null,
                    city: "Salt Lake City",
                    country: "United States",
                    orgEmail: "org2@test.test",
                    family: null,
                    orgFax: null,
                    name: "LDS Hospital",
                    orgToFamilyRelationship: null,
                    orgPhone: "801-408-1347",
                    postalCode: "84143",
                    stateOrProvinceAbbreviation: "UT",
                    orgTty: null,
                    isVA: false,
                    coordinates: null
                }
            ];


            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(obj);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize a string containing an array of site informations.", () => {
            let s: string = `
        {
            "nci_id": "NCI-2015-00054",
            "sites": [
                {
                    "org_name": "Rhode Island Hospital",
                    "org_coordinates": {
                        "lat": 41.8204,
                        "lon": -71.4128
                    }
                },
                {
                    "org_name": "LDS Hospital",
                    "org_coordinates": {
                        "lat": 40.7785,
                        "lon": -111.8799
                    }
                }
            ]
        }
        `;

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.sites = [
                {
                    name: "Rhode Island Hospital",
                    coordinates: {
                        latitude: 41.8204,
                        longitude: -71.4128
                    },
                    addressLine1: null,
                    addressLine2: null,
                    postalCode: null,
                    city: null,
                    stateOrProvinceAbbreviation: null,
                    country: null,
                    isVA: null,
                    family: null,
                    orgToFamilyRelationship: null,
                    orgEmail: null,
                    orgFax: null,
                    orgPhone: null,
                    orgTty: null,
                    contactEmail: null,
                    contactName: null,
                    contactPhone: null,
                    recruitmentStatus: null,
                    localSiteIdentifier: null
                },
                {
                    name: "LDS Hospital",
                    coordinates: {
                        latitude: 40.7785,
                        longitude: -111.8799
                    },
                    contactEmail: null,
                    contactName: null,
                    contactPhone: null,
                    recruitmentStatus: null,
                    localSiteIdentifier: null,
                    addressLine1: null,
                    addressLine2: null,
                    city: null,
                    country: null,
                    orgEmail: null,
                    family: null,
                    orgFax: null,
                    orgToFamilyRelationship: null,
                    orgPhone: null,
                    postalCode: null,
                    stateOrProvinceAbbreviation: null,
                    orgTty: null,
                    isVA: null
                }
            ];


            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(s);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize an object containing an array of site informations.", () => {
            let obj: any =
            {
                "nci_id": "NCI-2015-00054",
                "sites": [
                    {
                        org_name: "Rhode Island Hospital",
                        org_coordinates: {
                            lat: 41.8204,
                            lon: -71.4128
                        }
                    },
                    {
                        org_name: "LDS Hospital",
                        org_coordinates: {
                            lat: 40.7785,
                            lon: -111.8799
                        }
                    }
                ]
            };

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = "NCI-2015-00054";
            expected.sites = [
                {
                    name: "Rhode Island Hospital",
                    coordinates: {
                        latitude: 41.8204,
                        longitude: -71.4128
                    },
                    addressLine1: null,
                    addressLine2: null,
                    postalCode: null,
                    city: null,
                    stateOrProvinceAbbreviation: null,
                    country: null,
                    isVA: null,
                    family: null,
                    orgToFamilyRelationship: null,
                    orgEmail: null,
                    orgFax: null,
                    orgPhone: null,
                    orgTty: null,
                    contactEmail: null,
                    contactName: null,
                    contactPhone: null,
                    recruitmentStatus: null,
                    localSiteIdentifier: null
                },
                {
                    name: "LDS Hospital",
                    coordinates: {
                        latitude: 40.7785,
                        longitude: -111.8799
                    },
                    contactEmail: null,
                    contactName: null,
                    contactPhone: null,
                    recruitmentStatus: null,
                    localSiteIdentifier: null,
                    addressLine1: null,
                    addressLine2: null,
                    city: null,
                    country: null,
                    orgEmail: null,
                    family: null,
                    orgFax: null,
                    orgToFamilyRelationship: null,
                    orgPhone: null,
                    postalCode: null,
                    stateOrProvinceAbbreviation: null,
                    orgTty: null,
                    isVA: null
                }
            ];


            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(obj);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize a string with null for any top-level properties", () => {
            let s: string = `
            {
                "nci_id": null,
                "nct_id": null,
                "protocol_id": null,
                "ccr_id": null,
                "ctep_id": null,
                "dcp_id": null,
                "other_ids": null,
                "phase": null,
                "brief_title": null,
                "official_title": null,
                "brief_summary": null,
                "detail_description": null,
                "eligibility": null,
                "primary_purpose": null,
                "current_trial_status": null,
                "lead_org": null,
                "collaborators": null,
                "principal_investigator": null,
                "central_contact": null,
                "sites": null
            }
            `;

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = null;
            expected.nctID = null;
            expected.protocolID = null;
            expected.ccrID = null;
            expected.ctepID = null;
            expected.dcpID = null;
            expected.otherTrialIDs = null;
            expected.trialPhase = null;
            expected.briefTitle = null;
            expected.officialTitle = null;
            expected.briefSummary = null;
            expected.detailedDescription = null;
            expected.eligibilityInfo = null;
            expected.primaryPurpose = null;
            expected.currentTrialStatus = null;
            expected.leadOrganizationName = null;
            expected.collaborators = null;
            expected.principalInvestigator = null;
            expected.centralContact = null;
            expected.sites = null;

            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(s);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });

        it("Should deserialize an object with null for any top-level properties", () => {
            let obj: any =
            {
                nci_id: null,
                nct_id: null,
                protocol_id: null,
                ccr_id: null,
                ctep_id: null,
                dcp_id: null,
                other_ids: null,
                phase: null,
                brief_title: null,
                official_title: null,
                brief_summary: null,
                detail_description: null,
                eligibility: null,
                primary_purpose: null,
                current_trial_status: null,
                lead_org: null,
                collaborators: null,
                principal_investigator: null,
                central_contact: null,
                sites: null
            };

            let expected: ClinicaltrialResult = new ClinicaltrialResult();
            expected.nciID = null;
            expected.nctID = null;
            expected.protocolID = null;
            expected.ccrID = null;
            expected.ctepID = null;
            expected.dcpID = null;
            expected.otherTrialIDs = null;
            expected.trialPhase = null;
            expected.briefTitle = null;
            expected.officialTitle = null;
            expected.briefSummary = null;
            expected.detailedDescription = null;
            expected.eligibilityInfo = null;
            expected.primaryPurpose = null;
            expected.currentTrialStatus = null;
            expected.leadOrganizationName = null;
            expected.collaborators = null;
            expected.principalInvestigator = null;
            expected.centralContact = null;
            expected.sites = null;

            let actual: ClinicaltrialResult = ClinicaltrialResult.fromJSON(obj);

            //Deep Equal because they are class instances
            expect(actual).toEqual(expected);
        });
    });
});
