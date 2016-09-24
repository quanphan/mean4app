/**
 * Created by phanquan on 7/23/16.
 */

export class Number {
    constructor() {

    }

    formatNumber = function(number, n, x, s, c) {
        /**
         * Number.prototype.format(n, x, s, c)
         *
         * @param integer n: length of decimal
         * @param integer x: length of whole part
         * @param mixed   s: sections delimiter
         * @param mixed   c: decimal delimiter
         *
         *  12345678.9.format(2, 3, '.', ',');  // "12.345.678,90"
         *  123456.789.format(4, 4, ' ', ':');  // "12 3456:7890"
         *  12345678.9.format(0, 3, '-');       // "12-345-679"
         */

        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
            num = number.toFixed(Math.max(0, ~~n));

        return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
    };

    formatNumber(number, decimal, sections)
    {
        //var anumber=123.45
        //anumber.toPrecision(6) //returns 123.450 (padding)
        //anumber.toPrecision(4) //returns 123.5 (round up)
        //anumber.toPrecision(2) //returns 1.2e+2 (you figure it out!)
        if (isNaN(number)) {
            return '';
        }
        if(number=='') return '';
        var re = '\\d(?=(\\d{' + (sections || 3) + '})+' + (decimal > 0 ? '\\.' : '$') + ')';
        return number.toFixed(Math.max(0, ~~decimal)).replace(new RegExp(re, 'g'), '$&,');
    }

   formatNumber( num, fixed ) {
       //formatNumber(17347, 0)  = 17.347
       //formatNumber(17347, 3)  = 17.347,000
       //formatNumber(1234563.4545, 3)  = 1.234.563,454

        var decimalPart;

        var array = Math.floor(num).toString().split('');
        var index = -3;
        while ( array.length + index > 0 ) {
            array.splice( index, 0, '.' );
            index -= 4;
        }

        if(fixed > 0){
            decimalPart = num.toFixed(fixed).split(".")[1];
            return array.join('') + "," + decimalPart;
        }
        return array.join('');
    };


}
