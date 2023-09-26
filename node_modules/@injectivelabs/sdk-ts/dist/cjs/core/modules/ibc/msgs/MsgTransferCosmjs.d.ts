import { MsgTransferEncodeObject } from '@cosmjs/stargate';
import { MsgTransfer as BaseMsgTransferCosmjs } from 'cosmjs-types/ibc/applications/transfer/v1/tx';
export declare namespace MsgTransferCosmjs {
    interface Params {
        amount: {
            denom: string;
            amount: string;
        };
        sender: string;
        port: string;
        receiver: string;
        channelId: string;
        timeout?: number;
        height?: {
            revisionHeight: number;
            revisionNumber: number;
        };
    }
    type Proto = BaseMsgTransferCosmjs;
}
/**
 * @category Messages
 */
export default class MsgTransferCosmjs {
    params: MsgTransferCosmjs.Params;
    constructor(params: MsgTransferCosmjs.Params);
    static fromJSON(params: MsgTransferCosmjs.Params): MsgTransferCosmjs;
    toProto(): void;
    toData(): void;
    toAmino(): MsgTransferEncodeObject;
    toWeb3(): void;
    toDirectSign(): void;
}
//# sourceMappingURL=MsgTransferCosmjs.d.ts.map