/**
 * Created by phanquan on 7/23/16.
 * Test
 */
System.register(['@angular/core'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var MaskInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let MaskInput = class MaskInput {
                constructor(model, maskPattern) {
                    this.model = model;
                    this.dividers = maskPattern.replace(/\*/g, "").split("");
                    this.dividers.push(" ");
                    this.generatePattern(maskPattern);
                }
                ngOnInit() {
                }
                onInputChange() {
                    this.modelValue = this.getModelValue();
                    var stringToFormat = this.modelValue;
                    if (stringToFormat.length < 10) {
                        stringToFormat = this.padString(stringToFormat);
                    }
                    this.viewValue = this.format(stringToFormat);
                    this.model.viewToModelUpdate(this.modelValue);
                    this.model.valueAccessor.writeValue(this.viewValue);
                }
                generatePattern(patternString) {
                    this.placeHolderCounts = (patternString.match(/\*/g) || []).length;
                    for (let i = 0; i < this.placeHolderCounts; i++) {
                        patternString = patternString.replace('*', "{" + i + "}");
                    }
                    this.maskPattern = patternString;
                }
                format(s) {
                    var formattedString = this.maskPattern;
                    for (let i = 0; i < this.placeHolderCounts; i++) {
                        formattedString = formattedString.replace("{" + i + "}", s.charAt(i));
                    }
                    return formattedString;
                }
                padString(s) {
                    var pad = "          ";
                    return (s + pad).substring(0, pad.length);
                }
                getModelValue() {
                    var modelValue = this.model.value;
                    for (var i = 0; i < this.dividers.length; i++) {
                        while (modelValue.indexOf(this.dividers[i]) > -1) {
                            modelValue = modelValue.replace(this.dividers[i], "");
                        }
                    }
                    return modelValue;
                }
            };
            MaskInput = __decorate([
                core_1.Directive({
                    selector: '[mask]',
                    host: {
                        '(keyup)': 'onInputChange()'
                    }
                }),
                __param(1, core_1.Attribute("mask")), 
                __metadata('design:paramtypes', [Object, String])
            ], MaskInput);
            exports_1("MaskInput", MaskInput);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2lucHV0TWFzay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVSDtnQkFPSSxZQUNXLEtBQVcsRUFDQyxXQUFtQjtvQkFEL0IsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFHbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVELFFBQVE7Z0JBRVIsQ0FBQztnQkFFRCxhQUFhO29CQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUN2QyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUNyQyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNwRCxDQUFDO29CQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQ3ZELENBQUM7Z0JBRUQsZUFBZSxDQUFDLGFBQWE7b0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO29CQUNuRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUM5QyxhQUFhLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDOUQsQ0FBQztvQkFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztnQkFDckMsQ0FBQztnQkFFRCxNQUFNLENBQUMsQ0FBQztvQkFDSixJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUN2QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUM5QyxlQUFlLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFFLENBQUM7b0JBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCxTQUFTLENBQUMsQ0FBQztvQkFDUCxJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUM7b0JBQ3ZCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFRCxhQUFhO29CQUNULElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUNsQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzVDLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0QkFDL0MsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDMUQsQ0FBQztvQkFDTCxDQUFDO29CQUNELE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQ3RCLENBQUM7WUFDTCxDQUFDO1lBcEVEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLElBQUksRUFBRTt3QkFDRixTQUFTLEVBQUUsaUJBQWlCO3FCQUMvQjtpQkFDSixDQUFDOzJCQVVPLGdCQUFTLENBQUMsTUFBTSxDQUFDOzt5QkFWeEI7WUFDRixpQ0E4REMsQ0FBQSIsImZpbGUiOiJjb250cm9sLWNvbXBvbmVudC9pbnB1dE1hc2suY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDcvMjMvMTYuXG4gKiBUZXN0XG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEF0dHJpYnV0ZSxDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1ttYXNrXScsXG4gICAgaG9zdDoge1xuICAgICAgICAnKGtleXVwKSc6ICdvbklucHV0Q2hhbmdlKCknXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBNYXNrSW5wdXQge1xuICAgIG1hc2tQYXR0ZXJuOiBzdHJpbmc7XG4gICAgcGxhY2VIb2xkZXJDb3VudHM6IG51bWJlcjtcbiAgICBkaXZpZGVyczogc3RyaW5nW107XG4gICAgbW9kZWxWYWx1ZTogc3RyaW5nO1xuICAgIHZpZXdWYWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBtb2RlbDogdGhpcyxcbiAgICAgICAgQEF0dHJpYnV0ZShcIm1hc2tcIikgbWFza1BhdHRlcm46IHN0cmluZ1xuICAgICkge1xuICAgICAgICB0aGlzLmRpdmlkZXJzID0gbWFza1BhdHRlcm4ucmVwbGFjZSgvXFwqL2csIFwiXCIpLnNwbGl0KFwiXCIpO1xuICAgICAgICB0aGlzLmRpdmlkZXJzLnB1c2goXCIgXCIpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlUGF0dGVybihtYXNrUGF0dGVybik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBvbklucHV0Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSB0aGlzLmdldE1vZGVsVmFsdWUoKTtcbiAgICAgICAgdmFyIHN0cmluZ1RvRm9ybWF0ID0gdGhpcy5tb2RlbFZhbHVlO1xuICAgICAgICBpZiAoc3RyaW5nVG9Gb3JtYXQubGVuZ3RoIDwgMTApIHtcbiAgICAgICAgICAgIHN0cmluZ1RvRm9ybWF0ID0gdGhpcy5wYWRTdHJpbmcoc3RyaW5nVG9Gb3JtYXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSB0aGlzLmZvcm1hdChzdHJpbmdUb0Zvcm1hdCk7XG4gICAgICAgIHRoaXMubW9kZWwudmlld1RvTW9kZWxVcGRhdGUodGhpcy5tb2RlbFZhbHVlKTtcbiAgICAgICAgdGhpcy5tb2RlbC52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUodGhpcy52aWV3VmFsdWUpXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVQYXR0ZXJuKHBhdHRlcm5TdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wbGFjZUhvbGRlckNvdW50cyA9IChwYXR0ZXJuU3RyaW5nLm1hdGNoKC9cXCovZykgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYWNlSG9sZGVyQ291bnRzOyBpKyspIHtcbiAgICAgICAgICAgIHBhdHRlcm5TdHJpbmcgPSBwYXR0ZXJuU3RyaW5nLnJlcGxhY2UoJyonLCBcIntcIiArIGkgKyBcIn1cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXNrUGF0dGVybiA9IHBhdHRlcm5TdHJpbmc7XG4gICAgfVxuXG4gICAgZm9ybWF0KHMpIHtcbiAgICAgICAgdmFyIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMubWFza1BhdHRlcm47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGFjZUhvbGRlckNvdW50czsgaSsrKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSBmb3JtYXR0ZWRTdHJpbmcucmVwbGFjZShcIntcIiArIGkgKyBcIn1cIiwgcy5jaGFyQXQoaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRTdHJpbmc7XG4gICAgfVxuXG4gICAgcGFkU3RyaW5nKHMpIHtcbiAgICAgICAgdmFyIHBhZCA9IFwiICAgICAgICAgIFwiO1xuICAgICAgICByZXR1cm4gKHMgKyBwYWQpLnN1YnN0cmluZygwLCBwYWQubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBnZXRNb2RlbFZhbHVlKCkge1xuICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHRoaXMubW9kZWwudmFsdWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kaXZpZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgd2hpbGUgKG1vZGVsVmFsdWUuaW5kZXhPZih0aGlzLmRpdmlkZXJzW2ldKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZSA9IG1vZGVsVmFsdWUucmVwbGFjZSh0aGlzLmRpdmlkZXJzW2ldLCBcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kZWxWYWx1ZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
