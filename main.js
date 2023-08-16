async function importScript(filename) {
	await $.getScript(filename, function() {
//		console.log(filename);
	});
}

const timeoutPromise = ms => new Promise((resolve, _reject) => {
	setTimeout(() => {
		resolve();
	}, ms);
});

const startTask = async (filename,ms) => {
	script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = filename;
        document.head.appendChild(script);

	if (ms) {
		await timeoutPromise(ms);
	}	
};

async function onload() {

	var scripts = [
		'default_blockly_json.js',
		'kiao_blockly_json.js',
		'blockly.js'];

	if (typeof jQuery != 'undefined') {
		console.log("jQuery loaded...");
	}

	for(let i=0;i<scripts.length;i++) {
		if (typeof jQuery == 'undefined') {
			await startTask(scripts[i],5);
		} else {
			await importScript(scripts[i]);
		}
	}
}

onload();
