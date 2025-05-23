export type Audit = {
    'Credentials Risk Report'?: {
        [key: string]: unknown;
    };
    'Database Risk Report'?: {
        [key: string]: unknown;
    };
    'Filesystem Risk Report'?: {
        [key: string]: unknown;
    };
    'Nodes Risk Report'?: {
        [key: string]: unknown;
    };
    'Instance Risk Report'?: {
        [key: string]: unknown;
    };
};
export type Credential = {
    readonly id?: string;
    name: string;
    type: string;
    data: {
        [key: string]: unknown;
    };
    readonly createdAt?: string;
    readonly updatedAt?: string;
};
export type CreateCredentialResponse = {
    readonly id: string;
    name: string;
    type: string;
    readonly createdAt: string;
    readonly updatedAt: string;
};
export type Execution = {
    id?: number;
    data?: {
        [key: string]: unknown;
    };
    finished?: boolean;
    mode?: 'cli' | 'error' | 'integrated' | 'internal' | 'manual' | 'retry' | 'trigger' | 'webhook';
    retryOf?: number | null;
    retrySuccessId?: number | null;
    startedAt?: string;
    stoppedAt?: string;
    workflowId?: number;
    waitTill?: string | null;
    customData?: {
        [key: string]: unknown;
    };
};
export type ExecutionList = {
    data?: Array<Execution>;
    /**
     * Paginate through executions by setting the cursor parameter to a nextCursor attribute returned by a previous request. Default value fetches the first "page" of the collection.
     */
    nextCursor?: string | null;
};
export type Tag = {
    readonly id?: string;
    name: string;
    readonly createdAt?: string;
    readonly updatedAt?: string;
};
export type TagList = {
    data?: Array<Tag>;
    /**
     * Paginate through tags by setting the cursor parameter to a nextCursor attribute returned by a previous request. Default value fetches the first "page" of the collection.
     */
    nextCursor?: string | null;
};
export type Node = {
    id?: string;
    name?: string;
    webhookId?: string;
    disabled?: boolean;
    notesInFlow?: boolean;
    notes?: string;
    type?: string;
    typeVersion?: number;
    executeOnce?: boolean;
    alwaysOutputData?: boolean;
    retryOnFail?: boolean;
    maxTries?: number;
    waitBetweenTries?: number;
    /**
     * use onError instead
     * @deprecated
     */
    continueOnFail?: boolean;
    onError?: string;
    position?: Array<number>;
    parameters?: {
        [key: string]: unknown;
    };
    credentials?: {
        [key: string]: unknown;
    };
    readonly createdAt?: string;
    readonly updatedAt?: string;
};
export type WorkflowSettings = {
    saveExecutionProgress?: boolean;
    saveManualExecutions?: boolean;
    saveDataErrorExecution?: 'all' | 'none';
    saveDataSuccessExecution?: 'all' | 'none';
    executionTimeout?: number;
    /**
     * The ID of the workflow that contains the error trigger node.
     */
    errorWorkflow?: string;
    timezone?: string;
    executionOrder?: string;
};
export type Workflow = {
    readonly id?: string;
    name: string;
    readonly active?: boolean;
    readonly createdAt?: string;
    readonly updatedAt?: string;
    nodes: Array<Node>;
    connections: {
        [key: string]: unknown;
    };
    settings: WorkflowSettings;
    staticData?: (string | null) | ({
        [key: string]: unknown;
    } | null);
    readonly tags?: Array<Tag>;
};
export type WorkflowList = {
    data?: Array<Workflow>;
    /**
     * Paginate through workflows by setting the cursor parameter to a nextCursor attribute returned by a previous request. Default value fetches the first "page" of the collection.
     */
    nextCursor?: string | null;
};
export type WorkflowTags = Array<Tag>;
export type TagIds = Array<{
    id: string;
}>;
export type User = {
    readonly id?: string;
    email: string;
    /**
     * User's first name
     */
    readonly firstName?: string;
    /**
     * User's last name
     */
    readonly lastName?: string;
    /**
     * Whether the user finished setting up their account in response to the invitation (true) or not (false).
     */
    readonly isPending?: boolean;
    /**
     * Time the user was created.
     */
    readonly createdAt?: string;
    /**
     * Last time the user was updated.
     */
    readonly updatedAt?: string;
    readonly role?: string;
};
export type UserList = {
    data?: Array<User>;
    /**
     * Paginate through users by setting the cursor parameter to a nextCursor attribute returned by a previous request. Default value fetches the first "page" of the collection.
     */
    nextCursor?: string | null;
};
export type Pull = {
    force?: boolean;
    variables?: {
        [key: string]: unknown;
    };
};
export type ImportResult = {
    variables?: {
        added?: Array<string>;
        changed?: Array<string>;
    };
    credentials?: Array<{
        id?: string;
        name?: string;
        type?: string;
    }>;
    workflows?: Array<{
        id?: string;
        name?: string;
    }>;
    tags?: {
        tags?: Array<{
            id?: string;
            name?: string;
        }>;
        mappings?: Array<{
            workflowId?: string;
            tagId?: string;
        }>;
    };
    [key: string]: unknown | {
        added?: Array<string>;
        changed?: Array<string>;
    } | Array<{
        id?: string;
        name?: string;
        type?: string;
    }> | Array<{
        id?: string;
        name?: string;
    }> | {
        tags?: Array<{
            id?: string;
            name?: string;
        }>;
        mappings?: Array<{
            workflowId?: string;
            tagId?: string;
        }>;
    } | undefined;
};
export type Variable = {
    readonly id?: string;
    key: string;
    value: string;
    readonly type?: string;
};
export type VariableList = {
    data?: Array<Variable>;
    /**
     * Paginate through variables by setting the cursor parameter to a nextCursor attribute returned by a previous request. Default value fetches the first "page" of the collection.
     */
    nextCursor?: string | null;
};
export type Project = {
    readonly id?: string;
    name: string;
    readonly type?: string;
};
export type ProjectList = {
    data?: Array<Project>;
    /**
     * Paginate through projects by setting the cursor parameter to a nextCursor attribute returned by a previous request. Default value fetches the first "page" of the collection.
     */
    nextCursor?: string | null;
};
export type _Error = {
    code?: string;
    message: string;
    description?: string;
};
export type Role = {
    readonly id?: number;
    readonly name?: string;
    readonly scope?: string;
    /**
     * Time the role was created.
     */
    readonly createdAt?: string;
    /**
     * Last time the role was updated.
     */
    readonly updatedAt?: string;
};
export type CredentialType = {
    readonly displayName?: string;
    readonly name?: string;
    readonly type?: string;
    readonly default?: string;
};
export type Error2 = _Error;
export type Role2 = Role;
export type Execution2 = Execution;
export type Node2 = Node;
export type Tag2 = Tag;
export type Workflow2 = Workflow;
export type WorkflowSettings2 = WorkflowSettings;
export type ExecutionList2 = ExecutionList;
export type WorkflowList2 = WorkflowList;
export type Credential2 = Credential;
export type CredentialType2 = CredentialType;
export type Audit2 = Audit;
export type Pull2 = Pull;
export type ImportResult2 = ImportResult;
export type UserList2 = UserList;
export type User2 = User;
/**
 * Whether or not to include the execution's detailed data.
 */
export type IncludeData = boolean;
/**
 * The maximum number of items to return.
 */
export type Limit = number;
/**
 * Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first "page" of the collection. See pagination for more detail.
 */
export type Cursor = string;
/**
 * The ID of the execution.
 */
export type ExecutionId = number;
/**
 * The ID of the tag.
 */
export type TagId = string;
/**
 * The ID of the workflow.
 */
export type WorkflowId = string;
/**
 * The ID of the credential.
 */
export type CredentialId = string;
/**
 * Whether to include the user's role or not.
 */
export type IncludeRole = boolean;
/**
 * The ID or email of the user.
 */
export type UserIdentifier = string;
/**
 * The ID of the variable.
 */
export type VariableId = string;
/**
 * The ID of the project.
 */
export type ProjectId = string;
/**
 * Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first "page" of the collection. See pagination for more detail.
 */
export type Cursor2 = string;
/**
 * The maximum number of items to return.
 */
export type Limit2 = number;
/**
 * The ID of the execution.
 */
export type ExecutionId2 = number;
/**
 * The ID of the workflow.
 */
export type WorkflowId2 = string;
/**
 * The ID of the tag.
 */
export type TagId2 = string;
/**
 * Whether or not to include the execution's detailed data.
 */
export type IncludeData2 = boolean;
/**
 * The ID or email of the user.
 */
export type UserIdentifier2 = string;
/**
 * Whether to include the user's role or not.
 */
export type IncludeRole2 = boolean;
export type PostAuditData = {
    body?: {
        additionalOptions?: {
            /**
             * Days for a workflow to be considered abandoned if not executed
             */
            daysAbandonedWorkflow?: number;
            categories?: Array<'credentials' | 'database' | 'nodes' | 'filesystem' | 'instance'>;
        };
    };
    path?: never;
    query?: never;
    url: '/audit';
};
export type PostAuditErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Internal server error.
     */
    500: unknown;
};
export type PostAuditResponses = {
    /**
     * Operation successful.
     */
    200: Audit;
};
export type PostAuditResponse = PostAuditResponses[keyof PostAuditResponses];
export type PostCredentialsData = {
    /**
     * Credential to be created.
     */
    body: Credential;
    path?: never;
    query?: never;
    url: '/credentials';
};
export type PostCredentialsErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Unsupported media type.
     */
    415: unknown;
};
export type PostCredentialsResponses = {
    /**
     * Operation successful.
     */
    200: CreateCredentialResponse;
};
export type PostCredentialsResponse = PostCredentialsResponses[keyof PostCredentialsResponses];
export type DeleteCredentialData = {
    body?: never;
    path: {
        /**
         * The credential ID that needs to be deleted
         */
        id: string;
    };
    query?: never;
    url: '/credentials/{id}';
};
export type DeleteCredentialErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type DeleteCredentialResponses = {
    /**
     * Operation successful.
     */
    200: Credential;
};
export type DeleteCredentialResponse = DeleteCredentialResponses[keyof DeleteCredentialResponses];
export type GetCredentialsSchemaByCredentialTypeNameData = {
    body?: never;
    path: {
        /**
         * The credential type name that you want to get the schema for
         */
        credentialTypeName: string;
    };
    query?: never;
    url: '/credentials/schema/{credentialTypeName}';
};
export type GetCredentialsSchemaByCredentialTypeNameErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type GetCredentialsSchemaByCredentialTypeNameResponses = {
    /**
     * Operation successful.
     */
    200: {
        [key: string]: unknown;
    };
};
export type GetCredentialsSchemaByCredentialTypeNameResponse = GetCredentialsSchemaByCredentialTypeNameResponses[keyof GetCredentialsSchemaByCredentialTypeNameResponses];
export type GetExecutionsData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Whether or not to include the execution's detailed data.
         */
        includeData?: boolean;
        /**
         * Status to filter the executions by.
         */
        status?: 'error' | 'success' | 'waiting';
        /**
         * Workflow to filter the executions by.
         */
        workflowId?: string;
        projectId?: string;
        /**
         * The maximum number of items to return.
         */
        limit?: number;
        /**
         * Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first "page" of the collection. See pagination for more detail.
         */
        cursor?: string;
    };
    url: '/executions';
};
export type GetExecutionsErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type GetExecutionsResponses = {
    /**
     * Operation successful.
     */
    200: ExecutionList;
};
export type GetExecutionsResponse = GetExecutionsResponses[keyof GetExecutionsResponses];
export type DeleteExecutionsByIdData = {
    body?: never;
    path: {
        /**
         * The ID of the execution.
         */
        id: number;
    };
    query?: never;
    url: '/executions/{id}';
};
export type DeleteExecutionsByIdErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type DeleteExecutionsByIdResponses = {
    /**
     * Operation successful.
     */
    200: Execution;
};
export type DeleteExecutionsByIdResponse = DeleteExecutionsByIdResponses[keyof DeleteExecutionsByIdResponses];
export type GetExecutionsByIdData = {
    body?: never;
    path: {
        /**
         * The ID of the execution.
         */
        id: number;
    };
    query?: {
        /**
         * Whether or not to include the execution's detailed data.
         */
        includeData?: boolean;
    };
    url: '/executions/{id}';
};
export type GetExecutionsByIdErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type GetExecutionsByIdResponses = {
    /**
     * Operation successful.
     */
    200: Execution;
};
export type GetExecutionsByIdResponse = GetExecutionsByIdResponses[keyof GetExecutionsByIdResponses];
export type GetTagsData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * The maximum number of items to return.
         */
        limit?: number;
        /**
         * Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first "page" of the collection. See pagination for more detail.
         */
        cursor?: string;
    };
    url: '/tags';
};
export type GetTagsErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
export type GetTagsResponses = {
    /**
     * Operation successful.
     */
    200: TagList;
};
export type GetTagsResponse = GetTagsResponses[keyof GetTagsResponses];
export type PostTagsData = {
    /**
     * Created tag object.
     */
    body: Tag;
    path?: never;
    query?: never;
    url: '/tags';
};
export type PostTagsErrors = {
    /**
     * The request is invalid or provides malformed data.
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Conflict
     */
    409: unknown;
};
export type PostTagsResponses = {
    /**
     * A tag object
     */
    201: Tag;
};
export type PostTagsResponse = PostTagsResponses[keyof PostTagsResponses];
export type DeleteTagsByIdData = {
    body?: never;
    path: {
        /**
         * The ID of the tag.
         */
        id: string;
    };
    query?: never;
    url: '/tags/{id}';
};
export type DeleteTagsByIdErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Forbidden
     */
    403: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type DeleteTagsByIdResponses = {
    /**
     * Operation successful.
     */
    200: Tag;
};
export type DeleteTagsByIdResponse = DeleteTagsByIdResponses[keyof DeleteTagsByIdResponses];
export type GetTagsByIdData = {
    body?: never;
    path: {
        /**
         * The ID of the tag.
         */
        id: string;
    };
    query?: never;
    url: '/tags/{id}';
};
export type GetTagsByIdErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type GetTagsByIdResponses = {
    /**
     * Operation successful.
     */
    200: Tag;
};
export type GetTagsByIdResponse = GetTagsByIdResponses[keyof GetTagsByIdResponses];
export type PutTagsByIdData = {
    /**
     * Updated tag object.
     */
    body: Tag;
    path: {
        /**
         * The ID of the tag.
         */
        id: string;
    };
    query?: never;
    url: '/tags/{id}';
};
export type PutTagsByIdErrors = {
    /**
     * The request is invalid or provides malformed data.
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
    /**
     * Conflict
     */
    409: unknown;
};
export type PutTagsByIdResponses = {
    /**
     * Tag object
     */
    200: Tag;
};
export type PutTagsByIdResponse = PutTagsByIdResponses[keyof PutTagsByIdResponses];
export type GetWorkflowsData = {
    body?: never;
    path?: never;
    query?: {
        active?: boolean;
        tags?: string;
        name?: string;
        projectId?: string;
        /**
         * Set this to avoid retrieving pinned data
         */
        excludePinnedData?: boolean;
        /**
         * The maximum number of items to return.
         */
        limit?: number;
        /**
         * Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first "page" of the collection. See pagination for more detail.
         */
        cursor?: string;
    };
    url: '/workflows';
};
export type GetWorkflowsErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
export type GetWorkflowsResponses = {
    /**
     * Operation successful.
     */
    200: WorkflowList;
};
export type GetWorkflowsResponse = GetWorkflowsResponses[keyof GetWorkflowsResponses];
export type PostWorkflowsData = {
    /**
     * Created workflow object.
     */
    body: Workflow;
    path?: never;
    query?: never;
    url: '/workflows';
};
export type PostWorkflowsErrors = {
    /**
     * The request is invalid or provides malformed data.
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type PostWorkflowsResponses = {
    /**
     * A workflow object
     */
    200: Workflow;
};
export type PostWorkflowsResponse = PostWorkflowsResponses[keyof PostWorkflowsResponses];
export type DeleteWorkflowsByIdData = {
    body?: never;
    path: {
        /**
         * The ID of the workflow.
         */
        id: string;
    };
    query?: never;
    url: '/workflows/{id}';
};
export type DeleteWorkflowsByIdErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type DeleteWorkflowsByIdResponses = {
    /**
     * Operation successful.
     */
    200: Workflow;
};
export type DeleteWorkflowsByIdResponse = DeleteWorkflowsByIdResponses[keyof DeleteWorkflowsByIdResponses];
export type GetWorkflowsByIdData = {
    body?: never;
    path: {
        /**
         * The ID of the workflow.
         */
        id: string;
    };
    query?: {
        /**
         * Set this to avoid retrieving pinned data
         */
        excludePinnedData?: boolean;
    };
    url: '/workflows/{id}';
};
export type GetWorkflowsByIdErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type GetWorkflowsByIdResponses = {
    /**
     * Operation successful.
     */
    200: Workflow;
};
export type GetWorkflowsByIdResponse = GetWorkflowsByIdResponses[keyof GetWorkflowsByIdResponses];
export type PutWorkflowsByIdData = {
    /**
     * Updated workflow object.
     */
    body: Workflow;
    path: {
        /**
         * The ID of the workflow.
         */
        id: string;
    };
    query?: never;
    url: '/workflows/{id}';
};
export type PutWorkflowsByIdErrors = {
    /**
     * The request is invalid or provides malformed data.
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type PutWorkflowsByIdResponses = {
    /**
     * Workflow object
     */
    200: Workflow;
};
export type PutWorkflowsByIdResponse = PutWorkflowsByIdResponses[keyof PutWorkflowsByIdResponses];
export type PostWorkflowsByIdActivateData = {
    body?: never;
    path: {
        /**
         * The ID of the workflow.
         */
        id: string;
    };
    query?: never;
    url: '/workflows/{id}/activate';
};
export type PostWorkflowsByIdActivateErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type PostWorkflowsByIdActivateResponses = {
    /**
     * Workflow object
     */
    200: Workflow;
};
export type PostWorkflowsByIdActivateResponse = PostWorkflowsByIdActivateResponses[keyof PostWorkflowsByIdActivateResponses];
export type PostWorkflowsByIdDeactivateData = {
    body?: never;
    path: {
        /**
         * The ID of the workflow.
         */
        id: string;
    };
    query?: never;
    url: '/workflows/{id}/deactivate';
};
export type PostWorkflowsByIdDeactivateErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type PostWorkflowsByIdDeactivateResponses = {
    /**
     * Workflow object
     */
    200: Workflow;
};
export type PostWorkflowsByIdDeactivateResponse = PostWorkflowsByIdDeactivateResponses[keyof PostWorkflowsByIdDeactivateResponses];
export type PutWorkflowsByIdTransferData = {
    /**
     * Destination project information for the workflow transfer.
     */
    body: {
        /**
         * The ID of the project to transfer the workflow to.
         */
        destinationProjectId: string;
    };
    path: {
        /**
         * The ID of the workflow.
         */
        id: string;
    };
    query?: never;
    url: '/workflows/{id}/transfer';
};
export type PutWorkflowsByIdTransferErrors = {
    /**
     * The request is invalid or provides malformed data.
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type PutWorkflowsByIdTransferResponses = {
    /**
     * Operation successful.
     */
    200: unknown;
};
export type PutCredentialsByIdTransferData = {
    /**
     * Destination project for the credential transfer.
     */
    body: {
        /**
         * The ID of the project to transfer the credential to.
         */
        destinationProjectId: string;
    };
    path: {
        /**
         * The ID of the credential.
         */
        id: string;
    };
    query?: never;
    url: '/credentials/{id}/transfer';
};
export type PutCredentialsByIdTransferErrors = {
    /**
     * The request is invalid or provides malformed data.
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type PutCredentialsByIdTransferResponses = {
    /**
     * Operation successful.
     */
    200: unknown;
};
export type GetWorkflowsByIdTagsData = {
    body?: never;
    path: {
        /**
         * The ID of the workflow.
         */
        id: string;
    };
    query?: never;
    url: '/workflows/{id}/tags';
};
export type GetWorkflowsByIdTagsErrors = {
    /**
     * The request is invalid or provides malformed data.
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type GetWorkflowsByIdTagsResponses = {
    /**
     * List of tags
     */
    200: WorkflowTags;
};
export type GetWorkflowsByIdTagsResponse = GetWorkflowsByIdTagsResponses[keyof GetWorkflowsByIdTagsResponses];
export type PutWorkflowsByIdTagsData = {
    /**
     * List of tags
     */
    body: TagIds;
    path: {
        /**
         * The ID of the workflow.
         */
        id: string;
    };
    query?: never;
    url: '/workflows/{id}/tags';
};
export type PutWorkflowsByIdTagsErrors = {
    /**
     * The request is invalid or provides malformed data.
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type PutWorkflowsByIdTagsResponses = {
    /**
     * List of tags after add the tag
     */
    200: WorkflowTags;
};
export type PutWorkflowsByIdTagsResponse = PutWorkflowsByIdTagsResponses[keyof PutWorkflowsByIdTagsResponses];
export type GetUsersData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * The maximum number of items to return.
         */
        limit?: number;
        /**
         * Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first "page" of the collection. See pagination for more detail.
         */
        cursor?: string;
        /**
         * Whether to include the user's role or not.
         */
        includeRole?: boolean;
        projectId?: string;
    };
    url: '/users';
};
export type GetUsersErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
export type GetUsersResponses = {
    /**
     * Operation successful.
     */
    200: UserList;
};
export type GetUsersResponse = GetUsersResponses[keyof GetUsersResponses];
export type PostUsersData = {
    /**
     * Array of users to be created.
     */
    body: Array<{
        email: string;
        role?: 'global:admin' | 'global:member';
    }>;
    path?: never;
    query?: never;
    url: '/users';
};
export type PostUsersErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Forbidden
     */
    403: unknown;
};
export type PostUsersResponses = {
    /**
     * Operation successful.
     */
    200: {
        user?: {
            id?: string;
            email?: string;
            inviteAcceptUrl?: string;
            emailSent?: boolean;
        };
        error?: string;
    };
};
export type PostUsersResponse = PostUsersResponses[keyof PostUsersResponses];
export type DeleteUsersByIdData = {
    body?: never;
    path: {
        /**
         * The ID or email of the user.
         */
        id: string;
    };
    query?: never;
    url: '/users/{id}';
};
export type DeleteUsersByIdErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Forbidden
     */
    403: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type DeleteUsersByIdResponses = {
    /**
     * Operation successful.
     */
    204: void;
};
export type DeleteUsersByIdResponse = DeleteUsersByIdResponses[keyof DeleteUsersByIdResponses];
export type GetUsersByIdData = {
    body?: never;
    path: {
        /**
         * The ID or email of the user.
         */
        id: string;
    };
    query?: {
        /**
         * Whether to include the user's role or not.
         */
        includeRole?: boolean;
    };
    url: '/users/{id}';
};
export type GetUsersByIdErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
export type GetUsersByIdResponses = {
    /**
     * Operation successful.
     */
    200: User;
};
export type GetUsersByIdResponse = GetUsersByIdResponses[keyof GetUsersByIdResponses];
export type PatchUsersByIdRoleData = {
    /**
     * New role for the user
     */
    body: {
        newRoleName: 'global:admin' | 'global:member';
    };
    path: {
        /**
         * The ID or email of the user.
         */
        id: string;
    };
    query?: never;
    url: '/users/{id}/role';
};
export type PatchUsersByIdRoleErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Forbidden
     */
    403: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type PatchUsersByIdRoleResponses = {
    /**
     * Operation successful.
     */
    200: unknown;
};
export type PostSourceControlPullData = {
    /**
     * Pull options
     */
    body: Pull;
    path?: never;
    query?: never;
    url: '/source-control/pull';
};
export type PostSourceControlPullErrors = {
    /**
     * The request is invalid or provides malformed data.
     */
    400: unknown;
    /**
     * Conflict
     */
    409: unknown;
};
export type PostSourceControlPullResponses = {
    /**
     * Import result
     */
    200: ImportResult;
};
export type PostSourceControlPullResponse = PostSourceControlPullResponses[keyof PostSourceControlPullResponses];
export type GetVariablesData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * The maximum number of items to return.
         */
        limit?: number;
        /**
         * Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first "page" of the collection. See pagination for more detail.
         */
        cursor?: string;
    };
    url: '/variables';
};
export type GetVariablesErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
export type GetVariablesResponses = {
    /**
     * Operation successful.
     */
    200: VariableList;
};
export type GetVariablesResponse = GetVariablesResponses[keyof GetVariablesResponses];
export type PostVariablesData = {
    /**
     * Payload for variable to create.
     */
    body: Variable;
    path?: never;
    query?: never;
    url: '/variables';
};
export type PostVariablesErrors = {
    /**
     * The request is invalid or provides malformed data.
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type PostVariablesResponses = {
    /**
     * Operation successful.
     */
    201: unknown;
};
export type DeleteVariablesByIdData = {
    body?: never;
    path: {
        /**
         * The ID of the variable.
         */
        id: string;
    };
    query?: never;
    url: '/variables/{id}';
};
export type DeleteVariablesByIdErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type DeleteVariablesByIdResponses = {
    /**
     * Operation successful.
     */
    204: void;
};
export type DeleteVariablesByIdResponse = DeleteVariablesByIdResponses[keyof DeleteVariablesByIdResponses];
export type GetProjectsData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * The maximum number of items to return.
         */
        limit?: number;
        /**
         * Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first "page" of the collection. See pagination for more detail.
         */
        cursor?: string;
    };
    url: '/projects';
};
export type GetProjectsErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
};
export type GetProjectsResponses = {
    /**
     * Operation successful.
     */
    200: ProjectList;
};
export type GetProjectsResponse = GetProjectsResponses[keyof GetProjectsResponses];
export type PostProjectsData = {
    /**
     * Payload for project to create.
     */
    body: Project;
    path?: never;
    query?: never;
    url: '/projects';
};
export type PostProjectsErrors = {
    /**
     * The request is invalid or provides malformed data.
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
};
export type PostProjectsResponses = {
    /**
     * Operation successful.
     */
    201: unknown;
};
export type DeleteProjectsByProjectIdData = {
    body?: never;
    path: {
        /**
         * The ID of the project.
         */
        projectId: string;
    };
    query?: never;
    url: '/projects/{projectId}';
};
export type DeleteProjectsByProjectIdErrors = {
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Forbidden
     */
    403: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type DeleteProjectsByProjectIdResponses = {
    /**
     * Operation successful.
     */
    204: void;
};
export type DeleteProjectsByProjectIdResponse = DeleteProjectsByProjectIdResponses[keyof DeleteProjectsByProjectIdResponses];
export type PutProjectsByProjectIdData = {
    /**
     * Updated project object.
     */
    body: Project;
    path?: never;
    query?: never;
    url: '/projects/{projectId}';
};
export type PutProjectsByProjectIdErrors = {
    /**
     * The request is invalid or provides malformed data.
     */
    400: unknown;
    /**
     * Unauthorized
     */
    401: unknown;
    /**
     * Forbidden
     */
    403: unknown;
    /**
     * The specified resource was not found.
     */
    404: unknown;
};
export type PutProjectsByProjectIdResponses = {
    /**
     * Operation successful.
     */
    204: void;
};
export type PutProjectsByProjectIdResponse = PutProjectsByProjectIdResponses[keyof PutProjectsByProjectIdResponses];
export type ClientOptions = {
    baseUrl: `${string}://${string}/api/v1` | (string & {});
};
