import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AgentAgentEntity } from '../models/AgentAgentEntity';
import { AgentCreateAgentRequest } from '../models/AgentCreateAgentRequest';
import { AgentListAgentsRequest } from '../models/AgentListAgentsRequest';
import { AgentListResponse } from '../models/AgentListResponse';
import { AgentSortOrder } from '../models/AgentSortOrder';
import { AgentUpdateAgentRequest } from '../models/AgentUpdateAgentRequest';
import { AgentUpdatePayload } from '../models/AgentUpdatePayload';
import { ListRequestFilters } from '../models/ListRequestFilters';
import { ListRequestSort } from '../models/ListRequestSort';
import { ProtobufAny } from '../models/ProtobufAny';
import { RpcStatus } from '../models/RpcStatus';
import { SortSortField } from '../models/SortSortField';

import { ObservableAgentApi } from "./ObservableAPI";
import { AgentApiRequestFactory, AgentApiResponseProcessor} from "../apis/AgentApi";

export interface AgentApiAgentCreateAgentRequest {
    /**
     * 
     * @type string
     * @memberof AgentApiagentCreateAgent
     */
    tenantId: string
    /**
     * 
     * @type AgentCreateAgentRequest
     * @memberof AgentApiagentCreateAgent
     */
    body: AgentCreateAgentRequest
}

export interface AgentApiAgentGetAgentRequest {
    /**
     * 
     * @type string
     * @memberof AgentApiagentGetAgent
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof AgentApiagentGetAgent
     */
    id: string
}

export interface AgentApiAgentListAgentsRequest {
    /**
     * 
     * @type string
     * @memberof AgentApiagentListAgents
     */
    tenantId: string
    /**
     * 
     * @type number
     * @memberof AgentApiagentListAgents
     */
    pageSize: number
    /**
     * 
     * @type AgentListAgentsRequest
     * @memberof AgentApiagentListAgents
     */
    body: AgentListAgentsRequest
}

export interface AgentApiAgentUpdateAgentRequest {
    /**
     * 
     * @type string
     * @memberof AgentApiagentUpdateAgent
     */
    tenantId: string
    /**
     * 
     * @type string
     * @memberof AgentApiagentUpdateAgent
     */
    id: string
    /**
     * 
     * @type AgentUpdateAgentRequest
     * @memberof AgentApiagentUpdateAgent
     */
    body: AgentUpdateAgentRequest
}

export class ObjectAgentApi {
    private api: ObservableAgentApi

    public constructor(configuration: Configuration, requestFactory?: AgentApiRequestFactory, responseProcessor?: AgentApiResponseProcessor) {
        this.api = new ObservableAgentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public agentCreateAgentWithHttpInfo(param: AgentApiAgentCreateAgentRequest, options?: Configuration): Promise<HttpInfo<AgentAgentEntity>> {
        return this.api.agentCreateAgentWithHttpInfo(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public agentCreateAgent(param: AgentApiAgentCreateAgentRequest, options?: Configuration): Promise<AgentAgentEntity> {
        return this.api.agentCreateAgent(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public agentGetAgentWithHttpInfo(param: AgentApiAgentGetAgentRequest, options?: Configuration): Promise<HttpInfo<AgentAgentEntity>> {
        return this.api.agentGetAgentWithHttpInfo(param.tenantId, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public agentGetAgent(param: AgentApiAgentGetAgentRequest, options?: Configuration): Promise<AgentAgentEntity> {
        return this.api.agentGetAgent(param.tenantId, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public agentListAgentsWithHttpInfo(param: AgentApiAgentListAgentsRequest, options?: Configuration): Promise<HttpInfo<AgentListResponse>> {
        return this.api.agentListAgentsWithHttpInfo(param.tenantId, param.pageSize, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public agentListAgents(param: AgentApiAgentListAgentsRequest, options?: Configuration): Promise<AgentListResponse> {
        return this.api.agentListAgents(param.tenantId, param.pageSize, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public agentUpdateAgentWithHttpInfo(param: AgentApiAgentUpdateAgentRequest, options?: Configuration): Promise<HttpInfo<AgentAgentEntity>> {
        return this.api.agentUpdateAgentWithHttpInfo(param.tenantId, param.id, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public agentUpdateAgent(param: AgentApiAgentUpdateAgentRequest, options?: Configuration): Promise<AgentAgentEntity> {
        return this.api.agentUpdateAgent(param.tenantId, param.id, param.body,  options).toPromise();
    }

}
