import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { Height } from "../../client/v1/client";
import { Channel, Packet } from "./channel";
/** ResponseResultType defines the possible outcomes of the execution of a message */
export declare enum ResponseResultType {
    /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
    RESPONSE_RESULT_TYPE_UNSPECIFIED = 0,
    /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
    RESPONSE_RESULT_TYPE_NOOP = 1,
    /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
    RESPONSE_RESULT_TYPE_SUCCESS = 2,
    UNRECOGNIZED = -1
}
export declare function responseResultTypeFromJSON(object: any): ResponseResultType;
export declare function responseResultTypeToJSON(object: ResponseResultType): string;
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
    portId: string;
    channel: Channel | undefined;
    signer: string;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {
    channelId: string;
    version: string;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 */
export interface MsgChannelOpenTry {
    portId: string;
    /**
     * Deprecated: this field is unused. Crossing hello's are no longer supported in core IBC.
     *
     * @deprecated
     */
    previousChannelId: string;
    /** NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC. */
    channel: Channel | undefined;
    counterpartyVersion: string;
    proofInit: Uint8Array;
    proofHeight: Height | undefined;
    signer: string;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {
    version: string;
    channelId: string;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAck {
    portId: string;
    channelId: string;
    counterpartyChannelId: string;
    counterpartyVersion: string;
    proofTry: Uint8Array;
    proofHeight: Height | undefined;
    signer: string;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
    portId: string;
    channelId: string;
    proofAck: Uint8Array;
    proofHeight: Height | undefined;
    signer: string;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
    portId: string;
    channelId: string;
    signer: string;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
    portId: string;
    channelId: string;
    proofInit: Uint8Array;
    proofHeight: Height | undefined;
    signer: string;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
    packet: Packet | undefined;
    proofCommitment: Uint8Array;
    proofHeight: Height | undefined;
    signer: string;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
    result: ResponseResultType;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
    packet: Packet | undefined;
    proofUnreceived: Uint8Array;
    proofHeight: Height | undefined;
    nextSequenceRecv: string;
    signer: string;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {
    result: ResponseResultType;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
    packet: Packet | undefined;
    proofUnreceived: Uint8Array;
    proofClose: Uint8Array;
    proofHeight: Height | undefined;
    nextSequenceRecv: string;
    signer: string;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {
    result: ResponseResultType;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
    packet: Packet | undefined;
    acknowledgement: Uint8Array;
    proofAcked: Uint8Array;
    proofHeight: Height | undefined;
    signer: string;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
    result: ResponseResultType;
}
export declare const MsgChannelOpenInit: {
    encode(message: MsgChannelOpenInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInit;
    fromJSON(object: any): MsgChannelOpenInit;
    toJSON(message: MsgChannelOpenInit): unknown;
    create(base?: DeepPartial<MsgChannelOpenInit>): MsgChannelOpenInit;
    fromPartial(object: DeepPartial<MsgChannelOpenInit>): MsgChannelOpenInit;
};
export declare const MsgChannelOpenInitResponse: {
    encode(message: MsgChannelOpenInitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInitResponse;
    fromJSON(object: any): MsgChannelOpenInitResponse;
    toJSON(message: MsgChannelOpenInitResponse): unknown;
    create(base?: DeepPartial<MsgChannelOpenInitResponse>): MsgChannelOpenInitResponse;
    fromPartial(object: DeepPartial<MsgChannelOpenInitResponse>): MsgChannelOpenInitResponse;
};
export declare const MsgChannelOpenTry: {
    encode(message: MsgChannelOpenTry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTry;
    fromJSON(object: any): MsgChannelOpenTry;
    toJSON(message: MsgChannelOpenTry): unknown;
    create(base?: DeepPartial<MsgChannelOpenTry>): MsgChannelOpenTry;
    fromPartial(object: DeepPartial<MsgChannelOpenTry>): MsgChannelOpenTry;
};
export declare const MsgChannelOpenTryResponse: {
    encode(message: MsgChannelOpenTryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTryResponse;
    fromJSON(object: any): MsgChannelOpenTryResponse;
    toJSON(message: MsgChannelOpenTryResponse): unknown;
    create(base?: DeepPartial<MsgChannelOpenTryResponse>): MsgChannelOpenTryResponse;
    fromPartial(object: DeepPartial<MsgChannelOpenTryResponse>): MsgChannelOpenTryResponse;
};
export declare const MsgChannelOpenAck: {
    encode(message: MsgChannelOpenAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAck;
    fromJSON(object: any): MsgChannelOpenAck;
    toJSON(message: MsgChannelOpenAck): unknown;
    create(base?: DeepPartial<MsgChannelOpenAck>): MsgChannelOpenAck;
    fromPartial(object: DeepPartial<MsgChannelOpenAck>): MsgChannelOpenAck;
};
export declare const MsgChannelOpenAckResponse: {
    encode(_: MsgChannelOpenAckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAckResponse;
    fromJSON(_: any): MsgChannelOpenAckResponse;
    toJSON(_: MsgChannelOpenAckResponse): unknown;
    create(base?: DeepPartial<MsgChannelOpenAckResponse>): MsgChannelOpenAckResponse;
    fromPartial(_: DeepPartial<MsgChannelOpenAckResponse>): MsgChannelOpenAckResponse;
};
export declare const MsgChannelOpenConfirm: {
    encode(message: MsgChannelOpenConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirm;
    fromJSON(object: any): MsgChannelOpenConfirm;
    toJSON(message: MsgChannelOpenConfirm): unknown;
    create(base?: DeepPartial<MsgChannelOpenConfirm>): MsgChannelOpenConfirm;
    fromPartial(object: DeepPartial<MsgChannelOpenConfirm>): MsgChannelOpenConfirm;
};
export declare const MsgChannelOpenConfirmResponse: {
    encode(_: MsgChannelOpenConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirmResponse;
    fromJSON(_: any): MsgChannelOpenConfirmResponse;
    toJSON(_: MsgChannelOpenConfirmResponse): unknown;
    create(base?: DeepPartial<MsgChannelOpenConfirmResponse>): MsgChannelOpenConfirmResponse;
    fromPartial(_: DeepPartial<MsgChannelOpenConfirmResponse>): MsgChannelOpenConfirmResponse;
};
export declare const MsgChannelCloseInit: {
    encode(message: MsgChannelCloseInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInit;
    fromJSON(object: any): MsgChannelCloseInit;
    toJSON(message: MsgChannelCloseInit): unknown;
    create(base?: DeepPartial<MsgChannelCloseInit>): MsgChannelCloseInit;
    fromPartial(object: DeepPartial<MsgChannelCloseInit>): MsgChannelCloseInit;
};
export declare const MsgChannelCloseInitResponse: {
    encode(_: MsgChannelCloseInitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInitResponse;
    fromJSON(_: any): MsgChannelCloseInitResponse;
    toJSON(_: MsgChannelCloseInitResponse): unknown;
    create(base?: DeepPartial<MsgChannelCloseInitResponse>): MsgChannelCloseInitResponse;
    fromPartial(_: DeepPartial<MsgChannelCloseInitResponse>): MsgChannelCloseInitResponse;
};
export declare const MsgChannelCloseConfirm: {
    encode(message: MsgChannelCloseConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirm;
    fromJSON(object: any): MsgChannelCloseConfirm;
    toJSON(message: MsgChannelCloseConfirm): unknown;
    create(base?: DeepPartial<MsgChannelCloseConfirm>): MsgChannelCloseConfirm;
    fromPartial(object: DeepPartial<MsgChannelCloseConfirm>): MsgChannelCloseConfirm;
};
export declare const MsgChannelCloseConfirmResponse: {
    encode(_: MsgChannelCloseConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirmResponse;
    fromJSON(_: any): MsgChannelCloseConfirmResponse;
    toJSON(_: MsgChannelCloseConfirmResponse): unknown;
    create(base?: DeepPartial<MsgChannelCloseConfirmResponse>): MsgChannelCloseConfirmResponse;
    fromPartial(_: DeepPartial<MsgChannelCloseConfirmResponse>): MsgChannelCloseConfirmResponse;
};
export declare const MsgRecvPacket: {
    encode(message: MsgRecvPacket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacket;
    fromJSON(object: any): MsgRecvPacket;
    toJSON(message: MsgRecvPacket): unknown;
    create(base?: DeepPartial<MsgRecvPacket>): MsgRecvPacket;
    fromPartial(object: DeepPartial<MsgRecvPacket>): MsgRecvPacket;
};
export declare const MsgRecvPacketResponse: {
    encode(message: MsgRecvPacketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacketResponse;
    fromJSON(object: any): MsgRecvPacketResponse;
    toJSON(message: MsgRecvPacketResponse): unknown;
    create(base?: DeepPartial<MsgRecvPacketResponse>): MsgRecvPacketResponse;
    fromPartial(object: DeepPartial<MsgRecvPacketResponse>): MsgRecvPacketResponse;
};
export declare const MsgTimeout: {
    encode(message: MsgTimeout, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeout;
    fromJSON(object: any): MsgTimeout;
    toJSON(message: MsgTimeout): unknown;
    create(base?: DeepPartial<MsgTimeout>): MsgTimeout;
    fromPartial(object: DeepPartial<MsgTimeout>): MsgTimeout;
};
export declare const MsgTimeoutResponse: {
    encode(message: MsgTimeoutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutResponse;
    fromJSON(object: any): MsgTimeoutResponse;
    toJSON(message: MsgTimeoutResponse): unknown;
    create(base?: DeepPartial<MsgTimeoutResponse>): MsgTimeoutResponse;
    fromPartial(object: DeepPartial<MsgTimeoutResponse>): MsgTimeoutResponse;
};
export declare const MsgTimeoutOnClose: {
    encode(message: MsgTimeoutOnClose, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnClose;
    fromJSON(object: any): MsgTimeoutOnClose;
    toJSON(message: MsgTimeoutOnClose): unknown;
    create(base?: DeepPartial<MsgTimeoutOnClose>): MsgTimeoutOnClose;
    fromPartial(object: DeepPartial<MsgTimeoutOnClose>): MsgTimeoutOnClose;
};
export declare const MsgTimeoutOnCloseResponse: {
    encode(message: MsgTimeoutOnCloseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnCloseResponse;
    fromJSON(object: any): MsgTimeoutOnCloseResponse;
    toJSON(message: MsgTimeoutOnCloseResponse): unknown;
    create(base?: DeepPartial<MsgTimeoutOnCloseResponse>): MsgTimeoutOnCloseResponse;
    fromPartial(object: DeepPartial<MsgTimeoutOnCloseResponse>): MsgTimeoutOnCloseResponse;
};
export declare const MsgAcknowledgement: {
    encode(message: MsgAcknowledgement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgement;
    fromJSON(object: any): MsgAcknowledgement;
    toJSON(message: MsgAcknowledgement): unknown;
    create(base?: DeepPartial<MsgAcknowledgement>): MsgAcknowledgement;
    fromPartial(object: DeepPartial<MsgAcknowledgement>): MsgAcknowledgement;
};
export declare const MsgAcknowledgementResponse: {
    encode(message: MsgAcknowledgementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgementResponse;
    fromJSON(object: any): MsgAcknowledgementResponse;
    toJSON(message: MsgAcknowledgementResponse): unknown;
    create(base?: DeepPartial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse;
    fromPartial(object: DeepPartial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse;
};
/** Msg defines the ibc/channel Msg service. */
export interface Msg {
    /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
    ChannelOpenInit(request: DeepPartial<MsgChannelOpenInit>, metadata?: grpc.Metadata): Promise<MsgChannelOpenInitResponse>;
    /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
    ChannelOpenTry(request: DeepPartial<MsgChannelOpenTry>, metadata?: grpc.Metadata): Promise<MsgChannelOpenTryResponse>;
    /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
    ChannelOpenAck(request: DeepPartial<MsgChannelOpenAck>, metadata?: grpc.Metadata): Promise<MsgChannelOpenAckResponse>;
    /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
    ChannelOpenConfirm(request: DeepPartial<MsgChannelOpenConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelOpenConfirmResponse>;
    /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
    ChannelCloseInit(request: DeepPartial<MsgChannelCloseInit>, metadata?: grpc.Metadata): Promise<MsgChannelCloseInitResponse>;
    /**
     * ChannelCloseConfirm defines a rpc handler method for
     * MsgChannelCloseConfirm.
     */
    ChannelCloseConfirm(request: DeepPartial<MsgChannelCloseConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelCloseConfirmResponse>;
    /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
    RecvPacket(request: DeepPartial<MsgRecvPacket>, metadata?: grpc.Metadata): Promise<MsgRecvPacketResponse>;
    /** Timeout defines a rpc handler method for MsgTimeout. */
    Timeout(request: DeepPartial<MsgTimeout>, metadata?: grpc.Metadata): Promise<MsgTimeoutResponse>;
    /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
    TimeoutOnClose(request: DeepPartial<MsgTimeoutOnClose>, metadata?: grpc.Metadata): Promise<MsgTimeoutOnCloseResponse>;
    /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
    Acknowledgement(request: DeepPartial<MsgAcknowledgement>, metadata?: grpc.Metadata): Promise<MsgAcknowledgementResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ChannelOpenInit(request: DeepPartial<MsgChannelOpenInit>, metadata?: grpc.Metadata): Promise<MsgChannelOpenInitResponse>;
    ChannelOpenTry(request: DeepPartial<MsgChannelOpenTry>, metadata?: grpc.Metadata): Promise<MsgChannelOpenTryResponse>;
    ChannelOpenAck(request: DeepPartial<MsgChannelOpenAck>, metadata?: grpc.Metadata): Promise<MsgChannelOpenAckResponse>;
    ChannelOpenConfirm(request: DeepPartial<MsgChannelOpenConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelOpenConfirmResponse>;
    ChannelCloseInit(request: DeepPartial<MsgChannelCloseInit>, metadata?: grpc.Metadata): Promise<MsgChannelCloseInitResponse>;
    ChannelCloseConfirm(request: DeepPartial<MsgChannelCloseConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelCloseConfirmResponse>;
    RecvPacket(request: DeepPartial<MsgRecvPacket>, metadata?: grpc.Metadata): Promise<MsgRecvPacketResponse>;
    Timeout(request: DeepPartial<MsgTimeout>, metadata?: grpc.Metadata): Promise<MsgTimeoutResponse>;
    TimeoutOnClose(request: DeepPartial<MsgTimeoutOnClose>, metadata?: grpc.Metadata): Promise<MsgTimeoutOnCloseResponse>;
    Acknowledgement(request: DeepPartial<MsgAcknowledgement>, metadata?: grpc.Metadata): Promise<MsgAcknowledgementResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgChannelOpenInitDesc: UnaryMethodDefinitionish;
export declare const MsgChannelOpenTryDesc: UnaryMethodDefinitionish;
export declare const MsgChannelOpenAckDesc: UnaryMethodDefinitionish;
export declare const MsgChannelOpenConfirmDesc: UnaryMethodDefinitionish;
export declare const MsgChannelCloseInitDesc: UnaryMethodDefinitionish;
export declare const MsgChannelCloseConfirmDesc: UnaryMethodDefinitionish;
export declare const MsgRecvPacketDesc: UnaryMethodDefinitionish;
export declare const MsgTimeoutDesc: UnaryMethodDefinitionish;
export declare const MsgTimeoutOnCloseDesc: UnaryMethodDefinitionish;
export declare const MsgAcknowledgementDesc: UnaryMethodDefinitionish;
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
