export declare enum CanonicalChannelToDestinationChannel {
    CosmosHub = "channel-1",
    Evmos = "channel-83",
    Osmosis = "channel-8",
    Terra = "channel-4",
    Axelar = "channel-84",
    Persistence = "channel-82",
    Chihuahua = "channel-76",
    SecretNetwork = "channel-88",
    Juno = "channel-78",
    Stride = "channel-89",
    Crescent = "channel-90",
    Sommelier = "channel-93",
    Migaloo = "channel-102",
    Kava = "channel-143",
    Oraichain = "channel-147"
}
/**
 * We can't use this approach because the channels can overlap between chains
 * For example for Secret -> Injective we have channel-23 and we have the same
 * for Crescent -> Injective.
 * @deprecated - use  canonicalChannelsToChainMapFromInjective or canonicalChannelsToChainMapToInjective
 * */
declare const legacyCanonicalChannels: {
    'channel-1': {
        chainA: string;
        chainB: string;
    };
    'channel-83': {
        chainA: string;
        chainB: string;
    };
    'channel-8': {
        chainA: string;
        chainB: string;
    };
    'channel-4': {
        chainA: string;
        chainB: string;
    };
    'channel-84': {
        chainA: string;
        chainB: string;
    };
    'channel-82': {
        chainA: string;
        chainB: string;
    };
    'channel-76': {
        chainA: string;
        chainB: string;
    };
    'channel-88': {
        chainA: string;
        chainB: string;
    };
    'channel-78': {
        chainA: string;
        chainB: string;
    };
    'channel-89': {
        chainA: string;
        chainB: string;
    };
    'channel-220': {
        chainA: string;
        chainB: string;
    };
    'channel-122': {
        chainA: string;
        chainB: string;
    };
    'channel-17': {
        chainA: string;
        chainB: string;
    };
    'channel-41': {
        chainA: string;
        chainB: string;
    };
    'channel-12': {
        chainA: string;
        chainB: string;
    };
    'channel-23': {
        chainA: string;
        chainB: string;
    };
    'channel-59': {
        chainA: string;
        chainB: string;
    };
    'channel-6': {
        chainA: string;
        chainB: string;
    };
};
/**
 * @deprecated - use  canonicalChannelsToChainList
 **/
export declare const canonicalChannelsToChainMapFromInjective: {
    'channel-1': {
        chainA: string;
        chainB: string;
    };
    'channel-83': {
        chainA: string;
        chainB: string;
    };
    'channel-8': {
        chainA: string;
        chainB: string;
    };
    'channel-4': {
        chainA: string;
        chainB: string;
    };
    'channel-84': {
        chainA: string;
        chainB: string;
    };
    'channel-82': {
        chainA: string;
        chainB: string;
    };
    'channel-76': {
        chainA: string;
        chainB: string;
    };
    'channel-88': {
        chainA: string;
        chainB: string;
    };
    'channel-78': {
        chainA: string;
        chainB: string;
    };
    'channel-89': {
        chainA: string;
        chainB: string;
    };
    'channel-23': {
        chainA: string;
        chainB: string;
    };
    'channel-13': {
        chainA: string;
        chainB: string;
    };
    'channel-93': {
        chainA: string;
        chainB: string;
    };
    'channel-99': {
        chainA: string;
        chainB: string;
    };
    'channel-102': {
        chainA: string;
        chainB: string;
    };
    'channel-104': {
        chainA: string;
        chainB: string;
    };
    'channel-105': {
        chainA: string;
        chainB: string;
    };
    'channel-143': {
        chainA: string;
        chainB: string;
    };
};
export declare const canonicalChannelsToChainList: {
    channelId: string;
    chainA: string;
    chainB: string;
}[];
export default legacyCanonicalChannels;
export declare const canonicalChannelIds: string[];
export declare const channelIbcDenomToBaseDenomMap: {
    "channel-8": {
        inj: string;
    };
    "channel-90": {
        inj: string;
    };
    "channel-82": {
        inj: string;
    };
    "channel-89": {
        inj: string;
    };
    "channel-102": {
        inj: string;
    };
};
//# sourceMappingURL=channels.d.ts.map