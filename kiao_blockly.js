var toolbox_kiao  = {
    "kind": "category",
    "name": "農耕樂",
    "colour": 60,
    "contents": [{
        "kind": "block",
        "type": "threshold",
        "inputs": {
            "device": {
                "shadow": {
                    "type": "device_key",
                }
            },
            "type": {
                "shadow": {
                    "type": "sensor_type",
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
        "type": "sensor_type",
    }, {
        "kind": "block",
        "type": "device_key",
    }]
};

var threshold_json = {
    "type": "threshold",
    "implicitAlign0": "CENTRE",
    "message0": "判斷設備 %1 數據 %2 上閾值 %3 下閾值 %4 上閾值執行 %5 下閾值執行 %6",
    "args0": [
        {
            "type": "input_value",
            "name": "device",
        },{
            "type": "input_value",
            "name": "type",
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
            "name": "uppser_run",
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

Blockly.Blocks['device_key'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["wf8010", "wf8010,QrkNV"],
                ["wf8098", "wf8098,Y5mJL"],
                ["wf8099", "wf8099,wbRJR"],
                ["wf8003", "wf8003,BkxEJ"]
            ]), "DEVICE_KEY");
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['sensor_type'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["溫度", "TEMP"],
                ["濕度", "HUMD"],
                ["光度", "PAR"],
                ["土壤濕度", "SoilHUMD"]
            ]), "SENSOR_TYPE");
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

toolbox.contents.unshift(toolbox_kiao);

Blockly.Blocks['threshold'] = {
    init: function() {
        this.jsonInit(threshold_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['setClock'] = {
    init: function() {
        this.jsonInit(setClock_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['device_key'] = function(block, generator) {
  var dropdown_device_key = block.getFieldValue('DEVICE_KEY');
  var code = `'${dropdown_device_key}'`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['sensor_type'] = function(block, generator) {
  var dropdown_sensor_type = block.getFieldValue('SENSOR_TYPE');
  var code = `'${dropdown_sensor_type}'`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['threshold'] = function(block, generator) {
  var value_device = generator.valueToCode(block, 'device_key', generator.ORDER_ATOMIC);
  var value_type = generator.valueToCode(block, 'type', generator.ORDER_ATOMIC);
  var value_uppser_threshold = generator.valueToCode(block, 'uppser_threshold', generator.ORDER_ATOMIC);
  var value_lower_threshold = generator.valueToCode(block, 'lower_threshold', generator.ORDER_ATOMIC);
  var statements_uppser_run = generator.statementToCode(block, 'uppser_run');
  var statements_lower_run = generator.statementToCode(block, 'lower_run');
  // TODO: Assemble JavaScript into code variable.
  var code = `if(getDeviceValue(${value_device},${value_type}) >= ${value_uppser_threshold}){\n${statements_uppser_run}\n} else if(getDeviceValue(${value_device},${value_type}) <= ${value_lower_threshold}){\n${statements_lower_run}\n}`;
  return code;
};

javascript.javascriptGenerator.forBlock['setClock'] = function(block, generator) {
  var value_begin_date = generator.valueToCode(block, 'BEGIN_DATE', generator.ORDER_ATOMIC);
  var value_over_date = generator.valueToCode(block, 'OVER_DATE', generator.ORDER_ATOMIC);
  var value_cycle_days = generator.valueToCode(block, 'CYCLE_DAYS', generator.ORDER_ATOMIC);
  var value_start_time = generator.valueToCode(block, 'START_TIME', generator.ORDER_ATOMIC);
  var value_end_time = generator.valueToCode(block, 'END_TIME', generator.ORDER_ATOMIC);
  var statements_start_run = generator.statementToCode(block, 'ON_START');
  var statements_end_run = generator.statementToCode(block, 'ON_END');
  var statements_loop_run = generator.statementToCode(block, 'ON_LOOP');
/*
  var mBlocks = Blockly.mainWorkspace.getUsedBlocks();
  for (var i = 0; i < blocks.length; i++) {
    var mBlock = mBlocks[i];
    console.log(mBlock);
  }
*/
  // TODO: Assemble JavaScript into code variable.
  var code = `\nkiaoClock(\n{\n\tbegin_date: ${value_begin_date},\n\tover_date: ${value_over_date},\n\tcycle_days: ${value_cycle_days},\n\tstart_time: ${value_start_time},\n\tend_time: ${value_end_time}\n},\n() => {\n${statements_start_run}},\n() => (\n${statements_end_run}),\nasync (inTime) => {\n${statements_loop_run}},\n() => {\n\t_taskOverCallback();\n});\n`;
  return code;
};

