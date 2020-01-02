var global = this;
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var sample = require("./sample.js");

function main() {
  console.log(sample.item);
  sample.getName;
  console.log(sample.obj);
}

},{"./sample.js":2}],2:[function(require,module,exports){
"use strict";

var item = 'リンゴ';

var getName = function getName() {
  console.log(item + "です");
};

var obj = {
  name: 'メロン',
  price: 500,
  store: '東京店舗'
};
exports.item = item;
exports.getName = getName();
exports.obj = obj;

},{}]},{},[1]);
