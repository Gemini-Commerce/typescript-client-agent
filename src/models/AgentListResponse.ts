/* tslint:disable */
/* eslint-disable */
/**
 * agent/service.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @interface AgentListResponse
 */
export interface AgentListResponse {
    /**
     * 
     * @type {Array<AgentAgentEntity>}
     * @memberof AgentListResponse
     */
    'agents'?: Array<AgentAgentEntity>;
    /**
     * 
     * @type {string}
     * @memberof AgentListResponse
     */
    'pageToken'?: string;
}