import { GrpcUnaryRequestException } from './GrpcUnaryRequestException';
import { HttpRequestException } from './HttpRequestException';
import { Web3Exception } from './Web3Exception';
import { GeneralException } from './GeneralException';
import { LedgerException } from './LedgerException';
import { MetamaskException } from './MetamaskException';
import { TrustWalletException } from './TrustWalletException';
import { TrezorException } from './TrezorException';
import { CosmosWalletException } from './CosmosWalletException';
import { TransactionException } from './TransactionException';
import { WalletException } from './WalletException';
import { Exception } from '../types';
export type ThrownException = GrpcUnaryRequestException | HttpRequestException | Web3Exception | GeneralException | LedgerException | MetamaskException | TrustWalletException | TrezorException | CosmosWalletException | TransactionException | WalletException;
export declare const isThrownException: (exception: Error | Exception) => boolean;
export { GrpcUnaryRequestException, HttpRequestException, Web3Exception, GeneralException, LedgerException, MetamaskException, TrezorException, TrustWalletException, CosmosWalletException, TransactionException, WalletException, };
//# sourceMappingURL=index.d.ts.map