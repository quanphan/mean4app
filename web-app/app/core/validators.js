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

//# sourceMappingURL=data:application/json;base64,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QUNMLENBQUM7WUFFTCxDQUFDO1lBL0dEO2dCQUFDLGlCQUFVLEVBQUU7OzZCQUFBO1lBQ2IseUNBOEdDLENBQUEiLCJmaWxlIjoiY29yZS92YWxpZGF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDgvNy8xNi5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtWYWxpZGF0b3JzLCBOZ0Zvcm0sQ29udHJvbCxDb250cm9sR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmludGVyZmFjZSBWYWxpZGF0b3I8VCBleHRlbmRzIENvbnRyb2w+IHtcbiAgICAoYzpUKToge1tlcnJvcjogc3RyaW5nXTphbnl9O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yQ29yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VmFsaWRhdG9yRXJyb3JNZXNzYWdlKHZhbGlkYXRvck5hbWU6IHN0cmluZywgdmFsaWRhdG9yVmFsdWU/OiBhbnkpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgICdyZXF1aXJlZCc6ICdSZXF1aXJlZCcsXG4gICAgICAgICAgICAndmFsaWQnOiAnaW52YWxpZCcsXG4gICAgICAgICAgICAnaW52YWxpZENyZWRpdENhcmQnOiAnSXMgaW52YWxpZCBjcmVkaXQgY2FyZCBudW1iZXInLFxuICAgICAgICAgICAgJ3ZhbGlkYXRlRW1haWwnOiAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyxcbiAgICAgICAgICAgICdpbnZhbGlkUGFzc3dvcmQnOiAnSW52YWxpZCBwYXNzd29yZC4gUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZywgYW5kIGNvbnRhaW4gYSBudW1iZXIuJyxcbiAgICAgICAgICAgICdpbnZhbGlkWmlwQ29kZSc6ICdJbnZhbGlkIFppcENvZGUnLFxuICAgICAgICAgICAgJ21sZW5ndGgnOiAnSW52YWxpZCBtYXggbGVuZ2h0JyxcbiAgICAgICAgICAgICdwYXR0ZXJuJzogYCBJbnZhbGlkICR7dmFsaWRhdG9yVmFsdWUucmVxdWlyZWRQYXR0ZXJufWAsXG4gICAgICAgICAgICAnaW52YWxpZENoYXInOidJbnZhbGlkIFNwZWNpYWxDaGFyJyxcbiAgICAgICAgICAgICdtYXhsZW5ndGgnOiBgTWF4aW11bSBsZW5ndGggJHt2YWxpZGF0b3JWYWx1ZS5yZXF1aXJlZExlbmd0aH1gLFxuICAgICAgICAgICAgJ21pbmxlbmd0aCc6IGBNaW5pbXVtIGxlbmd0aCAke3ZhbGlkYXRvclZhbHVlLnJlcXVpcmVkTGVuZ3RofWBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gY29uZmlnW3ZhbGlkYXRvck5hbWVdO1xuICAgIH1cblxuICAgIFZhbGlkYXRvck1heGxlbmdodChudW06bnVtYmVyKSB7XG4gICAgICAgIHJldHVybiAoYzogQ29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICAgICAgICAgIGlmKGMudmFsdWUhPScnICYmIGMudmFsdWUubGVuZ3RoPm51bSlcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBtbGVuZ3RoOiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhbGlkYXRlRW1haWwoYzogRm9ybUNvbnRyb2wpIHtcbiAgICAgICAgaWYoYy52YWx1ZT09JycpIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgRU1BSUxfUkVHRVhQID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XG4gICAgICAgIHJldHVybiBFTUFJTF9SRUdFWFAudGVzdChjLnZhbHVlKSA/IG51bGwgOiB7XG4gICAgICAgICAgICB2YWxpZGF0ZUVtYWlsOiB7XG4gICAgICAgICAgICAgICAgdmFsaWQ6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgemlwQ29kZVZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgICAgIGlmICghY29udHJvbC52YWx1ZS5tYXRjaCgvXFxkXFxkXFxkXFxkXFxkKC1cXGRcXGRcXGRcXGQpPy8pKSB7XG4gICAgICAgICAgICByZXR1cm4geyBpbnZhbGlkWmlwQ29kZTogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWF0Y2hpbmdQYXNzd29yZHMocGFzc3dvcmRLZXk6IHN0cmluZywgY29uZmlybVBhc3N3b3JkS2V5OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIChncm91cDogQ29udHJvbEdyb3VwKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuICAgICAgICAgICAgbGV0IHBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbcGFzc3dvcmRLZXldO1xuICAgICAgICAgICAgbGV0IGNvbmZpcm1QYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW2NvbmZpcm1QYXNzd29yZEtleV07XG5cbiAgICAgICAgICAgIGlmIChwYXNzd29yZC52YWx1ZSAhPT0gY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWlzbWF0Y2hlZFBhc3N3b3JkczogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXNzd29yZFZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgICAgIC8vIHs2LDIwfSAgICAgICAgICAgLSBBc3NlcnQgcGFzc3dvcmQgaXMgYmV0d2VlbiA2IGFuZCAxMDAgY2hhcmFjdGVyc1xuICAgICAgICAvLyAoPz0uKlswLTldKSAgICAgICAtIEFzc2VydCBhIHN0cmluZyBoYXMgYXQgbGVhc3Qgb25lIG51bWJlclxuXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlLm1hdGNoKC9eKD89LipbMC05XSlbYS16QS1aMC05IUAjJCVeJipdezYsMjB9JC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7ICdpbnZhbGlkUGFzc3dvcmQnOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeGFtcGxlIHVzZSBvZiBGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwcywgYW5kIENvbnRyb2xzXG4gICAgLy8gICAgdGhpcy5yZWdpc3RyYXRpb25Gb3JtPSBmYi5ncm91cCh7XG4gICAgLy8gICAgZG9iOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIC8vICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgIGVtYWlsVmFsaWRhdG9yXSldLFxuICAgIC8vICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIC8vICAgIGNvbmZpcm1QYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAvLyAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgLy8gICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAvL30sIHt2YWxpZGF0b3I6IG1hdGNoaW5nUGFzc3dvcmRzKCdwYXNzd29yZCcsICdjb25maXJtUGFzc3dvcmQnKX0pXG5cblxuICAgIGNyZWRpdENhcmRWYWxpZGF0b3IoY29udHJvbCkge1xuICAgICAgICAvLyBWaXNhLCBNYXN0ZXJDYXJkLCBBbWVyaWNhbiBFeHByZXNzLCBEaW5lcnMgQ2x1YiwgRGlzY292ZXIsIEpDQlxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZS5tYXRjaCgvXig/OjRbMC05XXsxMn0oPzpbMC05XXszfSk/fDVbMS01XVswLTldezE0fXw2KD86MDExfDVbMC05XVswLTldKVswLTldezEyfXwzWzQ3XVswLTldezEzfXwzKD86MFswLTVdfFs2OF1bMC05XSlbMC05XXsxMX18KD86MjEzMXwxODAwfDM1XFxkezN9KVxcZHsxMX0pJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7ICdpbnZhbGlkQ3JlZGl0Q2FyZCc6IHRydWUgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICByZWdleChwYXR0ZXJuOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiAoY29udHJvbDogQ29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sLnZhbHVlLm1hdGNoKHBhdHRlcm4pID8gbnVsbCA6IHtwYXR0ZXJuOiB0cnVlfTtcbiAgICAgICAgfTtcbiAgICAgfVxuXG4gICAgc3BlY2lhbENoYXJWYWxpZGF0b3IoY29udHJvbDogQ29udHJvbCkge1xuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKC9bLSEkJV4mKigpXyt8fj1ge31cXFtcXF06XCI7I0AnPD4/LC5cXC9dLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB7ICdpbnZhbGlkQ2hhcic6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
