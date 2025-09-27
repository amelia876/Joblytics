import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddSkillData {
  skill_insert: Skill_Key;
}

export interface AddSkillVariables {
  name: string;
}

export interface Application_Key {
  id: UUIDString;
  __typename?: 'Application_Key';
}

export interface CreateJobPostingData {
  jobPosting_insert: JobPosting_Key;
}

export interface CreateJobPostingVariables {
  employerId: UUIDString;
  title: string;
  description: string;
  employmentType: string;
  location: string;
  requirements?: string | null;
  responsibilities?: string | null;
  salaryRange?: string | null;
  status: string;
}

export interface GetUserSkillsData {
  userSkills: ({
    skill: {
      id: UUIDString;
      name: string;
    } & Skill_Key;
  })[];
}

export interface GetUserSkillsVariables {
  userId: UUIDString;
}

export interface JobPostingSkill_Key {
  jobPostingId: UUIDString;
  skillId: UUIDString;
  __typename?: 'JobPostingSkill_Key';
}

export interface JobPosting_Key {
  id: UUIDString;
  __typename?: 'JobPosting_Key';
}

export interface ListJobPostingsData {
  jobPostings: ({
    id: UUIDString;
    title: string;
    description: string;
    location: string;
    salaryRange?: string | null;
  } & JobPosting_Key)[];
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface UserSkill_Key {
  userId: UUIDString;
  skillId: UUIDString;
  __typename?: 'UserSkill_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface AddSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddSkillVariables): MutationRef<AddSkillData, AddSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddSkillVariables): MutationRef<AddSkillData, AddSkillVariables>;
  operationName: string;
}
export const addSkillRef: AddSkillRef;

export function addSkill(vars: AddSkillVariables): MutationPromise<AddSkillData, AddSkillVariables>;
export function addSkill(dc: DataConnect, vars: AddSkillVariables): MutationPromise<AddSkillData, AddSkillVariables>;

interface ListJobPostingsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListJobPostingsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListJobPostingsData, undefined>;
  operationName: string;
}
export const listJobPostingsRef: ListJobPostingsRef;

export function listJobPostings(): QueryPromise<ListJobPostingsData, undefined>;
export function listJobPostings(dc: DataConnect): QueryPromise<ListJobPostingsData, undefined>;

interface GetUserSkillsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserSkillsVariables): QueryRef<GetUserSkillsData, GetUserSkillsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserSkillsVariables): QueryRef<GetUserSkillsData, GetUserSkillsVariables>;
  operationName: string;
}
export const getUserSkillsRef: GetUserSkillsRef;

export function getUserSkills(vars: GetUserSkillsVariables): QueryPromise<GetUserSkillsData, GetUserSkillsVariables>;
export function getUserSkills(dc: DataConnect, vars: GetUserSkillsVariables): QueryPromise<GetUserSkillsData, GetUserSkillsVariables>;

interface CreateJobPostingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateJobPostingVariables): MutationRef<CreateJobPostingData, CreateJobPostingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateJobPostingVariables): MutationRef<CreateJobPostingData, CreateJobPostingVariables>;
  operationName: string;
}
export const createJobPostingRef: CreateJobPostingRef;

export function createJobPosting(vars: CreateJobPostingVariables): MutationPromise<CreateJobPostingData, CreateJobPostingVariables>;
export function createJobPosting(dc: DataConnect, vars: CreateJobPostingVariables): MutationPromise<CreateJobPostingData, CreateJobPostingVariables>;

