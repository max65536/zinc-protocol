import { Token, TokenMeta, TokenType } from './types';
/**
 * Token info is a helper class which abstracts
 * away handling different versions of a Token
 * represented on Injective.
 *
 * Ex: USDC token
 * - For a peggy denom -> decimals 6, address: ERC20 contract address, symbol: USDC
 * - For a factory/cw20Denom: (both 6 decimals)
 *  -> if coming from Ethereum through Wormhole take USDCet as the cw20 addresses will match,
 *  -> if coming from Solana through Wormhole take USDCso as the cw20 addresses will match,
 *
 * Ex: SOL token
 * - For the native token on Solana -> decimals 9
 * - For the cw20 version of the native SOL token on Injective through wormhole -> decimals 8
 *
 * Ex: CHZ token
 * - For the peggy denom -> decimals 18
 * - For a factory/cw20Denom:
 *  -> For CHZ coming through Wormhole from Ethereum -> decimals 8
 */
export declare class TokenInfo {
    denom: string;
    meta: TokenMeta;
    private constructor();
    static fromMeta(meta: TokenMeta & {
        denom?: string;
    }, denom?: string): TokenInfo;
    static fromToken(token: Token): TokenInfo;
    toToken(): Token;
    /**
     * When we have multiple cw20 entries (versions) of a token
     * on Injective we need to match the denom's address with a
     * cw20 entry and get the symbol for that version
     *
     * ex: (Main) USDC, USDCet, USDCso
     */
    get symbol(): any;
    get logo(): string;
    get coinGeckoId(): string;
    get name(): string;
    get splDecimals(): number;
    /**
     * When we have multiple cw20 entries (versions) of a token
     * on Injective we need to match the denom's address with a
     * cw20 entry and get the decimals for that version
     */
    get cw20Decimals(): any;
    get erc20Decimals(): number;
    /**
     * Decimals can vary between different versions of a token
     * so we need to get the decimal places of the token based on the
     * denom (from which we can derive the source of the token)
     */
    get decimals(): any;
    get address(): string;
    get tokenType(): TokenType;
    get isCanonical(): boolean;
}
//# sourceMappingURL=TokenInfo.d.ts.map