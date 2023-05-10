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

toolbox.contents.push(toolbox_kiao);

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

