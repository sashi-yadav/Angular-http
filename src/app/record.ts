export class Record {
    id:number;
    description: string;
    remark: string;
    constructor(value: Object = {}){
        Object.assign(this,value);
    }
}
