"use strict";
// This file is auto-generated by @hey-api/openapi-ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.putProjectsByProjectId = exports.deleteProjectsByProjectId = exports.postProjects = exports.getProjects = exports.deleteVariablesById = exports.postVariables = exports.getVariables = exports.postSourceControlPull = exports.patchUsersByIdRole = exports.getUsersById = exports.deleteUsersById = exports.postUsers = exports.getUsers = exports.putWorkflowsByIdTags = exports.getWorkflowsByIdTags = exports.putCredentialsByIdTransfer = exports.putWorkflowsByIdTransfer = exports.postWorkflowsByIdDeactivate = exports.postWorkflowsByIdActivate = exports.putWorkflowsById = exports.getWorkflowsById = exports.deleteWorkflowsById = exports.postWorkflows = exports.getWorkflows = exports.putTagsById = exports.getTagsById = exports.deleteTagsById = exports.postTags = exports.getTags = exports.getExecutionsById = exports.deleteExecutionsById = exports.getExecutions = exports.getCredentialsSchemaByCredentialTypeName = exports.deleteCredential = exports.postCredentials = exports.postAudit = void 0;
const client_gen_1 = require("./client.gen");
/**
 * Generate an audit
 * Generate a security audit for your n8n instance.
 */
const postAudit = (options) => {
    var _a;
    return ((_a = options === null || options === void 0 ? void 0 : options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).post({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/audit',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.postAudit = postAudit;
/**
 * Create a credential
 * Creates a credential that can be used by nodes of the specified type.
 */
const postCredentials = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).post({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/credentials',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.postCredentials = postCredentials;
/**
 * Delete credential by ID
 * Deletes a credential from your instance. You must be the owner of the credentials
 */
const deleteCredential = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).delete({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/credentials/{id}',
        ...options
    });
};
exports.deleteCredential = deleteCredential;
/**
 * Show credential data schema
 */
const getCredentialsSchemaByCredentialTypeName = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).get({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/credentials/schema/{credentialTypeName}',
        ...options
    });
};
exports.getCredentialsSchemaByCredentialTypeName = getCredentialsSchemaByCredentialTypeName;
/**
 * Retrieve all executions
 * Retrieve all executions from your instance.
 */
const getExecutions = (options) => {
    var _a;
    return ((_a = options === null || options === void 0 ? void 0 : options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).get({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/executions',
        ...options
    });
};
exports.getExecutions = getExecutions;
/**
 * Delete an execution
 * Deletes an execution from your instance.
 */
const deleteExecutionsById = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).delete({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/executions/{id}',
        ...options
    });
};
exports.deleteExecutionsById = deleteExecutionsById;
/**
 * Retrieve an execution
 * Retrieve an execution from your instance.
 */
const getExecutionsById = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).get({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/executions/{id}',
        ...options
    });
};
exports.getExecutionsById = getExecutionsById;
/**
 * Retrieve all tags
 * Retrieve all tags from your instance.
 */
const getTags = (options) => {
    var _a;
    return ((_a = options === null || options === void 0 ? void 0 : options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).get({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/tags',
        ...options
    });
};
exports.getTags = getTags;
/**
 * Create a tag
 * Create a tag in your instance.
 */
const postTags = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).post({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/tags',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.postTags = postTags;
/**
 * Delete a tag
 * Deletes a tag.
 */
const deleteTagsById = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).delete({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/tags/{id}',
        ...options
    });
};
exports.deleteTagsById = deleteTagsById;
/**
 * Retrieves a tag
 * Retrieves a tag.
 */
const getTagsById = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).get({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/tags/{id}',
        ...options
    });
};
exports.getTagsById = getTagsById;
/**
 * Update a tag
 * Update a tag.
 */
const putTagsById = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).put({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/tags/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.putTagsById = putTagsById;
/**
 * Retrieve all workflows
 * Retrieve all workflows from your instance.
 */
const getWorkflows = (options) => {
    var _a;
    return ((_a = options === null || options === void 0 ? void 0 : options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).get({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/workflows',
        ...options
    });
};
exports.getWorkflows = getWorkflows;
/**
 * Create a workflow
 * Create a workflow in your instance.
 */
const postWorkflows = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).post({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/workflows',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.postWorkflows = postWorkflows;
/**
 * Delete a workflow
 * Deletes a workflow.
 */
const deleteWorkflowsById = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).delete({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/workflows/{id}',
        ...options
    });
};
exports.deleteWorkflowsById = deleteWorkflowsById;
/**
 * Retrieves a workflow
 * Retrieves a workflow.
 */
const getWorkflowsById = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).get({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/workflows/{id}',
        ...options
    });
};
exports.getWorkflowsById = getWorkflowsById;
/**
 * Update a workflow
 * Update a workflow.
 */
const putWorkflowsById = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).put({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/workflows/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.putWorkflowsById = putWorkflowsById;
/**
 * Activate a workflow
 * Active a workflow.
 */
const postWorkflowsByIdActivate = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).post({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/workflows/{id}/activate',
        ...options
    });
};
exports.postWorkflowsByIdActivate = postWorkflowsByIdActivate;
/**
 * Deactivate a workflow
 * Deactivate a workflow.
 */
const postWorkflowsByIdDeactivate = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).post({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/workflows/{id}/deactivate',
        ...options
    });
};
exports.postWorkflowsByIdDeactivate = postWorkflowsByIdDeactivate;
/**
 * Transfer a workflow to another project.
 * Transfer a workflow to another project.
 */
const putWorkflowsByIdTransfer = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).put({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/workflows/{id}/transfer',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.putWorkflowsByIdTransfer = putWorkflowsByIdTransfer;
/**
 * Transfer a credential to another project.
 * Transfer a credential to another project.
 */
const putCredentialsByIdTransfer = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).put({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/credentials/{id}/transfer',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.putCredentialsByIdTransfer = putCredentialsByIdTransfer;
/**
 * Get workflow tags
 * Get workflow tags.
 */
const getWorkflowsByIdTags = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).get({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/workflows/{id}/tags',
        ...options
    });
};
exports.getWorkflowsByIdTags = getWorkflowsByIdTags;
/**
 * Update tags of a workflow
 * Update tags of a workflow.
 */
const putWorkflowsByIdTags = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).put({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/workflows/{id}/tags',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.putWorkflowsByIdTags = putWorkflowsByIdTags;
/**
 * Retrieve all users
 * Retrieve all users from your instance. Only available for the instance owner.
 */
const getUsers = (options) => {
    var _a;
    return ((_a = options === null || options === void 0 ? void 0 : options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).get({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/users',
        ...options
    });
};
exports.getUsers = getUsers;
/**
 * Create multiple users
 * Create one or more users.
 */
const postUsers = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).post({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/users',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.postUsers = postUsers;
/**
 * Delete a user
 * Delete a user from your instance.
 */
const deleteUsersById = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).delete({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/users/{id}',
        ...options
    });
};
exports.deleteUsersById = deleteUsersById;
/**
 * Get user by ID/Email
 * Retrieve a user from your instance. Only available for the instance owner.
 */
const getUsersById = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).get({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/users/{id}',
        ...options
    });
};
exports.getUsersById = getUsersById;
/**
 * Change a user's global role
 * Change a user's global role
 */
const patchUsersByIdRole = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).patch({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/users/{id}/role',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.patchUsersByIdRole = patchUsersByIdRole;
/**
 * Pull changes from the remote repository
 * Requires the Source Control feature to be licensed and connected to a repository.
 */
const postSourceControlPull = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).post({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/source-control/pull',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.postSourceControlPull = postSourceControlPull;
/**
 * Retrieve variables
 * Retrieve variables from your instance.
 */
const getVariables = (options) => {
    var _a;
    return ((_a = options === null || options === void 0 ? void 0 : options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).get({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/variables',
        ...options
    });
};
exports.getVariables = getVariables;
/**
 * Create a variable
 * Create a variable in your instance.
 */
const postVariables = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).post({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/variables',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.postVariables = postVariables;
/**
 * Delete a variable
 * Delete a variable from your instance.
 */
const deleteVariablesById = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).delete({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/variables/{id}',
        ...options
    });
};
exports.deleteVariablesById = deleteVariablesById;
/**
 * Retrieve projects
 * Retrieve projects from your instance.
 */
const getProjects = (options) => {
    var _a;
    return ((_a = options === null || options === void 0 ? void 0 : options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).get({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/projects',
        ...options
    });
};
exports.getProjects = getProjects;
/**
 * Create a project
 * Create a project in your instance.
 */
const postProjects = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).post({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/projects',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.postProjects = postProjects;
/**
 * Delete a project
 * Delete a project from your instance.
 */
const deleteProjectsByProjectId = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).delete({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/projects/{projectId}',
        ...options
    });
};
exports.deleteProjectsByProjectId = deleteProjectsByProjectId;
/**
 * Update a project
 * Update a project.
 */
const putProjectsByProjectId = (options) => {
    var _a;
    return ((_a = options.client) !== null && _a !== void 0 ? _a : client_gen_1.client).put({
        security: [
            {
                name: 'X-N8N-API-KEY',
                type: 'apiKey'
            }
        ],
        url: '/projects/{projectId}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options === null || options === void 0 ? void 0 : options.headers
        }
    });
};
exports.putProjectsByProjectId = putProjectsByProjectId;
