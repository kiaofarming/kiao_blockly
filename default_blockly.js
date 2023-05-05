    var toolbox = 
	{
	  "kind": "categoryToolbox",
	  "contents": [
	    {
		"kind": "category",
		"name": "農耕樂",
		"colour": "45",
	    },{
	      "kind": "category",
	      "name": "邏輯",
	      "colour": "210",
	      "contents": [
		{
		  "kind": "block",
		  "type": "controls_if"
		},{
		  "kind": "block",
		  "type": "controls_ifelse"
		},{
		  "kind": "block",
		  "type": "logic_compare"
		},{
		  "kind": "block",
		  "type": "logic_operation"
		},{
		  "kind": "block",
		  "type": "logic_boolean"
		},{
		  "kind": "block",
		  "type": "logic_null"
		},{
		  "kind": "block",
		  "type": "logic_ternary"
		}
	      ]
	    },
	    {
	      "kind": "category",
	      "name": "迴圈",
	      "colour": "120",
	      "contents": [
		{
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
		},{
		  "kind": "block",
		  "type": "controls_whileUntil"
		},{
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
		},{
		  "kind": "block",
		  "type": "controls_flow_statements"
		}
	      ]
	    },{
		"kind": "category",
		"name": "運算",
		"colour": "230",
		"contents": [
			{
				"kind": "block",
				"type": "math_number"
			},{
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
			},{
				"kind": "block",
				"type": "math_single"
			}
		]
	    },{
		"kind": "category",
		"name": "變數",
		"custom": "VARIABLE",
		"colour": "290",
		"contents": [
			{
				"kind": "block",
				"type": "variables_get"
			},{
				"kind": "block",
				"type": "variables_set"
			}
		]
	    },{
		"kind": "category",
		"name": "列表",
		"colour": "260",
		"contents": [
			{
				"kind": "block",
				"type": "lists_create_empty"
			},{
				"kind": "block",
				"type": "lists_create_with"
			},{
				"kind": "block",
				"type": "lists_repeat"
			},{
				"kind": "block",
				"type": "lists_length"
			},{
				"kind": "block",
				"type": "lists_isEmpty"
			},{
				"kind": "block",
				"type": "lists_indexOf"
			},{
				"kind": "block",
				"type": "lists_getIndex"
			},{
				"kind": "block",
				"type": "lists_setIndex"
			},{
				"kind": "block",
				"type": "lists_getSublist"
			},{
				"kind": "block",
				"type": "lists_split"
			},{
				"kind": "block",
				"type": "lists_sort"
			}
		]
	    },{
		"kind": "category",
		"name": "文字",
		"colour": "160",
		"contents": [
			{
				"kind": "block",
				"type": "text"
			},{
				"kind": "block",
				"type": "text_join"
			},{
				"kind": "block",
				"type": "text_creat"
			},{
				"kind": "block",
				"type": "text_append"
			},{
				"kind": "block",
				"type": "text_changeCase"
			},{
				"kind": "block",
				"type": "text_trim"
			},{
				"kind": "block",
				"type": "text_print"
			},{
				"kind": "block",
				"type": "text_length"
			},{
				"kind": "block",
				"type": "text_isEmpty"
			},{
				"kind": "block",
				"type": "text_indexOf"
			},{
				"kind": "block",
				"type": "text_charAt"
			},{
				"kind": "block",
				"type": "text_getSubstring"
			}
		]	
	    }
	  ]
	};

    var blocklyDiv = document.getElementById('blocklyDiv');
    var workspace = Blockly.inject(blocklyDiv, { 
		media: './node_modules/blockly/media/',  
		extensions: [], 
		toolbox: toolbox,
		zoom:{
		  controls: true,
		  wheel: true,
		  startScale: 1.0,
		  maxScale: 3,
		  minScale: 0.3,
		  scaleSpeed: 1.2,
		  pinch: true},
		grid:{
		  spacing: 20,
		  length: 3,
		  colour: '#ccc',
		  snap: true},
		trashcan: false
	});

	Blockly.defineBlocksWithJsonArray([{
/*
	  "type": "text_creat",
	  "message0": '建立字串',
	  "output": "String",
	  "colour": 160,
	  "tooltip": "Returns number of letters in the provided text.",
	  "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp",
	  'mutator': 'text_join_mutator'
*/
	  "type": "text_creat",
	  "message0": "建立字串 %1 %2",
	  "args0": [
	    {
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
	}]);

Blockly.JavaScript['text_creat'] = function(block) {
  var str1 = Blockly.JavaScript.valueToCode(block, 'String1', Blockly.JavaScript.ORDER_ATOMIC);
  var str2 = Blockly.JavaScript.valueToCode(block, 'String2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `String(${str1}) + String(${str2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
