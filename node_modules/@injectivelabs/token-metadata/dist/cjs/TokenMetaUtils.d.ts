import { TokenMeta } from './types';
export declare class TokenMetaUtils {
    protected tokens: Record<string, TokenMeta>;
    protected tokensByErc20Address: Record<string, TokenMeta>;
    protected tokensByCw20Address: Record<string, TokenMeta>;
    protected tokensByHash: Record<string, TokenMeta>;
    protected tokensByName: Record<string, TokenMeta>;
    constructor(tokens: Record<string, TokenMeta>);
    /**
     * Symbol can be:
     * - Main symbol of the token meta,
     * - BaseDenom based on the ibc hash
     * - Variation of a symbol for multiple versions of the same token (ex: USDC, USDCet, USDCso)
     */
    getMetaBySymbol(symbol: string): TokenMeta | undefined;
    getMetaByAddress(address: string): TokenMeta | undefined;
    getMetaByCw20Address(address: string): TokenMeta | undefined;
    getMetaByErc20Address(address: string): TokenMeta | undefined;
    getMetaByHash(hash: string): TokenMeta | undefined;
    getMetaByName(name: string): TokenMeta | undefined;
    getCoinGeckoIdFromSymbol(symbol: string): string;
}
//# sourceMappingURL=TokenMetaUtils.d.ts.map