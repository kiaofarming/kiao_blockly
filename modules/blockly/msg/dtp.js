/* eslint-disable */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) { // AMD
    define([], factory);
  } else if (typeof exports === 'object') { // Node.js
    module.exports = factory();
  } else { // Browser
    var messages = factory();
    for (var key in messages) {
      root.Blockly.Msg[key] = messages[key];
    }
  }
}(this, function() {
// This file was automatically generated.  Do not modify.

'use strict';

var Blockly = Blockly || { Msg: Object.create(null) };

Blockly.Msg["ADD_COMMENT"] = "Panahak komi";
Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] = "Au milo momugas do pembolehubah '%1' tu' soboogian do definisi montok kogunoon '%2'";
Blockly.Msg["CHANGE_VALUE_TITLE"] = "Simbanai gatang:";
Blockly.Msg["CLEAN_UP"] = "Lidango taantob";
Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] = "Collapsed blocks contain warnings.";  // untranslated
Blockly.Msg["COLLAPSE_ALL"] = "Lopio toinsanan taantob";
Blockly.Msg["COLLAPSE_BLOCK"] = "Lopio taantob";
Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "wotik 1";
Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "wotik 2";
Blockly.Msg["COLOUR_BLEND_HELPURL"] = "https://meyerweb.com/eric/tools/color-blend/#:::rgbp";  // untranslated
Blockly.Msg["COLOUR_BLEND_RATIO"] = "nisbah";
Blockly.Msg["COLOUR_BLEND_TITLE"] = "piroloto";
Blockly.Msg["COLOUR_BLEND_TOOLTIP"] = "Piroloto dua wotik misungku miampai nisbah di tinahak (0.0 - 1.0).";
Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://en.wikipedia.org/wiki/Color";  // untranslated
Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "Pili'o iso warana mantad palet.";
Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com";  // untranslated
Blockly.Msg["COLOUR_RANDOM_TITLE"] = "wotik rawak";
Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "Pili'o wotik mmiampai rawak.";
Blockly.Msg["COLOUR_RGB_BLUE"] = "obulou";
Blockly.Msg["COLOUR_RGB_GREEN"] = "otomou";
Blockly.Msg["COLOUR_RGB_HELPURL"] = "https://www.december.com/html/spec/colorpercompact.html";  // untranslated
Blockly.Msg["COLOUR_RGB_RED"] = "aragang";
Blockly.Msg["COLOUR_RGB_TITLE"] = "warana miampai";
Blockly.Msg["COLOUR_RGB_TOOLTIP"] = "Pomonsoi wotik miampai ginumu spesifik do aragang, otomou om obulou. Oinsanan ginumu minog id pintangaan do 0 om 100.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";  // untranslated
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] = "tingkodo gelung";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] = "timpuun mimpai lelaran gelung pointilombus";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] = "Soliwan mantad di kisuang do gelung.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] = "Tolibai toinsanan gelung, om timpuun miampai lelaran potilombus.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] = "Pononsunudan : Tantob diti milo guno'on miampai gelung.";
Blockly.Msg["CONTROLS_FOREACH_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#for-each";  // untranslated
Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "montok monikid item %1 id sanarai %2";
Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] = "Montok monikid item id sanarai, patatapo pombolehubah '%1' id item, om wonsoyo piipiro tisunud.";
Blockly.Msg["CONTROLS_FOR_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#count-with";  // untranslated
Blockly.Msg["CONTROLS_FOR_TITLE"] = "intobo miampai %1 mantad %2 gisom %3 selang %4";
Blockly.Msg["CONTROLS_FOR_TOOLTIP"] = "Guno'o pombolehubah '%1' id gatang mantad piipiro numbul id kotimpuunon gisom kolimpupuson, intobon tumanud selang di pinatantu, om wonsoyo tantob-tantob pointantu.";
Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] = "Ruhangai iso syarat kumaa tantob sokiro.";
Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] = "Poruhango ii kotohuri, poundoliho toinsanan kowoowoyoon kumaa id tantob sokiro.";
Blockly.Msg["CONTROLS_IF_HELPURL"] = "https://github.com/google/blockly/wiki/IfElse";  // untranslated
Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] = "Ruhangai, iduo, toi ko' uludo kawagu boogian montok mongulud kawagu tantob sokiro.";
Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "suai";
Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "suai sokiro";
Blockly.Msg["CONTROLS_IF_MSG_IF"] = "sokiro";
Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] = "Sokiro otopot o gatang, pomonsoi piipiro tisunud.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] = "Sokiro otopot gatang, pomonsoi tantab kumoiso montok tisunud. Au nopo, wonsoyo tantob kumoduo montok tisunud.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] = "Sokiro gatang koiso nopo nga' otopot, wonsoyo o tantob koiso tisunud dii. Au nopo, sokiro gatang koduo nopo nga' otopot, wonsoyo tantob kumoduo.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] = "Sokiro gatang kumoiso otopot, wonsoyo tisunud montok tantob kumoiso. Au nopo, sokiro gatang kumoduo otopot, wonsoyo tisunud montok tantob kumoduo. Sokiro aiso gatang di otopot, wonsoyo tantob di kotohuri montok tisunud.";
Blockly.Msg["CONTROLS_REPEAT_HELPURL"] = "https://en.wikipedia.org/wiki/For_loop";  // untranslated
Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "wonsoyo";
Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "wonsoyo kawagu %1";
Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] = "Wonsoyo kawagu tisunud miampai piipiro.";
Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#repeat";  // untranslated
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "Huliton gisom";
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "Huliton kawagu soira";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] = "Sokiro au koontok o gatang, wonsoyo o tisunud.";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] = "Soira otopot o gatang dii, wonsoyo piipiro tisunud.";
Blockly.Msg["DELETE_ALL_BLOCKS"] = "Iduo toinsanan %1 taantob?";
Blockly.Msg["DELETE_BLOCK"] = "Iduo taantob";
Blockly.Msg["DELETE_VARIABLE"] = "Pugaso pembolehubah '%1'";
Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] = "Pugaso %1 pomogunoon pembolehubah %2?";
Blockly.Msg["DELETE_X_BLOCKS"] = "Iduo %1 taantob";
Blockly.Msg["DIALOG_CANCEL"] = "Cancel";  // untranslated
Blockly.Msg["DIALOG_OK"] = "OK";  // untranslated
Blockly.Msg["DISABLE_BLOCK"] = "Patayo taantob";
Blockly.Msg["DUPLICATE_BLOCK"] = "Pomoduo";
Blockly.Msg["DUPLICATE_COMMENT"] = "Pomoduo kumin";
Blockly.Msg["ENABLE_BLOCK"] = "Posi'o taantob";
Blockly.Msg["EXPAND_ALL"] = "Ukabai toinsanan taantob";
Blockly.Msg["EXPAND_BLOCK"] = "Ukabai taantob";
Blockly.Msg["EXTERNAL_INPUTS"] = "Input soliwan";
Blockly.Msg["HELP"] = "Uhupai";
Blockly.Msg["INLINE_INPUTS"] = "Inpus sambaris";
Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-empty-list";  // untranslated
Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "create empty list";  // untranslated
Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] = "Returns a list, of length 0, containing no data records";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "list";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] = "Add, remove, or reorder sections to reconfigure this list block.";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "create list with";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_ITEM_TOOLTIP"] = "Add an item to the list.";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"] = "Create a list with any number of items.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_FIRST"] = "first";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_FROM_END"] = "# from end";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_FROM_START"] = "#";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_GET"] = "get";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_GET_REMOVE"] = "get and remove";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_LAST"] = "last";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_RANDOM"] = "random";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_REMOVE"] = "remove";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TAIL"] = "";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] = "Returns the first item in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] = "Returns the item at the specified position in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] = "Returns the last item in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] = "Returns a random item in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] = "Removes and returns the first item in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] = "Removes and returns the item at the specified position in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] = "Removes and returns the last item in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] = "Removes and returns a random item in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] = "Removes the first item in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] = "Removes the item at the specified position in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] = "Removes the last item in a list.";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] = "Removes a random item in a list.";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_END"] = "to # from end";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_START"] = "to #";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_END_LAST"] = "to last";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_START_FIRST"] = "get sub-list from first";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_END"] = "get sub-list from # from end";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_START"] = "get sub-list from #";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = "";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] = "Creates a copy of the specified portion of a list.";  // untranslated
Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "%1 is the last item.";  // untranslated
Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] = "%1 is the first item.";  // untranslated
Blockly.Msg["LISTS_INDEX_OF_FIRST"] = "find first occurrence of item";  // untranslated
Blockly.Msg["LISTS_INDEX_OF_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";  // untranslated
Blockly.Msg["LISTS_INDEX_OF_LAST"] = "find last occurrence of item";  // untranslated
Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] = "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";  // untranslated
Blockly.Msg["LISTS_INLIST"] = "in list";  // untranslated
Blockly.Msg["LISTS_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#is-empty";  // untranslated
Blockly.Msg["LISTS_ISEMPTY_TITLE"] = "%1 is empty";  // untranslated
Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] = "Returns true if the list is empty.";  // untranslated
Blockly.Msg["LISTS_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#length-of";  // untranslated
Blockly.Msg["LISTS_LENGTH_TITLE"] = "length of %1";  // untranslated
Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "Returns the length of a list.";  // untranslated
Blockly.Msg["LISTS_REPEAT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
Blockly.Msg["LISTS_REPEAT_TITLE"] = "create list with item %1 repeated %2 times";  // untranslated
Blockly.Msg["LISTS_REPEAT_TOOLTIP"] = "Creates a list consisting of the given value repeated the specified number of times.";  // untranslated
Blockly.Msg["LISTS_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";  // untranslated
Blockly.Msg["LISTS_REVERSE_MESSAGE0"] = "reverse %1";  // untranslated
Blockly.Msg["LISTS_REVERSE_TOOLTIP"] = "Reverse a copy of a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#in-list--set";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_INPUT_TO"] = "as";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_INSERT"] = "insert at";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_SET"] = "set";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST"] = "Inserts the item at the start of a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FROM"] = "Inserts the item at the specified position in a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_LAST"] = "Append the item to the end of a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM"] = "Inserts the item randomly in a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FIRST"] = "Sets the first item in a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FROM"] = "Sets the item at the specified position in a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_LAST"] = "Sets the last item in a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_RANDOM"] = "Sets a random item in a list.";  // untranslated
Blockly.Msg["LISTS_SORT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";  // untranslated
Blockly.Msg["LISTS_SORT_ORDER_ASCENDING"] = "ascending";  // untranslated
Blockly.Msg["LISTS_SORT_ORDER_DESCENDING"] = "descending";  // untranslated
Blockly.Msg["LISTS_SORT_TITLE"] = "sort %1 %2 %3";  // untranslated
Blockly.Msg["LISTS_SORT_TOOLTIP"] = "Sort a copy of a list.";  // untranslated
Blockly.Msg["LISTS_SORT_TYPE_IGNORECASE"] = "alphabetic, ignore case";  // untranslated
Blockly.Msg["LISTS_SORT_TYPE_NUMERIC"] = "numeric";  // untranslated
Blockly.Msg["LISTS_SORT_TYPE_TEXT"] = "alphabetic";  // untranslated
Blockly.Msg["LISTS_SPLIT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";  // untranslated
Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "make list from text";  // untranslated
Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "make text from list";  // untranslated
Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] = "Join a list of texts into one text, separated by a delimiter.";  // untranslated
Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] = "Split text into a list of texts, breaking at each delimiter.";  // untranslated
Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "with delimiter";  // untranslated
Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "kasala";
Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#values";  // untranslated
Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] = "Tumonduli nung otopot toi ko' kasala.";
Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "otopot";
Blockly.Msg["LOGIC_COMPARE_HELPURL"] = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";  // untranslated
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] = "Tumonduli otopot sokiro koduo-duo input otopot miampai tiso om tiso.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] = "Tumonduli otopot sokiro input koiso lobi osonong mantad ko' input kumoduo.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] = "Tumonduli otopot sokiro input koiso lobi osonong toi ko' miagal do input kumoduo.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] = "Tumonduli otopot sokiro input koiso lobi okoro mantad do input kumoduo.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] = "Tumonduli otopot sokiro input koiso lobi okoro toi ko' miagal do input kumoduo.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] = "Tumonduli otopot sokiro koduo-duo input au miagal miampai tiso om tiso.";
Blockly.Msg["LOGIC_NEGATE_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#not";  // untranslated
Blockly.Msg["LOGIC_NEGATE_TITLE"] = "okon ko' %1";
Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] = "Tumonduli otopot sokiro input au otopot. Tumonduli kasala sokiro otopot input.";
Blockly.Msg["LOGIC_NULL"] = "null";
Blockly.Msg["LOGIC_NULL_HELPURL"] = "https://en.wikipedia.org/wiki/Nullable_type";  // untranslated
Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "Tumonduli null.";
Blockly.Msg["LOGIC_OPERATION_AND"] = "om";
Blockly.Msg["LOGIC_OPERATION_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#logical-operations";  // untranslated
Blockly.Msg["LOGIC_OPERATION_OR"] = "toi ko'";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] = "Tumonduli otopot sokiro koduo-duo input nga' otopot.";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] = "Tumonduli otopot sokiro iso no pia input di otopot.";
Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "umbalan";
Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://en.wikipedia.org/wiki/%3F:";  // untranslated
Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "sokiro kasala";
Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "sokiro otopot";
Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] = "Intangai kowoowoyo id 'test'. Sokiro otopot kowoowoyoon, tumonduli id gatang 'if true'; au nopo nga' tumonduli id gatang 'if false'.";
Blockly.Msg["MATH_ADDITION_SYMBOL"] = "+";  // untranslated
Blockly.Msg["MATH_ARITHMETIC_HELPURL"] = "https://en.wikipedia.org/wiki/Arithmetic";  // untranslated
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] = "Potondulionon ginumu montok duo numbul.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] = "Potondulionon asil bahagi montok duo numbul.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] = "Potondulionon o pisuayan do duo numbul.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] = "Potondulionon produk montok duo numbul.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] = "Potonduliono numbul kumoiso di pinoingkawas kumaa kuasa do numbul kumoduo.";
Blockly.Msg["MATH_ATAN2_HELPURL"] = "https://en.wikipedia.org/wiki/Atan2";  // untranslated
Blockly.Msg["MATH_ATAN2_TITLE"] = "atan2 do X:%1 Y:%2";
Blockly.Msg["MATH_ATAN2_TOOLTIP"] = "Potonduliono titik artangen (X,Y) id darjah mantad -180 gisom 180.";
Blockly.Msg["MATH_CHANGE_HELPURL"] = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";  // untranslated
Blockly.Msg["MATH_CHANGE_TITLE"] = "kounolihon %1 miampai %2";
Blockly.Msg["MATH_CHANGE_TOOLTIP"] = "Poruhango numbul kumaa pombolehubah '%1'.";
Blockly.Msg["MATH_CONSTANT_HELPURL"] = "https://en.wikipedia.org/wiki/Mathematical_constant";  // untranslated
Blockly.Msg["MATH_CONSTANT_TOOLTIP"] = "Potonduliono iso mantad do pemalar koubasanan: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).";
Blockly.Msg["MATH_CONSTRAIN_HELPURL"] = "https://en.wikipedia.org/wiki/Clamping_(graphics)";  // untranslated
Blockly.Msg["MATH_CONSTRAIN_TITLE"] = "Kotogangan %1 osiriba %2 akawas %3";
Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] = "Kotogangan numbul id pialatan do limit spesifik (inklusif).";
Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷";  // untranslated
Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "milo piboogion miampai";
Blockly.Msg["MATH_IS_EVEN"] = "poinggonop no";
Blockly.Msg["MATH_IS_NEGATIVE"] = "negatif";
Blockly.Msg["MATH_IS_ODD"] = "suusuai";
Blockly.Msg["MATH_IS_POSITIVE"] = "positif";
Blockly.Msg["MATH_IS_PRIME"] = "pordana";
Blockly.Msg["MATH_IS_TOOLTIP"] = "Intangai nung numbul di poinggonop, suusuai, pordana, koinsanai, positif, negatif, toi ko' milo piboogion do numbul. Potonduliono otopot toi ko' kasala.";
Blockly.Msg["MATH_IS_WHOLE"] = "koinsanai";
Blockly.Msg["MATH_MODULO_HELPURL"] = "https://en.wikipedia.org/wiki/Modulo_operation";  // untranslated
Blockly.Msg["MATH_MODULO_TITLE"] = "noolu montok %1 ÷ %2";
Blockly.Msg["MATH_MODULO_TOOLTIP"] = "Potonduliono noolu mantad pomboogian duo numbul.";
Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×";  // untranslated
Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://en.wikipedia.org/wiki/Number";  // untranslated
Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "Numbul";
Blockly.Msg["MATH_ONLIST_HELPURL"] = "";  // untranslated
Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "purata mantad sanarai";
Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "Maksimum id suang sanarai";
Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "median montok sanarai";
Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "min id suang sanarai";
Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] = "mod mantad sanarai";
Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] = "Item rawak id sanarai";
Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] = "sisihan piawai montok sanarai";
Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "Ginumu sanarai";
Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] = "Potonduliono purata (min aritmetik) mantad gatang numerik id sanarai.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] = "Potonduliono numbul bobos tagayo id sanarai.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] = "Potonduliono numbul median id sanarai.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] = "Pogulio numbul bobos tokoro id sanarai.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] = "Potonduliono sanarai item di bobos koubasan id sanarai.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] = "Potondulio item rawak mantad do sanarai.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] = "Potondulio sisihan piawai mantad sanarai.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] = "Potonduliono ginumu toinsanan numbul id sanarai.";
Blockly.Msg["MATH_POWER_SYMBOL"] = "^";  // untranslated
Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";  // untranslated
Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "pamabakan rawak";
Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] = "Potondulionon pamabakan rawak id pialatan 0.0 (inklusif) om 1.0 (esklusif).";
Blockly.Msg["MATH_RANDOM_INT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";  // untranslated
Blockly.Msg["MATH_RANDOM_INT_TITLE"] = "integer rawak mantad %1 kumaa %2";
Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] = "Potonduliono integer rawak id pialatan do duo limit spesifik, inklusif.";
Blockly.Msg["MATH_ROUND_HELPURL"] = "https://en.wikipedia.org/wiki/Rounding";  // untranslated
Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "pobulugu";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] = "buluguo id siriba";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "buluguo id sawat";
Blockly.Msg["MATH_ROUND_TOOLTIP"] = "Pobulato numbul minsawat toi ko' minsiriba.";
Blockly.Msg["MATH_SINGLE_HELPURL"] = "https://en.wikipedia.org/wiki/Square_root";  // untranslated
Blockly.Msg["MATH_SINGLE_OP_ABSOLUTE"] = "mutlak";
Blockly.Msg["MATH_SINGLE_OP_ROOT"] = "punca kuasa duo";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] = "Potonduliono gatang mutlak montok isoiso numbul.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] = "Potonduliono e kumaa kuasa numbul.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] = "Potonduliono o logaritma asli numbul.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] = "Potonduliono impohon logaritma 10 numbul.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] = "Potonduliono numbul di songsang.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] = "Potonduliono 10 kumaa kuasa numbul.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] = "Potonduliono punca kuasa duo numbul.";
Blockly.Msg["MATH_SUBTRACTION_SYMBOL"] = "-";  // untranslated
Blockly.Msg["MATH_TRIG_ACOS"] = "akos";
Blockly.Msg["MATH_TRIG_ASIN"] = "asin";
Blockly.Msg["MATH_TRIG_ATAN"] = "atan";
Blockly.Msg["MATH_TRIG_COS"] = "kos";
Blockly.Msg["MATH_TRIG_HELPURL"] = "https://en.wikipedia.org/wiki/Trigonometric_functions";  // untranslated
Blockly.Msg["MATH_TRIG_SIN"] = "sin";
Blockly.Msg["MATH_TRIG_TAN"] = "tan";
Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] = "Potonduliono arccosine mantad do numbul.";
Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] = "Potonduliono arcsine mantad numbul.";
Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] = "Potonduliono arctangen mantad numbul.";
Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] = "Potonduliono cosine do darjah (okon radian).";
Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] = "Potonduliono darjah sine (okon radian).";
Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] = "Potonduliono tangen do darjah (okon ko' radian).";
Blockly.Msg["NEW_COLOUR_VARIABLE"] = "Pomonsoi warana pembolehubah...";
Blockly.Msg["NEW_NUMBER_VARIABLE"] = "Pomonsoi numbul pembolehubah...";
Blockly.Msg["NEW_STRING_VARIABLE"] = "Pomonsoi tali pembolehubah...";
Blockly.Msg["NEW_VARIABLE"] = "Pomonsoi pembolehubah";
Blockly.Msg["NEW_VARIABLE_TITLE"] = "Ngaran pembolehubah wagu:";
Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "Kawo pembolehubah wagu:";
Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = "";  // untranslated
Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "allow statements";  // untranslated
Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "with:";  // untranslated
Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] = "Run the user-defined function '%1'.";  // untranslated
Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] = "Run the user-defined function '%1' and use its output.";  // untranslated
Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "with:";  // untranslated
Blockly.Msg["PROCEDURES_CREATE_DO"] = "Create '%1'";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "Describe this function...";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = "";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "do something";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "to";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] = "Creates a function with no output.";  // untranslated
Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "return";  // untranslated
Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] = "Creates a function with an output.";  // untranslated
Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] = "Warning: This function has duplicate parameters.";  // untranslated
Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] = "Highlight function definition";  // untranslated
Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] = "https://c2.com/cgi/wiki?GuardClause";  // untranslated
Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] = "If a value is true, then return a second value.";  // untranslated
Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] = "Warning: This block may be used only within a function definition.";  // untranslated
Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "input name:";  // untranslated
Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] = "Add an input to the function.";  // untranslated
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "inputs";  // untranslated
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] = "Add, remove, or reorder inputs to this function.";  // untranslated
Blockly.Msg["REDO"] = "Wonsoyo kawagu";
Blockly.Msg["REMOVE_COMMENT"] = "Pugaso komi";
Blockly.Msg["RENAME_VARIABLE"] = "Simbanai ngaran pembolehubah...";
Blockly.Msg["RENAME_VARIABLE_TITLE"] = "Pomungaranai toinsanan%1 pembolehubah kumaa:";
Blockly.Msg["TEXT_APPEND_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg["TEXT_APPEND_TITLE"] = "kumaa %1 ruhangai teks %2";
Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "Ruhangai soboogian teks kumaa pembolehubah '%1'.";
Blockly.Msg["TEXT_CHANGECASE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";  // untranslated
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "to lower case";  // untranslated
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = "to Title Case";  // untranslated
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "to UPPER CASE";  // untranslated
Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] = "Return a copy of the text in a different case.";  // untranslated
Blockly.Msg["TEXT_CHARAT_FIRST"] = "mogihum pimato koiso";
Blockly.Msg["TEXT_CHARAT_FROM_END"] = "mogihum pimato # mantad kotohuri";
Blockly.Msg["TEXT_CHARAT_FROM_START"] = "maganu pimato #";
Blockly.Msg["TEXT_CHARAT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-text";  // untranslated
Blockly.Msg["TEXT_CHARAT_LAST"] = "mogihum pimato kotohuri";
Blockly.Msg["TEXT_CHARAT_RANDOM"] = "mogihum pimato rawak";
Blockly.Msg["TEXT_CHARAT_TAIL"] = "";  // untranslated
Blockly.Msg["TEXT_CHARAT_TITLE"] = "is suang teks %1 %2";
Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "Potondulionon pimato kumaa kinoyonon spesifik.";
Blockly.Msg["TEXT_COUNT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#counting-substrings";  // untranslated
Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "count %1 in %2";  // untranslated
Blockly.Msg["TEXT_COUNT_TOOLTIP"] = "Count how many times some text occurs within some other text.";  // untranslated
Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] = "Ruhangai item kumaa teks.";
Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "tanud";
Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] = "Ruhangai, idui, toi ko' rikudo seksyen montok mongulud kawagu tantob teks diti,";
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "to letter # from end";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "to letter #";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "to last letter";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "id suang teks";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] = "get substring from first letter";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] = "get substring from letter # from end";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] = "get substring from letter #";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = "";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] = "Potonduliono ginumu spesifik do teks.";
Blockly.Msg["TEXT_INDEXOF_HELPURL"] = "https://github.com/google/blockly/wiki/Text#finding-text";  // untranslated
Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "mogihum kinaantakan koiso teks";
Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "mogihum kinaantakan kotohuri teks";
Blockly.Msg["TEXT_INDEXOF_TITLE"] = "id suang teks %1 %2 %3";
Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] = "Potonduliono Indeks kinaantakan koiso/kotohuri mantad teks koiso kumaa teks koduo. Potonduliono %1 sokiro au koruba teks.";
Blockly.Msg["TEXT_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";  // untranslated
Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1 nopo nga' kusung";
Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] = "Potonduliono otopot sokiro teks di pinotounda nopo nga' kusung.";
Blockly.Msg["TEXT_JOIN_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-creation";  // untranslated
Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "Pomonsoi teks momoguno";
Blockly.Msg["TEXT_JOIN_TOOLTIP"] = "Pomonsoi soboogian teks miampai popiungkait nunu nopo numbul id items.";
Blockly.Msg["TEXT_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg["TEXT_LENGTH_TITLE"] = "Ninaru %1";
Blockly.Msg["TEXT_LENGTH_TOOLTIP"] = "Pogulio ginumu pimato (kohompit no liwang) id suang teks di pinotounda.";
Blockly.Msg["TEXT_PRINT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#printing-text";  // untranslated
Blockly.Msg["TEXT_PRINT_TITLE"] = "print %1";  // untranslated
Blockly.Msg["TEXT_PRINT_TOOLTIP"] = "Print the specified text, number or other value.";  // untranslated
Blockly.Msg["TEXT_PROMPT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";  // untranslated
Blockly.Msg["TEXT_PROMPT_TOOLTIP_NUMBER"] = "Prompt for user for a number.";  // untranslated
Blockly.Msg["TEXT_PROMPT_TOOLTIP_TEXT"] = "Prompt for user for some text.";  // untranslated
Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] = "prompt for number with message";  // untranslated
Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] = "prompt for text with message";  // untranslated
Blockly.Msg["TEXT_REPLACE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#replacing-substrings";  // untranslated
Blockly.Msg["TEXT_REPLACE_MESSAGE0"] = "replace %1 with %2 in %3";  // untranslated
Blockly.Msg["TEXT_REPLACE_TOOLTIP"] = "Replace all occurances of some text within some other text.";  // untranslated
Blockly.Msg["TEXT_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#reversing-text";  // untranslated
Blockly.Msg["TEXT_REVERSE_MESSAGE0"] = "reverse %1";  // untranslated
Blockly.Msg["TEXT_REVERSE_TOOLTIP"] = "Reverses the order of the characters in the text.";  // untranslated
Blockly.Msg["TEXT_TEXT_HELPURL"] = "https://en.wikipedia.org/wiki/String_(computer_science)";  // untranslated
Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "Pimato, boros toi ko' baris teks.";
Blockly.Msg["TEXT_TRIM_HELPURL"] = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";  // untranslated
Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] = "trim spaces from both sides of";  // untranslated
Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] = "trim spaces from left side of";  // untranslated
Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] = "trim spaces from right side of";  // untranslated
Blockly.Msg["TEXT_TRIM_TOOLTIP"] = "Return a copy of the text with spaces removed from one or both ends.";  // untranslated
Blockly.Msg["TODAY"] = "Baino";
Blockly.Msg["UNDO"] = "Potonduliono kawagu";
Blockly.Msg["UNNAMED_KEY"] = "au kingaran";
Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "kakamot";
Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "Create 'set %1'";  // untranslated
Blockly.Msg["VARIABLES_GET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#get";  // untranslated
Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "Returns the value of this variable.";  // untranslated
Blockly.Msg["VARIABLES_SET"] = "set %1 to %2";  // untranslated
Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "Create 'get %1'";  // untranslated
Blockly.Msg["VARIABLES_SET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#set";  // untranslated
Blockly.Msg["VARIABLES_SET_TOOLTIP"] = "Sets this variable to be equal to the input.";  // untranslated
Blockly.Msg["VARIABLE_ALREADY_EXISTS"] = "Pembolehubah pinungaranan %1 haro no.";
Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] = "Pembolehubah pinungaranan '%1' haro no ngaran montok suai kawo: '%2'.";
Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_A_PARAMETER"] = "Pembolehubah pinungaranan do '%1' haro no sabaagi parameter id prosedur '%2'.";
Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "Blockly Workspace";  // untranslated
Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "Say something...";  // untranslated
Blockly.Msg["CONTROLS_FOREACH_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_FOR_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_IF_ELSEIF_TITLE_ELSEIF"] = Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"];
Blockly.Msg["CONTROLS_IF_ELSE_TITLE_ELSE"] = Blockly.Msg["CONTROLS_IF_MSG_ELSE"];
Blockly.Msg["CONTROLS_IF_IF_TITLE_IF"] = Blockly.Msg["CONTROLS_IF_MSG_IF"];
Blockly.Msg["CONTROLS_IF_MSG_THEN"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_WHILEUNTIL_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["LISTS_CREATE_WITH_ITEM_TITLE"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
Blockly.Msg["LISTS_GET_INDEX_HELPURL"] = Blockly.Msg["LISTS_INDEX_OF_HELPURL"];
Blockly.Msg["LISTS_GET_INDEX_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["LISTS_GET_SUBLIST_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["LISTS_INDEX_OF_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["LISTS_SET_INDEX_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["MATH_CHANGE_TITLE_ITEM"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
Blockly.Msg["PROCEDURES_DEFRETURN_COMMENT"] = Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"];
Blockly.Msg["PROCEDURES_DEFRETURN_DO"] = Blockly.Msg["PROCEDURES_DEFNORETURN_DO"];
Blockly.Msg["PROCEDURES_DEFRETURN_PROCEDURE"] = Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"];
Blockly.Msg["PROCEDURES_DEFRETURN_TITLE"] = Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"];
Blockly.Msg["TEXT_APPEND_VARIABLE"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TITLE_ITEM"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];

Blockly.Msg["MATH_HUE"] = "230";
Blockly.Msg["LOOPS_HUE"] = "120";
Blockly.Msg["LISTS_HUE"] = "260";
Blockly.Msg["LOGIC_HUE"] = "210";
Blockly.Msg["VARIABLES_HUE"] = "330";
Blockly.Msg["TEXTS_HUE"] = "160";
Blockly.Msg["PROCEDURES_HUE"] = "290";
Blockly.Msg["COLOUR_HUE"] = "20";
Blockly.Msg["VARIABLES_DYNAMIC_HUE"] = "310";
return Blockly.Msg;
}));