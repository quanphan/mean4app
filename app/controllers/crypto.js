/**
 * Created by phanquan on 8/20/16.
 */

'use strict';

var crypto = require('crypto'),
    algorithm = 'aes-256-gcm',
    key = '3zTvzr3p67VC61jmV54rIYu1545x4TlY',
// do not use a global iv for production,
// generate a new one for each encryption
    iv = '60iP0h6vJoEa'

exports.encrypt=function(text) {
    var cipher = crypto.createCipheriv(algorithm, key, iv)
    var encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex');
    var tag = cipher.getAuthTag();
    return {
        content: encrypted,
        tag: tag
    };
}

exports.decrypt=function(encrypted) {
    var decipher = crypto.createDecipheriv(algorithm, key, iv)
    decipher.setAuthTag(encrypted.tag);
    var dec = decipher.update(encrypted.content, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}

exports.hasValue=function(text){
    var hash = crypto.createHmac('sha512', key);
    hash.update(text);
    return hash.digest('hex');
}

//var hw = encrypt("hello world")
//// outputs hello world
//console.log(decrypt(hw));