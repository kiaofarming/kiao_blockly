    var blocklyArea = document.getElementById('blocklyArea');
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

        console.log('resize');
    };
    window.addEventListener('resize', onresize, false);
    onresize();

      function generateCode() {
        var code = Blockly.JavaScript.workspaceToCode(workspace);
//        document.getElementById('code').textContent = code;
        console.log(code);
      }
        function saveWorkspace() {
            var xml = Blockly.Xml.workspaceToDom(workspace);
            var xmlText = Blockly.Xml.domToPrettyText(xml);
            localStorage.setItem('myWorkspace', xmlText);
            alert('積木已儲存');
            console.log(xmlText);
        }
        var xmlText = localStorage.getItem('myWorkspace');
        if (xmlText) {
            var xml = Blockly.Xml.textToDom(xmlText);
            Blockly.Xml.domToWorkspace(xml, workspace);
        }
        function load() {
            var xmlText = localStorage.getItem('myWorkspace');
            var xml = Blockly.Xml.textToDom(xmlText);
            Blockly.Xml.domToWorkspace(xml, workspace);
        }
