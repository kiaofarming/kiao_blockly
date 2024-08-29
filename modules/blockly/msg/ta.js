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

Blockly.Msg["ADD_COMMENT"] = "கருத்தை சேர்";
Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] = "Can't delete the variable '%1' because it's part of the definition of the function '%2'";  // untranslated
Blockly.Msg["CHANGE_VALUE_TITLE"] = "மதிப்பை மாற்றவும்:";
Blockly.Msg["CLEAN_UP"] = "Clean up Blocks";  // untranslated
Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] = "Collapsed blocks contain warnings.";  // untranslated
Blockly.Msg["COLLAPSE_ALL"] = "உறுப்புகளை மரை";
Blockly.Msg["COLLAPSE_BLOCK"] = "உறுப்பை மரை";
Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "நிறம் 1";
Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "நிறம் 2";
Blockly.Msg["COLOUR_BLEND_HELPURL"] = "https://meyerweb.com/eric/tools/color-blend/#:::rgbp";  // untranslated
Blockly.Msg["COLOUR_BLEND_RATIO"] = "விகிதம்";
Blockly.Msg["COLOUR_BLEND_TITLE"] = "கலப்பு (வண்ணம்)";
Blockly.Msg["COLOUR_BLEND_TOOLTIP"] = "கொடுக்கப்பட்ட விகதத்தில் (0.0 - 1.0) இரு நிறங்களை கலக்குக.";
Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://en.wikipedia.org/wiki/Color";  // untranslated
Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "வண்ண தட்டிலிருந்து ஒரு நிறத்தைத் தேர்ந்தெடுக்கவும்.";
Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com";  // untranslated
Blockly.Msg["COLOUR_RANDOM_TITLE"] = "தற்போக்கு நிறம்";
Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "தற்போக்கில் ஒரு நிறத்தை தேர்ந்தெடுக்கவும்.";
Blockly.Msg["COLOUR_RGB_BLUE"] = "நீலம்";
Blockly.Msg["COLOUR_RGB_GREEN"] = "பச்சை";
Blockly.Msg["COLOUR_RGB_HELPURL"] = "https://www.december.com/html/spec/colorpercompact.html";  // untranslated
Blockly.Msg["COLOUR_RGB_RED"] = "சிகப்பு";
Blockly.Msg["COLOUR_RGB_TITLE"] = "நிறத்துடன்";
Blockly.Msg["COLOUR_RGB_TOOLTIP"] = "குறிப்பிட்ட அளவு சிவப்பு,பச்சை மற்றும் நீலம் சேர்த்து புது நிறம் உருவாக்கு. மதிப்புகள் 0 முதல் 100 வரை மட்டுமே இருக்க வேண்டும்.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";  // untranslated
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] = "மடக்கு கட்டளையை நிறுத்து.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] = "மடக்கு கட்டளையின் அடுத்த இயக்கநிலைக்கு செல்";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] = "மடக்கு கட்டளையின் இயக்கத்தில் இருந்து நிறுத்து.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] = "மடக்கு கட்டளையின் மீதியை விட்டுவிட்டு அடுத்த இயக்கநிலைக்கு செல்";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] = "எச்சரிக்கை : மடக்கு கூற்றில் இந்த தொகுதி ஒரு முறை மட்டுமே செயல்படுத்தப் படலாம்.";
Blockly.Msg["CONTROLS_FOREACH_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#for-each";  // untranslated
Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "உருப்படி ஒவ்வொன்றாக %1 பட்டியலில் உள்ள %2";
Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] = "பட்டியலில் உள்ள உருப்படியில் ஒவ்வொன்றாக, மாறியின் பொருள் '%1' ஆக வைக்க.";
Blockly.Msg["CONTROLS_FOR_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#count-with";  // untranslated
Blockly.Msg["CONTROLS_FOR_TITLE"] = "மாறியை வைத்து எண்ண %1 %2 இல் இருந்து %3 வரை %4-இன் படியாக";
Blockly.Msg["CONTROLS_FOR_TOOLTIP"] = "முதல் எண்ணில் இருந்து கடை எண் வரை எடுத்துக்கொள்ள ஒரு மாறியை வைத்துக்கொள், குறித்த இடைவெளியை சேர்த்தவறே தொகுதிகளை செயலாக்கு.";
Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] = "ஆனால் தொகுப்பிற்கு நிபந்தனை சேர்க்க";
Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] = "ஆனால் தொகுப்பிற்கு விதிவிலக்கு காப்பை சேர்க்க";
Blockly.Msg["CONTROLS_IF_HELPURL"] = "https://github.com/google/blockly/wiki/IfElse";  // untranslated
Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] = "கட்டளைகளை தொகுப்பு திருத்துதம் செய்";
Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "இல்லையெனில்";
Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "இல்லைஆனால்";
Blockly.Msg["CONTROLS_IF_MSG_IF"] = "எனில்";
Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] = "மாறி உண்மை ஆக உள்ள வரை, கட்டளைகளை இயக்கு";
Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] = "மாறி உண்மை ஆக உள்ள வரை, கட்டளைகளை இயக்கு. அல்லது மற்ற (அடுத்த) கட்டளைகளை இயக்கு.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] = "மாறி உண்மை ஆக உள்ள வரை, கட்டளைகளை தொகுப்பு இயக்கு. அல்லது மற்ற (அடுத்த) கட்டளைகளை தொகுப்பு இயக்கு.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] = "மாறி உண்மை ஆக உள்ள வரை, கட்டளைகளை தொகுப்பு இயக்கு. அல்லது மற்ற (அடுத்த) கட்டளைகளை தொகுப்பு இயக்கு. இரண்டும் இல்லை என்றால் கடைசி தொகுப்பு இயக்கு.";
Blockly.Msg["CONTROLS_REPEAT_HELPURL"] = "https://en.wikipedia.org/wiki/For_loop";  // untranslated
Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "செய்க";
Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "'%1' முரை திரும்ப செய்";
Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] = "கட்டளைகளை பல முரை செய்ய";
Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#repeat";  // untranslated
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "பலமுரை திரும்ப செய் (முடயேனில்)";
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "பலமுரை திரும்ப செய் (வரை)";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] = "மாறி பொய் ஆக உள்ள வரை, கட்டளைகளை இயக்கு";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] = "மாறி உண்மை ஆக உள்ள வரை, கட்டளைகளை இயக்கு";
Blockly.Msg["DELETE_ALL_BLOCKS"] = "அனைத்து %1 நிரல் துண்டுகளையும் அழிக்கவா??";
Blockly.Msg["DELETE_BLOCK"] = "உறுப்பை நீக்கு";
Blockly.Msg["DELETE_VARIABLE"] = "Delete the '%1' variable";  // untranslated
Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] = "Delete %1 uses of the '%2' variable?";  // untranslated
Blockly.Msg["DELETE_X_BLOCKS"] = "%1 உறுப்பை நீக்கு";
Blockly.Msg["DIALOG_CANCEL"] = "இரத்து செய்";
Blockly.Msg["DIALOG_OK"] = "சரி";
Blockly.Msg["DISABLE_BLOCK"] = "உறுப்பை இயங்காது செய்";
Blockly.Msg["DUPLICATE_BLOCK"] = "மறுநகல்";
Blockly.Msg["DUPLICATE_COMMENT"] = "Duplicate Comment";  // untranslated
Blockly.Msg["ENABLE_BLOCK"] = "உறுப்பை இயங்குமாரு செய்";
Blockly.Msg["EXPAND_ALL"] = "உறுப்புகளை காட்டு";
Blockly.Msg["EXPAND_BLOCK"] = "உறுப்பை காட்டு";
Blockly.Msg["EXTERNAL_INPUTS"] = "வெளி கருவிகளுடன் உள்ளீடு";
Blockly.Msg["HELP"] = "உதவி";
Blockly.Msg["INLINE_INPUTS"] = "சூழமைவில் உள்ளீடு";
Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-empty-list";  // untranslated
Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "காலி பட்டியல் உருவாக்க";
Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] = "காலி பட்டியல் பின்கொடு.";
Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "பட்டியல்";
Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] = "கட்டளைகளை தொகுப்பு திருத்துதம் செய்";
Blockly.Msg["LISTS_CREATE_WITH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "வைத்து பட்டியல் உருவாக்க";
Blockly.Msg["LISTS_CREATE_WITH_ITEM_TOOLTIP"] = "பட்டியலில் ஒரு பொருளை சேர்க்க.";
Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"] = "இவ்வளவு உருப்படிகளை கொண்டு வேண்டுமாலும் ஒரு பட்டியலை உருவாக்கு.";
Blockly.Msg["LISTS_GET_INDEX_FIRST"] = "முதல்";
Blockly.Msg["LISTS_GET_INDEX_FROM_END"] = "கடைசியில் இருந்து #";
Blockly.Msg["LISTS_GET_INDEX_FROM_START"] = "#";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_GET"] = "எடு";
Blockly.Msg["LISTS_GET_INDEX_GET_REMOVE"] = "பெற்று நீக்கு";
Blockly.Msg["LISTS_GET_INDEX_LAST"] = "கடைசி";
Blockly.Msg["LISTS_GET_INDEX_RANDOM"] = "ஏதோ ஒன்று";
Blockly.Msg["LISTS_GET_INDEX_REMOVE"] = "அகற்று";
Blockly.Msg["LISTS_GET_INDEX_TAIL"] = "";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] = "பட்டியல் முதல் உருப்படியை பின்கொடு,";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] = "பட்டியலில் இடத்தில் உருப்படி பின்கொடு.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] = "பட்டியல் கடைசி உருப்படியை பின்கொடு,";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] = "பட்டியல் சீரற்ற உருப்படியை பின்கொடு,";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] = "பட்டியல் முதல் உருப்படியை நீக்கியபின் பின்கொடு,";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] = "பட்டியலில் கேட்ட இடத்தின் உருப்படி நீக்கி பின்கொடு.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] = "பட்டியல் இறுதி உருப்படியை நீக்கியபின் பின்கொடு,";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] = "பட்டியல் சீரற்ற உருப்படியை நீக்கியபின் பின்கொடு,";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] = "பட்டியலில் முதல் உருப்படியை நீக்கு";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] = "பட்டியலில் கேட்ட இடத்தின் உருப்படி நீக்கு.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] = "பட்டியலில் கடைசி உருப்படியை நீக்கு";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] = "பட்டியல் சீரற்ற உருப்படியை நீக்கு,";
Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_END"] = "முடிவில் இருந்து # வரை";
Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_START"] = "# வரை";
Blockly.Msg["LISTS_GET_SUBLIST_END_LAST"] = "முடிவு வரை";
Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_START_FIRST"] = "# முதலில் இருந்து பகுதி பட்டியலை கொடு";
Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_END"] = "# கடைசியில் இருந்து பகுதி பட்டியலை கொடு";
Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_START"] = "பகுதி பட்டியலை # இடத்தில் இருந்து கொடு";
Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = "";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] = "குறிப்பட்ட பகுதி பட்டியலின் நகலை கொடு";
Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "%1 கடைசி உருப்படி.ி";
Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] = "%1 முதல் உருப்படி.";
Blockly.Msg["LISTS_INDEX_OF_FIRST"] = "உரையில் முதல் தோற்ற இடத்தை காட்டு";
Blockly.Msg["LISTS_INDEX_OF_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";  // untranslated
Blockly.Msg["LISTS_INDEX_OF_LAST"] = "உரையில் கடைசி தோற்ற இடத்தை காட்டு";
Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] = "பட்டியலில் மதிப்பின் முதல், கடைசி தோற்ற இடத்தை பின்கொடு. காணாவிட்டால் %1 பின்கொடு.";
Blockly.Msg["LISTS_INLIST"] = "பட்டியலில் உள்ள";
Blockly.Msg["LISTS_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#is-empty";  // untranslated
Blockly.Msg["LISTS_ISEMPTY_TITLE"] = "%1 காலியானது";
Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] = "பட்டியல் காலியானது மெய் பின்கொடு,";
Blockly.Msg["LISTS_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#length-of";  // untranslated
Blockly.Msg["LISTS_LENGTH_TITLE"] = "%1 இன் நீளம்";
Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "பட்டியல் நீளம் பின்கொடு";
Blockly.Msg["LISTS_REPEAT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
Blockly.Msg["LISTS_REPEAT_TITLE"] = "உருப்படி %1-யை, %2 தடவைகள் உள்ளவாறு ஒரு பட்டியலை உருவாக்கு";
Blockly.Msg["LISTS_REPEAT_TOOLTIP"] = "கொடுக்க பட்ட மதிப்பை, கூறியுள்ள தடவைகள் உள்ளவாறு ஒரு பட்டியலை உருவாக்கு";
Blockly.Msg["LISTS_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";  // untranslated
Blockly.Msg["LISTS_REVERSE_MESSAGE0"] = "reverse %1";  // untranslated
Blockly.Msg["LISTS_REVERSE_TOOLTIP"] = "Reverse a copy of a list.";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#in-list--set";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_INPUT_TO"] = "இதுபொல";
Blockly.Msg["LISTS_SET_INDEX_INSERT"] = "அவ்விடத்தில் நுழை";
Blockly.Msg["LISTS_SET_INDEX_SET"] = "நியமி";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST"] = "மதிப்பை பட்டியலின் முதலில் நுழை";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FROM"] = "பட்டியலில் கேட்ட இடத்தில் உருப்படியை நுழை.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_LAST"] = "மதிப்பை பட்டியலின் முடிவில் நுழை";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM"] = "மதிப்பை பட்டியலின் சீற்ற இடத்தில் நுழை";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FIRST"] = "மதிப்பை பட்டியலில் முதல் உருப்படியில் வை";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FROM"] = "பட்டியலில் கேட்ட இடத்தில் உருப்படியை வை.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_LAST"] = "மதிப்பை பட்டியலில் கடைசி உருப்படியில் வை";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_RANDOM"] = "மதிப்பை பட்டியலில் சீரற்ற உருப்படியில் வை";
Blockly.Msg["LISTS_SORT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";  // untranslated
Blockly.Msg["LISTS_SORT_ORDER_ASCENDING"] = "ஏறுவரிசை";
Blockly.Msg["LISTS_SORT_ORDER_DESCENDING"] = "இறங்குவரிசை";
Blockly.Msg["LISTS_SORT_TITLE"] = "sort %1 %2 %3";  // untranslated
Blockly.Msg["LISTS_SORT_TOOLTIP"] = "Sort a copy of a list.";  // untranslated
Blockly.Msg["LISTS_SORT_TYPE_IGNORECASE"] = "alphabetic, ignore case";  // untranslated
Blockly.Msg["LISTS_SORT_TYPE_NUMERIC"] = "எண்வரிசை";
Blockly.Msg["LISTS_SORT_TYPE_TEXT"] = "அகரவரிசை";
Blockly.Msg["LISTS_SPLIT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";  // untranslated
Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "உரையில் இருந்து பட்டியல் உருவாக்கு";
Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "பட்டியலில் இருந்து உரை உருவாக்கு";
Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] = "வரம்புச் சுட்டியை இடையில் இட்டு, உரைதுண்டுகளை ஒன்று சேர்";
Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] = "உரையை வரம்புச் சுட்டி கொண்டு துண்டாக்கு.";
Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "தடை எழுத்து";
Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "பொய்";
Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#values";  // untranslated
Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] = "மெய், அல்லது பொய் பின்கொடு.";
Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "மெய்";
Blockly.Msg["LOGIC_COMPARE_HELPURL"] = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";  // untranslated
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] = "இரண்டு மாறியும் ஈடானால், மெய் பின்கொடு.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] = "முதல் உள்ளீடு இரண்டாவதைவிட அதிகமாக இருந்தால், மெய் பின்கொடு.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] = "முதல் உள்ளீடு இரண்டாவதைவிட அதிகமாக அல்ல சமமாக இருந்தால், மெய் பின்கொடு.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] = "முதல் உள்ளீடு இரண்டாவதைவிட குறைவாக இருந்தால், மெய் பின்கொடு.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] = "முதல் உள்ளீடு இரண்டாவதைவிட குறைவாக அல்ல சமமாக இருந்தால், மெய் பின்கொடு";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] = "இரண்டு மாறியும் ஈடாகாவிட்டால், மெய் பின்கொடு.";
Blockly.Msg["LOGIC_NEGATE_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#not";  // untranslated
Blockly.Msg["LOGIC_NEGATE_TITLE"] = "%1 இல்லை";
Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] = "மெய் ஆனால், பொய் பின்கொடு. பொய் ஆனால், மெய் பின்கொடு.";
Blockly.Msg["LOGIC_NULL"] = "பூஜியம்";
Blockly.Msg["LOGIC_NULL_HELPURL"] = "https://en.wikipedia.org/wiki/Nullable_type";  // untranslated
Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "பூஜியம் பின்கொடு";
Blockly.Msg["LOGIC_OPERATION_AND"] = "மற்றும்";
Blockly.Msg["LOGIC_OPERATION_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#logical-operations";  // untranslated
Blockly.Msg["LOGIC_OPERATION_OR"] = "அல்லது";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] = "இரண்டு மாறியும் மெய் ஆனால், மெய் பின்கொடு.";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] = "ஏதேனும் ஒரு மதிப்பு மெய் ஆனால், மெய் பின்கொடு";
Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "சோதனை";
Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://en.wikipedia.org/wiki/%3F:";  // untranslated
Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "பொய்யெனில்";
Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "மெய்யெனில்";
Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] = "'test' உள்ள நிபந்தனையை சரிபார்க்கவும், நிபந்தனை மெய்யானால்,'if true'வை பின்கொடுக்கும் இல்லையெனில் 'if false'வை பின்கொடுக்கும்.";
Blockly.Msg["MATH_ADDITION_SYMBOL"] = "+";  // untranslated
Blockly.Msg["MATH_ARITHMETIC_HELPURL"] = "https://ta.wikipedia.org/wiki/%E0%AE%8E%E0%AE%A3%E0%AF%8D%E0%AE%95%E0%AE%A3%E0%AE%BF%E0%AE%A4%E0%AE%AE%E0%AF%8D";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] = "இரு எண்களின் கூட்டை பின்கொடு";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] = "இரு எண்களின் வகுத்தல் பின்கொடு";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] = "இரு எண்களின் கழிப்பை பின்கொடு";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] = "இரு எண்களின் பெருக்கலை பின்கொடு";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] = "முதல் உள்ளீடு இரண்டாவது எண் அளவான அடுக்கு பெருக்கை கணித்து பின்கொடு.";
Blockly.Msg["MATH_ATAN2_HELPURL"] = "https://en.wikipedia.org/wiki/Atan2";  // untranslated
Blockly.Msg["MATH_ATAN2_TITLE"] = "atan2 of X:%1 Y:%2";  // untranslated
Blockly.Msg["MATH_ATAN2_TOOLTIP"] = "Return the arctangent of point (X, Y) in degrees from -180 to 180.";  // untranslated
Blockly.Msg["MATH_CHANGE_HELPURL"] = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";  // untranslated
Blockly.Msg["MATH_CHANGE_TITLE"] = "மாற்று %1 மூலம் %2";
Blockly.Msg["MATH_CHANGE_TOOLTIP"] = "எண்னை '%1' மதிப்பால் கூட்டு,";
Blockly.Msg["MATH_CONSTANT_HELPURL"] = "https://ta.wikipedia.org/wiki/%E0%AE%95%E0%AE%A3%E0%AE%BF%E0%AE%A4_%E0%AE%AE%E0%AE%BE%E0%AE%B1%E0%AE%BF%E0%AE%B2%E0%AE%BF";
Blockly.Msg["MATH_CONSTANT_TOOLTIP"] = "ஒரு மாறிலியை பின்கொடு π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (முடிவிலி).";
Blockly.Msg["MATH_CONSTRAIN_HELPURL"] = "https://en.wikipedia.org/wiki/Clamping_(graphics)";  // untranslated
Blockly.Msg["MATH_CONSTRAIN_TITLE"] = "%1 மாறியை %2 மேலும் %3 கீழும் வற்புறுத்து";
Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] = "எண் மாறி வீசுகளம் உள்ளடங்கிய வாறு வற்புறுத்து";
Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷";  // untranslated
Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "ஆல் வகுபடக் கூடியது";
Blockly.Msg["MATH_IS_EVEN"] = "2-ஆல் பகும்";
Blockly.Msg["MATH_IS_NEGATIVE"] = "எண் குறைவானதா ?";
Blockly.Msg["MATH_IS_ODD"] = "2-ஆல் பகாத";
Blockly.Msg["MATH_IS_POSITIVE"] = "எண் நேர்ம முழுதானதா ?";
Blockly.Msg["MATH_IS_PRIME"] = "எண் பகாத்தனிதானதா?";
Blockly.Msg["MATH_IS_TOOLTIP"] = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";  // untranslated
Blockly.Msg["MATH_IS_WHOLE"] = "எண் முழுதானதா?";
Blockly.Msg["MATH_MODULO_HELPURL"] = "https://en.wikipedia.org/wiki/Modulo_operation";  // untranslated
Blockly.Msg["MATH_MODULO_TITLE"] = "%1 ÷ %2ன் மீதி";
Blockly.Msg["MATH_MODULO_TOOLTIP"] = "இரண்டு எண்கள் மூலம் பிரிவில் இருந்து எஞ்சியதை பின்கொடு.";
Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×";  // untranslated
Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://ta.wikipedia.org/wiki/%E0%AE%8E%E0%AE%A3%E0%AF%8D";
Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "ஒரு எண்.";
Blockly.Msg["MATH_ONLIST_HELPURL"] = "";  // untranslated
Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "பட்டியலின் எண் சராசரி";
Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "பட்டியலின் மிகுதி";
Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "பட்டியலின் நடுக்கோடு";
Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "பட்டியலின் கறைவு";
Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] = "பட்டியலின் பொதுவகைகள்";
Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] = "ஒரு பட்டியலில் இருந்து சீரற்ற உருப்படி";
Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] = "பட்டியலின் நியமவிலகல்";
Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "பட்டியலின் கூட்டு";
Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] = "முழு பட்டியலின் எண் சராசரி பின்கொடு";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] = "பட்டியலின் அதிகமான எண் பின்கொடு";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] = "பட்டியலின் நடுக்கோடு பின்கொடு";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] = "பட்டியலின் குறைவான எண் பின்கொடு";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] = "பட்டியலின் பொதுவகைகள் பின்கொடு";
Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] = "ஒரு பட்டியலில் இருந்து சீரற்ற உருப்படி பின்கொடு";
Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] = "பட்டியலின் நியமவிலகலை பின்கொடு.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] = "முழு பட்டியலின் எண் சமம் பின்கொடு,";
Blockly.Msg["MATH_POWER_SYMBOL"] = "^";  // untranslated
Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";  // untranslated
Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "சீரற்ற எண் பின்னம்";
Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] = "சீரற்ற எண் பின்னம், 0.0 இல் இருந்து 1.0 உட்பட, பின்கொடு.";
Blockly.Msg["MATH_RANDOM_INT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";  // untranslated
Blockly.Msg["MATH_RANDOM_INT_TITLE"] = "வீசுகளம் %1 இல் இருந்து %2 உள்ளடங்கிய வாறு சீரற்ற எண்";
Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] = "வீசுகளம் இல் இருந்த (உள்ளடங்கிய) வாறு சீரற்ற எண் பின்கொடு.";
Blockly.Msg["MATH_ROUND_HELPURL"] = "https://en.wikipedia.org/wiki/Rounding";  // untranslated
Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "முழுமையாக்கு";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] = "கீழ்வழி முழுமையாக்கு";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "மேல்வழி முழுமையாக்கு";
Blockly.Msg["MATH_ROUND_TOOLTIP"] = "மேல்/கீழ் வழி முழு எண் ஆக மாற்று.";
Blockly.Msg["MATH_SINGLE_HELPURL"] = "https://ta.wikipedia.org/wiki/%E0%AE%B5%E0%AE%B0%E0%AF%8D%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%AE%E0%AF%82%E0%AE%B2%E0%AE%AE%E0%AF%8D";
Blockly.Msg["MATH_SINGLE_OP_ABSOLUTE"] = "தனித்த";
Blockly.Msg["MATH_SINGLE_OP_ROOT"] = "வர்க்கமூலம்";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] = "ஒரு எண்ணின் தனித்த மதிப்பை பின்கொடு";
Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] = "e-இன் எண் அடுக்கு பெருக்கை பின்கொடு.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] = "ஒரு எண்ணின் (இயற்கை) மடக்கை மதிப்பை பின்கொடு.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] = "ஒரு எண்ணின் (10) மடக்கை மதிப்பை பின்கொடு.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] = "ஒரு எண்ணின் எதிர்மறை மதிப்பை பின்கொடு";
Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] = "10-இன் எண் அடுக்கு பெருக்கை பின்கொடு.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] = "ஒரு எண்ணின் வர்க்கமூலத்தைத் தரும்.";
Blockly.Msg["MATH_SUBTRACTION_SYMBOL"] = "-";  // untranslated
Blockly.Msg["MATH_TRIG_ACOS"] = "acos";  // untranslated
Blockly.Msg["MATH_TRIG_ASIN"] = "asin";  // untranslated
Blockly.Msg["MATH_TRIG_ATAN"] = "atan";  // untranslated
Blockly.Msg["MATH_TRIG_COS"] = "cos";  // untranslated
Blockly.Msg["MATH_TRIG_HELPURL"] = "https://ta.wikipedia.org/wiki/%E0%AE%AE%E0%AF%81%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%8B%E0%AE%A3%E0%AE%B5%E0%AE%BF%E0%AE%AF%E0%AE%B2%E0%AF%8D_%E0%AE%9A%E0%AE%BE%E0%AE%B0%E0%AF%8D%E0%AE%AA%E0%AF%81%E0%AE%95%E0%AE%B3%E0%AF%8D";
Blockly.Msg["MATH_TRIG_SIN"] = "sin";  // untranslated
Blockly.Msg["MATH_TRIG_TAN"] = "tan";  // untranslated
Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] = "மதிப்பின் நேர்மாறு கோசைன் பின்கொடு";
Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] = "மதிப்பின் நேர்மாறு சைன் பின்கொடு";
Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] = "மதிப்பின் நேர்மாறு டேஞ்சன்டு பின்கொடு";
Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] = "டிகிரீ கோசைன் மதிப்பை பின்கொடு";
Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] = "டிகிரீ சைன் மதிப்பை பின்கொடு.";
Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] = "டிகிரீ டேஞ்சன்டு மதிப்பை பின்கொடு";
Blockly.Msg["NEW_COLOUR_VARIABLE"] = "Create colour variable...";  // untranslated
Blockly.Msg["NEW_NUMBER_VARIABLE"] = "Create number variable...";  // untranslated
Blockly.Msg["NEW_STRING_VARIABLE"] = "Create string variable...";  // untranslated
Blockly.Msg["NEW_VARIABLE"] = "மாறிலியை உருவாக்குக...";
Blockly.Msg["NEW_VARIABLE_TITLE"] = "புதிய மாறிலியின் பெயர்:";
Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "புதிய மாறிலியின் பெயர்:";
Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = "";  // untranslated
Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "வாக்குமூலங்களை அனுமதிக்கவும்";
Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "இத்துடன்";
Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] = "பயனரின் '%1' செயற்கூற்றை ஓட்டு.";
Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] = "பயனரின் '%1' செயற்கூற்றை ஓட்டி வரும் வெளியீட்டை பயன்படுத்து.";
Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "இத்துடன்:";
Blockly.Msg["PROCEDURES_CREATE_DO"] = "'%1' உருவாக்குக";
Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "Describe this function...";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = "";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "கட்டளைகள் செய்ய (இடம்காட்டி)";
Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "இந்த மாறியிற்கு";
Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] = "வெளியீடு இல்லாத ஒரு செயல்பாடு உருவாக்குகிறது";
Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "பின்கொடு";
Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] = "வெளியீடு உள்ள ஒரு செயல்பாடு உருவாக்குகிறது";
Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] = "எச்சரிக்கை: இந்த செயற்கூறில் போலியான அளபுருக்கள் உண்டு.";
Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] = "நிரல்பாகத்தை விளக்கமாக காட்டு";
Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] = "https://c2.com/cgi/wiki?GuardClause";  // untranslated
Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] = "மதிப்பு உண்மையானால், இரண்டாவது மதிப்பை பின்கொடு.";
Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] = "Warning: This block may be used only within a function definition.";  // untranslated
Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "பெயரை உள்ளிடுக:";
Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] = "செயல்கூறுக்கு ஒரு உள்ளீட்டை சேர்.";
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "உள்ளீடுகள்";
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] = "செயல்கூறுகளின் உள்ளீட்டை சேர், நீக்கு, or மீண்டும் வரிசை செய்.";
Blockly.Msg["REDO"] = "மீண்டும் செய்";
Blockly.Msg["REMOVE_COMMENT"] = "கருத்தை நீக்கு";
Blockly.Msg["RENAME_VARIABLE"] = "மாறிலியை மறுபெயரிடுக...";
Blockly.Msg["RENAME_VARIABLE_TITLE"] = "அனைத்து '%1' மாறிலிகளையும் பின்வருமாறு மறுபெயரிடுக:";
Blockly.Msg["TEXT_APPEND_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg["TEXT_APPEND_TITLE"] = "இந்த மாறியிற்கு %1 உரை சேர்க்க %2";
Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "'%1' மாறியில் உரையை சேர்";
Blockly.Msg["TEXT_CHANGECASE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";  // untranslated
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "சின்ன எழுத்துக்கு மாற்று";
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = "தலைப்பு எழுத்துக்கு மாற்று";
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "பொரிய எழுத்துக்கு மாற்று";
Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] = "உரை நகல் எடுத்து பொரிய/சின்ன எழுத்து மாற்றி பின்கொடு.";
Blockly.Msg["TEXT_CHARAT_FIRST"] = "முதல் எழுத்தைப் பெறுக";
Blockly.Msg["TEXT_CHARAT_FROM_END"] = "முடிவில் இருந்து # எழுத்தை எடு";
Blockly.Msg["TEXT_CHARAT_FROM_START"] = "# எழுத்தை எடு";
Blockly.Msg["TEXT_CHARAT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-text";  // untranslated
Blockly.Msg["TEXT_CHARAT_LAST"] = "இறுதி எழுத்தைப் பெறுக";
Blockly.Msg["TEXT_CHARAT_RANDOM"] = "சமவாய்ப்புள்ள எழுத்தை எடு";
Blockly.Msg["TEXT_CHARAT_TAIL"] = "";  // untranslated
Blockly.Msg["TEXT_CHARAT_TITLE"] = "in text %1 %2";  // untranslated
Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "கூறிய இடத்தில் உள்ள எழுத்தை எடு";
Blockly.Msg["TEXT_COUNT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#counting-substrings";  // untranslated
Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "count %1 in %2";  // untranslated
Blockly.Msg["TEXT_COUNT_TOOLTIP"] = "Count how many times some text occurs within some other text.";  // untranslated
Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] = "உருபடியை உரையில் சேர்க்க.";
Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "சேர்க்க";
Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] = "தொகுப்பு உரை திருத்துதம் செய்";
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "எழுத்து கடைசியில் இருந்து # வரை";
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "எழுத்து # வரை";
Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "கடைசி எழுத்து வரை";
Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "உரையில்";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] = "-இல் உட்கணம் முதல் எழுத்திலிருந்து";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] = "-இல் உட்கணம் கடைசி # எழுத்திலிருந்து";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] = "-இல் உட்கணம் # எழுத்திலிருந்து";
Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = "";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] = "உரையின் குறியிடப்பட்ட சரம் பின்கொடு";
Blockly.Msg["TEXT_INDEXOF_HELPURL"] = "https://github.com/google/blockly/wiki/Text#finding-text";  // untranslated
Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "உரையில் முதல் தோற்ற இடத்தை பின்கொடு";
Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "உரையில் கடைசி தோற்ற இடத்தை பின்கொடு";
Blockly.Msg["TEXT_INDEXOF_TITLE"] = "உரையில் %1 %2 %3";
Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] = "இரண்டாவது உரையில் முதல் உரையின் முதல்/கடை இருக்கை குறிஎண்ணை பின்கொடு.";
Blockly.Msg["TEXT_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";  // untranslated
Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1 காலியானது";
Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] = "காலியானது என்றால் மெய் மதிப்பை பின்கொடு";
Blockly.Msg["TEXT_JOIN_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-creation";  // untranslated
Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "வைத்து உரை உருவாக்க";
Blockly.Msg["TEXT_JOIN_TOOLTIP"] = "பல பொருட்களை ஒன்றாக சேர்வதன் மூலம் உரை உருவாக்க.";
Blockly.Msg["TEXT_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg["TEXT_LENGTH_TITLE"] = "%1ன் நீளம்";
Blockly.Msg["TEXT_LENGTH_TOOLTIP"] = "தொடரில் உள்ள எழுத்துக்களின் (இடைவெளிகளையும் சேர்த்து) எண்ணிகையை பின்கொடு.";
Blockly.Msg["TEXT_PRINT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#printing-text";  // untranslated
Blockly.Msg["TEXT_PRINT_TITLE"] = "%1 அச்சிடுக";
Blockly.Msg["TEXT_PRINT_TOOLTIP"] = "மதிப்பை அச்சிடு";
Blockly.Msg["TEXT_PROMPT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";  // untranslated
Blockly.Msg["TEXT_PROMPT_TOOLTIP_NUMBER"] = "எண்-உள்ளீடு தூண்டுதலை காட்டு";
Blockly.Msg["TEXT_PROMPT_TOOLTIP_TEXT"] = "உரை-உள்ளீடு தூண்டுதலை காட்டு";
Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] = "உரை கொண்டு எண்-உள்ளீடு தூண்டுதலை காட்டு";
Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] = "உரை கொண்டு உரை-உள்ளீடு தூண்டுதலை காட்டு";
Blockly.Msg["TEXT_REPLACE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#replacing-substrings";  // untranslated
Blockly.Msg["TEXT_REPLACE_MESSAGE0"] = "replace %1 with %2 in %3";  // untranslated
Blockly.Msg["TEXT_REPLACE_TOOLTIP"] = "Replace all occurances of some text within some other text.";  // untranslated
Blockly.Msg["TEXT_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#reversing-text";  // untranslated
Blockly.Msg["TEXT_REVERSE_MESSAGE0"] = "reverse %1";  // untranslated
Blockly.Msg["TEXT_REVERSE_TOOLTIP"] = "Reverses the order of the characters in the text.";  // untranslated
Blockly.Msg["TEXT_TEXT_HELPURL"] = "https://ta.wikipedia.org/wiki/%E0%AE%9A%E0%AE%B0%E0%AE%AE%E0%AF%8D_%28%E0%AE%95%E0%AE%A3%E0%AE%BF%E0%AE%A9%E0%AE%BF%E0%AE%AF%E0%AE%BF%E0%AE%AF%E0%AE%B2%E0%AF%8D%29";
Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "எழுத்து, சரம், சொல், அல்லது உரை சொற்தொடர்.";
Blockly.Msg["TEXT_TRIM_HELPURL"] = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";  // untranslated
Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] = "இரு பக்கத்திலும் இடைவெளி எழுத்து நேர்த்தி செய்.";
Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] = "இடது பக்கத்தில் இடைவெளி எழுத்து நேர்த்தி செய்.";
Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] = "வலது பக்கத்தில் இடைவெளி எழுத்து நேர்த்தி செய்.";
Blockly.Msg["TEXT_TRIM_TOOLTIP"] = "உரை நகல் எடுத்து இடைவெளி எழுத்து நீக்கி பின்கொடு.";
Blockly.Msg["TODAY"] = "இன்று";
Blockly.Msg["UNDO"] = "மீளமை";
Blockly.Msg["UNNAMED_KEY"] = "பெயரிடப்படாதது";
Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "உருப்படி";
Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "'%1 நியமி' உருவாக்கு";
Blockly.Msg["VARIABLES_GET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#get";  // untranslated
Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "இந்த மாறி மதிப்பை பின்கொடு";
Blockly.Msg["VARIABLES_SET"] = "நியமி %1 இந்த மாறியிற்கு %2";
Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "'எடு %1' உருவாக்கு";
Blockly.Msg["VARIABLES_SET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#set";  // untranslated
Blockly.Msg["VARIABLES_SET_TOOLTIP"] = "மாறியின் மதிப்பாய் உள்ளீட்டு மதிப்பை வை.";
Blockly.Msg["VARIABLE_ALREADY_EXISTS"] = "A variable named '%1' already exists.";  // untranslated
Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] = "A variable named '%1' already exists for another type: '%2'.";  // untranslated
Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_A_PARAMETER"] = "A variable named '%1' already exists as a parameter in the procedure '%2'.";  // untranslated
Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "Blockly Workspace";  // untranslated
Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "ஏதாகினும் பகர்க...";
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
