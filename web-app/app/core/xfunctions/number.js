/**
 * Created by phanquan on 7/23/16.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Number;
    return {
        setters:[],
        execute: function() {
            class Number {
                constructor() {
                    this.formatNumber = function (number, n, x, s, c) {
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
                        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')', num = number.toFixed(Math.max(0, ~~n));
                        return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
                    };
                }
                formatNumber(number, decimal, sections) {
                    //var anumber=123.45
                    //anumber.toPrecision(6) //returns 123.450 (padding)
                    //anumber.toPrecision(4) //returns 123.5 (round up)
                    //anumber.toPrecision(2) //returns 1.2e+2 (you figure it out!)
                    if (isNaN(number)) {
                        return '';
                    }
                    if (number == '')
                        return '';
                    var re = '\\d(?=(\\d{' + (sections || 3) + '})+' + (decimal > 0 ? '\\.' : '$') + ')';
                    return number.toFixed(Math.max(0, ~~decimal)).replace(new RegExp(re, 'g'), '$&,');
                }
                formatNumber(num, fixed) {
                    //formatNumber(17347, 0)  = 17.347
                    //formatNumber(17347, 3)  = 17.347,000
                    //formatNumber(1234563.4545, 3)  = 1.234.563,454
                    var decimalPart;
                    var array = Math.floor(num).toString().split('');
                    var index = -3;
                    while (array.length + index > 0) {
                        array.splice(index, 0, '.');
                        index -= 4;
                    }
                    if (fixed > 0) {
                        decimalPart = num.toFixed(fixed).split(".")[1];
                        return array.join('') + "," + decimalPart;
                    }
                    return array.join('');
                }
                ;
            }
            exports_1("Number", Number);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUveGZ1bmN0aW9ucy9udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7O1lBRUg7Z0JBQ0k7b0JBSUEsaUJBQVksR0FBRyxVQUFTLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO3dCQUN0Qzs7Ozs7Ozs7Ozs7MkJBV0c7d0JBRUgsSUFBSSxFQUFFLEdBQUcsYUFBYSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFDbkUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRTNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMzRixDQUFDLENBQUM7Z0JBcEJGLENBQUM7Z0JBc0JELFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVE7b0JBRWxDLG9CQUFvQjtvQkFDcEIsb0RBQW9EO29CQUNwRCxtREFBbUQ7b0JBQ25ELDhEQUE4RDtvQkFDOUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsTUFBTSxDQUFDLEVBQUUsQ0FBQztvQkFDZCxDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBRSxFQUFFLENBQUM7d0JBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxFQUFFLEdBQUcsYUFBYSxHQUFHLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDckYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDdEYsQ0FBQztnQkFFRixZQUFZLENBQUUsR0FBRyxFQUFFLEtBQUs7b0JBQ3BCLGtDQUFrQztvQkFDbEMsc0NBQXNDO29CQUN0QyxnREFBZ0Q7b0JBRS9DLElBQUksV0FBVyxDQUFDO29CQUVoQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDakQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsT0FBUSxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUcsQ0FBQzt3QkFDaEMsS0FBSyxDQUFDLE1BQU0sQ0FBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBRSxDQUFDO3dCQUM5QixLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNmLENBQUM7b0JBRUQsRUFBRSxDQUFBLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ1YsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDO29CQUM5QyxDQUFDO29CQUNELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDOztZQUdMLENBQUM7WUE3REQsMkJBNkRDLENBQUEiLCJmaWxlIjoiY29yZS94ZnVuY3Rpb25zL251bWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA3LzIzLzE2LlxuICovXG5cbmV4cG9ydCBjbGFzcyBOdW1iZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgZm9ybWF0TnVtYmVyID0gZnVuY3Rpb24obnVtYmVyLCBuLCB4LCBzLCBjKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOdW1iZXIucHJvdG90eXBlLmZvcm1hdChuLCB4LCBzLCBjKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gaW50ZWdlciBuOiBsZW5ndGggb2YgZGVjaW1hbFxuICAgICAgICAgKiBAcGFyYW0gaW50ZWdlciB4OiBsZW5ndGggb2Ygd2hvbGUgcGFydFxuICAgICAgICAgKiBAcGFyYW0gbWl4ZWQgICBzOiBzZWN0aW9ucyBkZWxpbWl0ZXJcbiAgICAgICAgICogQHBhcmFtIG1peGVkICAgYzogZGVjaW1hbCBkZWxpbWl0ZXJcbiAgICAgICAgICpcbiAgICAgICAgICogIDEyMzQ1Njc4LjkuZm9ybWF0KDIsIDMsICcuJywgJywnKTsgIC8vIFwiMTIuMzQ1LjY3OCw5MFwiXG4gICAgICAgICAqICAxMjM0NTYuNzg5LmZvcm1hdCg0LCA0LCAnICcsICc6Jyk7ICAvLyBcIjEyIDM0NTY6Nzg5MFwiXG4gICAgICAgICAqICAxMjM0NTY3OC45LmZvcm1hdCgwLCAzLCAnLScpOyAgICAgICAvLyBcIjEyLTM0NS02NzlcIlxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgcmUgPSAnXFxcXGQoPz0oXFxcXGR7JyArICh4IHx8IDMpICsgJ30pKycgKyAobiA+IDAgPyAnXFxcXEQnIDogJyQnKSArICcpJyxcbiAgICAgICAgICAgIG51bSA9IG51bWJlci50b0ZpeGVkKE1hdGgubWF4KDAsIH5+bikpO1xuXG4gICAgICAgIHJldHVybiAoYyA/IG51bS5yZXBsYWNlKCcuJywgYykgOiBudW0pLnJlcGxhY2UobmV3IFJlZ0V4cChyZSwgJ2cnKSwgJyQmJyArIChzIHx8ICcsJykpO1xuICAgIH07XG5cbiAgICBmb3JtYXROdW1iZXIobnVtYmVyLCBkZWNpbWFsLCBzZWN0aW9ucylcbiAgICB7XG4gICAgICAgIC8vdmFyIGFudW1iZXI9MTIzLjQ1XG4gICAgICAgIC8vYW51bWJlci50b1ByZWNpc2lvbig2KSAvL3JldHVybnMgMTIzLjQ1MCAocGFkZGluZylcbiAgICAgICAgLy9hbnVtYmVyLnRvUHJlY2lzaW9uKDQpIC8vcmV0dXJucyAxMjMuNSAocm91bmQgdXApXG4gICAgICAgIC8vYW51bWJlci50b1ByZWNpc2lvbigyKSAvL3JldHVybnMgMS4yZSsyICh5b3UgZmlndXJlIGl0IG91dCEpXG4gICAgICAgIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYobnVtYmVyPT0nJykgcmV0dXJuICcnO1xuICAgICAgICB2YXIgcmUgPSAnXFxcXGQoPz0oXFxcXGR7JyArIChzZWN0aW9ucyB8fCAzKSArICd9KSsnICsgKGRlY2ltYWwgPiAwID8gJ1xcXFwuJyA6ICckJykgKyAnKSc7XG4gICAgICAgIHJldHVybiBudW1iZXIudG9GaXhlZChNYXRoLm1heCgwLCB+fmRlY2ltYWwpKS5yZXBsYWNlKG5ldyBSZWdFeHAocmUsICdnJyksICckJiwnKTtcbiAgICB9XG5cbiAgIGZvcm1hdE51bWJlciggbnVtLCBmaXhlZCApIHtcbiAgICAgICAvL2Zvcm1hdE51bWJlcigxNzM0NywgMCkgID0gMTcuMzQ3XG4gICAgICAgLy9mb3JtYXROdW1iZXIoMTczNDcsIDMpICA9IDE3LjM0NywwMDBcbiAgICAgICAvL2Zvcm1hdE51bWJlcigxMjM0NTYzLjQ1NDUsIDMpICA9IDEuMjM0LjU2Myw0NTRcblxuICAgICAgICB2YXIgZGVjaW1hbFBhcnQ7XG5cbiAgICAgICAgdmFyIGFycmF5ID0gTWF0aC5mbG9vcihudW0pLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICAgICAgICB2YXIgaW5kZXggPSAtMztcbiAgICAgICAgd2hpbGUgKCBhcnJheS5sZW5ndGggKyBpbmRleCA+IDAgKSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoIGluZGV4LCAwLCAnLicgKTtcbiAgICAgICAgICAgIGluZGV4IC09IDQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZihmaXhlZCA+IDApe1xuICAgICAgICAgICAgZGVjaW1hbFBhcnQgPSBudW0udG9GaXhlZChmaXhlZCkuc3BsaXQoXCIuXCIpWzFdO1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5LmpvaW4oJycpICsgXCIsXCIgKyBkZWNpbWFsUGFydDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXkuam9pbignJyk7XG4gICAgfTtcblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
