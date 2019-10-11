export * from './term-result';
export * from './term-results';
export * from './intervention-result';
export * from './intervention-results';
export * from './disease-result';
export * from './disease-results';
// NOTE: the export for clinicaltrial-results (plural) **MUST** come before the
//       one for clinicaltrial-result (singular). Otherwise, there are errors when
//       an attempt is made to reference the ClinicaltrialResults type.
export * from './clinicaltrial-results';
export * from './clinicaltrial-result';
