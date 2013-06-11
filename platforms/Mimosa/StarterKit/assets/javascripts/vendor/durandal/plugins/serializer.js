define("plugins/serializer",["durandal/system"],function(e){return{typeAttribute:"type",space:void 0,replacer:function(e,t){if(e){var r=e[0];if("_"===r||"$"===r)return void 0}return t},serialize:function(e,t){return JSON.stringify(e,this.replacer,t||this.space)},getTypeId:function(e){return e?e[this.typeAttribute]:void 0},typeMap:{},registerType:function(){var t=arguments[0];if(1==arguments.length){var r=t[this.typeAttribute]||e.getModuleId(t);this.typeMap[r]=t}else this.typeMap[t]=arguments[1]},reviver:function(e,t){var r=this.getTypeId(t);if(r){var i=this.typeMap[r];if(i)return i.fromJSON?i.fromJSON(t):new i(t)}return t},deserialize:function(e){var t=this;return JSON.parse(e,function(e,r){return t.reviver(e,r)})}}});