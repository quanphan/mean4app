/**
 * Created by phanquan on 3/4/16.
 */

export class User {
    private userId:string;
    private userName:string;
    private fullName:string;
    private passWord:string;
    constructor(){

    }

    get UserID():string{
        return this.userId;
    }
    set UserID(value:string){
        this.userId=value;
    }

    get UserName():string{
        return this.userName;
    }
    set UserName(value:string){
        this.userName=value;
    }

    get FullName():string{
        return this.fullName;
    }
    set FullName(value:string){
        this.fullName=value;
    }

    get PassWord():string{
        return this.passWord;
    }
    set PassWord(value:string){
        this.passWord=value;
    }

}
