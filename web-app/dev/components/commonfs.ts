/**
 * Created by phanquan on 5/14/16.
 */
import {Moment} from 'moment';

export class Datetime {
    constructor(){

    }

    getCurDate()
    {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }
        today = mm+'/'+dd+'/'+yyyy;

        return today;
    }

    addDate(date,days)
    {
        date=new Date();
        var currentDate = date.getDate();
        date.setDate(currentDate + days);
        var dd = date.getDate();
        var mm = date.getMonth()+1; //January is 0!
        var yyyy = date.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }
        date = mm+'/'+dd+'/'+yyyy;

        return date;
    }

    getYearMonth(date:string)
    {
        return date.substr(0, 3)+date.substr(6, 4);
    }

    getDate(date:string)
    {
        return date.substr(3, 2);
    }

    getMonth(date:string)
    {
        return date.substr(0, 3);
    }

    getYear(date:string)
    {
        return date.substr(6, 4);
    }
}

