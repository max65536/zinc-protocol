import { IbcToken, Token } from '../types';
export declare const isIbcTokenCanonical: (token: IbcToken) => boolean;
export declare const getChannelIdFromPath: (path: string) => string;
export declare const canonicalChannelsToChainListFromInjective: {
    channelId: string;
    chainA: string;
    chainB: string;
}[];
export declare const getIbcDestinationChain: ({ channelPaths, channel, index, token, }: {
    channelPaths: string[];
    channel: string;
    index: number;
    token: Token;
}) => string;
export declare const formatNonCanonicalIbcTokenName: (token: IbcToken) => string;
//# sourceMappingURL=utils.d.ts.map