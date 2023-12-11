var toolbox_obj  = {
    "kind": "category",
    "name": "物件",
    "colour": 250,
    "contents": [{
        "kind": "block",
        "type": "object",
        "check": "memeber",
    }, {
        "kind": "block",
        "type": "member",
    }, {
        "kind": "block",
        "type": "getObjectValue",
        "inputs": {
            "OBJECT": {
                "shadow": {
                    "type": "variables_get",
                }
            },
            "MEMBER": {
                "shadow": {
                    "type": "text",
                    "fields": {
                        "TEXT": "Key",
                    }
                }
            }
        }
    }, {
        "kind": "block",
        "type": "json2obj",
        "inputs": {
            "JSON": {
                "shadow": {
                    "type": "text",
                    "fields": {
                        "TEXT": "JSON",
                    }
                }
            }
        }
    }, {
        "kind": "block",
        "type": "obj2json",
        "inputs": {
            "OBJECT": {
                "shadow": {
                    "type": "variables_get",
                }
            }
        }
    }]
};

toolbox.contents.unshift(toolbox_obj);

var object_json = {
    "type": "object",
    "implicitAlign0": "CENTRE",
    "message0": "物件 { %1 %2 }",
    "args0": [
        {
            "type": "input_dummy"
        },{
            "type": "input_statement",
            "name": "MEMBERS",
            "check": "text"
        }
    ],
    "output": null,
    "colour": 250,
};

var objectMember_json = {
    "type": "member",
    "message0": "%1 ：%2",
    "args0": [
        {
            "type": "field_input",
            "name": "KEY",
            "text": "Key"
        },{
            "type": "input_value",
            "name": "VALUE",
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 250,
};

var objectValue_json ={
    "type": "getobjectvalue",
    "message0": "從物件 %1 中取得 %2 的數值",
    "args0": [
        {
            "type": "input_value",
            "name": "OBJECT",
            "variable": "object",
            "check": "object"
        },
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "String"
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 250,
    "tooltip": "",
    "helpUrl": ""
};

var json2obj_json={
  "type": "json2obj",
  "message0": "將字串 %1 轉換成物件",
  "args0": [
    {
      "type": "input_value",
      "name": "JSON",
      "text": "Key",
      "check": "String",
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 250,
  "tooltip": "",
  "helpUrl": ""
}

var obj2json_json={
  "type": "obj2json",
  "message0": "將物件 %1 轉換成字串(JSON)",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJECT",
      "check": "object"
    },
  ],
  "inputsInline": true,
  "output": null,
  "colour": 250,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['object'] = {
    init: function() {
        this.jsonInit(object_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
/*        
        this.setTooltip(function() {
            return 'Add a number to variable "%1".'.replace('%1', thisBlock.getFieldValue('VAR'));
        });
*/    
    }
};

Blockly.Blocks['member'] = {
    init: function() {
        this.jsonInit(objectMember_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['json2obj'] = {
    init: function() {
        this.jsonInit(json2obj_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['obj2json'] = {
    init: function() {
        this.jsonInit(obj2json_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['getObjectValue'] = {
    init: function() {
        this.jsonInit(objectValue_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['object'] = function(block, generator) {
    var object_members = generator.statementToCode(block, 'MEMBERS');
    const code = `{\n${object_members}}`;
    return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['member'] = function(block, generator) {
  const object_key = block.getFieldValue('KEY');
  const object_value = generator.valueToCode(block, 'VALUE', generator.ORDER_ATOMIC);
  const code = `${object_key}: ${object_value},\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['json2obj'] = function(block, generator) {
  const value_json = generator.valueToCode(block, 'JSON', generator.ORDER_ATOMIC);
  var code = `JSON.parse(${value_json})`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['obj2json'] = function(block, generator) {
  const value_object = generator.valueToCode(block, 'OBJECT', generator.ORDER_ATOMIC);
  var code = `JSON.stringify(${value_object})`;
  return [code, generator.ORDER_ATOMIC];
};


javascript.javascriptGenerator.forBlock['getObjectValue'] = function(block, generator) {
  const value_object = generator.valueToCode(block, 'OBJECT', generator.ORDER_ATOMIC);
  const value_member = generator.valueToCode(block, 'MEMBER', generator.ORDER_ATOMIC);
  var code = `${value_object}[${value_member}]`;
  return [code, generator.ORDER_ATOMIC];
};
