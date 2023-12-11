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
  "message0": "開始日期 %1 ～ 結束日期 %2 週期天數 %3 %4 開始時間 %5 ～ 結束時間 %6 開始時 %7 結束時 %8 持續做 %9",
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
      "type": "input_dummy"
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
      "name": "OND_START"
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

Blockly.JavaScript['device_key'] = function(block) {
  var dropdown_device_key = block.getFieldValue('DEVICE_KEY');
  var code = `'${dropdown_device_key}'`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensor_type'] = function(block) {
  var dropdown_sensor_type = block.getFieldValue('SENSOR_TYPE');
  var code = `'${dropdown_sensor_type}'`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['threshold'] = function(block) {
  var value_device = Blockly.JavaScript.valueToCode(block, 'device_key', Blockly.JavaScript.ORDER_ATOMIC);
  var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_uppser_threshold = Blockly.JavaScript.valueToCode(block, 'uppser_threshold', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lower_threshold = Blockly.JavaScript.valueToCode(block, 'lower_threshold', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_uppser_run = Blockly.JavaScript.statementToCode(block, 'uppser_run');
  var statements_lower_run = Blockly.JavaScript.statementToCode(block, 'lower_run');
  // TODO: Assemble JavaScript into code variable.
  var code = `if(getDeviceValue(${value_device},${value_type}) >= ${value_uppser_threshold}){\n${statements_uppser_run}\n} else if(getDeviceValue(${value_device},${value_type}) <= ${value_lower_threshold}){\n${statements_lower_run}\n}`;
  return code;
};

