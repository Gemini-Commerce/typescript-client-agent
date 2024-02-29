/**
 * agent/service.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class AgentUpdatePayload {
    'firstname'?: string;
    'lastname'?: string;
    'email'?: string;
    'phone'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "firstname",
            "baseName": "firstname",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastname",
            "baseName": "lastname",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AgentUpdatePayload.attributeTypeMap;
    }

    public constructor() {
    }
}

