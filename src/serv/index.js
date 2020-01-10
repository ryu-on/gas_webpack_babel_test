"use strict";
import {hello} from "./sample.js";

global.doGet = function(){
	return HtmlService.createHtmlOutputFromFile('home.html');
};
