import { AddSkillData, AddSkillVariables, ListJobPostingsData, GetUserSkillsData, GetUserSkillsVariables, CreateJobPostingData, CreateJobPostingVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAddSkill(options?: useDataConnectMutationOptions<AddSkillData, FirebaseError, AddSkillVariables>): UseDataConnectMutationResult<AddSkillData, AddSkillVariables>;
export function useAddSkill(dc: DataConnect, options?: useDataConnectMutationOptions<AddSkillData, FirebaseError, AddSkillVariables>): UseDataConnectMutationResult<AddSkillData, AddSkillVariables>;

export function useListJobPostings(options?: useDataConnectQueryOptions<ListJobPostingsData>): UseDataConnectQueryResult<ListJobPostingsData, undefined>;
export function useListJobPostings(dc: DataConnect, options?: useDataConnectQueryOptions<ListJobPostingsData>): UseDataConnectQueryResult<ListJobPostingsData, undefined>;

export function useGetUserSkills(vars: GetUserSkillsVariables, options?: useDataConnectQueryOptions<GetUserSkillsData>): UseDataConnectQueryResult<GetUserSkillsData, GetUserSkillsVariables>;
export function useGetUserSkills(dc: DataConnect, vars: GetUserSkillsVariables, options?: useDataConnectQueryOptions<GetUserSkillsData>): UseDataConnectQueryResult<GetUserSkillsData, GetUserSkillsVariables>;

export function useCreateJobPosting(options?: useDataConnectMutationOptions<CreateJobPostingData, FirebaseError, CreateJobPostingVariables>): UseDataConnectMutationResult<CreateJobPostingData, CreateJobPostingVariables>;
export function useCreateJobPosting(dc: DataConnect, options?: useDataConnectMutationOptions<CreateJobPostingData, FirebaseError, CreateJobPostingVariables>): UseDataConnectMutationResult<CreateJobPostingData, CreateJobPostingVariables>;
