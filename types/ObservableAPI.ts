import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AgentApiRequestFactory, AgentApiResponseProcessor} from "../apis/AgentApi";
export class ObservableAgentApi {
    private requestFactory: AgentApiRequestFactory;
    private responseProcessor: AgentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentApiRequestFactory,
        responseProcessor?: AgentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AgentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AgentApiResponseProcessor();
    }

    /**
     * @param tenantId 
     * @param body 
     */
    public agentCreateAgentWithHttpInfo(tenantId: string, body: AgentCreateAgentRequest, _options?: Configuration): Observable<HttpInfo<AgentAgentEntity>> {
        const requestContextPromise = this.requestFactory.agentCreateAgent(tenantId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.agentCreateAgentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param tenantId 
     * @param body 
     */
    public agentCreateAgent(tenantId: string, body: AgentCreateAgentRequest, _options?: Configuration): Observable<AgentAgentEntity> {
        return this.agentCreateAgentWithHttpInfo(tenantId, body, _options).pipe(map((apiResponse: HttpInfo<AgentAgentEntity>) => apiResponse.data));
    }

    /**
     * @param tenantId 
     * @param id 
     */
    public agentGetAgentWithHttpInfo(tenantId: string, id: string, _options?: Configuration): Observable<HttpInfo<AgentAgentEntity>> {
        const requestContextPromise = this.requestFactory.agentGetAgent(tenantId, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.agentGetAgentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param tenantId 
     * @param id 
     */
    public agentGetAgent(tenantId: string, id: string, _options?: Configuration): Observable<AgentAgentEntity> {
        return this.agentGetAgentWithHttpInfo(tenantId, id, _options).pipe(map((apiResponse: HttpInfo<AgentAgentEntity>) => apiResponse.data));
    }

    /**
     * @param tenantId 
     * @param pageSize 
     * @param body 
     */
    public agentListAgentsWithHttpInfo(tenantId: string, pageSize: number, body: AgentListAgentsRequest, _options?: Configuration): Observable<HttpInfo<AgentListResponse>> {
        const requestContextPromise = this.requestFactory.agentListAgents(tenantId, pageSize, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.agentListAgentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param tenantId 
     * @param pageSize 
     * @param body 
     */
    public agentListAgents(tenantId: string, pageSize: number, body: AgentListAgentsRequest, _options?: Configuration): Observable<AgentListResponse> {
        return this.agentListAgentsWithHttpInfo(tenantId, pageSize, body, _options).pipe(map((apiResponse: HttpInfo<AgentListResponse>) => apiResponse.data));
    }

    /**
     * @param tenantId 
     * @param id 
     * @param body 
     */
    public agentUpdateAgentWithHttpInfo(tenantId: string, id: string, body: AgentUpdateAgentRequest, _options?: Configuration): Observable<HttpInfo<AgentAgentEntity>> {
        const requestContextPromise = this.requestFactory.agentUpdateAgent(tenantId, id, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.agentUpdateAgentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param tenantId 
     * @param id 
     * @param body 
     */
    public agentUpdateAgent(tenantId: string, id: string, body: AgentUpdateAgentRequest, _options?: Configuration): Observable<AgentAgentEntity> {
        return this.agentUpdateAgentWithHttpInfo(tenantId, id, body, _options).pipe(map((apiResponse: HttpInfo<AgentAgentEntity>) => apiResponse.data));
    }

}
