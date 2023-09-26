import { ConcreteException } from '../exception';
import { ErrorContext } from '../types';
export declare class TrustWalletException extends ConcreteException {
    errorClass: string;
    constructor(error: Error, context?: ErrorContext);
    parseMessage(): void;
}
//# sourceMappingURL=TrustWalletException.d.ts.map