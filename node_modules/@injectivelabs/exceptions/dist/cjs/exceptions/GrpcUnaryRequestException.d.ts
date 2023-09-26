import { ConcreteException } from '../exception';
import { ErrorContext } from '../types';
export declare class GrpcUnaryRequestException extends ConcreteException {
    errorClass: string;
    constructor(error: Error, context?: ErrorContext);
}
//# sourceMappingURL=GrpcUnaryRequestException.d.ts.map