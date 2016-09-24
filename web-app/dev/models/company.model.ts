
/**
 * Created by phanquan on 3/4/16.
 */

export class CompanyDto {
    private code:string;
    private name:string;
    private address:string;

    constructor(){
        this.code="21";
        this.name="abc";
    }

    get Code():string{
        return this.code;
    }
    set Code(value:string){
        this.code=value;
    }

    get Name():string{
        return this.name;
    }
    set Name(value:string){
        this.name=value;
    }

    get Address():string{
        return this.address;
    }
    set Address(value:string){
        this.address=value;
    }



}
