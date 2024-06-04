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
import { ObservableAgentApi } from './ObservableAPI';

import { AgentApiRequestFactory, AgentApiResponseProcessor} from "../apis/AgentApi";
export class PromiseAgentApi {
    private api: ObservableAgentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentApiRequestFactory,
        responseProcessor?: AgentApiResponseProcessor
    ) {
        this.api = new ObservableAgentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param tenantId 
     * @param body 
     */
    public agentCreateAgentWithHttpInfo(tenantId: string, body: AgentCreateAgentRequest, _options?: Configuration): Promise<HttpInfo<AgentAgentEntity>> {
        const result = this.api.agentCreateAgentWithHttpInfo(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * @param tenantId 
     * @param body 
     */
    public agentCreateAgent(tenantId: string, body: AgentCreateAgentRequest, _options?: Configuration): Promise<AgentAgentEntity> {
        const result = this.api.agentCreateAgent(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * @param tenantId 
     * @param id 
     */
    public agentGetAgentWithHttpInfo(tenantId: string, id: string, _options?: Configuration): Promise<HttpInfo<AgentAgentEntity>> {
        const result = this.api.agentGetAgentWithHttpInfo(tenantId, id, _options);
        return result.toPromise();
    }

    /**
     * @param tenantId 
     * @param id 
     */
    public agentGetAgent(tenantId: string, id: string, _options?: Configuration): Promise<AgentAgentEntity> {
        const result = this.api.agentGetAgent(tenantId, id, _options);
        return result.toPromise();
    }

    /**
     * @param tenantId 
     * @param pageSize 
     * @param body 
     */
    public agentListAgentsWithHttpInfo(tenantId: string, pageSize: number, body: AgentListAgentsRequest, _options?: Configuration): Promise<HttpInfo<AgentListResponse>> {
        const result = this.api.agentListAgentsWithHttpInfo(tenantId, pageSize, body, _options);
        return result.toPromise();
    }

    /**
     * @param tenantId 
     * @param pageSize 
     * @param body 
     */
    public agentListAgents(tenantId: string, pageSize: number, body: AgentListAgentsRequest, _options?: Configuration): Promise<AgentListResponse> {
        const result = this.api.agentListAgents(tenantId, pageSize, body, _options);
        return result.toPromise();
    }

    /**
     * @param tenantId 
     * @param id 
     * @param body 
     */
    public agentUpdateAgentWithHttpInfo(tenantId: string, id: string, body: AgentUpdateAgentRequest, _options?: Configuration): Promise<HttpInfo<AgentAgentEntity>> {
        const result = this.api.agentUpdateAgentWithHttpInfo(tenantId, id, body, _options);
        return result.toPromise();
    }

    /**
     * @param tenantId 
     * @param id 
     * @param body 
     */
    public agentUpdateAgent(tenantId: string, id: string, body: AgentUpdateAgentRequest, _options?: Configuration): Promise<AgentAgentEntity> {
        const result = this.api.agentUpdateAgent(tenantId, id, body, _options);
        return result.toPromise();
    }


}



