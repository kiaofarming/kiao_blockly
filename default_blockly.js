var toolbox = {
    "kind": "categoryToolbox",
    "contents": []
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

var toolbox_variables_dynamic = {
            "kind": "category",
            "name": "變數",
            "custom": "VARIABLE_DYNAMIC",
            "colour": "330",
        };


var toolbox_variables = {
            "kind": "category",
            "name": "變數",
            "custom": "VARIABLE",
            "colour": "330",
/*            
            "contents": [{
                "kind": "block",
                "type": "variables_get"
            }, {
                "kind": "block",
                "type": "variables_set"
            }]
*/
        };

var toolbox_functions = {
            "kind": "category",
            "name": "流程",
            "custom": "PROCEDURE",
            "colour": "290",
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
            }, {
                "kind": "block",
                "type": "text_append"
            }, {
                "kind": "block",
                "type": "text_changeCase"
            }, {
                "kind": "block",
                "type": "text_trim"
/*                
            }, {
                "kind": "block",
                "type": "text_print"
*/
            }, {
                "kind": "block",
                "type": "text_lf"
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

toolbox.contents.push(toolbox_controls);
toolbox.contents.push(toolbox_loop);
toolbox.contents.push(toolbox_math);
toolbox.contents.push(toolbox_variables);
//toolbox.contents.push(toolbox_variables_dynamic);
toolbox.contents.push(toolbox_lists);
toolbox.contents.push(toolbox_text);
toolbox.contents.push(toolbox_functions);

var textLF_json = {
  "type": "text_lf",
  "message0": "換行",
  "inputsInline": true,
  "output": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['text_lf'] = {
    init: function() {
        this.jsonInit(textLF_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['text_lf'] = function(block) {
  var code = "'\\n'";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
