import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { InterchainAccountPacketData } from "../../v1/packet";
/** MsgRegisterInterchainAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccount {
    owner: string;
    connectionId: string;
    version: string;
}
/** MsgRegisterInterchainAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccountResponse {
    channelId: string;
    portId: string;
}
/** MsgSendTx defines the payload for Msg/SendTx */
export interface MsgSendTx {
    owner: string;
    connectionId: string;
    packetData: InterchainAccountPacketData | undefined;
    /**
     * Relative timeout timestamp provided will be added to the current block time during transaction execution.
     * The timeout timestamp must be non-zero.
     */
    relativeTimeout: string;
}
/** MsgSendTxResponse defines the response for MsgSendTx */
export interface MsgSendTxResponse {
    sequence: string;
}
export declare const MsgRegisterInterchainAccount: {
    encode(message: MsgRegisterInterchainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterInterchainAccount;
    fromJSON(object: any): MsgRegisterInterchainAccount;
    toJSON(message: MsgRegisterInterchainAccount): unknown;
    create(base?: DeepPartial<MsgRegisterInterchainAccount>): MsgRegisterInterchainAccount;
    fromPartial(object: DeepPartial<MsgRegisterInterchainAccount>): MsgRegisterInterchainAccount;
};
export declare const MsgRegisterInterchainAccountResponse: {
    encode(message: MsgRegisterInterchainAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterInterchainAccountResponse;
    fromJSON(object: any): MsgRegisterInterchainAccountResponse;
    toJSON(message: MsgRegisterInterchainAccountResponse): unknown;
    create(base?: DeepPartial<MsgRegisterInterchainAccountResponse>): MsgRegisterInterchainAccountResponse;
    fromPartial(object: DeepPartial<MsgRegisterInterchainAccountResponse>): MsgRegisterInterchainAccountResponse;
};
export declare const MsgSendTx: {
    encode(message: MsgSendTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendTx;
    fromJSON(object: any): MsgSendTx;
    toJSON(message: MsgSendTx): unknown;
    create(base?: DeepPartial<MsgSendTx>): MsgSendTx;
    fromPartial(object: DeepPartial<MsgSendTx>): MsgSendTx;
};
export declare const MsgSendTxResponse: {
    encode(message: MsgSendTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendTxResponse;
    fromJSON(object: any): MsgSendTxResponse;
    toJSON(message: MsgSendTxResponse): unknown;
    create(base?: DeepPartial<MsgSendTxResponse>): MsgSendTxResponse;
    fromPartial(object: DeepPartial<MsgSendTxResponse>): MsgSendTxResponse;
};
/** Msg defines the 27-interchain-accounts/controller Msg service. */
export interface Msg {
    /** RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount. */
    RegisterInterchainAccount(request: DeepPartial<MsgRegisterInterchainAccount>, metadata?: grpc.Metadata): Promise<MsgRegisterInterchainAccountResponse>;
    /** SendTx defines a rpc handler for MsgSendTx. */
    SendTx(request: DeepPartial<MsgSendTx>, metadata?: grpc.Metadata): Promise<MsgSendTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterInterchainAccount(request: DeepPartial<MsgRegisterInterchainAccount>, metadata?: grpc.Metadata): Promise<MsgRegisterInterchainAccountResponse>;
    SendTx(request: DeepPartial<MsgSendTx>, metadata?: grpc.Metadata): Promise<MsgSendTxResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgRegisterInterchainAccountDesc: UnaryMethodDefinitionish;
export declare const MsgSendTxDesc: UnaryMethodDefinitionish;
interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
    requestStream: any;
    responseStream: any;
}
type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;
interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export declare class GrpcWebImpl {
    private host;
    private options;
    constructor(host: string, options: {
        transport?: grpc.TransportFactory;
        debug?: boolean;
        metadata?: grpc.Metadata;
        upStreamRetryCodes?: number[];
    });
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
declare var tsProtoGlobalThis: any;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export declare class GrpcWebError extends tsProtoGlobalThis.Error {
    code: grpc.Code;
    metadata: grpc.Metadata;
    constructor(message: string, code: grpc.Code, metadata: grpc.Metadata);
}
export {};
