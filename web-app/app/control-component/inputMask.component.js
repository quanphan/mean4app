/**
 * Created by phanquan on 7/23/16.
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2lucHV0TWFzay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVIO2dCQU9JLFlBQ1csS0FBVyxFQUNDLFdBQW1CO29CQUQvQixVQUFLLEdBQUwsS0FBSyxDQUFNO29CQUdsQixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsUUFBUTtnQkFFUixDQUFDO2dCQUVELGFBQWE7b0JBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3ZDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3BELENBQUM7b0JBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDdkQsQ0FBQztnQkFFRCxlQUFlLENBQUMsYUFBYTtvQkFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ25FLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzlDLGFBQWEsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUM5RCxDQUFDO29CQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO2dCQUNyQyxDQUFDO2dCQUVELE1BQU0sQ0FBQyxDQUFDO29CQUNKLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ3ZDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzlDLGVBQWUsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUUsQ0FBQztvQkFDRCxNQUFNLENBQUMsZUFBZSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELFNBQVMsQ0FBQyxDQUFDO29CQUNQLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQztvQkFDdkIsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2dCQUVELGFBQWE7b0JBQ1QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7b0JBQ2xDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDNUMsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDOzRCQUMvQyxVQUFVLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUMxRCxDQUFDO29CQUNMLENBQUM7b0JBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDdEIsQ0FBQztZQUNMLENBQUM7WUFwRUQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsSUFBSSxFQUFFO3dCQUNGLFNBQVMsRUFBRSxpQkFBaUI7cUJBQy9CO2lCQUNKLENBQUM7MkJBVU8sZ0JBQVMsQ0FBQyxNQUFNLENBQUM7O3lCQVZ4QjtZQUNGLGlDQThEQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2wtY29tcG9uZW50L2lucHV0TWFzay5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gNy8yMy8xNi5cbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZSwgQXR0cmlidXRlLENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW21hc2tdJyxcbiAgICBob3N0OiB7XG4gICAgICAgICcoa2V5dXApJzogJ29uSW5wdXRDaGFuZ2UoKSdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIE1hc2tJbnB1dCB7XG4gICAgbWFza1BhdHRlcm46IHN0cmluZztcbiAgICBwbGFjZUhvbGRlckNvdW50czogbnVtYmVyO1xuICAgIGRpdmlkZXJzOiBzdHJpbmdbXTtcbiAgICBtb2RlbFZhbHVlOiBzdHJpbmc7XG4gICAgdmlld1ZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIG1vZGVsOiB0aGlzLFxuICAgICAgICBAQXR0cmlidXRlKFwibWFza1wiKSBtYXNrUGF0dGVybjogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZGl2aWRlcnMgPSBtYXNrUGF0dGVybi5yZXBsYWNlKC9cXCovZywgXCJcIikuc3BsaXQoXCJcIik7XG4gICAgICAgIHRoaXMuZGl2aWRlcnMucHVzaChcIiBcIik7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVQYXR0ZXJuKG1hc2tQYXR0ZXJuKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIH1cblxuICAgIG9uSW5wdXRDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IHRoaXMuZ2V0TW9kZWxWYWx1ZSgpO1xuICAgICAgICB2YXIgc3RyaW5nVG9Gb3JtYXQgPSB0aGlzLm1vZGVsVmFsdWU7XG4gICAgICAgIGlmIChzdHJpbmdUb0Zvcm1hdC5sZW5ndGggPCAxMCkge1xuICAgICAgICAgICAgc3RyaW5nVG9Gb3JtYXQgPSB0aGlzLnBhZFN0cmluZyhzdHJpbmdUb0Zvcm1hdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IHRoaXMuZm9ybWF0KHN0cmluZ1RvRm9ybWF0KTtcbiAgICAgICAgdGhpcy5tb2RlbC52aWV3VG9Nb2RlbFVwZGF0ZSh0aGlzLm1vZGVsVmFsdWUpO1xuICAgICAgICB0aGlzLm1vZGVsLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSh0aGlzLnZpZXdWYWx1ZSlcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVBhdHRlcm4ocGF0dGVyblN0cmluZykge1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyQ291bnRzID0gKHBhdHRlcm5TdHJpbmcubWF0Y2goL1xcKi9nKSB8fCBbXSkubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxhY2VIb2xkZXJDb3VudHM7IGkrKykge1xuICAgICAgICAgICAgcGF0dGVyblN0cmluZyA9IHBhdHRlcm5TdHJpbmcucmVwbGFjZSgnKicsIFwie1wiICsgaSArIFwifVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hc2tQYXR0ZXJuID0gcGF0dGVyblN0cmluZztcbiAgICB9XG5cbiAgICBmb3JtYXQocykge1xuICAgICAgICB2YXIgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy5tYXNrUGF0dGVybjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYWNlSG9sZGVyQ291bnRzOyBpKyspIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IGZvcm1hdHRlZFN0cmluZy5yZXBsYWNlKFwie1wiICsgaSArIFwifVwiLCBzLmNoYXJBdChpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZFN0cmluZztcbiAgICB9XG5cbiAgICBwYWRTdHJpbmcocykge1xuICAgICAgICB2YXIgcGFkID0gXCIgICAgICAgICAgXCI7XG4gICAgICAgIHJldHVybiAocyArIHBhZCkuc3Vic3RyaW5nKDAsIHBhZC5sZW5ndGgpO1xuICAgIH1cblxuICAgIGdldE1vZGVsVmFsdWUoKSB7XG4gICAgICAgIHZhciBtb2RlbFZhbHVlID0gdGhpcy5tb2RlbC52YWx1ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRpdmlkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB3aGlsZSAobW9kZWxWYWx1ZS5pbmRleE9mKHRoaXMuZGl2aWRlcnNbaV0pID4gLTEpIHtcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlID0gbW9kZWxWYWx1ZS5yZXBsYWNlKHRoaXMuZGl2aWRlcnNbaV0sIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
