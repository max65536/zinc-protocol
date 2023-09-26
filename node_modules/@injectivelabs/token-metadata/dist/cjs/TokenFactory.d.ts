import { Network } from '@injectivelabs/networks';
import { TokenInfo } from './TokenInfo';
import { TokenMetaUtils } from './TokenMetaUtils';
import { Token, TokenMeta } from './types';
export declare class TokenFactory {
    tokenMetaUtils: TokenMetaUtils;
    constructor(tokenMetaUtils: TokenMetaUtils);
    static make(network?: Network): TokenFactory;
    toToken(denom: string): Token | undefined;
    toTokenInfo(denom: string): TokenInfo | undefined;
    getPeggyDenomTokenMeta(denom: string): TokenMeta | undefined;
    getCw20DenomTokenMeta(address: string): TokenMeta | undefined;
    getIbcDenomTokenMeta(hash: string): TokenMeta | undefined;
    getFactoryDenomTokenMeta(denom: string): TokenMeta | undefined;
}
//# sourceMappingURL=TokenFactory.d.ts.map