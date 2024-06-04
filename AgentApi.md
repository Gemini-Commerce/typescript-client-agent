# .AgentApi

All URIs are relative to *https://agent.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agentCreateAgent**](AgentApi.md#agentCreateAgent) | **POST** /v1/{tenantId}/agent/create | 
[**agentGetAgent**](AgentApi.md#agentGetAgent) | **GET** /v1/{tenantId}/agent/{id} | 
[**agentListAgents**](AgentApi.md#agentListAgents) | **POST** /v1/{tenantId}/agent/list/page-size/{pageSize} | 
[**agentUpdateAgent**](AgentApi.md#agentUpdateAgent) | **PUT** /v1/{tenantId}/agent/{id} | 


# **agentCreateAgent**
> AgentAgentEntity agentCreateAgent(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiAgentCreateAgentRequest = {
  // string
  tenantId: "tenantId_example",
  // AgentCreateAgentRequest
  body: {
    code: "code_example",
    firstname: "firstname_example",
    lastname: "lastname_example",
    email: "email_example",
    password: "password_example",
    phone: "phone_example",
  },
};

apiInstance.agentCreateAgent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AgentCreateAgentRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined


### Return type

**AgentAgentEntity**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **agentGetAgent**
> AgentAgentEntity agentGetAgent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiAgentGetAgentRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  id: "id_example",
};

apiInstance.agentGetAgent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**string**] |  | defaults to undefined
 **id** | [**string**] |  | defaults to undefined


### Return type

**AgentAgentEntity**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **agentListAgents**
> AgentListResponse agentListAgents(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiAgentListAgentsRequest = {
  // string
  tenantId: "tenantId_example",
  // number
  pageSize: 1,
  // AgentListAgentsRequest
  body: {
    pageToken: "pageToken_example",
    sorts: [
      {
        evaluationOrder: 1,
        field: "UNKNOWN",
        order: "DESC",
      },
    ],
    filtersMask: "filtersMask_example",
    filters: {
      email: [
        "email_example",
      ],
      lastname: [
        "lastname_example",
      ],
      code: [
        "code_example",
      ],
    },
  },
};

apiInstance.agentListAgents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AgentListAgentsRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **pageSize** | [**number**] |  | defaults to undefined


### Return type

**AgentListResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **agentUpdateAgent**
> AgentAgentEntity agentUpdateAgent(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgentApi(configuration);

let body:.AgentApiAgentUpdateAgentRequest = {
  // string
  tenantId: "tenantId_example",
  // string
  id: "id_example",
  // AgentUpdateAgentRequest
  body: {
    payload: {
      firstname: "firstname_example",
      lastname: "lastname_example",
      email: "email_example",
      phone: "phone_example",
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.agentUpdateAgent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AgentUpdateAgentRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined
 **id** | [**string**] |  | defaults to undefined


### Return type

**AgentAgentEntity**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


