import { TendermintAbciTypes } from '@injectivelabs/core-proto-ts';
/**
 * @hidden
 */
export default class BaseGrpcWebConsumer extends TendermintAbciTypes.GrpcWebImpl {
    protected module: string;
    constructor(endpoint: string);
}
export declare const getGrpcWebImpl: (endpoint: string) => BaseGrpcWebConsumer;
//# sourceMappingURL=BaseGrpcWebConsumer.d.ts.map