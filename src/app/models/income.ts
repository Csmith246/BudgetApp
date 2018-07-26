export class Income {
    amount: number;
    source: string;
    key: string;

    constructor(num:number, src: string, key: string){
        this.amount = num;
        this.source = src;
    }
}
