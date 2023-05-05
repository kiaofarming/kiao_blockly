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
		},
		{
		  "kind": "block",
		  "type": "logic_compare"
		},
		{
		  "kind": "block",
		  "type": "logic_operation"
		},
		{
		  "kind": "block",
		  "type": "logic_boolean"
		},
		{
		  "kind": "block",
		  "type": "logic_null"
		},
		{
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
		},
		{
		  "kind": "block",
		  "type": "controls_whileUntil"
		},
		{
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
		},
		{
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
		"colour": "#A65C81",
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
		"colour": "#745ba5",
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
		"colour": "#5ba58c",
		"contents": [
			{
				"kind": "block",
				"type": "text_charAt"
			},{
				"kind": "block",
				"type": "text_getSubstring"
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
			},{
				"kind": "block",
				"type": "text_prompt_ext"
			}
		]	
	    }
	  ]
	};

    var blocklyDiv = document.getElementById('blocklyDiv');
    var demoWorkspace = Blockly.inject(blocklyDiv, { 
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
