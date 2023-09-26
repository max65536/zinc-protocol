import { InjectiveAccountRpc } from '@injectivelabs/indexer-proto-ts';
/**
 * @hidden
 */
export default class BaseIndexerGrpcWebConsumer extends InjectiveAccountRpc.GrpcWebImpl {
    protected module: string;
    constructor(endpoint: string);
}
export declare const getGrpcIndexerWebImpl: (endpoint: string) => BaseIndexerGrpcWebConsumer;
//# sourceMappingURL=BaseIndexerGrpcWebConsumer.d.ts.map