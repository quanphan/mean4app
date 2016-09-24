System.register(['./field-value'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var field_value_1;
    var BooleanFieldValueTest;
    return {
        setters:[
            function (field_value_1_1) {
                field_value_1 = field_value_1_1;
            }],
        execute: function() {
            describe('BooleanFieldValue', () => {
                it('should work for null values', () => {
                    let x = new BooleanFieldValueTest();
                    x.field = null;
                    expect(x.field).toBe(false);
                    x.field = undefined;
                    expect(x.field).toBe(false);
                });
                it('should work for string values', () => {
                    let x = new BooleanFieldValueTest();
                    x.field = 'hello';
                    expect(x.field).toBe(true);
                    x.field = 'true';
                    expect(x.field).toBe(true);
                    x.field = '';
                    expect(x.field).toBe(true);
                    x.field = 'false';
                    expect(x.field).toBe(false);
                });
            });
            class BooleanFieldValueTest {
            }
            __decorate([
                field_value_1.BooleanFieldValue(), 
                __metadata('design:type', Boolean)
            ], BooleanFieldValueTest.prototype, "field", void 0);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvYW5ub3RhdGlvbnMvZmllbGQtdmFsdWUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtnQkFDNUIsRUFBRSxDQUFDLDZCQUE2QixFQUFFO29CQUNoQyxJQUFJLENBQUMsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7b0JBRXBDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNmLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUU1QixDQUFDLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztvQkFDcEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO2dCQUVILEVBQUUsQ0FBQywrQkFBK0IsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO29CQUU5QixDQUFFLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztvQkFDekIsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXJCLENBQUUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO29CQUN4QixNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFckIsQ0FBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ3BCLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUVyQixDQUFFLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztvQkFDekIsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFHSDtZQUVBLENBQUM7WUFEQztnQkFBQywrQkFBaUIsRUFBRTs7Z0VBQUE7WUFDckIiLCJmaWxlIjoiY29yZS9hbm5vdGF0aW9ucy9maWVsZC12YWx1ZS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCb29sZWFuRmllbGRWYWx1ZX0gZnJvbSAnLi9maWVsZC12YWx1ZSc7XG5cbmRlc2NyaWJlKCdCb29sZWFuRmllbGRWYWx1ZScsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCB3b3JrIGZvciBudWxsIHZhbHVlcycsICgpID0+IHtcbiAgICBsZXQgeCA9IG5ldyBCb29sZWFuRmllbGRWYWx1ZVRlc3QoKTtcblxuICAgIHguZmllbGQgPSBudWxsO1xuICAgIGV4cGVjdCh4LmZpZWxkKS50b0JlKGZhbHNlKTtcblxuICAgIHguZmllbGQgPSB1bmRlZmluZWQ7XG4gICAgZXhwZWN0KHguZmllbGQpLnRvQmUoZmFsc2UpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHdvcmsgZm9yIHN0cmluZyB2YWx1ZXMnLCAoKSA9PiB7XG4gICAgbGV0IHggPSBuZXcgQm9vbGVhbkZpZWxkVmFsdWVUZXN0KCk7XG5cbiAgICAoPGFueT54KS5maWVsZCA9ICdoZWxsbyc7XG4gICAgZXhwZWN0KHguZmllbGQpLnRvQmUodHJ1ZSk7XG5cbiAgICAoPGFueT54KS5maWVsZCA9ICd0cnVlJztcbiAgICBleHBlY3QoeC5maWVsZCkudG9CZSh0cnVlKTtcblxuICAgICg8YW55PngpLmZpZWxkID0gJyc7XG4gICAgZXhwZWN0KHguZmllbGQpLnRvQmUodHJ1ZSk7XG5cbiAgICAoPGFueT54KS5maWVsZCA9ICdmYWxzZSc7XG4gICAgZXhwZWN0KHguZmllbGQpLnRvQmUoZmFsc2UpO1xuICB9KTtcbn0pO1xuXG5cbmNsYXNzIEJvb2xlYW5GaWVsZFZhbHVlVGVzdCB7XG4gIEBCb29sZWFuRmllbGRWYWx1ZSgpIGZpZWxkOiBib29sZWFuO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
