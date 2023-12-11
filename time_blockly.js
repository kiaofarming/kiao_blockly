var toolbox_time = {
    "kind": "category",
    "name": "時間",
    "colour": 1,
    "contents": [{
        "kind": "block",
        "type": "set_date",
    }, {
        "kind": "block",
        "type": "set_time",
    }, {
        "kind": "block",
        "type": "date_plus_days",
        "inputs": {
            "DATE": {
                "shadow": {
                    "type": "set_date",
                }
            },
            "DAYS": {
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
        "type": "date_minus_days",
        "inputs": {
            "DATE": {
                "shadow": {
                    "type": "set_date",
                }
            },
            "DAYS": {
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
        "type": "date_difference",
        "inputs": {
            "DATE1": {
                "shadow": {
                    "type": "get_date",
                }
            },
            "DATE2": {
                "shadow": {
                    "type": "set_date",
                }
            }
        }
    }, {
        "kind": "block",
        "type": "get_date",
    }, {
        "kind": "block",
        "type": "time_plus_sec",
        "inputs": {
            "TIME": {
                "shadow": {
                    "type": "set_time",
                }
            },
            "SEC": {
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
        "type": "time_minus_sec",
        "inputs": {
            "TIME": {
                "shadow": {
                    "type": "set_time",
                }
            },
            "SEC": {
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
        "type": "time_difference",
        "inputs": {
            "TIME1": {
                "shadow": {
                    "type": "get_time",
                }
            },
            "TIME2": {
                "shadow": {
                    "type": "set_time",
                }
            }
        }
   }, {
        "kind": "block",
        "type": "get_time",
    }]
}

toolbox.contents.unshift(toolbox_time);

function item(num,offset=0,len=2) {
    var arr = new Array(num);

    for(let i=0;i<num;i++) {
        let n = i+offset;
        arr[i] = new Array(2);
        arr[i][0] = String(n).padStart(len, "0");
        arr[i][1] = String(n).padStart(len, "0");
    }
    return arr;
}

var setTime_json = {
  "type": "set_time",
  "message0": "%1 時 %2 分 %3 秒",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "HH",
      "options": item(24)
    },{
      "type": "field_dropdown",
      "name": "mm",
      "options": item(60)
    },{
      "type": "field_dropdown",
      "name": "ss",
      "options": item(60)
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": 1,
  "tooltip": "",
  "helpUrl": ""
}

var date_plus_days_json = {
  "type": "date_plus_days",
  "message0": "日期 %1 加上 %2 天",
  "args0": [
    {
      "type": "input_value",
      "name": "DATE",
    },{
      "type": "input_value",
      "name": "DAYS",
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 1,
  "tooltip": "",
  "helpUrl": ""
}

var date_minus_days_json = {
  "type": "date_minus_days",
  "message0": "日期 %1 減掉 %2 天",
  "args0": [
    {
      "type": "input_value",
      "name": "DATE",
    },{
      "type": "input_value",
      "name": "DAYS",
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 1,
  "tooltip": "",
  "helpUrl": ""
}

var date_difference_json = {
  "type": "date_difference",
  "message0": "日期 %1 與 日期 %2 相差幾天",
  "args0": [
    {
      "type": "input_value",
      "name": "DATE1",
    },{
      "type": "input_value",
      "name": "DATE2",
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 1,
  "tooltip": "",
  "helpUrl": ""
}

var getTime_json = {
  "type": "get_time",
  "message0": "現在時間 %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FORMAT",
      "options": [
        [
          "時：分：秒",
          "HH:mm:ss"
        ],
        [
          "時",
          "HH"
        ],
        [
          "分",
          "mm"
        ],
        [
          "秒",
          "ss"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 1,
  "tooltip": "",
  "helpUrl": ""
}

var time_plus_sec_json = {
  "type": "time_plus_sec",
  "message0": "時間  %1 加上 %2 秒",
  "args0": [
    {
      "type": "input_value",
      "name": "TIME",
    },{
      "type": "input_value",
      "name": "SEC",
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 1,
  "tooltip": "",
  "helpUrl": ""
}

var time_minus_sec_json = {
  "type": "time_minus_sec",
  "message0": "時間 %1 減掉 %2 秒",
  "args0": [
    {
      "type": "input_value",
      "name": "TIME",
    },{
      "type": "input_value",
      "name": "SEC",
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 1,
  "tooltip": "",
  "helpUrl": ""
}

var time_difference_json = {
  "type": "time_difference",
  "message0": "時間 %1 與 時間 %2 相差幾秒",
  "args0": [
    {
      "type": "input_value",
      "name": "TIME1",
    },{
      "type": "input_value",
      "name": "TIME2",
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 1,
  "tooltip": "",
  "helpUrl": ""
}

var getDate_json = {
  "type": "get_date",
  "message0": "現在日期 %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FORMAT",
      "options": [
        [
          "年-月-日",
          "YYYY-MM-DD"
        ],
        [
          "年",
          "YYYY"
        ],
        [
          "月",
          "MM"
        ],
        [
          "日",
          "DD"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 1,
  "tooltip": "",
  "helpUrl": ""
}

function getTime(){
    const d = new Date();
    
    let options = Intl.DateTimeFormatOptions = {
        year :"numeric", day: "2-digit", month:"2-digit", 
        hour: "2-digit", minute: "2-digit", second: "2-digit", 
        hour12: false    
    };

    const now = d.toLocaleString('zh-TW', options).replace(' 24:', ' 00:');
    return now;
}

Blockly.Blocks['set_date'] = {

  init: function() {
    var input = this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(this.generateOptionsYYYY), 'YYYY')
      .appendField('年')
      .appendField(new Blockly.FieldDropdown(this.generateOptionsMM), 'MM')
      .appendField('月')
      .appendField(new Blockly.FieldDropdown(this.generateOptionsDD), 'DD')
      .appendField('日');
    this.setOutput(true, "String");
    this.setColour(1);
    this.setFieldValue(getTime().substring(0, 4),'YYYY');
    this.setFieldValue(getTime().substring(5, 7),'MM');
    this.setFieldValue(getTime().substring(8, 10),'DD');
//    console.log(this.getFieldValue('YYYY'));
  },

  generateOptionsYYYY: function() {
    var options = [];
    var now = Date.now();
    for(let i = -5; i < 10; i++) {
      let year = parseInt(String(getTime().substring(0, 4)));
      var yearString = String(year+i).padStart(4, "0");
      options.push([yearString,yearString]);
    }
    return options;
  },

  generateOptionsMM: function() {
      return item(12,1);
  },

  generateOptionsDD: function() {
     var block = this.getSourceBlock();
     var days = 31;

     if(block != null ) {
        const year = block.getFieldValue('YYYY');
        const month = block.getFieldValue('MM');
        days = new Date(year,month,0).getDate();
     }

      return item(days,1);
  }
};

Blockly.Blocks['set_time'] = {
  init: function() {
    var input = this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(this.generateOptionsHH), 'HH')
      .appendField('時')
      .appendField(new Blockly.FieldDropdown(this.generateOptionsMM), 'MM')
      .appendField('分')
      .appendField(new Blockly.FieldDropdown(this.generateOptionsSS), 'SS')
      .appendField('秒');
    this.setOutput(true, null);
    this.setColour(1);
    this.setFieldValue(getTime().substring(11, 13),'HH');
    this.setFieldValue(getTime().substring(14, 16),'MM');
    this.setFieldValue(getTime().substring(17, 19),'SS');
  },

  generateOptionsHH: function() {
      return item(24,0);
  },

  generateOptionsMM: function() {
      return item(60,0);
  },

  generateOptionsSS: function() {
      return item(60,0);
  }
};

Blockly.Blocks['get_time'] = {
    init: function() {
        this.jsonInit(getTime_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['get_date'] = {
    init: function() {
        this.jsonInit(getDate_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['date_plus_days'] = {
    init: function() {
        this.jsonInit(date_plus_days_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['date_minus_days'] = {
    init: function() {
        this.jsonInit(date_minus_days_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['date_difference'] = {
    init: function() {
        this.jsonInit(date_difference_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['time_plus_sec'] = {
    init: function() {
        this.jsonInit(time_plus_sec_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['time_minus_sec'] = {
    init: function() {
        this.jsonInit(time_minus_sec_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['time_difference'] = {
    init: function() {
        this.jsonInit(time_difference_json);
        var thisBlock = this;
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['set_date'] = function(block, generator) {
  var dropdown_yy = block.getFieldValue('YYYY');
  var dropdown_mm = block.getFieldValue('MM');
  var dropdown_dd = block.getFieldValue('DD');
  var code = `'${dropdown_yy}-${dropdown_mm}-${dropdown_dd}'`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['set_time'] = function(block, generator) {
  var dropdown_hh = block.getFieldValue('HH');
  var dropdown_mm = block.getFieldValue('MM');
  var dropdown_ss = block.getFieldValue('SS');
  var code = `'${dropdown_hh}:${dropdown_mm}:${dropdown_ss}'`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['get_time'] = function(block, generator) {
  var dropdown_format = block.getFieldValue('FORMAT');
  var code = `moment().format('${dropdown_format}')`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['get_date'] = function(block, generator) {
  var dropdown_format = block.getFieldValue('FORMAT');
  var code = `moment().format('${dropdown_format}')`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['date_plus_days'] = function(block, generator) {
  const value_date = generator.valueToCode(block, 'DATE', generator.ORDER_ATOMIC);
  const value_days = generator.valueToCode(block, 'DAYS', generator.ORDER_ATOMIC);
  var code = `moment(${value_date}).add(${value_days}, 'd').format('YYYY-MM-DD')`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['date_minus_days'] = function(block, generator) {
  const value_date = generator.valueToCode(block, 'DATE', generator.ORDER_ATOMIC);
  const value_days = generator.valueToCode(block, 'DAYS', generator.ORDER_ATOMIC);
  var code = `moment(${value_date}).subtract(${value_days}, 'd').format('YYYY-MM-DD')`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['date_difference'] = function(block, generator) {
  const value_date1 = generator.valueToCode(block, 'DATE1', generator.ORDER_ATOMIC);
  const value_date2 = generator.valueToCode(block, 'DATE2', generator.ORDER_ATOMIC);
  var code = `moment(${value_date1}).diff(${value_date2}, 'd')`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['time_plus_sec'] = function(block, generator) {
  const value_time = generator.valueToCode(block, 'TIME', generator.ORDER_ATOMIC);
  const value_sec = generator.valueToCode(block, 'SEC', generator.ORDER_ATOMIC);
  var code = `moment(${value_time}).add(${value_sec}, 's').format('HH:mm:ss')`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['time_minus_sec'] = function(block, generator) {
  const value_time = generator.valueToCode(block, 'TIME', generator.ORDER_ATOMIC);
  const value_sec = generator.valueToCode(block, 'SEC', generator.ORDER_ATOMIC);
  var code = `moment(${value_time}).subtract(${value_sec}, 's').format('HH:mm:ss')`;
  return [code, generator.ORDER_ATOMIC];
};

javascript.javascriptGenerator.forBlock['time_difference'] = function(block, generator) {
  const value_time1 = generator.valueToCode(block, 'TIME1', generator.ORDER_ATOMIC);
  const value_time2 = generator.valueToCode(block, 'TIME2', generator.ORDER_ATOMIC);
  var code = `moment(${value_time1}).diff(${value_time2}, 's')`;
  return [code, generator.ORDER_ATOMIC];
};
