/**
 * Created by phanquan on 8/7/16.
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
    var core_1;
    var ValidatorCore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let ValidatorCore = class ValidatorCore {
                constructor() {
                }
                static getValidatorErrorMessage(validatorName, validatorValue) {
                    let config = {
                        'required': 'Required',
                        'valid': 'invalid',
                        'invalidCreditCard': 'Is invalid credit card number',
                        'validateEmail': 'Invalid email address',
                        'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
                        'invalidZipCode': 'Invalid ZipCode',
                        'mlength': 'Invalid max lenght',
                        'pattern': ` Invalid ${validatorValue.requiredPattern}`,
                        'invalidChar': 'Invalid SpecialChar',
                        'maxlength': `Maximum length ${validatorValue.requiredLength}`,
                        'minlength': `Minimum length ${validatorValue.requiredLength}`
                    };
                    return config[validatorName];
                }
                ValidatorMaxlenght(num) {
                    return (c) => {
                        if (c.value != '' && c.value.length > num)
                            return {
                                mlength: true
                            };
                        return null;
                    };
                }
                validateEmail(c) {
                    if (c.value == '')
                        return null;
                    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    return EMAIL_REGEXP.test(c.value) ? null : {
                        validateEmail: {
                            valid: false
                        }
                    };
                }
                zipCodeValidator(control) {
                    if (!control.value.match(/\d\d\d\d\d(-\d\d\d\d)?/)) {
                        return { invalidZipCode: true };
                    }
                }
                matchingPasswords(passwordKey, confirmPasswordKey) {
                    return (group) => {
                        let password = group.controls[passwordKey];
                        let confirmPassword = group.controls[confirmPasswordKey];
                        if (password.value !== confirmPassword.value) {
                            return {
                                mismatchedPasswords: true
                            };
                        }
                    };
                }
                passwordValidator(control) {
                    // {6,20}           - Assert password is between 6 and 100 characters
                    // (?=.*[0-9])       - Assert a string has at least one number
                    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,20}$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidPassword': true };
                    }
                }
                // Example use of FormBuilder, ControlGroups, and Controls
                //    this.registrationForm= fb.group({
                //    dob: ['', Validators.required],
                //    email: ['', Validators.compose([Validators.required,  emailValidator])],
                //    password: ['', Validators.required],
                //    confirmPassword: ['', Validators.required],
                //    firstName: ['', Validators.required],
                //    lastName: ['', Validators.required]
                //}, {validator: matchingPasswords('password', 'confirmPassword')})
                creditCardValidator(control) {
                    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
                    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidCreditCard': true };
                    }
                }
                regex(pattern) {
                    return (control) => {
                        return control.value.match(pattern) ? null : { pattern: true };
                    };
                }
                specialCharValidator(control) {
                    if (control.value) {
                        if (!control.value.match(/[-!$%^&*()_+|~=`{}\[\]:";#@'<>?,.\/]/)) {
                            return null;
                        }
                        else {
                            return { 'invalidChar': true };
                        }
                    }
                }
            };
            ValidatorCore = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], ValidatorCore);
            exports_1("ValidatorCore", ValidatorCore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUg7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFFRCxPQUFPLHdCQUF3QixDQUFDLGFBQXFCLEVBQUUsY0FBb0I7b0JBQ3ZFLElBQUksTUFBTSxHQUFHO3dCQUNULFVBQVUsRUFBRSxVQUFVO3dCQUN0QixPQUFPLEVBQUUsU0FBUzt3QkFDbEIsbUJBQW1CLEVBQUUsK0JBQStCO3dCQUNwRCxlQUFlLEVBQUUsdUJBQXVCO3dCQUN4QyxpQkFBaUIsRUFBRSxzRkFBc0Y7d0JBQ3pHLGdCQUFnQixFQUFFLGlCQUFpQjt3QkFDbkMsU0FBUyxFQUFFLG9CQUFvQjt3QkFDL0IsU0FBUyxFQUFFLFlBQVksY0FBYyxDQUFDLGVBQWUsRUFBRTt3QkFDdkQsYUFBYSxFQUFDLHFCQUFxQjt3QkFDbkMsV0FBVyxFQUFFLGtCQUFrQixjQUFjLENBQUMsY0FBYyxFQUFFO3dCQUM5RCxXQUFXLEVBQUUsa0JBQWtCLGNBQWMsQ0FBQyxjQUFjLEVBQUU7cUJBQ2pFLENBQUM7b0JBRUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCxrQkFBa0IsQ0FBQyxHQUFVO29CQUN6QixNQUFNLENBQUMsQ0FBQyxDQUFjO3dCQUNsQixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxHQUFHLENBQUM7NEJBQ2pDLE1BQU0sQ0FBQztnQ0FDSCxPQUFPLEVBQUUsSUFBSTs2QkFDaEIsQ0FBQzt3QkFDTixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxhQUFhLENBQUMsQ0FBYztvQkFDeEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBRSxFQUFFLENBQUM7d0JBQUMsTUFB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QkFDTCxDQUFDO2dCQUNMLENBQUM7WUFFTCxDQUFDO1lBL0dEO2dCQUFDLGlCQUFVLEVBQUU7OzZCQUFBO1lBQ2IseUNBOEdDLENBQUEiLCJmaWxlIjoiY29yZS92YWxpZGF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDgvNy8xNi5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZhbGlkYXRvcnMsTmdGb3JtLEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmludGVyZmFjZSBWYWxpZGF0b3I8VCBleHRlbmRzIEZvcm1Db250cm9sPiB7XG4gICAgKGM6VCk6IHtbZXJyb3I6IHN0cmluZ106YW55fTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvckNvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFZhbGlkYXRvckVycm9yTWVzc2FnZSh2YWxpZGF0b3JOYW1lOiBzdHJpbmcsIHZhbGlkYXRvclZhbHVlPzogYW55KSB7XG4gICAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgICAncmVxdWlyZWQnOiAnUmVxdWlyZWQnLFxuICAgICAgICAgICAgJ3ZhbGlkJzogJ2ludmFsaWQnLFxuICAgICAgICAgICAgJ2ludmFsaWRDcmVkaXRDYXJkJzogJ0lzIGludmFsaWQgY3JlZGl0IGNhcmQgbnVtYmVyJyxcbiAgICAgICAgICAgICd2YWxpZGF0ZUVtYWlsJzogJ0ludmFsaWQgZW1haWwgYWRkcmVzcycsXG4gICAgICAgICAgICAnaW52YWxpZFBhc3N3b3JkJzogJ0ludmFsaWQgcGFzc3dvcmQuIFBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmcsIGFuZCBjb250YWluIGEgbnVtYmVyLicsXG4gICAgICAgICAgICAnaW52YWxpZFppcENvZGUnOiAnSW52YWxpZCBaaXBDb2RlJyxcbiAgICAgICAgICAgICdtbGVuZ3RoJzogJ0ludmFsaWQgbWF4IGxlbmdodCcsXG4gICAgICAgICAgICAncGF0dGVybic6IGAgSW52YWxpZCAke3ZhbGlkYXRvclZhbHVlLnJlcXVpcmVkUGF0dGVybn1gLFxuICAgICAgICAgICAgJ2ludmFsaWRDaGFyJzonSW52YWxpZCBTcGVjaWFsQ2hhcicsXG4gICAgICAgICAgICAnbWF4bGVuZ3RoJzogYE1heGltdW0gbGVuZ3RoICR7dmFsaWRhdG9yVmFsdWUucmVxdWlyZWRMZW5ndGh9YCxcbiAgICAgICAgICAgICdtaW5sZW5ndGgnOiBgTWluaW11bSBsZW5ndGggJHt2YWxpZGF0b3JWYWx1ZS5yZXF1aXJlZExlbmd0aH1gXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZ1t2YWxpZGF0b3JOYW1lXTtcbiAgICB9XG5cbiAgICBWYWxpZGF0b3JNYXhsZW5naHQobnVtOm51bWJlcikge1xuICAgICAgICByZXR1cm4gKGM6IEZvcm1Db250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuICAgICAgICAgICAgaWYoYy52YWx1ZSE9JycgJiYgYy52YWx1ZS5sZW5ndGg+bnVtKVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG1sZW5ndGg6IHRydWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFsaWRhdGVFbWFpbChjOiBGb3JtQ29udHJvbCkge1xuICAgICAgICBpZihjLnZhbHVlPT0nJykgcmV0dXJuIG51bGw7XG4gICAgICAgIGxldCBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcbiAgICAgICAgcmV0dXJuIEVNQUlMX1JFR0VYUC50ZXN0KGMudmFsdWUpID8gbnVsbCA6IHtcbiAgICAgICAgICAgIHZhbGlkYXRlRW1haWw6IHtcbiAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB6aXBDb2RlVmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICAgICAgaWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKC9cXGRcXGRcXGRcXGRcXGQoLVxcZFxcZFxcZFxcZCk/LykpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGludmFsaWRaaXBDb2RlOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXRjaGluZ1Bhc3N3b3JkcyhwYXNzd29yZEtleTogc3RyaW5nLCBjb25maXJtUGFzc3dvcmRLZXk6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gKGdyb3VwOiBGb3JtR3JvdXApOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgICAgICAgICBsZXQgcGFzc3dvcmQgPSBncm91cC5jb250cm9sc1twYXNzd29yZEtleV07XG4gICAgICAgICAgICBsZXQgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcblxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBtaXNtYXRjaGVkUGFzc3dvcmRzOiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhc3N3b3JkVmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICAgICAgLy8gezYsMjB9ICAgICAgICAgICAtIEFzc2VydCBwYXNzd29yZCBpcyBiZXR3ZWVuIDYgYW5kIDEwMCBjaGFyYWN0ZXJzXG4gICAgICAgIC8vICg/PS4qWzAtOV0pICAgICAgIC0gQXNzZXJ0IGEgc3RyaW5nIGhhcyBhdCBsZWFzdCBvbmUgbnVtYmVyXG5cbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2goL14oPz0uKlswLTldKVthLXpBLVowLTkhQCMkJV4mKl17NiwyMH0kLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgJ2ludmFsaWRQYXNzd29yZCc6IHRydWUgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV4YW1wbGUgdXNlIG9mIEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXBzLCBhbmQgQ29udHJvbHNcbiAgICAvLyAgICB0aGlzLnJlZ2lzdHJhdGlvbkZvcm09IGZiLmdyb3VwKHtcbiAgICAvLyAgICBkb2I6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgLy8gICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCAgZW1haWxWYWxpZGF0b3JdKV0sXG4gICAgLy8gICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgLy8gICAgY29uZmlybVBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIC8vICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAvLyAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIC8vfSwge3ZhbGlkYXRvcjogbWF0Y2hpbmdQYXNzd29yZHMoJ3Bhc3N3b3JkJywgJ2NvbmZpcm1QYXNzd29yZCcpfSlcblxuXG4gICAgY3JlZGl0Q2FyZFZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgICAgIC8vIFZpc2EsIE1hc3RlckNhcmQsIEFtZXJpY2FuIEV4cHJlc3MsIERpbmVycyBDbHViLCBEaXNjb3ZlciwgSkNCXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlLm1hdGNoKC9eKD86NFswLTldezEyfSg/OlswLTldezN9KT98NVsxLTVdWzAtOV17MTR9fDYoPzowMTF8NVswLTldWzAtOV0pWzAtOV17MTJ9fDNbNDddWzAtOV17MTN9fDMoPzowWzAtNV18WzY4XVswLTldKVswLTldezExfXwoPzoyMTMxfDE4MDB8MzVcXGR7M30pXFxkezExfSkkLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgJ2ludmFsaWRDcmVkaXRDYXJkJzogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgIHJlZ2V4KHBhdHRlcm46IHN0cmluZyk6IEZ1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIChjb250cm9sOiBGb3JtQ29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sLnZhbHVlLm1hdGNoKHBhdHRlcm4pID8gbnVsbCA6IHtwYXR0ZXJuOiB0cnVlfTtcbiAgICAgICAgfTtcbiAgICAgfVxuXG4gICAgc3BlY2lhbENoYXJWYWxpZGF0b3IoY29udHJvbDogRm9ybUNvbnRyb2wpIHtcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghY29udHJvbC52YWx1ZS5tYXRjaCgvWy0hJCVeJiooKV8rfH49YHt9XFxbXFxdOlwiOyNAJzw+PywuXFwvXS8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAnaW52YWxpZENoYXInOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
