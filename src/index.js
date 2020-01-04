import {hello} from "./js/sample.js";

global.doGet = function(){
	// 2019
	const obj = {1:"hoge", 2:"huga", 3:"hogehoge" }
	Logger.log(Object.entries(obj))
	
	//2018
	var nums = '123456'.match(/(?<=123)456/) 
	Logger.log(nums);
	
	Logger.log("Hello");
	return HtmlService.createHtmlOutputFromFile('main.html');
	//.setSandBoxMode(HtmlService.SandboxMode.IFRAME);
}

