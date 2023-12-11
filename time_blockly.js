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
    }, {
        "kind": "block",
        "type": "date_minus_days",
    }, {
        "kind": "block",
        "type": "date_difference",
    }, {
        "kind": "block",
        "type": "get_date",
    }, {
        "kind": "block",
        "type": "time_plus_sec",
    }, {
        "kind": "block",
        "type": "time_minus_sec",
    }, {
        "kind": "block",
        "type": "time_difference",
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
    this.setOutput(true, null);
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
     if(block != null ) {
         console.log(block.getFieldValue('YYYY'));
         console.log(block.getFieldValue('MM'));
     }

      return item(31,1);
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

Blockly.JavaScript['set_date'] = function(block) {
  var dropdown_yy = block.getFieldValue('YYYY');
  var dropdown_mm = block.getFieldValue('MM');
  var dropdown_dd = block.getFieldValue('DD');
  var code = `${dropdown_yy}-${dropdown_mm}-${dropdown_dd}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_time'] = function(block) {
  var dropdown_hh = block.getFieldValue('HH');
  var dropdown_mm = block.getFieldValue('MM');
  var dropdown_ss = block.getFieldValue('SS');
  var code = `${dropdown_hh}:${dropdown_mm}:${dropdown_ss}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_time'] = function(block) {
  var dropdown_format = block.getFieldValue('FORMAT');
  var code = `moment().format('${dropdown_format}')`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_date'] = function(block) {
  var dropdown_format = block.getFieldValue('FORMAT');
  var code = `moment().format('${dropdown_format}')`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
