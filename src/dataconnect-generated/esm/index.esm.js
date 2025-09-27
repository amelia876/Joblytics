import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'joblytics',
  location: 'us-central1'
};

export const addSkillRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddSkill', inputVars);
}
addSkillRef.operationName = 'AddSkill';

export function addSkill(dcOrVars, vars) {
  return executeMutation(addSkillRef(dcOrVars, vars));
}

export const listJobPostingsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListJobPostings');
}
listJobPostingsRef.operationName = 'ListJobPostings';

export function listJobPostings(dc) {
  return executeQuery(listJobPostingsRef(dc));
}

export const getUserSkillsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserSkills', inputVars);
}
getUserSkillsRef.operationName = 'GetUserSkills';

export function getUserSkills(dcOrVars, vars) {
  return executeQuery(getUserSkillsRef(dcOrVars, vars));
}

export const createJobPostingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateJobPosting', inputVars);
}
createJobPostingRef.operationName = 'CreateJobPosting';

export function createJobPosting(dcOrVars, vars) {
  return executeMutation(createJobPostingRef(dcOrVars, vars));
}

