import { BpiSubject } from "../identity/bpiSubject";

export class BpiAccount {
    // TODO: what does the bellow statement mean? As an creator\owner?
    // [R243]
    // A BPI state object MUST be associated with an account.
    id: string;
    owners: BpiSubject[];
    nonce: number = 0;
    
    getNonce(): number {
        return this.nonce;
    }

    incrementNonce() {
        this.nonce += 1;
    }
}