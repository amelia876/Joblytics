# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListJobPostings*](#listjobpostings)
  - [*GetUserSkills*](#getuserskills)
- [**Mutations**](#mutations)
  - [*AddSkill*](#addskill)
  - [*CreateJobPosting*](#createjobposting)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListJobPostings
You can execute the `ListJobPostings` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listJobPostings(): QueryPromise<ListJobPostingsData, undefined>;

interface ListJobPostingsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListJobPostingsData, undefined>;
}
export const listJobPostingsRef: ListJobPostingsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listJobPostings(dc: DataConnect): QueryPromise<ListJobPostingsData, undefined>;

interface ListJobPostingsRef {
  ...
  (dc: DataConnect): QueryRef<ListJobPostingsData, undefined>;
}
export const listJobPostingsRef: ListJobPostingsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listJobPostingsRef:
```typescript
const name = listJobPostingsRef.operationName;
console.log(name);
```

### Variables
The `ListJobPostings` query has no variables.
### Return Type
Recall that executing the `ListJobPostings` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListJobPostingsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListJobPostingsData {
  jobPostings: ({
    id: UUIDString;
    title: string;
    description: string;
    location: string;
    salaryRange?: string | null;
  } & JobPosting_Key)[];
}
```
### Using `ListJobPostings`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listJobPostings } from '@dataconnect/generated';


// Call the `listJobPostings()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listJobPostings();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listJobPostings(dataConnect);

console.log(data.jobPostings);

// Or, you can use the `Promise` API.
listJobPostings().then((response) => {
  const data = response.data;
  console.log(data.jobPostings);
});
```

### Using `ListJobPostings`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listJobPostingsRef } from '@dataconnect/generated';


// Call the `listJobPostingsRef()` function to get a reference to the query.
const ref = listJobPostingsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listJobPostingsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.jobPostings);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.jobPostings);
});
```

## GetUserSkills
You can execute the `GetUserSkills` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserSkills(vars: GetUserSkillsVariables): QueryPromise<GetUserSkillsData, GetUserSkillsVariables>;

interface GetUserSkillsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserSkillsVariables): QueryRef<GetUserSkillsData, GetUserSkillsVariables>;
}
export const getUserSkillsRef: GetUserSkillsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserSkills(dc: DataConnect, vars: GetUserSkillsVariables): QueryPromise<GetUserSkillsData, GetUserSkillsVariables>;

interface GetUserSkillsRef {
  ...
  (dc: DataConnect, vars: GetUserSkillsVariables): QueryRef<GetUserSkillsData, GetUserSkillsVariables>;
}
export const getUserSkillsRef: GetUserSkillsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserSkillsRef:
```typescript
const name = getUserSkillsRef.operationName;
console.log(name);
```

### Variables
The `GetUserSkills` query requires an argument of type `GetUserSkillsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserSkillsVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `GetUserSkills` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserSkillsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserSkillsData {
  userSkills: ({
    skill: {
      id: UUIDString;
      name: string;
    } & Skill_Key;
  })[];
}
```
### Using `GetUserSkills`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserSkills, GetUserSkillsVariables } from '@dataconnect/generated';

// The `GetUserSkills` query requires an argument of type `GetUserSkillsVariables`:
const getUserSkillsVars: GetUserSkillsVariables = {
  userId: ..., 
};

// Call the `getUserSkills()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserSkills(getUserSkillsVars);
// Variables can be defined inline as well.
const { data } = await getUserSkills({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserSkills(dataConnect, getUserSkillsVars);

console.log(data.userSkills);

// Or, you can use the `Promise` API.
getUserSkills(getUserSkillsVars).then((response) => {
  const data = response.data;
  console.log(data.userSkills);
});
```

### Using `GetUserSkills`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserSkillsRef, GetUserSkillsVariables } from '@dataconnect/generated';

// The `GetUserSkills` query requires an argument of type `GetUserSkillsVariables`:
const getUserSkillsVars: GetUserSkillsVariables = {
  userId: ..., 
};

// Call the `getUserSkillsRef()` function to get a reference to the query.
const ref = getUserSkillsRef(getUserSkillsVars);
// Variables can be defined inline as well.
const ref = getUserSkillsRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserSkillsRef(dataConnect, getUserSkillsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.userSkills);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.userSkills);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## AddSkill
You can execute the `AddSkill` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addSkill(vars: AddSkillVariables): MutationPromise<AddSkillData, AddSkillVariables>;

interface AddSkillRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddSkillVariables): MutationRef<AddSkillData, AddSkillVariables>;
}
export const addSkillRef: AddSkillRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addSkill(dc: DataConnect, vars: AddSkillVariables): MutationPromise<AddSkillData, AddSkillVariables>;

interface AddSkillRef {
  ...
  (dc: DataConnect, vars: AddSkillVariables): MutationRef<AddSkillData, AddSkillVariables>;
}
export const addSkillRef: AddSkillRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addSkillRef:
```typescript
const name = addSkillRef.operationName;
console.log(name);
```

### Variables
The `AddSkill` mutation requires an argument of type `AddSkillVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddSkillVariables {
  name: string;
}
```
### Return Type
Recall that executing the `AddSkill` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddSkillData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddSkillData {
  skill_insert: Skill_Key;
}
```
### Using `AddSkill`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addSkill, AddSkillVariables } from '@dataconnect/generated';

// The `AddSkill` mutation requires an argument of type `AddSkillVariables`:
const addSkillVars: AddSkillVariables = {
  name: ..., 
};

// Call the `addSkill()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addSkill(addSkillVars);
// Variables can be defined inline as well.
const { data } = await addSkill({ name: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addSkill(dataConnect, addSkillVars);

console.log(data.skill_insert);

// Or, you can use the `Promise` API.
addSkill(addSkillVars).then((response) => {
  const data = response.data;
  console.log(data.skill_insert);
});
```

### Using `AddSkill`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addSkillRef, AddSkillVariables } from '@dataconnect/generated';

// The `AddSkill` mutation requires an argument of type `AddSkillVariables`:
const addSkillVars: AddSkillVariables = {
  name: ..., 
};

// Call the `addSkillRef()` function to get a reference to the mutation.
const ref = addSkillRef(addSkillVars);
// Variables can be defined inline as well.
const ref = addSkillRef({ name: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addSkillRef(dataConnect, addSkillVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.skill_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.skill_insert);
});
```

## CreateJobPosting
You can execute the `CreateJobPosting` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createJobPosting(vars: CreateJobPostingVariables): MutationPromise<CreateJobPostingData, CreateJobPostingVariables>;

interface CreateJobPostingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateJobPostingVariables): MutationRef<CreateJobPostingData, CreateJobPostingVariables>;
}
export const createJobPostingRef: CreateJobPostingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createJobPosting(dc: DataConnect, vars: CreateJobPostingVariables): MutationPromise<CreateJobPostingData, CreateJobPostingVariables>;

interface CreateJobPostingRef {
  ...
  (dc: DataConnect, vars: CreateJobPostingVariables): MutationRef<CreateJobPostingData, CreateJobPostingVariables>;
}
export const createJobPostingRef: CreateJobPostingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createJobPostingRef:
```typescript
const name = createJobPostingRef.operationName;
console.log(name);
```

### Variables
The `CreateJobPosting` mutation requires an argument of type `CreateJobPostingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateJobPosting` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateJobPostingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateJobPostingData {
  jobPosting_insert: JobPosting_Key;
}
```
### Using `CreateJobPosting`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createJobPosting, CreateJobPostingVariables } from '@dataconnect/generated';

// The `CreateJobPosting` mutation requires an argument of type `CreateJobPostingVariables`:
const createJobPostingVars: CreateJobPostingVariables = {
  employerId: ..., 
  title: ..., 
  description: ..., 
  employmentType: ..., 
  location: ..., 
  requirements: ..., // optional
  responsibilities: ..., // optional
  salaryRange: ..., // optional
  status: ..., 
};

// Call the `createJobPosting()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createJobPosting(createJobPostingVars);
// Variables can be defined inline as well.
const { data } = await createJobPosting({ employerId: ..., title: ..., description: ..., employmentType: ..., location: ..., requirements: ..., responsibilities: ..., salaryRange: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createJobPosting(dataConnect, createJobPostingVars);

console.log(data.jobPosting_insert);

// Or, you can use the `Promise` API.
createJobPosting(createJobPostingVars).then((response) => {
  const data = response.data;
  console.log(data.jobPosting_insert);
});
```

### Using `CreateJobPosting`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createJobPostingRef, CreateJobPostingVariables } from '@dataconnect/generated';

// The `CreateJobPosting` mutation requires an argument of type `CreateJobPostingVariables`:
const createJobPostingVars: CreateJobPostingVariables = {
  employerId: ..., 
  title: ..., 
  description: ..., 
  employmentType: ..., 
  location: ..., 
  requirements: ..., // optional
  responsibilities: ..., // optional
  salaryRange: ..., // optional
  status: ..., 
};

// Call the `createJobPostingRef()` function to get a reference to the mutation.
const ref = createJobPostingRef(createJobPostingVars);
// Variables can be defined inline as well.
const ref = createJobPostingRef({ employerId: ..., title: ..., description: ..., employmentType: ..., location: ..., requirements: ..., responsibilities: ..., salaryRange: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createJobPostingRef(dataConnect, createJobPostingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.jobPosting_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.jobPosting_insert);
});
```

