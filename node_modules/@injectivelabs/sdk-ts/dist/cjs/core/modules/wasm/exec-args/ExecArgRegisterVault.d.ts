import { ExecArgBase, ExecDataRepresentation } from '../ExecArgBase';
export declare namespace ExecArgRegisterVault {
    interface Params {
        vaultCodeId: number;
        vaultLabel: string;
        instantiateVaultMsg: Record<string, any>;
    }
    interface Data {
        vault_code_id: number;
        vault_label: string;
        instantiate_vault_msg: Record<string, any>;
    }
}
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgRegisterVault extends ExecArgBase<ExecArgRegisterVault.Params, ExecArgRegisterVault.Data> {
    static fromJSON(params: ExecArgRegisterVault.Params): ExecArgRegisterVault;
    toData(): ExecArgRegisterVault.Data;
    toExecData(): ExecDataRepresentation<ExecArgRegisterVault.Data>;
}
//# sourceMappingURL=ExecArgRegisterVault.d.ts.map