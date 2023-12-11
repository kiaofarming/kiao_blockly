var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');

const PREFIX_CODE = `
const { workerData, parentPort, threadId } = require('worker_threads');
const kiaoClock = require('../include/kiaoClock.js'); 
const kiaoDevice = require('../include/kiaoDevice.js');
const Utilts = require('../include/utilts.js');
const moment = require("moment");

var utilts = new Utilts();

var kiao = new kiaoDevice();
let id = threadId; 
const argument = workerData;

parentPort.on('message', (value) => {
  if (value === 'cleanup') {
    console.log(\`\${id}....killed\`);
    process.exit(0); 
  } 
}); 

function _taskOverCallback(){ 
    if(kiao != undefined) { 
        kiao.destroy(); 
        delete kiao; 
    } 
}

`;

var workspace = Blockly.inject(blocklyDiv, {
    media: './node_modules/blockly/media/',
    extensions: [],
    toolbox: toolbox,
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
        pinch: true
    },
    grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
    },
    trashcan: false
});

var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
};


function generateCode() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(PREFIX_CODE+code);
}

function save(filename, data) {
    const blob = new Blob([data], {type: 'text/csv'});
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else{
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;        
        document.body.appendChild(elem);
        elem.click();        
        document.body.removeChild(elem);
    }
}

function saveWorkspace() {
	const serializer = new Blockly.serialization.blocks.BlockSerializer();
	const state = serializer.save(workspace);
	const strJSON = JSON.stringify(state);
		
	localStorage.setItem('myWorkspace', strJSON);
//	save("blockly.json",strJSON);
}

function loadWorkspace() {
	const strJSON = localStorage.getItem('myWorkspace');

	if(strJSON !== null && strJSON !== 'null') {
	        const serializer = new Blockly.serialization.blocks.BlockSerializer();
		const state = JSON.parse(strJSON);

		serializer.load(state, workspace);
	} 
}

function cleanWorkspace() {
	workspace.clear();
}

window.addEventListener('resize', onresize, false);
onresize();

loadWorkspace();
