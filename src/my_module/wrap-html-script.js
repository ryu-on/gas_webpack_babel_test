"use strict";
const path = require('path');
const fs = require('fs');
const commander =require('commander');

function wrapJsWithHtml(targetPath){
	const filename =  path.basename(targetPath);
	const dirName = path.dirname(targetPath);

	const writePath = path.join(dirName, filename + '.html');
	const content = fs.readFileSync(targetPath);
	const js = `<script>
	window.addEventListener('load' () =>{
		${content}
	}
</script>`
	fs.writeFileSync(writePath, js);
	
	//変換前のファイルの削除
	try{
		fs.unlinkSync(targetPath);
		console.log("remove succeed " + targetPath);
	}catch(e){
		console.log("remove failed " + targetPath + "--" + e)
	}
}

function main(){
	try{
		const program = new commander.Command();

		program.option('-t --targetPath, <target_path>', 'target to convert');
		program.parse(process.argv);

		console.log(program.targetPath);

		if(program.targetPath){
			console.log(`start convertion in ${program.targetPath}.`);
		}
		else
		{
			throw "args invalid error" + program.targetPath;
		}
		const files = fs.readdirSync(program.targetPath);
		console.log(files);
		const regex = /^.+\.jsx$/;
		for(let f of files){
			if (regex.test(f)){
				console.log("convert ", program.targetPath, f)
				wrapJsWithHtml(path.resolve(program.targetPath, f));
			}
		}
	}catch(e){
		console.log(e)
	}
}

main();
