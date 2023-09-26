import { Token, TokenMeta, TokenType, IbcTokenMeta, Cw20TokenSingle, Cw20TokenSource } from './types';
export declare const getIbcTokenMetaFromDenomTrace: ({ hash, path, decimals, baseDenom, }: {
    decimals: number;
    hash: string;
    path: string;
    baseDenom: string;
}) => IbcTokenMeta;
export declare const getTokenTypeFromDenom: (denom: string) => TokenType.Ibc | TokenType.Cw20 | TokenType.Erc20 | TokenType.Native | TokenType.TokenFactory | TokenType.InsuranceFund;
export declare const getTokenSymbol: (token: Token) => string;
export declare const getTokenDecimals: (token: Token) => number;
export declare const getTokenAddress: (token: Token) => string | undefined;
/**
 * This function can be used to get a token with
 * cw20 information when we have multiple
 * cw20 variations of the same token based on the address/denom
 */
export declare const getCw20TokenSingle: (token: Token | TokenMeta, source?: Cw20TokenSource) => Cw20TokenSingle | undefined;
export declare const getTokenFromMeta: (meta: TokenMeta, denom?: string) => Token;
export declare const getUnknownToken: (denom: string) => Token;
export declare const getUnknownTokenWithSymbol: (denom: string) => Token;
export declare const isCw20ContractAddress: (address: string) => boolean;
//# sourceMappingURL=utils.d.ts.map