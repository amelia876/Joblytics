const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'joblytics',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const addSkillRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddSkill', inputVars);
}
addSkillRef.operationName = 'AddSkill';
exports.addSkillRef = addSkillRef;

exports.addSkill = function addSkill(dcOrVars, vars) {
  return executeMutation(addSkillRef(dcOrVars, vars));
};

const listJobPostingsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListJobPostings');
}
listJobPostingsRef.operationName = 'ListJobPostings';
exports.listJobPostingsRef = listJobPostingsRef;

exports.listJobPostings = function listJobPostings(dc) {
  return executeQuery(listJobPostingsRef(dc));
};

const getUserSkillsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserSkills', inputVars);
}
getUserSkillsRef.operationName = 'GetUserSkills';
exports.getUserSkillsRef = getUserSkillsRef;

exports.getUserSkills = function getUserSkills(dcOrVars, vars) {
  return executeQuery(getUserSkillsRef(dcOrVars, vars));
};

const createJobPostingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateJobPosting', inputVars);
}
createJobPostingRef.operationName = 'CreateJobPosting';
exports.createJobPostingRef = createJobPostingRef;

exports.createJobPosting = function createJobPosting(dcOrVars, vars) {
  return executeMutation(createJobPostingRef(dcOrVars, vars));
};
