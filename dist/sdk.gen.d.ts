import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-fetch';
import type { PostAuditData, PostCredentialsData, DeleteCredentialData, GetCredentialsSchemaByCredentialTypeNameData, GetExecutionsData, DeleteExecutionsByIdData, GetExecutionsByIdData, GetTagsData, PostTagsData, DeleteTagsByIdData, GetTagsByIdData, PutTagsByIdData, GetWorkflowsData, PostWorkflowsData, DeleteWorkflowsByIdData, GetWorkflowsByIdData, PutWorkflowsByIdData, PostWorkflowsByIdActivateData, PostWorkflowsByIdDeactivateData, PutWorkflowsByIdTransferData, PutCredentialsByIdTransferData, GetWorkflowsByIdTagsData, PutWorkflowsByIdTagsData, GetUsersData, PostUsersData, DeleteUsersByIdData, GetUsersByIdData, PatchUsersByIdRoleData, PostSourceControlPullData, GetVariablesData, PostVariablesData, DeleteVariablesByIdData, GetProjectsData, PostProjectsData, DeleteProjectsByProjectIdData, PutProjectsByProjectIdData } from './types.gen';
export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = ClientOptions<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};
/**
 * Generate an audit
 * Generate a security audit for your n8n instance.
 */
export declare const postAudit: <ThrowOnError extends boolean = false>(options?: Options<PostAuditData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Audit, unknown, ThrowOnError>;
/**
 * Create a credential
 * Creates a credential that can be used by nodes of the specified type.
 */
export declare const postCredentials: <ThrowOnError extends boolean = false>(options: Options<PostCredentialsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").CreateCredentialResponse, unknown, ThrowOnError>;
/**
 * Delete credential by ID
 * Deletes a credential from your instance. You must be the owner of the credentials
 */
export declare const deleteCredential: <ThrowOnError extends boolean = false>(options: Options<DeleteCredentialData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Credential, unknown, ThrowOnError>;
/**
 * Show credential data schema
 */
export declare const getCredentialsSchemaByCredentialTypeName: <ThrowOnError extends boolean = false>(options: Options<GetCredentialsSchemaByCredentialTypeNameData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<{
    [key: string]: unknown;
}, unknown, ThrowOnError>;
/**
 * Retrieve all executions
 * Retrieve all executions from your instance.
 */
export declare const getExecutions: <ThrowOnError extends boolean = false>(options?: Options<GetExecutionsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").ExecutionList, unknown, ThrowOnError>;
/**
 * Delete an execution
 * Deletes an execution from your instance.
 */
export declare const deleteExecutionsById: <ThrowOnError extends boolean = false>(options: Options<DeleteExecutionsByIdData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Execution, unknown, ThrowOnError>;
/**
 * Retrieve an execution
 * Retrieve an execution from your instance.
 */
export declare const getExecutionsById: <ThrowOnError extends boolean = false>(options: Options<GetExecutionsByIdData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Execution, unknown, ThrowOnError>;
/**
 * Retrieve all tags
 * Retrieve all tags from your instance.
 */
export declare const getTags: <ThrowOnError extends boolean = false>(options?: Options<GetTagsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").TagList, unknown, ThrowOnError>;
/**
 * Create a tag
 * Create a tag in your instance.
 */
export declare const postTags: <ThrowOnError extends boolean = false>(options: Options<PostTagsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Tag, unknown, ThrowOnError>;
/**
 * Delete a tag
 * Deletes a tag.
 */
export declare const deleteTagsById: <ThrowOnError extends boolean = false>(options: Options<DeleteTagsByIdData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Tag, unknown, ThrowOnError>;
/**
 * Retrieves a tag
 * Retrieves a tag.
 */
export declare const getTagsById: <ThrowOnError extends boolean = false>(options: Options<GetTagsByIdData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Tag, unknown, ThrowOnError>;
/**
 * Update a tag
 * Update a tag.
 */
export declare const putTagsById: <ThrowOnError extends boolean = false>(options: Options<PutTagsByIdData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Tag, unknown, ThrowOnError>;
/**
 * Retrieve all workflows
 * Retrieve all workflows from your instance.
 */
export declare const getWorkflows: <ThrowOnError extends boolean = false>(options?: Options<GetWorkflowsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").WorkflowList, unknown, ThrowOnError>;
/**
 * Create a workflow
 * Create a workflow in your instance.
 */
export declare const postWorkflows: <ThrowOnError extends boolean = false>(options: Options<PostWorkflowsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Workflow, unknown, ThrowOnError>;
/**
 * Delete a workflow
 * Deletes a workflow.
 */
export declare const deleteWorkflowsById: <ThrowOnError extends boolean = false>(options: Options<DeleteWorkflowsByIdData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Workflow, unknown, ThrowOnError>;
/**
 * Retrieves a workflow
 * Retrieves a workflow.
 */
export declare const getWorkflowsById: <ThrowOnError extends boolean = false>(options: Options<GetWorkflowsByIdData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Workflow, unknown, ThrowOnError>;
/**
 * Update a workflow
 * Update a workflow.
 */
export declare const putWorkflowsById: <ThrowOnError extends boolean = false>(options: Options<PutWorkflowsByIdData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Workflow, unknown, ThrowOnError>;
/**
 * Activate a workflow
 * Active a workflow.
 */
export declare const postWorkflowsByIdActivate: <ThrowOnError extends boolean = false>(options: Options<PostWorkflowsByIdActivateData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Workflow, unknown, ThrowOnError>;
/**
 * Deactivate a workflow
 * Deactivate a workflow.
 */
export declare const postWorkflowsByIdDeactivate: <ThrowOnError extends boolean = false>(options: Options<PostWorkflowsByIdDeactivateData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").Workflow, unknown, ThrowOnError>;
/**
 * Transfer a workflow to another project.
 * Transfer a workflow to another project.
 */
export declare const putWorkflowsByIdTransfer: <ThrowOnError extends boolean = false>(options: Options<PutWorkflowsByIdTransferData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<unknown, unknown, ThrowOnError>;
/**
 * Transfer a credential to another project.
 * Transfer a credential to another project.
 */
export declare const putCredentialsByIdTransfer: <ThrowOnError extends boolean = false>(options: Options<PutCredentialsByIdTransferData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<unknown, unknown, ThrowOnError>;
/**
 * Get workflow tags
 * Get workflow tags.
 */
export declare const getWorkflowsByIdTags: <ThrowOnError extends boolean = false>(options: Options<GetWorkflowsByIdTagsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").WorkflowTags, unknown, ThrowOnError>;
/**
 * Update tags of a workflow
 * Update tags of a workflow.
 */
export declare const putWorkflowsByIdTags: <ThrowOnError extends boolean = false>(options: Options<PutWorkflowsByIdTagsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").WorkflowTags, unknown, ThrowOnError>;
/**
 * Retrieve all users
 * Retrieve all users from your instance. Only available for the instance owner.
 */
export declare const getUsers: <ThrowOnError extends boolean = false>(options?: Options<GetUsersData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").UserList, unknown, ThrowOnError>;
/**
 * Create multiple users
 * Create one or more users.
 */
export declare const postUsers: <ThrowOnError extends boolean = false>(options: Options<PostUsersData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<{
    user?: {
        id?: string;
        email?: string;
        inviteAcceptUrl?: string;
        emailSent?: boolean;
    };
    error?: string;
}, unknown, ThrowOnError>;
/**
 * Delete a user
 * Delete a user from your instance.
 */
export declare const deleteUsersById: <ThrowOnError extends boolean = false>(options: Options<DeleteUsersByIdData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
/**
 * Get user by ID/Email
 * Retrieve a user from your instance. Only available for the instance owner.
 */
export declare const getUsersById: <ThrowOnError extends boolean = false>(options: Options<GetUsersByIdData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").User, unknown, ThrowOnError>;
/**
 * Change a user's global role
 * Change a user's global role
 */
export declare const patchUsersByIdRole: <ThrowOnError extends boolean = false>(options: Options<PatchUsersByIdRoleData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<unknown, unknown, ThrowOnError>;
/**
 * Pull changes from the remote repository
 * Requires the Source Control feature to be licensed and connected to a repository.
 */
export declare const postSourceControlPull: <ThrowOnError extends boolean = false>(options: Options<PostSourceControlPullData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").ImportResult, unknown, ThrowOnError>;
/**
 * Retrieve variables
 * Retrieve variables from your instance.
 */
export declare const getVariables: <ThrowOnError extends boolean = false>(options?: Options<GetVariablesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").VariableList, unknown, ThrowOnError>;
/**
 * Create a variable
 * Create a variable in your instance.
 */
export declare const postVariables: <ThrowOnError extends boolean = false>(options: Options<PostVariablesData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<unknown, unknown, ThrowOnError>;
/**
 * Delete a variable
 * Delete a variable from your instance.
 */
export declare const deleteVariablesById: <ThrowOnError extends boolean = false>(options: Options<DeleteVariablesByIdData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
/**
 * Retrieve projects
 * Retrieve projects from your instance.
 */
export declare const getProjects: <ThrowOnError extends boolean = false>(options?: Options<GetProjectsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<import("./types.gen").ProjectList, unknown, ThrowOnError>;
/**
 * Create a project
 * Create a project in your instance.
 */
export declare const postProjects: <ThrowOnError extends boolean = false>(options: Options<PostProjectsData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<unknown, unknown, ThrowOnError>;
/**
 * Delete a project
 * Delete a project from your instance.
 */
export declare const deleteProjectsByProjectId: <ThrowOnError extends boolean = false>(options: Options<DeleteProjectsByProjectIdData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
/**
 * Update a project
 * Update a project.
 */
export declare const putProjectsByProjectId: <ThrowOnError extends boolean = false>(options: Options<PutProjectsByProjectIdData, ThrowOnError>) => import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
