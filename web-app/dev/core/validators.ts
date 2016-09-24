/**
 * Created by phanquan on 8/7/16.
 */
import { Injectable }          from '@angular/core';
import {FormControl} from '@angular/forms';
import {Validators, NgForm,Control,ControlGroup} from '@angular/common';

interface Validator<T extends Control> {
    (c:T): {[error: string]:any};
}

@Injectable()
export class ValidatorCore {
    constructor() {

    }

    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'valid': 'invalid',
            'invalidCreditCard': 'Is invalid credit card number',
            'validateEmail': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'invalidZipCode': 'Invalid ZipCode',
            'mlength': 'Invalid max lenght',
            'pattern': ` Invalid ${validatorValue.requiredPattern}`,
            'invalidChar':'Invalid SpecialChar',
            'maxlength': `Maximum length ${validatorValue.requiredLength}`,
            'minlength': `Minimum length ${validatorValue.requiredLength}`
        };

        return config[validatorName];
    }

    ValidatorMaxlenght(num:number) {
        return (c: Control): {[key: string]: any} => {
            if(c.value!='' && c.value.length>num)
                return {
                    mlength: true
                };
            return null;
        };
    }

    validateEmail(c: FormControl) {
        if(c.value=='') return null;
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

    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: ControlGroup): {[key: string]: any} => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];

            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        }
    }

    passwordValidator(control) {
        // {6,20}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number

        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,20}$/)) {
            return null;
        } else {
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
        } else {
            return { 'invalidCreditCard': true };
        }
    }

     regex(pattern: string): Function {
        return (control: Control): {[key: string]: any} => {
            return control.value.match(pattern) ? null : {pattern: true};
        };
     }

    specialCharValidator(control: Control) {
        if (control.value) {
            if (!control.value.match(/[-!$%^&*()_+|~=`{}\[\]:";#@'<>?,.\/]/)) {
                return null;
            }
            else {
                return { 'invalidChar': true };
            }
        }
    }

}