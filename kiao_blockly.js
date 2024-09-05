var toolbox_kiao  = {
    "kind": "category",
    "name": "農耕樂",
    "colour": 60,
    "contents": [{
        "kind": "block",
        "type": "get_value",
        "inputs": {
            "device_rank": {
                "shadow": {
                    "type": "device_rank",
                }
            },
        }
    }, {
        "kind": "block",
        "type": "controller",
        "inputs": {
            "switch_status": {
                "shadow": {
                    "type": "switch_status",
                }
            },
            "device_rank": {
                "shadow": {
                    "type": "device_rank",
                }
            },
        }
    }, {
        "kind": "block",
        "type": "threshold",
        "inputs": {
            "value": {
                "shadow": {
                    "type": "device_rank",
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
        "type": "setClock",
        "inputs": {
            "BEGIN_DATE": {
                "shadow": {
                    "type": "set_date",
                }
            },
            "OVER_DATE": {
                "shadow": {
                    "type": "set_date",
                }
            },
            "CYCLE_DAYS": {
                "shadow": {
                    "type": "math_number",
                    "fields": {
                        "NUM": 1
                    }
                }
            },
            "START_TIME": {
                "shadow": {
                    "type": "set_time",
                }
            },
            "END_TIME": {
                "shadow": {
                    "type": "set_time",
                }
            },
        }
    }, {
        "kind": "block",
        "type": "device_rank",
    },{

        "kind": "block",
        "type": "getDeviceId",
        "inputs": {
            "SSID": {
                "shadow": {
                    "type": "text",
                    "fields": {
                        "TEXT": "ssid",
                    }
                }
            }
        }
    }, {
        "kind": "block",
        "type": "switch_status",
    }]
};

var device_id_json = {
    "type": "device_id",
    "implicitAlign0": "CENTRE",
    "message0": "取得裝置 %1 的 ID",
    "args0" : [
        {
            "type": "input_value",
            "name": "SSID",
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 250,
    "tooltip": "",
    "helpUrl": ""
};

var controller_json = {
    "type": "controller",
    "implicitAlign0": "CENTRE",
    "message0": "%1 %2 開關",
    "args0" : [
        {
            "type": "input_value",
            "name": "switch_status",
        },{
            "type": "input_value",
            "name": "device_rank",
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 350,
};

var controller_json = {
    "type": "controller",
    "implicitAlign0": "CENTRE",
    "message0": "%1 %2 開關",
    "args0" : [
        {
            "type": "input_value",
            "name": "switch_status",
        },{
            "type": "input_value",
            "name": "device_rank",
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 350,
};

var get_value_json = {
    "type": "get_value",
    "implicitAlign0": "CENTRE",
    "message0": "取得 %1 數據",
    "args0" : [
        {
            "type": "input_value",
            "name": "device_rank",
        }
    ],
    "output": true,
    "colour": 130,
};

var threshold_json = {
    "type": "threshold",
    "implicitAlign0": "CENTRE",
    "message0": "判斷 %1 數據，上閾值 %2 下閾值 %3 上閾值執行 %4 下閾值執行 %5",
    "args0": [
        {
            "type": "input_value",
            "name": "value",
        },{
            "type": "input_value",
            "name": "uppser_threshold",
        },{
            "type": "input_value",
            "name": "lower_threshold",
        },{
            "type": "input_statement",
            "name": "uppser_run",
        },{
            "type": "input_statement",
            "name": "lower_run",
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
};


var setClock_json = {
  "type": "setClock",
  "message0": '開始日期 %1 ～ 結束日期 %2 週期天數 %3\n開始時間 %4 ～ 結束時間 %5 開始時 %6 結束時 %7 持續做 %8',
  "args0": [
    {
      "type": "input_value",
      "name": "BEGIN_DATE"
    },
    {
      "type": "input_value",
      "name": "OVER_DATE"
    },
    {
      "type": "input_value",
      "name": "CYCLE_DAYS"
    },
    {
      "type": "input_value",
      "name": "START_TIME"
    },
    {
      "type": "input_value",
      "name": "END_TIME"
    },
    {
      "type": "input_statement",
      "name": "ON_START"
    },
    {
      "type": "input_statement",
      "name": "ON_END"
    },
    {
      "type": "input_statement",
      "name": "ON_LOOP"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};


Blockly.Blocks['switch_status'] = {
   init: function() {
         this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["啟動", "true"],
                ["關閉", "false"],
            ]), "SWITCH_STATUS");
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['device_rank'] = {

    init: function() {
        let input = this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(this.generateOptionsZones), 'zone')
            .appendField(new Blockly.FieldDropdown(this.generateOptionsDevices), 'device')
            .appendField(new Blockly.FieldDropdown(this.generateOptionsRank), 'rank');
        this.setOutput(true, "String");
        this.setColour(1);
    },
    
    generateOptionsZones: function() {
        var options = [['龜房','0'],['陽台','1']];
        return options;
    },

    generateOptionsDevices: function() {
        let options = [
                [['燈控','85'],['溫控','73']],
                [['環境','86'],['澆水','77']]
            ];

        let block = this.getSourceBlock();
        let zoneId = 0;

        if(block != null ) {
            zoneId = parseInt(block.getFieldValue('zone'));
        }

        return options[zoneId];
    },

    generateOptionsRank: function() {
        let options = [];

        let block = this.getSourceBlock();
        options[85] = [['UV燈','1'],['保溫燈','2']];
        options[73] = [['冷氣','1'],['風扇','2']];
        options[86] = [['溫度','1'],['濕度','2'],['光度','3'],['土讓濕度','4']];
        options[77] = [['多肉','1'],['香草','2']];

        let deviceId = 85;
        if(block != null ) {
            deviceId = parseInt(block.getFieldValue('device'));
        }

        return options[deviceId];
    }
};

toolbox.contents.unshift(toolbox_kiao);

Blockly.Blocks['controller'] = {
    init: function() {
        this.jsonInit(controller_json);
        let thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['get_value'] = {
    init: function() {
        this.jsonInit(get_value_json);
        let thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['getDeviceId'] = {
    init: function() {
        this.jsonInit(device_id_json);
        let thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['threshold'] = {
    init: function() {
        this.jsonInit(threshold_json);
        let thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['setClock'] = {
    init: function() {
        this.jsonInit(setClock_json);
        let thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['controller'] = function(block, generator) {
  let dropdown_switch_status = generator.valueToCode(block, 'switch_status', generator.ORDER_ATOMIC);
  let dropdown_device_obj = generator.valueToCode(block, 'device_rank', generator.ORDER_ATOMIC);
  
  let code = `toggle_switch(${dropdown_device_obj},${dropdown_switch_status})`;
  return code;
};

javascript.javascriptGenerator.forBlock['device_rank'] = function(block, generator) {
  let dropdown_device_id = parseInt(block.getFieldValue('device'));
  let dropdown_device_rank = parseInt(block.getFieldValue('rank'));
//  var code = `'${dropdown_device_id}-${dropdown_device_rank}'`;
  let code = `{'device'=${dropdown_device_id},'rnak'=${dropdown_device_rank}}`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['device_key'] = function(block, generator) {
  let dropdown_device_key = block.getFieldValue('DEVICE_KEY');
  let code = `'${dropdown_device_key}'`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['switch_status'] = function(block, generator) {
  let dropdown_sensor_type = block.getFieldValue('SWITCH_STATUS');
  let code = `${dropdown_sensor_type}`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['sensor_type'] = function(block, generator) {
  let dropdown_sensor_type = block.getFieldValue('SENSOR_TYPE');
  let code = `'${dropdown_sensor_type}'`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['get_value'] = function(block, generator) {
  let value_device = generator.valueToCode(block, 'device_rank', generator.ORDER_ATOMIC);
  let code = `getDeviceValue(${value_device})`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['threshold'] = function(block, generator) {
  let value_device = generator.valueToCode(block, 'value', generator.ORDER_ATOMIC);
  let value_uppser_threshold = generator.valueToCode(block, 'uppser_threshold', generator.ORDER_ATOMIC);
  let value_lower_threshold = generator.valueToCode(block, 'lower_threshold', generator.ORDER_ATOMIC);
  let statements_uppser_run = generator.statementToCode(block, 'uppser_run');
  let statements_lower_run = generator.statementToCode(block, 'lower_run');
  // TODO: Assemble JavaScript into code variable.
  let code = `if(getDeviceValue(${value_device}) >= ${value_uppser_threshold}){\n${statements_uppser_run}\n} else if(getDeviceValue(${value_device}) <= ${value_lower_threshold}){\n${statements_lower_run}\n}`;
  return code;
};

javascript.javascriptGenerator.forBlock['setClock'] = function(block, generator) {
  let value_begin_date = generator.valueToCode(block, 'BEGIN_DATE', generator.ORDER_ATOMIC);
  let value_over_date = generator.valueToCode(block, 'OVER_DATE', generator.ORDER_ATOMIC);
  let value_cycle_days = generator.valueToCode(block, 'CYCLE_DAYS', generator.ORDER_ATOMIC);
  let value_start_time = generator.valueToCode(block, 'START_TIME', generator.ORDER_ATOMIC);
  let value_end_time = generator.valueToCode(block, 'END_TIME', generator.ORDER_ATOMIC);
  let statements_start_run = generator.statementToCode(block, 'ON_START');
  let statements_end_run = generator.statementToCode(block, 'ON_END');
  let statements_loop_run = generator.statementToCode(block, 'ON_LOOP');
/*
  var mBlocks = Blockly.mainWorkspace.getUsedBlocks();
  for (var i = 0; i < blocks.length; i++) {
    var mBlock = mBlocks[i];
    console.log(mBlock);
  }
*/
  // TODO: Assemble JavaScript into code variable.
  let code = `\nkiaoClock(\n{\n\tbegin_date: ${value_begin_date},\n\tover_date: ${value_over_date},\n\tcycle_days: ${value_cycle_days},\n\tstart_time: ${value_start_time},\n\tend_time: ${value_end_time}\n},\n() => {\n${statements_start_run}},\n() => (\n${statements_end_run}),\nasync (inTime) => {\n${statements_loop_run}},\n() => {\n\t_taskOverCallback();\n});\n`;
  return code;
};

