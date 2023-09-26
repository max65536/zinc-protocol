import { EthereumChainId } from '@injectivelabs/ts-types';
import { Eip712ConvertFeeArgs, Eip712ConvertTxArgs } from './types';
export declare const getEip712Domain: (ethereumChainId: EthereumChainId) => {
    domain: {
        name: string;
        version: string;
        chainId: string;
        salt: string;
        verifyingContract: string;
    };
};
export declare const getDefaultEip712Types: () => {
    types: {
        EIP712Domain: {
            name: string;
            type: string;
        }[];
        Tx: {
            name: string;
            type: string;
        }[];
        Fee: {
            name: string;
            type: string;
        }[];
        Coin: {
            name: string;
            type: string;
        }[];
        Msg: {
            name: string;
            type: string;
        }[];
    };
};
export declare const getEip712Fee: (params?: Eip712ConvertFeeArgs) => {
    fee: {
        amount: {
            amount: string;
            denom: string;
        }[];
        gas: string;
        feePayer?: string | undefined;
    };
};
export declare const getTypesIncludingFeePayer: ({ fee, types, }: {
    fee?: Eip712ConvertFeeArgs | undefined;
    types: ReturnType<typeof getDefaultEip712Types>;
}) => {
    types: {
        EIP712Domain: {
            name: string;
            type: string;
        }[];
        Tx: {
            name: string;
            type: string;
        }[];
        Fee: {
            name: string;
            type: string;
        }[];
        Coin: {
            name: string;
            type: string;
        }[];
        Msg: {
            name: string;
            type: string;
        }[];
    };
};
export declare const getEipTxDetails: ({ accountNumber, sequence, timeoutHeight, chainId, memo, }: Eip712ConvertTxArgs) => {
    account_number: string;
    chain_id: string;
    sequence: string;
    timeout_height: string;
    memo: string;
};
//# sourceMappingURL=utils.d.ts.map