import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { CommunityPoolSpendProposal } from "../../../cosmos/distribution/v1beta1/distribution";
import { OracleType } from "../../oracle/v1beta1/oracle";
import { CampaignRewardPool, DenomDecimals, DerivativeOrder, FeeDiscountSchedule, MarketFeeMultiplier, MarketStatus, Params, PositionDelta, SpotOrder, TradingRewardCampaignInfo } from "./exchange";
export declare enum ExchangeType {
    EXCHANGE_UNSPECIFIED = 0,
    SPOT = 1,
    DERIVATIVES = 2,
    UNRECOGNIZED = -1
}
export declare function exchangeTypeFromJSON(object: any): ExchangeType;
export declare function exchangeTypeToJSON(object: ExchangeType): string;
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the exchange parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params | undefined;
}
export interface MsgUpdateParamsResponse {
}
/**
 * MsgDeposit defines a SDK message for transferring coins from the sender's
 * bank balance into the subaccount's exchange deposits
 */
export interface MsgDeposit {
    sender: string;
    /**
     * (Optional) bytes32 subaccount ID to deposit funds into. If empty, the coin
     * will be deposited to the sender's default subaccount address.
     */
    subaccountId: string;
    amount: Coin | undefined;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
/**
 * MsgWithdraw defines a SDK message for withdrawing coins from a subaccount's
 * deposits to the user's bank balance
 */
export interface MsgWithdraw {
    sender: string;
    /** bytes32 subaccount ID to withdraw funds from */
    subaccountId: string;
    amount: Coin | undefined;
}
/** MsgWithdraw defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
}
/**
 * MsgCreateSpotLimitOrder defines a SDK message for creating a new spot limit
 * order.
 */
export interface MsgCreateSpotLimitOrder {
    sender: string;
    order: SpotOrder | undefined;
}
/**
 * MsgCreateSpotLimitOrderResponse defines the Msg/CreateSpotOrder response
 * type.
 */
export interface MsgCreateSpotLimitOrderResponse {
    orderHash: string;
}
/**
 * MsgBatchCreateSpotLimitOrders defines a SDK message for creating a new batch
 * of spot limit orders.
 */
export interface MsgBatchCreateSpotLimitOrders {
    sender: string;
    orders: SpotOrder[];
}
/**
 * MsgBatchCreateSpotLimitOrdersResponse defines the
 * Msg/BatchCreateSpotLimitOrders response type.
 */
export interface MsgBatchCreateSpotLimitOrdersResponse {
    orderHashes: string[];
}
/**
 * MsgInstantSpotMarketLaunch defines a SDK message for creating a new spot
 * market by paying listing fee without governance
 */
export interface MsgInstantSpotMarketLaunch {
    sender: string;
    /** Ticker for the spot market. */
    ticker: string;
    /** type of coin to use as the base currency */
    baseDenom: string;
    /** type of coin to use as the quote currency */
    quoteDenom: string;
    /** min_price_tick_size defines the minimum tick size of the order's price */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     */
    minQuantityTickSize: string;
}
/**
 * MsgInstantSpotMarketLaunchResponse defines the Msg/InstantSpotMarketLaunch
 * response type.
 */
export interface MsgInstantSpotMarketLaunchResponse {
}
/**
 * MsgInstantPerpetualMarketLaunch defines a SDK message for creating a new
 * perpetual futures market by paying listing fee without governance
 */
export interface MsgInstantPerpetualMarketLaunch {
    sender: string;
    /** Ticker for the derivative market. */
    ticker: string;
    /** type of coin to use as the base currency */
    quoteDenom: string;
    /** Oracle base currency */
    oracleBase: string;
    /** Oracle quote currency */
    oracleQuote: string;
    /** Scale factor for oracle prices. */
    oracleScaleFactor: number;
    /** Oracle type */
    oracleType: OracleType;
    /**
     * maker_fee_rate defines the trade fee rate for makers on the perpetual
     * market
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the trade fee rate for takers on the perpetual
     * market
     */
    takerFeeRate: string;
    /**
     * initial_margin_ratio defines the initial margin ratio for the perpetual
     * market
     */
    initialMarginRatio: string;
    /**
     * maintenance_margin_ratio defines the maintenance margin ratio for the
     * perpetual market
     */
    maintenanceMarginRatio: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price and
     * margin
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     */
    minQuantityTickSize: string;
}
/**
 * MsgInstantPerpetualMarketLaunchResponse defines the
 * Msg/InstantPerpetualMarketLaunchResponse response type.
 */
export interface MsgInstantPerpetualMarketLaunchResponse {
}
/**
 * MsgInstantBinaryOptionsMarketLaunch defines a SDK message for creating a new
 * perpetual futures market by paying listing fee without governance
 */
export interface MsgInstantBinaryOptionsMarketLaunch {
    sender: string;
    /** Ticker for the derivative contract. */
    ticker: string;
    /** Oracle symbol */
    oracleSymbol: string;
    /** Oracle Provider */
    oracleProvider: string;
    /** Oracle type */
    oracleType: OracleType;
    /** Scale factor for oracle prices. */
    oracleScaleFactor: number;
    /**
     * maker_fee_rate defines the trade fee rate for makers on the perpetual
     * market
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the trade fee rate for takers on the perpetual
     * market
     */
    takerFeeRate: string;
    /** expiration timestamp */
    expirationTimestamp: string;
    /** expiration timestamp */
    settlementTimestamp: string;
    /** admin of the market */
    admin: string;
    /** Address of the quote currency denomination for the binary options contract */
    quoteDenom: string;
    /**
     * min_price_tick_size defines the minimum tick size that the price and margin
     * required for orders in the market
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the quantity
     * required for orders in the market
     */
    minQuantityTickSize: string;
}
/**
 * MsgInstantBinaryOptionsMarketLaunchResponse defines the
 * Msg/InstantBinaryOptionsMarketLaunchResponse response type.
 */
export interface MsgInstantBinaryOptionsMarketLaunchResponse {
}
/**
 * MsgInstantExpiryFuturesMarketLaunch defines a SDK message for creating a new
 * expiry futures market by paying listing fee without governance
 */
export interface MsgInstantExpiryFuturesMarketLaunch {
    sender: string;
    /** Ticker for the derivative market. */
    ticker: string;
    /** type of coin to use as the quote currency */
    quoteDenom: string;
    /** Oracle base currency */
    oracleBase: string;
    /** Oracle quote currency */
    oracleQuote: string;
    /** Oracle type */
    oracleType: OracleType;
    /** Scale factor for oracle prices. */
    oracleScaleFactor: number;
    /** Expiration time of the market */
    expiry: string;
    /**
     * maker_fee_rate defines the trade fee rate for makers on the expiry futures
     * market
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the trade fee rate for takers on the expiry futures
     * market
     */
    takerFeeRate: string;
    /**
     * initial_margin_ratio defines the initial margin ratio for the derivative
     * market
     */
    initialMarginRatio: string;
    /**
     * maintenance_margin_ratio defines the maintenance margin ratio for the
     * derivative market
     */
    maintenanceMarginRatio: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price and
     * margin
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     */
    minQuantityTickSize: string;
}
/**
 * MsgInstantExpiryFuturesMarketLaunchResponse defines the
 * Msg/InstantExpiryFuturesMarketLaunch response type.
 */
export interface MsgInstantExpiryFuturesMarketLaunchResponse {
}
/**
 * MsgCreateSpotMarketOrder defines a SDK message for creating a new spot market
 * order.
 */
export interface MsgCreateSpotMarketOrder {
    sender: string;
    order: SpotOrder | undefined;
}
/**
 * MsgCreateSpotMarketOrderResponse defines the Msg/CreateSpotMarketLimitOrder
 * response type.
 */
export interface MsgCreateSpotMarketOrderResponse {
    orderHash: string;
    results: SpotMarketOrderResults | undefined;
}
export interface SpotMarketOrderResults {
    quantity: string;
    price: string;
    fee: string;
}
/** A Cosmos-SDK MsgCreateDerivativeLimitOrder */
export interface MsgCreateDerivativeLimitOrder {
    sender: string;
    order: DerivativeOrder | undefined;
}
/**
 * MsgCreateDerivativeLimitOrderResponse defines the
 * Msg/CreateDerivativeMarketOrder response type.
 */
export interface MsgCreateDerivativeLimitOrderResponse {
    orderHash: string;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsLimitOrder */
export interface MsgCreateBinaryOptionsLimitOrder {
    sender: string;
    order: DerivativeOrder | undefined;
}
/**
 * MsgCreateBinaryOptionsLimitOrderResponse defines the
 * Msg/CreateBinaryOptionsLimitOrder response type.
 */
export interface MsgCreateBinaryOptionsLimitOrderResponse {
    orderHash: string;
}
/** A Cosmos-SDK MsgBatchCreateDerivativeLimitOrders */
export interface MsgBatchCreateDerivativeLimitOrders {
    sender: string;
    orders: DerivativeOrder[];
}
/**
 * MsgBatchCreateDerivativeLimitOrdersResponse defines the
 * Msg/BatchCreateDerivativeLimitOrders response type.
 */
export interface MsgBatchCreateDerivativeLimitOrdersResponse {
    orderHashes: string[];
}
/** MsgCancelSpotOrder defines the Msg/CancelSpotOrder response type. */
export interface MsgCancelSpotOrder {
    sender: string;
    marketId: string;
    subaccountId: string;
    orderHash: string;
}
/** MsgCancelSpotOrderResponse defines the Msg/CancelSpotOrder response type. */
export interface MsgCancelSpotOrderResponse {
}
/** MsgBatchCancelSpotOrders defines the Msg/BatchCancelSpotOrders response type. */
export interface MsgBatchCancelSpotOrders {
    sender: string;
    data: OrderData[];
}
/**
 * MsgBatchCancelSpotOrdersResponse defines the Msg/BatchCancelSpotOrders
 * response type.
 */
export interface MsgBatchCancelSpotOrdersResponse {
    success: boolean[];
}
/**
 * MsgBatchCancelBinaryOptionsOrders defines the
 * Msg/BatchCancelBinaryOptionsOrders response type.
 */
export interface MsgBatchCancelBinaryOptionsOrders {
    sender: string;
    data: OrderData[];
}
/**
 * BatchCancelBinaryOptionsOrdersResponse defines the
 * Msg/BatchCancelBinaryOptionsOrders response type.
 */
export interface MsgBatchCancelBinaryOptionsOrdersResponse {
    success: boolean[];
}
/** MsgBatchUpdateOrders defines the Msg/BatchUpdateOrders response type. */
export interface MsgBatchUpdateOrders {
    sender: string;
    /**
     * subaccount_id only used for the spot_market_ids_to_cancel_all and
     * derivative_market_ids_to_cancel_all.
     */
    subaccountId: string;
    spotMarketIdsToCancelAll: string[];
    derivativeMarketIdsToCancelAll: string[];
    spotOrdersToCancel: OrderData[];
    derivativeOrdersToCancel: OrderData[];
    spotOrdersToCreate: SpotOrder[];
    derivativeOrdersToCreate: DerivativeOrder[];
    binaryOptionsOrdersToCancel: OrderData[];
    binaryOptionsMarketIdsToCancelAll: string[];
    binaryOptionsOrdersToCreate: DerivativeOrder[];
}
/** MsgBatchUpdateOrdersResponse defines the Msg/BatchUpdateOrders response type. */
export interface MsgBatchUpdateOrdersResponse {
    spotCancelSuccess: boolean[];
    derivativeCancelSuccess: boolean[];
    spotOrderHashes: string[];
    derivativeOrderHashes: string[];
    binaryOptionsCancelSuccess: boolean[];
    binaryOptionsOrderHashes: string[];
}
/** A Cosmos-SDK MsgCreateDerivativeMarketOrder */
export interface MsgCreateDerivativeMarketOrder {
    sender: string;
    order: DerivativeOrder | undefined;
}
/**
 * MsgCreateDerivativeMarketOrderResponse defines the
 * Msg/CreateDerivativeMarketOrder response type.
 */
export interface MsgCreateDerivativeMarketOrderResponse {
    orderHash: string;
    results: DerivativeMarketOrderResults | undefined;
}
export interface DerivativeMarketOrderResults {
    quantity: string;
    price: string;
    fee: string;
    positionDelta: PositionDelta | undefined;
    payout: string;
}
/** A Cosmos-SDK MsgCreateBinaryOptionsMarketOrder */
export interface MsgCreateBinaryOptionsMarketOrder {
    sender: string;
    order: DerivativeOrder | undefined;
}
/**
 * MsgCreateBinaryOptionsMarketOrderResponse defines the
 * Msg/CreateBinaryOptionsMarketOrder response type.
 */
export interface MsgCreateBinaryOptionsMarketOrderResponse {
    orderHash: string;
    results: DerivativeMarketOrderResults | undefined;
}
/** MsgCancelDerivativeOrder defines the Msg/CancelDerivativeOrder response type. */
export interface MsgCancelDerivativeOrder {
    sender: string;
    marketId: string;
    subaccountId: string;
    orderHash: string;
    /** bitwise combination of OrderMask enum values */
    orderMask: number;
}
/**
 * MsgCancelDerivativeOrderResponse defines the
 * Msg/CancelDerivativeOrderResponse response type.
 */
export interface MsgCancelDerivativeOrderResponse {
}
/**
 * MsgCancelBinaryOptionsOrder defines the Msg/CancelBinaryOptionsOrder response
 * type.
 */
export interface MsgCancelBinaryOptionsOrder {
    sender: string;
    marketId: string;
    subaccountId: string;
    orderHash: string;
    /** bitwise combination of OrderMask enum values */
    orderMask: number;
}
/**
 * MsgCancelBinaryOptionsOrderResponse defines the
 * Msg/CancelBinaryOptionsOrderResponse response type.
 */
export interface MsgCancelBinaryOptionsOrderResponse {
}
export interface OrderData {
    marketId: string;
    subaccountId: string;
    orderHash: string;
    /** bitwise combination of OrderMask enum values */
    orderMask: number;
}
/**
 * MsgBatchCancelDerivativeOrders defines the Msg/CancelDerivativeOrders
 * response type.
 */
export interface MsgBatchCancelDerivativeOrders {
    sender: string;
    data: OrderData[];
}
/**
 * MsgBatchCancelDerivativeOrdersResponse defines the
 * Msg/CancelDerivativeOrderResponse response type.
 */
export interface MsgBatchCancelDerivativeOrdersResponse {
    success: boolean[];
}
/** A Cosmos-SDK MsgSubaccountTransfer */
export interface MsgSubaccountTransfer {
    sender: string;
    sourceSubaccountId: string;
    destinationSubaccountId: string;
    amount: Coin | undefined;
}
/**
 * MsgSubaccountTransferResponse defines the Msg/SubaccountTransfer response
 * type.
 */
export interface MsgSubaccountTransferResponse {
}
/** A Cosmos-SDK MsgExternalTransfer */
export interface MsgExternalTransfer {
    sender: string;
    sourceSubaccountId: string;
    destinationSubaccountId: string;
    amount: Coin | undefined;
}
/** MsgExternalTransferResponse defines the Msg/ExternalTransfer response type. */
export interface MsgExternalTransferResponse {
}
/** A Cosmos-SDK MsgLiquidatePosition */
export interface MsgLiquidatePosition {
    sender: string;
    subaccountId: string;
    marketId: string;
    /** optional order to provide for liquidation */
    order: DerivativeOrder | undefined;
}
/** MsgLiquidatePositionResponse defines the Msg/LiquidatePosition response type. */
export interface MsgLiquidatePositionResponse {
}
/** A Cosmos-SDK MsgIncreasePositionMargin */
export interface MsgIncreasePositionMargin {
    sender: string;
    sourceSubaccountId: string;
    destinationSubaccountId: string;
    marketId: string;
    /** amount defines the amount of margin to add to the position */
    amount: string;
}
/**
 * MsgIncreasePositionMarginResponse defines the Msg/IncreasePositionMargin
 * response type.
 */
export interface MsgIncreasePositionMarginResponse {
}
/** MsgPrivilegedExecuteContract defines the Msg/Exec message type */
export interface MsgPrivilegedExecuteContract {
    sender: string;
    /**
     * funds defines the user's bank coins used to fund the execution (e.g.
     * 100inj).
     */
    funds: string;
    /** contract_address defines the contract address to execute */
    contractAddress: string;
    /** data defines the call data used when executing the contract */
    data: string;
}
/** MsgPrivilegedExecuteContractResponse defines the Msg/Exec response type. */
export interface MsgPrivilegedExecuteContractResponse {
    fundsDiff: Coin[];
}
export interface SpotMarketParamUpdateProposal {
    title: string;
    description: string;
    marketId: string;
    /** maker_fee_rate defines the trade fee rate for makers on the spot market */
    makerFeeRate: string;
    /** taker_fee_rate defines the trade fee rate for takers on the spot market */
    takerFeeRate: string;
    /**
     * relayer_fee_share_rate defines the relayer fee share rate for the spot
     * market
     */
    relayerFeeShareRate: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price and
     * margin
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     */
    minQuantityTickSize: string;
    status: MarketStatus;
}
export interface ExchangeEnableProposal {
    title: string;
    description: string;
    exchangeType: ExchangeType;
}
export interface BatchExchangeModificationProposal {
    title: string;
    description: string;
    spotMarketParamUpdateProposals: SpotMarketParamUpdateProposal[];
    derivativeMarketParamUpdateProposals: DerivativeMarketParamUpdateProposal[];
    spotMarketLaunchProposals: SpotMarketLaunchProposal[];
    perpetualMarketLaunchProposals: PerpetualMarketLaunchProposal[];
    expiryFuturesMarketLaunchProposals: ExpiryFuturesMarketLaunchProposal[];
    tradingRewardCampaignUpdateProposal: TradingRewardCampaignUpdateProposal | undefined;
    binaryOptionsMarketLaunchProposals: BinaryOptionsMarketLaunchProposal[];
    binaryOptionsParamUpdateProposals: BinaryOptionsMarketParamUpdateProposal[];
    denomDecimalsUpdateProposal: UpdateDenomDecimalsProposal | undefined;
}
/**
 * SpotMarketLaunchProposal defines a SDK message for proposing a new spot
 * market through governance
 */
export interface SpotMarketLaunchProposal {
    title: string;
    description: string;
    /** Ticker for the spot market. */
    ticker: string;
    /** type of coin to use as the base currency */
    baseDenom: string;
    /** type of coin to use as the quote currency */
    quoteDenom: string;
    /** min_price_tick_size defines the minimum tick size of the order's price */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     */
    minQuantityTickSize: string;
    /** maker_fee_rate defines the fee percentage makers pay when trading */
    makerFeeRate: string;
    /** taker_fee_rate defines the fee percentage takers pay when trading */
    takerFeeRate: string;
}
/**
 * PerpetualMarketLaunchProposal defines a SDK message for proposing a new
 * perpetual futures market through governance
 */
export interface PerpetualMarketLaunchProposal {
    title: string;
    description: string;
    /** Ticker for the derivative market. */
    ticker: string;
    /** type of coin to use as the base currency */
    quoteDenom: string;
    /** Oracle base currency */
    oracleBase: string;
    /** Oracle quote currency */
    oracleQuote: string;
    /** Scale factor for oracle prices. */
    oracleScaleFactor: number;
    /** Oracle type */
    oracleType: OracleType;
    /**
     * initial_margin_ratio defines the initial margin ratio for the derivative
     * market
     */
    initialMarginRatio: string;
    /**
     * maintenance_margin_ratio defines the maintenance margin ratio for the
     * derivative market
     */
    maintenanceMarginRatio: string;
    /**
     * maker_fee_rate defines the exchange trade fee for makers for the derivative
     * market
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the exchange trade fee for takers for the derivative
     * market
     */
    takerFeeRate: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price and
     * margin
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     */
    minQuantityTickSize: string;
}
export interface BinaryOptionsMarketLaunchProposal {
    title: string;
    description: string;
    /** Ticker for the derivative contract. */
    ticker: string;
    /** Oracle symbol */
    oracleSymbol: string;
    /** Oracle Provider */
    oracleProvider: string;
    /** Oracle type */
    oracleType: OracleType;
    /** Scale factor for oracle prices. */
    oracleScaleFactor: number;
    /** expiration timestamp */
    expirationTimestamp: string;
    /** expiration timestamp */
    settlementTimestamp: string;
    /** admin of the market */
    admin: string;
    /** Address of the quote currency denomination for the binary options contract */
    quoteDenom: string;
    /** maker_fee_rate defines the maker fee rate of a binary options market */
    makerFeeRate: string;
    /** taker_fee_rate defines the taker fee rate of a derivative market */
    takerFeeRate: string;
    /**
     * min_price_tick_size defines the minimum tick size that the price and margin
     * required for orders in the market
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the quantity
     * required for orders in the market
     */
    minQuantityTickSize: string;
}
/**
 * ExpiryFuturesMarketLaunchProposal defines a SDK message for proposing a new
 * expiry futures market through governance
 */
export interface ExpiryFuturesMarketLaunchProposal {
    title: string;
    description: string;
    /** Ticker for the derivative market. */
    ticker: string;
    /** type of coin to use as the quote currency */
    quoteDenom: string;
    /** Oracle base currency */
    oracleBase: string;
    /** Oracle quote currency */
    oracleQuote: string;
    /** Scale factor for oracle prices. */
    oracleScaleFactor: number;
    /** Oracle type */
    oracleType: OracleType;
    /** Expiration time of the market */
    expiry: string;
    /**
     * initial_margin_ratio defines the initial margin ratio for the derivative
     * market
     */
    initialMarginRatio: string;
    /**
     * maintenance_margin_ratio defines the maintenance margin ratio for the
     * derivative market
     */
    maintenanceMarginRatio: string;
    /**
     * maker_fee_rate defines the exchange trade fee for makers for the derivative
     * market
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the exchange trade fee for takers for the derivative
     * market
     */
    takerFeeRate: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price and
     * margin
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     */
    minQuantityTickSize: string;
}
export interface DerivativeMarketParamUpdateProposal {
    title: string;
    description: string;
    marketId: string;
    /**
     * initial_margin_ratio defines the initial margin ratio for the derivative
     * market
     */
    initialMarginRatio: string;
    /**
     * maintenance_margin_ratio defines the maintenance margin ratio for the
     * derivative market
     */
    maintenanceMarginRatio: string;
    /**
     * maker_fee_rate defines the exchange trade fee for makers for the derivative
     * market
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the exchange trade fee for takers for the derivative
     * market
     */
    takerFeeRate: string;
    /**
     * relayer_fee_share_rate defines the relayer fee share rate for the
     * derivative market
     */
    relayerFeeShareRate: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price and
     * margin
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     */
    minQuantityTickSize: string;
    /** hourly_interest_rate defines the hourly interest rate */
    HourlyInterestRate: string;
    /**
     * hourly_funding_rate_cap defines the maximum absolute value of the hourly
     * funding rate
     */
    HourlyFundingRateCap: string;
    status: MarketStatus;
    oracleParams: OracleParams | undefined;
}
export interface MarketForcedSettlementProposal {
    title: string;
    description: string;
    marketId: string;
    settlementPrice: string;
}
export interface UpdateDenomDecimalsProposal {
    title: string;
    description: string;
    denomDecimals: DenomDecimals[];
}
export interface BinaryOptionsMarketParamUpdateProposal {
    title: string;
    description: string;
    marketId: string;
    /**
     * maker_fee_rate defines the exchange trade fee for makers for the derivative
     * market
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the exchange trade fee for takers for the derivative
     * market
     */
    takerFeeRate: string;
    /**
     * relayer_fee_share_rate defines the relayer fee share rate for the
     * derivative market
     */
    relayerFeeShareRate: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price and
     * margin
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     */
    minQuantityTickSize: string;
    /** expiration timestamp */
    expirationTimestamp: string;
    /** expiration timestamp */
    settlementTimestamp: string;
    /** new price at which market will be settled */
    settlementPrice: string;
    /** admin of the market */
    admin: string;
    status: MarketStatus;
    oracleParams: ProviderOracleParams | undefined;
}
export interface ProviderOracleParams {
    /** Oracle base currency */
    symbol: string;
    /** Oracle quote currency */
    provider: string;
    /** Scale factor for oracle prices. */
    oracleScaleFactor: number;
    /** Oracle type */
    oracleType: OracleType;
}
export interface OracleParams {
    /** Oracle base currency */
    oracleBase: string;
    /** Oracle quote currency */
    oracleQuote: string;
    /** Scale factor for oracle prices. */
    oracleScaleFactor: number;
    /** Oracle type */
    oracleType: OracleType;
}
export interface TradingRewardCampaignLaunchProposal {
    title: string;
    description: string;
    campaignInfo: TradingRewardCampaignInfo | undefined;
    campaignRewardPools: CampaignRewardPool[];
}
export interface TradingRewardCampaignUpdateProposal {
    title: string;
    description: string;
    campaignInfo: TradingRewardCampaignInfo | undefined;
    campaignRewardPoolsAdditions: CampaignRewardPool[];
    campaignRewardPoolsUpdates: CampaignRewardPool[];
}
export interface RewardPointUpdate {
    accountAddress: string;
    /** new_points overwrites the current trading reward points for the account */
    newPoints: string;
}
export interface TradingRewardPendingPointsUpdateProposal {
    title: string;
    description: string;
    pendingPoolTimestamp: string;
    rewardPointUpdates: RewardPointUpdate[];
}
export interface FeeDiscountProposal {
    title: string;
    description: string;
    schedule: FeeDiscountSchedule | undefined;
}
export interface BatchCommunityPoolSpendProposal {
    title: string;
    description: string;
    proposals: CommunityPoolSpendProposal[];
}
/** A Cosmos-SDK MsgRewardsOptOut */
export interface MsgRewardsOptOut {
    sender: string;
}
/** MsgRewardsOptOutResponse defines the Msg/RewardsOptOut response type. */
export interface MsgRewardsOptOutResponse {
}
/** A Cosmos-SDK MsgReclaimLockedFunds */
export interface MsgReclaimLockedFunds {
    sender: string;
    lockedAccountPubKey: Uint8Array;
    signature: Uint8Array;
}
/**
 * MsgReclaimLockedFundsResponse defines the Msg/ReclaimLockedFunds response
 * type.
 */
export interface MsgReclaimLockedFundsResponse {
}
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignData {
    /** Signer is the sdk.AccAddress of the message signer */
    Signer: Uint8Array;
    /**
     * Data represents the raw bytes of the content that is signed (text, json,
     * etc)
     */
    Data: Uint8Array;
}
/** MsgSignDoc defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDoc {
    signType: string;
    value: MsgSignData | undefined;
}
/**
 * MsgAdminUpdateBinaryOptionsMarket is used by the market Admin to operate the
 * market
 */
export interface MsgAdminUpdateBinaryOptionsMarket {
    sender: string;
    marketId: string;
    /** new price at which market will be settled */
    settlementPrice: string;
    /** expiration timestamp */
    expirationTimestamp: string;
    /** expiration timestamp */
    settlementTimestamp: string;
    /** Status of the market */
    status: MarketStatus;
}
/**
 * MsgAdminUpdateBinaryOptionsMarketResponse is the response for
 * AdminUpdateBinaryOptionsMarket rpc method
 */
export interface MsgAdminUpdateBinaryOptionsMarketResponse {
}
/**
 * AtomicMarketOrderFeeMultiplierScheduleProposal defines a SDK message for
 * proposing new atomic take fee multipliers for specified markets
 */
export interface AtomicMarketOrderFeeMultiplierScheduleProposal {
    title: string;
    description: string;
    marketFeeMultipliers: MarketFeeMultiplier[];
}
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    create(base?: DeepPartial<MsgUpdateParams>): MsgUpdateParams;
    fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    create(base?: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit;
    fromJSON(object: any): MsgDeposit;
    toJSON(message: MsgDeposit): unknown;
    create(base?: DeepPartial<MsgDeposit>): MsgDeposit;
    fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromJSON(_: any): MsgDepositResponse;
    toJSON(_: MsgDepositResponse): unknown;
    create(base?: DeepPartial<MsgDepositResponse>): MsgDepositResponse;
    fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse;
};
export declare const MsgWithdraw: {
    encode(message: MsgWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw;
    fromJSON(object: any): MsgWithdraw;
    toJSON(message: MsgWithdraw): unknown;
    create(base?: DeepPartial<MsgWithdraw>): MsgWithdraw;
    fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw;
};
export declare const MsgWithdrawResponse: {
    encode(_: MsgWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse;
    fromJSON(_: any): MsgWithdrawResponse;
    toJSON(_: MsgWithdrawResponse): unknown;
    create(base?: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse;
    fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse;
};
export declare const MsgCreateSpotLimitOrder: {
    encode(message: MsgCreateSpotLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSpotLimitOrder;
    fromJSON(object: any): MsgCreateSpotLimitOrder;
    toJSON(message: MsgCreateSpotLimitOrder): unknown;
    create(base?: DeepPartial<MsgCreateSpotLimitOrder>): MsgCreateSpotLimitOrder;
    fromPartial(object: DeepPartial<MsgCreateSpotLimitOrder>): MsgCreateSpotLimitOrder;
};
export declare const MsgCreateSpotLimitOrderResponse: {
    encode(message: MsgCreateSpotLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSpotLimitOrderResponse;
    fromJSON(object: any): MsgCreateSpotLimitOrderResponse;
    toJSON(message: MsgCreateSpotLimitOrderResponse): unknown;
    create(base?: DeepPartial<MsgCreateSpotLimitOrderResponse>): MsgCreateSpotLimitOrderResponse;
    fromPartial(object: DeepPartial<MsgCreateSpotLimitOrderResponse>): MsgCreateSpotLimitOrderResponse;
};
export declare const MsgBatchCreateSpotLimitOrders: {
    encode(message: MsgBatchCreateSpotLimitOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCreateSpotLimitOrders;
    fromJSON(object: any): MsgBatchCreateSpotLimitOrders;
    toJSON(message: MsgBatchCreateSpotLimitOrders): unknown;
    create(base?: DeepPartial<MsgBatchCreateSpotLimitOrders>): MsgBatchCreateSpotLimitOrders;
    fromPartial(object: DeepPartial<MsgBatchCreateSpotLimitOrders>): MsgBatchCreateSpotLimitOrders;
};
export declare const MsgBatchCreateSpotLimitOrdersResponse: {
    encode(message: MsgBatchCreateSpotLimitOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCreateSpotLimitOrdersResponse;
    fromJSON(object: any): MsgBatchCreateSpotLimitOrdersResponse;
    toJSON(message: MsgBatchCreateSpotLimitOrdersResponse): unknown;
    create(base?: DeepPartial<MsgBatchCreateSpotLimitOrdersResponse>): MsgBatchCreateSpotLimitOrdersResponse;
    fromPartial(object: DeepPartial<MsgBatchCreateSpotLimitOrdersResponse>): MsgBatchCreateSpotLimitOrdersResponse;
};
export declare const MsgInstantSpotMarketLaunch: {
    encode(message: MsgInstantSpotMarketLaunch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantSpotMarketLaunch;
    fromJSON(object: any): MsgInstantSpotMarketLaunch;
    toJSON(message: MsgInstantSpotMarketLaunch): unknown;
    create(base?: DeepPartial<MsgInstantSpotMarketLaunch>): MsgInstantSpotMarketLaunch;
    fromPartial(object: DeepPartial<MsgInstantSpotMarketLaunch>): MsgInstantSpotMarketLaunch;
};
export declare const MsgInstantSpotMarketLaunchResponse: {
    encode(_: MsgInstantSpotMarketLaunchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantSpotMarketLaunchResponse;
    fromJSON(_: any): MsgInstantSpotMarketLaunchResponse;
    toJSON(_: MsgInstantSpotMarketLaunchResponse): unknown;
    create(base?: DeepPartial<MsgInstantSpotMarketLaunchResponse>): MsgInstantSpotMarketLaunchResponse;
    fromPartial(_: DeepPartial<MsgInstantSpotMarketLaunchResponse>): MsgInstantSpotMarketLaunchResponse;
};
export declare const MsgInstantPerpetualMarketLaunch: {
    encode(message: MsgInstantPerpetualMarketLaunch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantPerpetualMarketLaunch;
    fromJSON(object: any): MsgInstantPerpetualMarketLaunch;
    toJSON(message: MsgInstantPerpetualMarketLaunch): unknown;
    create(base?: DeepPartial<MsgInstantPerpetualMarketLaunch>): MsgInstantPerpetualMarketLaunch;
    fromPartial(object: DeepPartial<MsgInstantPerpetualMarketLaunch>): MsgInstantPerpetualMarketLaunch;
};
export declare const MsgInstantPerpetualMarketLaunchResponse: {
    encode(_: MsgInstantPerpetualMarketLaunchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantPerpetualMarketLaunchResponse;
    fromJSON(_: any): MsgInstantPerpetualMarketLaunchResponse;
    toJSON(_: MsgInstantPerpetualMarketLaunchResponse): unknown;
    create(base?: DeepPartial<MsgInstantPerpetualMarketLaunchResponse>): MsgInstantPerpetualMarketLaunchResponse;
    fromPartial(_: DeepPartial<MsgInstantPerpetualMarketLaunchResponse>): MsgInstantPerpetualMarketLaunchResponse;
};
export declare const MsgInstantBinaryOptionsMarketLaunch: {
    encode(message: MsgInstantBinaryOptionsMarketLaunch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantBinaryOptionsMarketLaunch;
    fromJSON(object: any): MsgInstantBinaryOptionsMarketLaunch;
    toJSON(message: MsgInstantBinaryOptionsMarketLaunch): unknown;
    create(base?: DeepPartial<MsgInstantBinaryOptionsMarketLaunch>): MsgInstantBinaryOptionsMarketLaunch;
    fromPartial(object: DeepPartial<MsgInstantBinaryOptionsMarketLaunch>): MsgInstantBinaryOptionsMarketLaunch;
};
export declare const MsgInstantBinaryOptionsMarketLaunchResponse: {
    encode(_: MsgInstantBinaryOptionsMarketLaunchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantBinaryOptionsMarketLaunchResponse;
    fromJSON(_: any): MsgInstantBinaryOptionsMarketLaunchResponse;
    toJSON(_: MsgInstantBinaryOptionsMarketLaunchResponse): unknown;
    create(base?: DeepPartial<MsgInstantBinaryOptionsMarketLaunchResponse>): MsgInstantBinaryOptionsMarketLaunchResponse;
    fromPartial(_: DeepPartial<MsgInstantBinaryOptionsMarketLaunchResponse>): MsgInstantBinaryOptionsMarketLaunchResponse;
};
export declare const MsgInstantExpiryFuturesMarketLaunch: {
    encode(message: MsgInstantExpiryFuturesMarketLaunch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantExpiryFuturesMarketLaunch;
    fromJSON(object: any): MsgInstantExpiryFuturesMarketLaunch;
    toJSON(message: MsgInstantExpiryFuturesMarketLaunch): unknown;
    create(base?: DeepPartial<MsgInstantExpiryFuturesMarketLaunch>): MsgInstantExpiryFuturesMarketLaunch;
    fromPartial(object: DeepPartial<MsgInstantExpiryFuturesMarketLaunch>): MsgInstantExpiryFuturesMarketLaunch;
};
export declare const MsgInstantExpiryFuturesMarketLaunchResponse: {
    encode(_: MsgInstantExpiryFuturesMarketLaunchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantExpiryFuturesMarketLaunchResponse;
    fromJSON(_: any): MsgInstantExpiryFuturesMarketLaunchResponse;
    toJSON(_: MsgInstantExpiryFuturesMarketLaunchResponse): unknown;
    create(base?: DeepPartial<MsgInstantExpiryFuturesMarketLaunchResponse>): MsgInstantExpiryFuturesMarketLaunchResponse;
    fromPartial(_: DeepPartial<MsgInstantExpiryFuturesMarketLaunchResponse>): MsgInstantExpiryFuturesMarketLaunchResponse;
};
export declare const MsgCreateSpotMarketOrder: {
    encode(message: MsgCreateSpotMarketOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSpotMarketOrder;
    fromJSON(object: any): MsgCreateSpotMarketOrder;
    toJSON(message: MsgCreateSpotMarketOrder): unknown;
    create(base?: DeepPartial<MsgCreateSpotMarketOrder>): MsgCreateSpotMarketOrder;
    fromPartial(object: DeepPartial<MsgCreateSpotMarketOrder>): MsgCreateSpotMarketOrder;
};
export declare const MsgCreateSpotMarketOrderResponse: {
    encode(message: MsgCreateSpotMarketOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSpotMarketOrderResponse;
    fromJSON(object: any): MsgCreateSpotMarketOrderResponse;
    toJSON(message: MsgCreateSpotMarketOrderResponse): unknown;
    create(base?: DeepPartial<MsgCreateSpotMarketOrderResponse>): MsgCreateSpotMarketOrderResponse;
    fromPartial(object: DeepPartial<MsgCreateSpotMarketOrderResponse>): MsgCreateSpotMarketOrderResponse;
};
export declare const SpotMarketOrderResults: {
    encode(message: SpotMarketOrderResults, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotMarketOrderResults;
    fromJSON(object: any): SpotMarketOrderResults;
    toJSON(message: SpotMarketOrderResults): unknown;
    create(base?: DeepPartial<SpotMarketOrderResults>): SpotMarketOrderResults;
    fromPartial(object: DeepPartial<SpotMarketOrderResults>): SpotMarketOrderResults;
};
export declare const MsgCreateDerivativeLimitOrder: {
    encode(message: MsgCreateDerivativeLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDerivativeLimitOrder;
    fromJSON(object: any): MsgCreateDerivativeLimitOrder;
    toJSON(message: MsgCreateDerivativeLimitOrder): unknown;
    create(base?: DeepPartial<MsgCreateDerivativeLimitOrder>): MsgCreateDerivativeLimitOrder;
    fromPartial(object: DeepPartial<MsgCreateDerivativeLimitOrder>): MsgCreateDerivativeLimitOrder;
};
export declare const MsgCreateDerivativeLimitOrderResponse: {
    encode(message: MsgCreateDerivativeLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDerivativeLimitOrderResponse;
    fromJSON(object: any): MsgCreateDerivativeLimitOrderResponse;
    toJSON(message: MsgCreateDerivativeLimitOrderResponse): unknown;
    create(base?: DeepPartial<MsgCreateDerivativeLimitOrderResponse>): MsgCreateDerivativeLimitOrderResponse;
    fromPartial(object: DeepPartial<MsgCreateDerivativeLimitOrderResponse>): MsgCreateDerivativeLimitOrderResponse;
};
export declare const MsgCreateBinaryOptionsLimitOrder: {
    encode(message: MsgCreateBinaryOptionsLimitOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBinaryOptionsLimitOrder;
    fromJSON(object: any): MsgCreateBinaryOptionsLimitOrder;
    toJSON(message: MsgCreateBinaryOptionsLimitOrder): unknown;
    create(base?: DeepPartial<MsgCreateBinaryOptionsLimitOrder>): MsgCreateBinaryOptionsLimitOrder;
    fromPartial(object: DeepPartial<MsgCreateBinaryOptionsLimitOrder>): MsgCreateBinaryOptionsLimitOrder;
};
export declare const MsgCreateBinaryOptionsLimitOrderResponse: {
    encode(message: MsgCreateBinaryOptionsLimitOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBinaryOptionsLimitOrderResponse;
    fromJSON(object: any): MsgCreateBinaryOptionsLimitOrderResponse;
    toJSON(message: MsgCreateBinaryOptionsLimitOrderResponse): unknown;
    create(base?: DeepPartial<MsgCreateBinaryOptionsLimitOrderResponse>): MsgCreateBinaryOptionsLimitOrderResponse;
    fromPartial(object: DeepPartial<MsgCreateBinaryOptionsLimitOrderResponse>): MsgCreateBinaryOptionsLimitOrderResponse;
};
export declare const MsgBatchCreateDerivativeLimitOrders: {
    encode(message: MsgBatchCreateDerivativeLimitOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCreateDerivativeLimitOrders;
    fromJSON(object: any): MsgBatchCreateDerivativeLimitOrders;
    toJSON(message: MsgBatchCreateDerivativeLimitOrders): unknown;
    create(base?: DeepPartial<MsgBatchCreateDerivativeLimitOrders>): MsgBatchCreateDerivativeLimitOrders;
    fromPartial(object: DeepPartial<MsgBatchCreateDerivativeLimitOrders>): MsgBatchCreateDerivativeLimitOrders;
};
export declare const MsgBatchCreateDerivativeLimitOrdersResponse: {
    encode(message: MsgBatchCreateDerivativeLimitOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCreateDerivativeLimitOrdersResponse;
    fromJSON(object: any): MsgBatchCreateDerivativeLimitOrdersResponse;
    toJSON(message: MsgBatchCreateDerivativeLimitOrdersResponse): unknown;
    create(base?: DeepPartial<MsgBatchCreateDerivativeLimitOrdersResponse>): MsgBatchCreateDerivativeLimitOrdersResponse;
    fromPartial(object: DeepPartial<MsgBatchCreateDerivativeLimitOrdersResponse>): MsgBatchCreateDerivativeLimitOrdersResponse;
};
export declare const MsgCancelSpotOrder: {
    encode(message: MsgCancelSpotOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSpotOrder;
    fromJSON(object: any): MsgCancelSpotOrder;
    toJSON(message: MsgCancelSpotOrder): unknown;
    create(base?: DeepPartial<MsgCancelSpotOrder>): MsgCancelSpotOrder;
    fromPartial(object: DeepPartial<MsgCancelSpotOrder>): MsgCancelSpotOrder;
};
export declare const MsgCancelSpotOrderResponse: {
    encode(_: MsgCancelSpotOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSpotOrderResponse;
    fromJSON(_: any): MsgCancelSpotOrderResponse;
    toJSON(_: MsgCancelSpotOrderResponse): unknown;
    create(base?: DeepPartial<MsgCancelSpotOrderResponse>): MsgCancelSpotOrderResponse;
    fromPartial(_: DeepPartial<MsgCancelSpotOrderResponse>): MsgCancelSpotOrderResponse;
};
export declare const MsgBatchCancelSpotOrders: {
    encode(message: MsgBatchCancelSpotOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelSpotOrders;
    fromJSON(object: any): MsgBatchCancelSpotOrders;
    toJSON(message: MsgBatchCancelSpotOrders): unknown;
    create(base?: DeepPartial<MsgBatchCancelSpotOrders>): MsgBatchCancelSpotOrders;
    fromPartial(object: DeepPartial<MsgBatchCancelSpotOrders>): MsgBatchCancelSpotOrders;
};
export declare const MsgBatchCancelSpotOrdersResponse: {
    encode(message: MsgBatchCancelSpotOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelSpotOrdersResponse;
    fromJSON(object: any): MsgBatchCancelSpotOrdersResponse;
    toJSON(message: MsgBatchCancelSpotOrdersResponse): unknown;
    create(base?: DeepPartial<MsgBatchCancelSpotOrdersResponse>): MsgBatchCancelSpotOrdersResponse;
    fromPartial(object: DeepPartial<MsgBatchCancelSpotOrdersResponse>): MsgBatchCancelSpotOrdersResponse;
};
export declare const MsgBatchCancelBinaryOptionsOrders: {
    encode(message: MsgBatchCancelBinaryOptionsOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelBinaryOptionsOrders;
    fromJSON(object: any): MsgBatchCancelBinaryOptionsOrders;
    toJSON(message: MsgBatchCancelBinaryOptionsOrders): unknown;
    create(base?: DeepPartial<MsgBatchCancelBinaryOptionsOrders>): MsgBatchCancelBinaryOptionsOrders;
    fromPartial(object: DeepPartial<MsgBatchCancelBinaryOptionsOrders>): MsgBatchCancelBinaryOptionsOrders;
};
export declare const MsgBatchCancelBinaryOptionsOrdersResponse: {
    encode(message: MsgBatchCancelBinaryOptionsOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelBinaryOptionsOrdersResponse;
    fromJSON(object: any): MsgBatchCancelBinaryOptionsOrdersResponse;
    toJSON(message: MsgBatchCancelBinaryOptionsOrdersResponse): unknown;
    create(base?: DeepPartial<MsgBatchCancelBinaryOptionsOrdersResponse>): MsgBatchCancelBinaryOptionsOrdersResponse;
    fromPartial(object: DeepPartial<MsgBatchCancelBinaryOptionsOrdersResponse>): MsgBatchCancelBinaryOptionsOrdersResponse;
};
export declare const MsgBatchUpdateOrders: {
    encode(message: MsgBatchUpdateOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchUpdateOrders;
    fromJSON(object: any): MsgBatchUpdateOrders;
    toJSON(message: MsgBatchUpdateOrders): unknown;
    create(base?: DeepPartial<MsgBatchUpdateOrders>): MsgBatchUpdateOrders;
    fromPartial(object: DeepPartial<MsgBatchUpdateOrders>): MsgBatchUpdateOrders;
};
export declare const MsgBatchUpdateOrdersResponse: {
    encode(message: MsgBatchUpdateOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchUpdateOrdersResponse;
    fromJSON(object: any): MsgBatchUpdateOrdersResponse;
    toJSON(message: MsgBatchUpdateOrdersResponse): unknown;
    create(base?: DeepPartial<MsgBatchUpdateOrdersResponse>): MsgBatchUpdateOrdersResponse;
    fromPartial(object: DeepPartial<MsgBatchUpdateOrdersResponse>): MsgBatchUpdateOrdersResponse;
};
export declare const MsgCreateDerivativeMarketOrder: {
    encode(message: MsgCreateDerivativeMarketOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDerivativeMarketOrder;
    fromJSON(object: any): MsgCreateDerivativeMarketOrder;
    toJSON(message: MsgCreateDerivativeMarketOrder): unknown;
    create(base?: DeepPartial<MsgCreateDerivativeMarketOrder>): MsgCreateDerivativeMarketOrder;
    fromPartial(object: DeepPartial<MsgCreateDerivativeMarketOrder>): MsgCreateDerivativeMarketOrder;
};
export declare const MsgCreateDerivativeMarketOrderResponse: {
    encode(message: MsgCreateDerivativeMarketOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDerivativeMarketOrderResponse;
    fromJSON(object: any): MsgCreateDerivativeMarketOrderResponse;
    toJSON(message: MsgCreateDerivativeMarketOrderResponse): unknown;
    create(base?: DeepPartial<MsgCreateDerivativeMarketOrderResponse>): MsgCreateDerivativeMarketOrderResponse;
    fromPartial(object: DeepPartial<MsgCreateDerivativeMarketOrderResponse>): MsgCreateDerivativeMarketOrderResponse;
};
export declare const DerivativeMarketOrderResults: {
    encode(message: DerivativeMarketOrderResults, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeMarketOrderResults;
    fromJSON(object: any): DerivativeMarketOrderResults;
    toJSON(message: DerivativeMarketOrderResults): unknown;
    create(base?: DeepPartial<DerivativeMarketOrderResults>): DerivativeMarketOrderResults;
    fromPartial(object: DeepPartial<DerivativeMarketOrderResults>): DerivativeMarketOrderResults;
};
export declare const MsgCreateBinaryOptionsMarketOrder: {
    encode(message: MsgCreateBinaryOptionsMarketOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBinaryOptionsMarketOrder;
    fromJSON(object: any): MsgCreateBinaryOptionsMarketOrder;
    toJSON(message: MsgCreateBinaryOptionsMarketOrder): unknown;
    create(base?: DeepPartial<MsgCreateBinaryOptionsMarketOrder>): MsgCreateBinaryOptionsMarketOrder;
    fromPartial(object: DeepPartial<MsgCreateBinaryOptionsMarketOrder>): MsgCreateBinaryOptionsMarketOrder;
};
export declare const MsgCreateBinaryOptionsMarketOrderResponse: {
    encode(message: MsgCreateBinaryOptionsMarketOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBinaryOptionsMarketOrderResponse;
    fromJSON(object: any): MsgCreateBinaryOptionsMarketOrderResponse;
    toJSON(message: MsgCreateBinaryOptionsMarketOrderResponse): unknown;
    create(base?: DeepPartial<MsgCreateBinaryOptionsMarketOrderResponse>): MsgCreateBinaryOptionsMarketOrderResponse;
    fromPartial(object: DeepPartial<MsgCreateBinaryOptionsMarketOrderResponse>): MsgCreateBinaryOptionsMarketOrderResponse;
};
export declare const MsgCancelDerivativeOrder: {
    encode(message: MsgCancelDerivativeOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelDerivativeOrder;
    fromJSON(object: any): MsgCancelDerivativeOrder;
    toJSON(message: MsgCancelDerivativeOrder): unknown;
    create(base?: DeepPartial<MsgCancelDerivativeOrder>): MsgCancelDerivativeOrder;
    fromPartial(object: DeepPartial<MsgCancelDerivativeOrder>): MsgCancelDerivativeOrder;
};
export declare const MsgCancelDerivativeOrderResponse: {
    encode(_: MsgCancelDerivativeOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelDerivativeOrderResponse;
    fromJSON(_: any): MsgCancelDerivativeOrderResponse;
    toJSON(_: MsgCancelDerivativeOrderResponse): unknown;
    create(base?: DeepPartial<MsgCancelDerivativeOrderResponse>): MsgCancelDerivativeOrderResponse;
    fromPartial(_: DeepPartial<MsgCancelDerivativeOrderResponse>): MsgCancelDerivativeOrderResponse;
};
export declare const MsgCancelBinaryOptionsOrder: {
    encode(message: MsgCancelBinaryOptionsOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBinaryOptionsOrder;
    fromJSON(object: any): MsgCancelBinaryOptionsOrder;
    toJSON(message: MsgCancelBinaryOptionsOrder): unknown;
    create(base?: DeepPartial<MsgCancelBinaryOptionsOrder>): MsgCancelBinaryOptionsOrder;
    fromPartial(object: DeepPartial<MsgCancelBinaryOptionsOrder>): MsgCancelBinaryOptionsOrder;
};
export declare const MsgCancelBinaryOptionsOrderResponse: {
    encode(_: MsgCancelBinaryOptionsOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBinaryOptionsOrderResponse;
    fromJSON(_: any): MsgCancelBinaryOptionsOrderResponse;
    toJSON(_: MsgCancelBinaryOptionsOrderResponse): unknown;
    create(base?: DeepPartial<MsgCancelBinaryOptionsOrderResponse>): MsgCancelBinaryOptionsOrderResponse;
    fromPartial(_: DeepPartial<MsgCancelBinaryOptionsOrderResponse>): MsgCancelBinaryOptionsOrderResponse;
};
export declare const OrderData: {
    encode(message: OrderData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderData;
    fromJSON(object: any): OrderData;
    toJSON(message: OrderData): unknown;
    create(base?: DeepPartial<OrderData>): OrderData;
    fromPartial(object: DeepPartial<OrderData>): OrderData;
};
export declare const MsgBatchCancelDerivativeOrders: {
    encode(message: MsgBatchCancelDerivativeOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelDerivativeOrders;
    fromJSON(object: any): MsgBatchCancelDerivativeOrders;
    toJSON(message: MsgBatchCancelDerivativeOrders): unknown;
    create(base?: DeepPartial<MsgBatchCancelDerivativeOrders>): MsgBatchCancelDerivativeOrders;
    fromPartial(object: DeepPartial<MsgBatchCancelDerivativeOrders>): MsgBatchCancelDerivativeOrders;
};
export declare const MsgBatchCancelDerivativeOrdersResponse: {
    encode(message: MsgBatchCancelDerivativeOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchCancelDerivativeOrdersResponse;
    fromJSON(object: any): MsgBatchCancelDerivativeOrdersResponse;
    toJSON(message: MsgBatchCancelDerivativeOrdersResponse): unknown;
    create(base?: DeepPartial<MsgBatchCancelDerivativeOrdersResponse>): MsgBatchCancelDerivativeOrdersResponse;
    fromPartial(object: DeepPartial<MsgBatchCancelDerivativeOrdersResponse>): MsgBatchCancelDerivativeOrdersResponse;
};
export declare const MsgSubaccountTransfer: {
    encode(message: MsgSubaccountTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubaccountTransfer;
    fromJSON(object: any): MsgSubaccountTransfer;
    toJSON(message: MsgSubaccountTransfer): unknown;
    create(base?: DeepPartial<MsgSubaccountTransfer>): MsgSubaccountTransfer;
    fromPartial(object: DeepPartial<MsgSubaccountTransfer>): MsgSubaccountTransfer;
};
export declare const MsgSubaccountTransferResponse: {
    encode(_: MsgSubaccountTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubaccountTransferResponse;
    fromJSON(_: any): MsgSubaccountTransferResponse;
    toJSON(_: MsgSubaccountTransferResponse): unknown;
    create(base?: DeepPartial<MsgSubaccountTransferResponse>): MsgSubaccountTransferResponse;
    fromPartial(_: DeepPartial<MsgSubaccountTransferResponse>): MsgSubaccountTransferResponse;
};
export declare const MsgExternalTransfer: {
    encode(message: MsgExternalTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExternalTransfer;
    fromJSON(object: any): MsgExternalTransfer;
    toJSON(message: MsgExternalTransfer): unknown;
    create(base?: DeepPartial<MsgExternalTransfer>): MsgExternalTransfer;
    fromPartial(object: DeepPartial<MsgExternalTransfer>): MsgExternalTransfer;
};
export declare const MsgExternalTransferResponse: {
    encode(_: MsgExternalTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExternalTransferResponse;
    fromJSON(_: any): MsgExternalTransferResponse;
    toJSON(_: MsgExternalTransferResponse): unknown;
    create(base?: DeepPartial<MsgExternalTransferResponse>): MsgExternalTransferResponse;
    fromPartial(_: DeepPartial<MsgExternalTransferResponse>): MsgExternalTransferResponse;
};
export declare const MsgLiquidatePosition: {
    encode(message: MsgLiquidatePosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidatePosition;
    fromJSON(object: any): MsgLiquidatePosition;
    toJSON(message: MsgLiquidatePosition): unknown;
    create(base?: DeepPartial<MsgLiquidatePosition>): MsgLiquidatePosition;
    fromPartial(object: DeepPartial<MsgLiquidatePosition>): MsgLiquidatePosition;
};
export declare const MsgLiquidatePositionResponse: {
    encode(_: MsgLiquidatePositionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidatePositionResponse;
    fromJSON(_: any): MsgLiquidatePositionResponse;
    toJSON(_: MsgLiquidatePositionResponse): unknown;
    create(base?: DeepPartial<MsgLiquidatePositionResponse>): MsgLiquidatePositionResponse;
    fromPartial(_: DeepPartial<MsgLiquidatePositionResponse>): MsgLiquidatePositionResponse;
};
export declare const MsgIncreasePositionMargin: {
    encode(message: MsgIncreasePositionMargin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncreasePositionMargin;
    fromJSON(object: any): MsgIncreasePositionMargin;
    toJSON(message: MsgIncreasePositionMargin): unknown;
    create(base?: DeepPartial<MsgIncreasePositionMargin>): MsgIncreasePositionMargin;
    fromPartial(object: DeepPartial<MsgIncreasePositionMargin>): MsgIncreasePositionMargin;
};
export declare const MsgIncreasePositionMarginResponse: {
    encode(_: MsgIncreasePositionMarginResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncreasePositionMarginResponse;
    fromJSON(_: any): MsgIncreasePositionMarginResponse;
    toJSON(_: MsgIncreasePositionMarginResponse): unknown;
    create(base?: DeepPartial<MsgIncreasePositionMarginResponse>): MsgIncreasePositionMarginResponse;
    fromPartial(_: DeepPartial<MsgIncreasePositionMarginResponse>): MsgIncreasePositionMarginResponse;
};
export declare const MsgPrivilegedExecuteContract: {
    encode(message: MsgPrivilegedExecuteContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPrivilegedExecuteContract;
    fromJSON(object: any): MsgPrivilegedExecuteContract;
    toJSON(message: MsgPrivilegedExecuteContract): unknown;
    create(base?: DeepPartial<MsgPrivilegedExecuteContract>): MsgPrivilegedExecuteContract;
    fromPartial(object: DeepPartial<MsgPrivilegedExecuteContract>): MsgPrivilegedExecuteContract;
};
export declare const MsgPrivilegedExecuteContractResponse: {
    encode(message: MsgPrivilegedExecuteContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPrivilegedExecuteContractResponse;
    fromJSON(object: any): MsgPrivilegedExecuteContractResponse;
    toJSON(message: MsgPrivilegedExecuteContractResponse): unknown;
    create(base?: DeepPartial<MsgPrivilegedExecuteContractResponse>): MsgPrivilegedExecuteContractResponse;
    fromPartial(object: DeepPartial<MsgPrivilegedExecuteContractResponse>): MsgPrivilegedExecuteContractResponse;
};
export declare const SpotMarketParamUpdateProposal: {
    encode(message: SpotMarketParamUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotMarketParamUpdateProposal;
    fromJSON(object: any): SpotMarketParamUpdateProposal;
    toJSON(message: SpotMarketParamUpdateProposal): unknown;
    create(base?: DeepPartial<SpotMarketParamUpdateProposal>): SpotMarketParamUpdateProposal;
    fromPartial(object: DeepPartial<SpotMarketParamUpdateProposal>): SpotMarketParamUpdateProposal;
};
export declare const ExchangeEnableProposal: {
    encode(message: ExchangeEnableProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeEnableProposal;
    fromJSON(object: any): ExchangeEnableProposal;
    toJSON(message: ExchangeEnableProposal): unknown;
    create(base?: DeepPartial<ExchangeEnableProposal>): ExchangeEnableProposal;
    fromPartial(object: DeepPartial<ExchangeEnableProposal>): ExchangeEnableProposal;
};
export declare const BatchExchangeModificationProposal: {
    encode(message: BatchExchangeModificationProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchExchangeModificationProposal;
    fromJSON(object: any): BatchExchangeModificationProposal;
    toJSON(message: BatchExchangeModificationProposal): unknown;
    create(base?: DeepPartial<BatchExchangeModificationProposal>): BatchExchangeModificationProposal;
    fromPartial(object: DeepPartial<BatchExchangeModificationProposal>): BatchExchangeModificationProposal;
};
export declare const SpotMarketLaunchProposal: {
    encode(message: SpotMarketLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SpotMarketLaunchProposal;
    fromJSON(object: any): SpotMarketLaunchProposal;
    toJSON(message: SpotMarketLaunchProposal): unknown;
    create(base?: DeepPartial<SpotMarketLaunchProposal>): SpotMarketLaunchProposal;
    fromPartial(object: DeepPartial<SpotMarketLaunchProposal>): SpotMarketLaunchProposal;
};
export declare const PerpetualMarketLaunchProposal: {
    encode(message: PerpetualMarketLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PerpetualMarketLaunchProposal;
    fromJSON(object: any): PerpetualMarketLaunchProposal;
    toJSON(message: PerpetualMarketLaunchProposal): unknown;
    create(base?: DeepPartial<PerpetualMarketLaunchProposal>): PerpetualMarketLaunchProposal;
    fromPartial(object: DeepPartial<PerpetualMarketLaunchProposal>): PerpetualMarketLaunchProposal;
};
export declare const BinaryOptionsMarketLaunchProposal: {
    encode(message: BinaryOptionsMarketLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BinaryOptionsMarketLaunchProposal;
    fromJSON(object: any): BinaryOptionsMarketLaunchProposal;
    toJSON(message: BinaryOptionsMarketLaunchProposal): unknown;
    create(base?: DeepPartial<BinaryOptionsMarketLaunchProposal>): BinaryOptionsMarketLaunchProposal;
    fromPartial(object: DeepPartial<BinaryOptionsMarketLaunchProposal>): BinaryOptionsMarketLaunchProposal;
};
export declare const ExpiryFuturesMarketLaunchProposal: {
    encode(message: ExpiryFuturesMarketLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExpiryFuturesMarketLaunchProposal;
    fromJSON(object: any): ExpiryFuturesMarketLaunchProposal;
    toJSON(message: ExpiryFuturesMarketLaunchProposal): unknown;
    create(base?: DeepPartial<ExpiryFuturesMarketLaunchProposal>): ExpiryFuturesMarketLaunchProposal;
    fromPartial(object: DeepPartial<ExpiryFuturesMarketLaunchProposal>): ExpiryFuturesMarketLaunchProposal;
};
export declare const DerivativeMarketParamUpdateProposal: {
    encode(message: DerivativeMarketParamUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DerivativeMarketParamUpdateProposal;
    fromJSON(object: any): DerivativeMarketParamUpdateProposal;
    toJSON(message: DerivativeMarketParamUpdateProposal): unknown;
    create(base?: DeepPartial<DerivativeMarketParamUpdateProposal>): DerivativeMarketParamUpdateProposal;
    fromPartial(object: DeepPartial<DerivativeMarketParamUpdateProposal>): DerivativeMarketParamUpdateProposal;
};
export declare const MarketForcedSettlementProposal: {
    encode(message: MarketForcedSettlementProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketForcedSettlementProposal;
    fromJSON(object: any): MarketForcedSettlementProposal;
    toJSON(message: MarketForcedSettlementProposal): unknown;
    create(base?: DeepPartial<MarketForcedSettlementProposal>): MarketForcedSettlementProposal;
    fromPartial(object: DeepPartial<MarketForcedSettlementProposal>): MarketForcedSettlementProposal;
};
export declare const UpdateDenomDecimalsProposal: {
    encode(message: UpdateDenomDecimalsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDenomDecimalsProposal;
    fromJSON(object: any): UpdateDenomDecimalsProposal;
    toJSON(message: UpdateDenomDecimalsProposal): unknown;
    create(base?: DeepPartial<UpdateDenomDecimalsProposal>): UpdateDenomDecimalsProposal;
    fromPartial(object: DeepPartial<UpdateDenomDecimalsProposal>): UpdateDenomDecimalsProposal;
};
export declare const BinaryOptionsMarketParamUpdateProposal: {
    encode(message: BinaryOptionsMarketParamUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BinaryOptionsMarketParamUpdateProposal;
    fromJSON(object: any): BinaryOptionsMarketParamUpdateProposal;
    toJSON(message: BinaryOptionsMarketParamUpdateProposal): unknown;
    create(base?: DeepPartial<BinaryOptionsMarketParamUpdateProposal>): BinaryOptionsMarketParamUpdateProposal;
    fromPartial(object: DeepPartial<BinaryOptionsMarketParamUpdateProposal>): BinaryOptionsMarketParamUpdateProposal;
};
export declare const ProviderOracleParams: {
    encode(message: ProviderOracleParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProviderOracleParams;
    fromJSON(object: any): ProviderOracleParams;
    toJSON(message: ProviderOracleParams): unknown;
    create(base?: DeepPartial<ProviderOracleParams>): ProviderOracleParams;
    fromPartial(object: DeepPartial<ProviderOracleParams>): ProviderOracleParams;
};
export declare const OracleParams: {
    encode(message: OracleParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleParams;
    fromJSON(object: any): OracleParams;
    toJSON(message: OracleParams): unknown;
    create(base?: DeepPartial<OracleParams>): OracleParams;
    fromPartial(object: DeepPartial<OracleParams>): OracleParams;
};
export declare const TradingRewardCampaignLaunchProposal: {
    encode(message: TradingRewardCampaignLaunchProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCampaignLaunchProposal;
    fromJSON(object: any): TradingRewardCampaignLaunchProposal;
    toJSON(message: TradingRewardCampaignLaunchProposal): unknown;
    create(base?: DeepPartial<TradingRewardCampaignLaunchProposal>): TradingRewardCampaignLaunchProposal;
    fromPartial(object: DeepPartial<TradingRewardCampaignLaunchProposal>): TradingRewardCampaignLaunchProposal;
};
export declare const TradingRewardCampaignUpdateProposal: {
    encode(message: TradingRewardCampaignUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardCampaignUpdateProposal;
    fromJSON(object: any): TradingRewardCampaignUpdateProposal;
    toJSON(message: TradingRewardCampaignUpdateProposal): unknown;
    create(base?: DeepPartial<TradingRewardCampaignUpdateProposal>): TradingRewardCampaignUpdateProposal;
    fromPartial(object: DeepPartial<TradingRewardCampaignUpdateProposal>): TradingRewardCampaignUpdateProposal;
};
export declare const RewardPointUpdate: {
    encode(message: RewardPointUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardPointUpdate;
    fromJSON(object: any): RewardPointUpdate;
    toJSON(message: RewardPointUpdate): unknown;
    create(base?: DeepPartial<RewardPointUpdate>): RewardPointUpdate;
    fromPartial(object: DeepPartial<RewardPointUpdate>): RewardPointUpdate;
};
export declare const TradingRewardPendingPointsUpdateProposal: {
    encode(message: TradingRewardPendingPointsUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradingRewardPendingPointsUpdateProposal;
    fromJSON(object: any): TradingRewardPendingPointsUpdateProposal;
    toJSON(message: TradingRewardPendingPointsUpdateProposal): unknown;
    create(base?: DeepPartial<TradingRewardPendingPointsUpdateProposal>): TradingRewardPendingPointsUpdateProposal;
    fromPartial(object: DeepPartial<TradingRewardPendingPointsUpdateProposal>): TradingRewardPendingPointsUpdateProposal;
};
export declare const FeeDiscountProposal: {
    encode(message: FeeDiscountProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeDiscountProposal;
    fromJSON(object: any): FeeDiscountProposal;
    toJSON(message: FeeDiscountProposal): unknown;
    create(base?: DeepPartial<FeeDiscountProposal>): FeeDiscountProposal;
    fromPartial(object: DeepPartial<FeeDiscountProposal>): FeeDiscountProposal;
};
export declare const BatchCommunityPoolSpendProposal: {
    encode(message: BatchCommunityPoolSpendProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCommunityPoolSpendProposal;
    fromJSON(object: any): BatchCommunityPoolSpendProposal;
    toJSON(message: BatchCommunityPoolSpendProposal): unknown;
    create(base?: DeepPartial<BatchCommunityPoolSpendProposal>): BatchCommunityPoolSpendProposal;
    fromPartial(object: DeepPartial<BatchCommunityPoolSpendProposal>): BatchCommunityPoolSpendProposal;
};
export declare const MsgRewardsOptOut: {
    encode(message: MsgRewardsOptOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRewardsOptOut;
    fromJSON(object: any): MsgRewardsOptOut;
    toJSON(message: MsgRewardsOptOut): unknown;
    create(base?: DeepPartial<MsgRewardsOptOut>): MsgRewardsOptOut;
    fromPartial(object: DeepPartial<MsgRewardsOptOut>): MsgRewardsOptOut;
};
export declare const MsgRewardsOptOutResponse: {
    encode(_: MsgRewardsOptOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRewardsOptOutResponse;
    fromJSON(_: any): MsgRewardsOptOutResponse;
    toJSON(_: MsgRewardsOptOutResponse): unknown;
    create(base?: DeepPartial<MsgRewardsOptOutResponse>): MsgRewardsOptOutResponse;
    fromPartial(_: DeepPartial<MsgRewardsOptOutResponse>): MsgRewardsOptOutResponse;
};
export declare const MsgReclaimLockedFunds: {
    encode(message: MsgReclaimLockedFunds, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgReclaimLockedFunds;
    fromJSON(object: any): MsgReclaimLockedFunds;
    toJSON(message: MsgReclaimLockedFunds): unknown;
    create(base?: DeepPartial<MsgReclaimLockedFunds>): MsgReclaimLockedFunds;
    fromPartial(object: DeepPartial<MsgReclaimLockedFunds>): MsgReclaimLockedFunds;
};
export declare const MsgReclaimLockedFundsResponse: {
    encode(_: MsgReclaimLockedFundsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgReclaimLockedFundsResponse;
    fromJSON(_: any): MsgReclaimLockedFundsResponse;
    toJSON(_: MsgReclaimLockedFundsResponse): unknown;
    create(base?: DeepPartial<MsgReclaimLockedFundsResponse>): MsgReclaimLockedFundsResponse;
    fromPartial(_: DeepPartial<MsgReclaimLockedFundsResponse>): MsgReclaimLockedFundsResponse;
};
export declare const MsgSignData: {
    encode(message: MsgSignData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignData;
    fromJSON(object: any): MsgSignData;
    toJSON(message: MsgSignData): unknown;
    create(base?: DeepPartial<MsgSignData>): MsgSignData;
    fromPartial(object: DeepPartial<MsgSignData>): MsgSignData;
};
export declare const MsgSignDoc: {
    encode(message: MsgSignDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignDoc;
    fromJSON(object: any): MsgSignDoc;
    toJSON(message: MsgSignDoc): unknown;
    create(base?: DeepPartial<MsgSignDoc>): MsgSignDoc;
    fromPartial(object: DeepPartial<MsgSignDoc>): MsgSignDoc;
};
export declare const MsgAdminUpdateBinaryOptionsMarket: {
    encode(message: MsgAdminUpdateBinaryOptionsMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdminUpdateBinaryOptionsMarket;
    fromJSON(object: any): MsgAdminUpdateBinaryOptionsMarket;
    toJSON(message: MsgAdminUpdateBinaryOptionsMarket): unknown;
    create(base?: DeepPartial<MsgAdminUpdateBinaryOptionsMarket>): MsgAdminUpdateBinaryOptionsMarket;
    fromPartial(object: DeepPartial<MsgAdminUpdateBinaryOptionsMarket>): MsgAdminUpdateBinaryOptionsMarket;
};
export declare const MsgAdminUpdateBinaryOptionsMarketResponse: {
    encode(_: MsgAdminUpdateBinaryOptionsMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdminUpdateBinaryOptionsMarketResponse;
    fromJSON(_: any): MsgAdminUpdateBinaryOptionsMarketResponse;
    toJSON(_: MsgAdminUpdateBinaryOptionsMarketResponse): unknown;
    create(base?: DeepPartial<MsgAdminUpdateBinaryOptionsMarketResponse>): MsgAdminUpdateBinaryOptionsMarketResponse;
    fromPartial(_: DeepPartial<MsgAdminUpdateBinaryOptionsMarketResponse>): MsgAdminUpdateBinaryOptionsMarketResponse;
};
export declare const AtomicMarketOrderFeeMultiplierScheduleProposal: {
    encode(message: AtomicMarketOrderFeeMultiplierScheduleProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AtomicMarketOrderFeeMultiplierScheduleProposal;
    fromJSON(object: any): AtomicMarketOrderFeeMultiplierScheduleProposal;
    toJSON(message: AtomicMarketOrderFeeMultiplierScheduleProposal): unknown;
    create(base?: DeepPartial<AtomicMarketOrderFeeMultiplierScheduleProposal>): AtomicMarketOrderFeeMultiplierScheduleProposal;
    fromPartial(object: DeepPartial<AtomicMarketOrderFeeMultiplierScheduleProposal>): AtomicMarketOrderFeeMultiplierScheduleProposal;
};
/** Msg defines the exchange Msg service. */
export interface Msg {
    /**
     * Deposit defines a method for transferring coins from the sender's bank
     * balance into the subaccount's exchange deposits
     */
    Deposit(request: DeepPartial<MsgDeposit>, metadata?: grpc.Metadata): Promise<MsgDepositResponse>;
    /**
     * Withdraw defines a method for withdrawing coins from a subaccount's
     * deposits to the user's bank balance
     */
    Withdraw(request: DeepPartial<MsgWithdraw>, metadata?: grpc.Metadata): Promise<MsgWithdrawResponse>;
    /**
     * InstantSpotMarketLaunch defines method for creating a spot market by paying
     * listing fee without governance
     */
    InstantSpotMarketLaunch(request: DeepPartial<MsgInstantSpotMarketLaunch>, metadata?: grpc.Metadata): Promise<MsgInstantSpotMarketLaunchResponse>;
    /**
     * InstantPerpetualMarketLaunch defines a method for creating a new perpetual
     * futures market by paying listing fee without governance
     */
    InstantPerpetualMarketLaunch(request: DeepPartial<MsgInstantPerpetualMarketLaunch>, metadata?: grpc.Metadata): Promise<MsgInstantPerpetualMarketLaunchResponse>;
    /**
     * InstantExpiryFuturesMarketLaunch defines a method for creating a new expiry
     * futures market by paying listing fee without governance
     */
    InstantExpiryFuturesMarketLaunch(request: DeepPartial<MsgInstantExpiryFuturesMarketLaunch>, metadata?: grpc.Metadata): Promise<MsgInstantExpiryFuturesMarketLaunchResponse>;
    /** CreateSpotLimitOrder defines a method for creating a new spot limit order. */
    CreateSpotLimitOrder(request: DeepPartial<MsgCreateSpotLimitOrder>, metadata?: grpc.Metadata): Promise<MsgCreateSpotLimitOrderResponse>;
    /**
     * BatchCreateSpotLimitOrder defines a method for creating a new batch of spot
     * limit orders.
     */
    BatchCreateSpotLimitOrders(request: DeepPartial<MsgBatchCreateSpotLimitOrders>, metadata?: grpc.Metadata): Promise<MsgBatchCreateSpotLimitOrdersResponse>;
    /**
     * CreateSpotMarketOrder defines a method for creating a new spot market
     * order.
     */
    CreateSpotMarketOrder(request: DeepPartial<MsgCreateSpotMarketOrder>, metadata?: grpc.Metadata): Promise<MsgCreateSpotMarketOrderResponse>;
    /** MsgCancelSpotOrder defines a method for cancelling a spot order. */
    CancelSpotOrder(request: DeepPartial<MsgCancelSpotOrder>, metadata?: grpc.Metadata): Promise<MsgCancelSpotOrderResponse>;
    /**
     * BatchCancelSpotOrders defines a method for cancelling a batch of spot
     * orders in a given market.
     */
    BatchCancelSpotOrders(request: DeepPartial<MsgBatchCancelSpotOrders>, metadata?: grpc.Metadata): Promise<MsgBatchCancelSpotOrdersResponse>;
    /** BatchUpdateOrders defines a method for updating a batch of orders. */
    BatchUpdateOrders(request: DeepPartial<MsgBatchUpdateOrders>, metadata?: grpc.Metadata): Promise<MsgBatchUpdateOrdersResponse>;
    /**
     * PrivilegedExecuteContract defines a method for executing a Cosmwasm
     * contract from the exchange module with privileged capabilities.
     */
    PrivilegedExecuteContract(request: DeepPartial<MsgPrivilegedExecuteContract>, metadata?: grpc.Metadata): Promise<MsgPrivilegedExecuteContractResponse>;
    /**
     * CreateDerivativeLimitOrder defines a method for creating a new derivative
     * limit order.
     */
    CreateDerivativeLimitOrder(request: DeepPartial<MsgCreateDerivativeLimitOrder>, metadata?: grpc.Metadata): Promise<MsgCreateDerivativeLimitOrderResponse>;
    /**
     * BatchCreateDerivativeLimitOrders defines a method for creating a new batch
     * of derivative limit orders.
     */
    BatchCreateDerivativeLimitOrders(request: DeepPartial<MsgBatchCreateDerivativeLimitOrders>, metadata?: grpc.Metadata): Promise<MsgBatchCreateDerivativeLimitOrdersResponse>;
    /**
     * MsgCreateDerivativeLimitOrder defines a method for creating a new
     * derivative market order.
     */
    CreateDerivativeMarketOrder(request: DeepPartial<MsgCreateDerivativeMarketOrder>, metadata?: grpc.Metadata): Promise<MsgCreateDerivativeMarketOrderResponse>;
    /**
     * MsgCancelDerivativeOrder defines a method for cancelling a derivative
     * order.
     */
    CancelDerivativeOrder(request: DeepPartial<MsgCancelDerivativeOrder>, metadata?: grpc.Metadata): Promise<MsgCancelDerivativeOrderResponse>;
    /**
     * MsgBatchCancelDerivativeOrders defines a method for cancelling a batch of
     * derivative limit orders.
     */
    BatchCancelDerivativeOrders(request: DeepPartial<MsgBatchCancelDerivativeOrders>, metadata?: grpc.Metadata): Promise<MsgBatchCancelDerivativeOrdersResponse>;
    /**
     * InstantBinaryOptionsMarketLaunch defines method for creating a binary
     * options market by paying listing fee without governance
     */
    InstantBinaryOptionsMarketLaunch(request: DeepPartial<MsgInstantBinaryOptionsMarketLaunch>, metadata?: grpc.Metadata): Promise<MsgInstantBinaryOptionsMarketLaunchResponse>;
    /**
     * CreateBinaryOptionsLimitOrder defines a method for creating a new binary
     * options limit order.
     */
    CreateBinaryOptionsLimitOrder(request: DeepPartial<MsgCreateBinaryOptionsLimitOrder>, metadata?: grpc.Metadata): Promise<MsgCreateBinaryOptionsLimitOrderResponse>;
    /**
     * CreateBinaryOptionsMarketOrder defines a method for creating a new binary
     * options market order.
     */
    CreateBinaryOptionsMarketOrder(request: DeepPartial<MsgCreateBinaryOptionsMarketOrder>, metadata?: grpc.Metadata): Promise<MsgCreateBinaryOptionsMarketOrderResponse>;
    /**
     * MsgCancelBinaryOptionsOrder defines a method for cancelling a binary
     * options order.
     */
    CancelBinaryOptionsOrder(request: DeepPartial<MsgCancelBinaryOptionsOrder>, metadata?: grpc.Metadata): Promise<MsgCancelBinaryOptionsOrderResponse>;
    /**
     * BatchCancelBinaryOptionsOrders defines a method for cancelling a batch of
     * binary options limit orders.
     */
    BatchCancelBinaryOptionsOrders(request: DeepPartial<MsgBatchCancelBinaryOptionsOrders>, metadata?: grpc.Metadata): Promise<MsgBatchCancelBinaryOptionsOrdersResponse>;
    /** SubaccountTransfer defines a method for transfer between subaccounts */
    SubaccountTransfer(request: DeepPartial<MsgSubaccountTransfer>, metadata?: grpc.Metadata): Promise<MsgSubaccountTransferResponse>;
    /** ExternalTransfer defines a method for transfer between external accounts */
    ExternalTransfer(request: DeepPartial<MsgExternalTransfer>, metadata?: grpc.Metadata): Promise<MsgExternalTransferResponse>;
    /** LiquidatePosition defines a method for liquidating a position */
    LiquidatePosition(request: DeepPartial<MsgLiquidatePosition>, metadata?: grpc.Metadata): Promise<MsgLiquidatePositionResponse>;
    /** IncreasePositionMargin defines a method for increasing margin of a position */
    IncreasePositionMargin(request: DeepPartial<MsgIncreasePositionMargin>, metadata?: grpc.Metadata): Promise<MsgIncreasePositionMarginResponse>;
    /** RewardsOptOut defines a method for opting out of rewards */
    RewardsOptOut(request: DeepPartial<MsgRewardsOptOut>, metadata?: grpc.Metadata): Promise<MsgRewardsOptOutResponse>;
    /**
     * AdminUpdateBinaryOptionsMarket defines method for updating a binary options
     * market by admin
     */
    AdminUpdateBinaryOptionsMarket(request: DeepPartial<MsgAdminUpdateBinaryOptionsMarket>, metadata?: grpc.Metadata): Promise<MsgAdminUpdateBinaryOptionsMarketResponse>;
    /**  */
    ReclaimLockedFunds(request: DeepPartial<MsgReclaimLockedFunds>, metadata?: grpc.Metadata): Promise<MsgReclaimLockedFundsResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Deposit(request: DeepPartial<MsgDeposit>, metadata?: grpc.Metadata): Promise<MsgDepositResponse>;
    Withdraw(request: DeepPartial<MsgWithdraw>, metadata?: grpc.Metadata): Promise<MsgWithdrawResponse>;
    InstantSpotMarketLaunch(request: DeepPartial<MsgInstantSpotMarketLaunch>, metadata?: grpc.Metadata): Promise<MsgInstantSpotMarketLaunchResponse>;
    InstantPerpetualMarketLaunch(request: DeepPartial<MsgInstantPerpetualMarketLaunch>, metadata?: grpc.Metadata): Promise<MsgInstantPerpetualMarketLaunchResponse>;
    InstantExpiryFuturesMarketLaunch(request: DeepPartial<MsgInstantExpiryFuturesMarketLaunch>, metadata?: grpc.Metadata): Promise<MsgInstantExpiryFuturesMarketLaunchResponse>;
    CreateSpotLimitOrder(request: DeepPartial<MsgCreateSpotLimitOrder>, metadata?: grpc.Metadata): Promise<MsgCreateSpotLimitOrderResponse>;
    BatchCreateSpotLimitOrders(request: DeepPartial<MsgBatchCreateSpotLimitOrders>, metadata?: grpc.Metadata): Promise<MsgBatchCreateSpotLimitOrdersResponse>;
    CreateSpotMarketOrder(request: DeepPartial<MsgCreateSpotMarketOrder>, metadata?: grpc.Metadata): Promise<MsgCreateSpotMarketOrderResponse>;
    CancelSpotOrder(request: DeepPartial<MsgCancelSpotOrder>, metadata?: grpc.Metadata): Promise<MsgCancelSpotOrderResponse>;
    BatchCancelSpotOrders(request: DeepPartial<MsgBatchCancelSpotOrders>, metadata?: grpc.Metadata): Promise<MsgBatchCancelSpotOrdersResponse>;
    BatchUpdateOrders(request: DeepPartial<MsgBatchUpdateOrders>, metadata?: grpc.Metadata): Promise<MsgBatchUpdateOrdersResponse>;
    PrivilegedExecuteContract(request: DeepPartial<MsgPrivilegedExecuteContract>, metadata?: grpc.Metadata): Promise<MsgPrivilegedExecuteContractResponse>;
    CreateDerivativeLimitOrder(request: DeepPartial<MsgCreateDerivativeLimitOrder>, metadata?: grpc.Metadata): Promise<MsgCreateDerivativeLimitOrderResponse>;
    BatchCreateDerivativeLimitOrders(request: DeepPartial<MsgBatchCreateDerivativeLimitOrders>, metadata?: grpc.Metadata): Promise<MsgBatchCreateDerivativeLimitOrdersResponse>;
    CreateDerivativeMarketOrder(request: DeepPartial<MsgCreateDerivativeMarketOrder>, metadata?: grpc.Metadata): Promise<MsgCreateDerivativeMarketOrderResponse>;
    CancelDerivativeOrder(request: DeepPartial<MsgCancelDerivativeOrder>, metadata?: grpc.Metadata): Promise<MsgCancelDerivativeOrderResponse>;
    BatchCancelDerivativeOrders(request: DeepPartial<MsgBatchCancelDerivativeOrders>, metadata?: grpc.Metadata): Promise<MsgBatchCancelDerivativeOrdersResponse>;
    InstantBinaryOptionsMarketLaunch(request: DeepPartial<MsgInstantBinaryOptionsMarketLaunch>, metadata?: grpc.Metadata): Promise<MsgInstantBinaryOptionsMarketLaunchResponse>;
    CreateBinaryOptionsLimitOrder(request: DeepPartial<MsgCreateBinaryOptionsLimitOrder>, metadata?: grpc.Metadata): Promise<MsgCreateBinaryOptionsLimitOrderResponse>;
    CreateBinaryOptionsMarketOrder(request: DeepPartial<MsgCreateBinaryOptionsMarketOrder>, metadata?: grpc.Metadata): Promise<MsgCreateBinaryOptionsMarketOrderResponse>;
    CancelBinaryOptionsOrder(request: DeepPartial<MsgCancelBinaryOptionsOrder>, metadata?: grpc.Metadata): Promise<MsgCancelBinaryOptionsOrderResponse>;
    BatchCancelBinaryOptionsOrders(request: DeepPartial<MsgBatchCancelBinaryOptionsOrders>, metadata?: grpc.Metadata): Promise<MsgBatchCancelBinaryOptionsOrdersResponse>;
    SubaccountTransfer(request: DeepPartial<MsgSubaccountTransfer>, metadata?: grpc.Metadata): Promise<MsgSubaccountTransferResponse>;
    ExternalTransfer(request: DeepPartial<MsgExternalTransfer>, metadata?: grpc.Metadata): Promise<MsgExternalTransferResponse>;
    LiquidatePosition(request: DeepPartial<MsgLiquidatePosition>, metadata?: grpc.Metadata): Promise<MsgLiquidatePositionResponse>;
    IncreasePositionMargin(request: DeepPartial<MsgIncreasePositionMargin>, metadata?: grpc.Metadata): Promise<MsgIncreasePositionMarginResponse>;
    RewardsOptOut(request: DeepPartial<MsgRewardsOptOut>, metadata?: grpc.Metadata): Promise<MsgRewardsOptOutResponse>;
    AdminUpdateBinaryOptionsMarket(request: DeepPartial<MsgAdminUpdateBinaryOptionsMarket>, metadata?: grpc.Metadata): Promise<MsgAdminUpdateBinaryOptionsMarketResponse>;
    ReclaimLockedFunds(request: DeepPartial<MsgReclaimLockedFunds>, metadata?: grpc.Metadata): Promise<MsgReclaimLockedFundsResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgDepositDesc: UnaryMethodDefinitionish;
export declare const MsgWithdrawDesc: UnaryMethodDefinitionish;
export declare const MsgInstantSpotMarketLaunchDesc: UnaryMethodDefinitionish;
export declare const MsgInstantPerpetualMarketLaunchDesc: UnaryMethodDefinitionish;
export declare const MsgInstantExpiryFuturesMarketLaunchDesc: UnaryMethodDefinitionish;
export declare const MsgCreateSpotLimitOrderDesc: UnaryMethodDefinitionish;
export declare const MsgBatchCreateSpotLimitOrdersDesc: UnaryMethodDefinitionish;
export declare const MsgCreateSpotMarketOrderDesc: UnaryMethodDefinitionish;
export declare const MsgCancelSpotOrderDesc: UnaryMethodDefinitionish;
export declare const MsgBatchCancelSpotOrdersDesc: UnaryMethodDefinitionish;
export declare const MsgBatchUpdateOrdersDesc: UnaryMethodDefinitionish;
export declare const MsgPrivilegedExecuteContractDesc: UnaryMethodDefinitionish;
export declare const MsgCreateDerivativeLimitOrderDesc: UnaryMethodDefinitionish;
export declare const MsgBatchCreateDerivativeLimitOrdersDesc: UnaryMethodDefinitionish;
export declare const MsgCreateDerivativeMarketOrderDesc: UnaryMethodDefinitionish;
export declare const MsgCancelDerivativeOrderDesc: UnaryMethodDefinitionish;
export declare const MsgBatchCancelDerivativeOrdersDesc: UnaryMethodDefinitionish;
export declare const MsgInstantBinaryOptionsMarketLaunchDesc: UnaryMethodDefinitionish;
export declare const MsgCreateBinaryOptionsLimitOrderDesc: UnaryMethodDefinitionish;
export declare const MsgCreateBinaryOptionsMarketOrderDesc: UnaryMethodDefinitionish;
export declare const MsgCancelBinaryOptionsOrderDesc: UnaryMethodDefinitionish;
export declare const MsgBatchCancelBinaryOptionsOrdersDesc: UnaryMethodDefinitionish;
export declare const MsgSubaccountTransferDesc: UnaryMethodDefinitionish;
export declare const MsgExternalTransferDesc: UnaryMethodDefinitionish;
export declare const MsgLiquidatePositionDesc: UnaryMethodDefinitionish;
export declare const MsgIncreasePositionMarginDesc: UnaryMethodDefinitionish;
export declare const MsgRewardsOptOutDesc: UnaryMethodDefinitionish;
export declare const MsgAdminUpdateBinaryOptionsMarketDesc: UnaryMethodDefinitionish;
export declare const MsgReclaimLockedFundsDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateParamsDesc: UnaryMethodDefinitionish;
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
