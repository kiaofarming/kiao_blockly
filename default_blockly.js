var toolbox = {
    "kind": "categoryToolbox",
    "contents": []
};

var toolbox_kiao  = {
            "kind": "category",
            "name": "農耕樂",
            "colour": "45",
            "contents": [{
                "kind": "block",
                "type": "threshold",
                "inputs": {
                    "device": {
                        "shadow": {
                            "type": "text",
                            "fields": {
                                "TEXT": "devID"
                            }
                        }
                    },
                    "type": {
                        "shadow": {
                            "type": "sensor_type",
                            "fields": {
                                "SENSOR_TYPE": "temp"
                            }
                        }
                    },
                    "uppser_threshold": {
                        "shadow": {
                            "type": "math_number",
                            "fields": {
                                "NUM": 100
                            }
                        }
                    },
                    "lower_threshold": {
                        "shadow": {
                            "type": "math_number",
                            "fields": {
                                "NUM": 0
                            }
                        }
                    }
                }

            }, {
                "kind": "block",
                "type": "sensor_type",
            }]
        };

var toolbox_controls = {
            "kind": "category",
            "name": "邏輯",
            "colour": "210",
            "contents": [{
                "kind": "block",
                "type": "controls_if"
            }, {
                "kind": "block",
                "type": "controls_ifelse"
            }, {
                "kind": "block",
                "type": "logic_compare"
            }, {
                "kind": "block",
                "type": "logic_operation"
            }, {
                "kind": "block",
                "type": "logic_boolean"
            }, {
                "kind": "block",
                "type": "logic_null"
            }, {
                "kind": "block",
                "type": "logic_ternary"
            }]
        };

var toolbox_loop = {
            "kind": "category",
            "name": "迴圈",
            "colour": "120",
            "contents": [{
                "kind": "block",
                "type": "controls_repeat_ext",
                "inputs": {
                    "TIMES": {
                        "shadow": {
                            "type": "math_number",
                            "fields": {
                                "NUM": 10
                            }
                        }
                    }
                }
            }, {
                "kind": "block",
                "type": "controls_whileUntil"
            }, {
                "kind": "block",
                "type": "controls_for",
                "inputs": {
                    "FROM": {
                        "shadow": {
                            "type": "math_number",
                            "fields": {
                                "NUM": 1
                            }
                        }
                    },
                    "TO": {
                        "shadow": {
                            "type": "math_number",
                            "fields": {
                                "NUM": 10
                            }
                        }
                    },
                    "BY": {
                        "shadow": {
                            "type": "math_number",
                            "fields": {
                                "NUM": 1
                            }
                        }
                    }
                }
            }, {
                "kind": "block",
                "type": "controls_flow_statements"
            }]
        };

var toolbox_math = {
            "kind": "category",
            "name": "運算",
            "colour": "230",
            "contents": [{
                "kind": "block",
                "type": "math_number"
            }, {
                "kind": "block",
                "type": "math_arithmetic",
                "inputs": {
                    "A": {
                        "shadow": {
                            "type": "math_number",
                            "fields": {
                                "NUM": 1
                            }
                        }
                    },
                    "B": {
                        "shadow": {
                            "type": "math_number",
                            "fields": {
                                "NUM": 1
                            }
                        }
                    }
                }
            }, {
                "kind": "block",
                "type": "math_single"
            }]
        };

var toolbox_variables = {
            "kind": "category",
            "name": "變數",
            "custom": "VARIABLE",
            "colour": "290",
            "contents": [{
                "kind": "block",
                "type": "variables_get"
            }, {
                "kind": "block",
                "type": "variables_set"
            }]
        };

var toolbox_lists = {
            "kind": "category",
            "name": "列表",
            "colour": "260",
            "contents": [{
                "kind": "block",
                "type": "lists_create_empty"
            }, {
                "kind": "block",
                "type": "lists_create_with"
            }, {
                "kind": "block",
                "type": "lists_repeat"
            }, {
                "kind": "block",
                "type": "lists_length"
            }, {
                "kind": "block",
                "type": "lists_isEmpty"
            }, {
                "kind": "block",
                "type": "lists_indexOf"
            }, {
                "kind": "block",
                "type": "lists_getIndex"
            }, {
                "kind": "block",
                "type": "lists_setIndex"
            }, {
                "kind": "block",
                "type": "lists_getSublist"
            }, {
                "kind": "block",
                "type": "lists_split"
            }, {
                "kind": "block",
                "type": "lists_sort"
            }]
        };

var toolbox_text = {
            "kind": "category",
            "name": "文字",
            "colour": "160",
            "contents": [{
                "kind": "block",
                "type": "text"
            }, {
                "kind": "block",
                "type": "text_join"
/*
            }, {
                "kind": "block",
                "type": "text_creat"
*/
            }, {
                "kind": "block",
                "type": "text_append"
            }, {
                "kind": "block",
                "type": "text_changeCase"
            }, {
                "kind": "block",
                "type": "text_trim"
            }, {
                "kind": "block",
                "type": "text_print"
            }, {
                "kind": "block",
                "type": "text_length"
            }, {
                "kind": "block",
                "type": "text_isEmpty"
            }, {
                "kind": "block",
                "type": "text_indexOf"
            }, {
                "kind": "block",
                "type": "text_charAt"
            }, {
                "kind": "block",
                "type": "text_getSubstring"
            }]
        };

var text_creat_JSON = {
/*
    'type': 'text_join',
    'message0': '建立字串',
    'output': 'String',
    'style': 'text_blocks',
    "colour": 160,
    'helpUrl': '%{BKY_TEXT_JOIN_HELPURL}',
    'tooltip': '%{BKY_TEXT_JOIN_TOOLTIP}',
    'mutator': 'text_join_mutator',
*/
    "type": "text_creat",
    "message0": "建立字串 %1 %2",
    "args0": [{
            "type": "input_value",
            "name": "String1",
            "check": [
                "String",
                "Number"
            ]
        },
        {
            "type": "input_value",
            "name": "String2",
            "check": [
                "String",
                "Number"
            ]
        }
    ],
    "inputsInline": false,
    "output": "String",
    "colour": 160,
    "tooltip": "123",
    "helpUrl": ""
};

toolbox.contents.push(toolbox_kiao);
toolbox.contents.push(toolbox_controls);
toolbox.contents.push(toolbox_loop);
toolbox.contents.push(toolbox_math);
toolbox.contents.push(toolbox_variables);
toolbox.contents.push(toolbox_lists);
toolbox.contents.push(toolbox_text);

Blockly.defineBlocksWithJsonArray([text_creat_JSON]);

Blockly.Blocks['sensor_type'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["溫度", "temp"],
                ["濕度", "humi"],
                ["光度", "lux"],
                ["土壤濕度", "mois"]
            ]), "SENSOR_TYPE");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['threshold'] = {
    init: function() {
        this.appendValueInput("device")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("判斷設備");
        this.appendValueInput("type")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("數據");
        this.appendValueInput("uppser_threshold")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("上閾值");
        this.appendValueInput("lower_threshold")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("；下閾值");
        this.appendStatementInput("uppser_run")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("上閾值執行");
        this.appendStatementInput("lower_run")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("下閾值執行");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['text_creat'] = function(block) {
    var str1 = Blockly.JavaScript.valueToCode(block, 'String1', Blockly.JavaScript.ORDER_ATOMIC);
    var str2 = Blockly.JavaScript.valueToCode(block, 'String2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `String(${str1}) + String(${str2})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensor_type'] = function(block) {
  var dropdown_sensor_type = block.getFieldValue('SENSOR_TYPE');
  // TODO: Assemble JavaScript into code variable.
  var code = `'${dropdown_sensor_type}'`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['threshold'] = function(block) {
  var value_device = Blockly.JavaScript.valueToCode(block, 'device', Blockly.JavaScript.ORDER_ATOMIC);
  var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_uppser_threshold = Blockly.JavaScript.valueToCode(block, 'uppser_threshold', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lower_threshold = Blockly.JavaScript.valueToCode(block, 'lower_threshold', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_uppser_run = Blockly.JavaScript.statementToCode(block, 'uppser_run');
  var statements_lower_run = Blockly.JavaScript.statementToCode(block, 'lower_run');
  // TODO: Assemble JavaScript into code variable.
  var code = `if(getDeviceValue(${value_device},${value_type})>=${value_uppser_threshold}){\n\t${statements_uppser_run}\n} else if(getValue(${value_device},${value_type})<=${value_lower_threshold}){\n\t${statements_lower_run}\n}`;
  return code;
};

var blocklyDiv = document.getElementById('blocklyDiv');
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
