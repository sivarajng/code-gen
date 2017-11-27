/**
 * Copyright 2015 rspective (http://rspective.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


"use strict";

class VoucherGenerator {
    root;
    length;
    count;
    prefix;
    postfix;
    pattern;
    constructor(config) {
        config = config || {};
        this.count = config.count || 1;
        this.length = config.length || 8;
        this.charset = config.charset || this.charset("alphanumeric");
        this.prefix = config.prefix || "";
        this.postfix = config.postfix || "";
        this.pattern = config.pattern || this.repeat("#", this.length);

        this.root = this;
    }




    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    randomElem(arr) {
        return arr[this.randomInt(0, arr.length - 1)];
    }



    repeat(str, count) {
        var res = "";
        for (var i = 0; i < count; i++) {
            res += str;
        }
        return res;
    }

    Config(config) {
        config = config || {};
        this.count = config.count || 1;
        this.length = config.length || 8;
        this.charset = config.charset || this.charset("alphanumeric");
        this.prefix = config.prefix || "";
        this.postfix = config.postfix || "";
        this.pattern = config.pattern || this.repeat("#", this.length);
    }

    generateOne(config) {
        var code = config.pattern.split('').map(function (char) {
            if (char === '#') {
                return this.randomElem(config.charset);
            } else {
                return char;
            }
        }).join('');
        return config.prefix + code + config.postfix;
    }

    isFeasible(charset, pattern, count) {
        return Math.pow(charset.length, (pattern.match(/#/g) || []).length) >= count;
    }


}


let generate = (config) => {
    config = new VoucherGenerator(config);
    var count = config.count;
    if (!this.isFeasible(config.charset, config.pattern, config.count)) {
        throw new Error("Not possible to generate requested number of codes.");
    }

    var codes = {};
    while (count > 0) {
        var code = this.generateOne(config);
        if (codes[code] === undefined) {
            codes[code] = true;
            count--;
        }
    }
    return Object.keys(codes);
}

let charset = (name) => {
    var charsets = {
        numbers: "0123456789",
        alphabetic: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        alphanumeric: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };
    return charsets[name];
}

let voucher_codes = {
    generate: generate,
    charset: charset
};



module.exports = voucher_codes;