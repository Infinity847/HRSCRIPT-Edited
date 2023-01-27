var Answer = "";
var SpeechResult = "";
var KeyPressCode = 0;
var s_width = screen.width;
var s_height = screen.height;
var Bot$Utterances = [];
var Bot$Responses = [];
var Bot$Alternatives = [];
var Bot$EventType = '=';
var $$ConfigBot = false;
var player$latitude = 0;
var player$longitude = 0;
var SpeechRecog$Link = '';
var AJAX$Link = '';
var AJAX$Result = '';
function $Import(module) {
if (module == 'WebSocket') {
return {
    GetSocket:function(port,protocall) {
return new WebSocket(port,protocall);
    }
}
}else if(module == 'ChatBot') {
return {
    AddUtterance: function(item) {
        Bot$Utterances.push(item);
        },
        AddResponse: function(item) {
            Bot$Responses.push(item);
            },
            AddAlternative: function(item) {
                Bot$Alternatives.push(item);
                },
                GiveResult:  function(item) {
                    if (Bot$Alternatives.length==0||Bot$Responses.length==0||Bot$Utterances.length==0) {
                    if (Bot$Utterances.length==0) {
        console.error(`
        Error: There are no utterances
        `);
                    }
                    if (Bot$Responses.length == 0) {
                        console.error(`
        Error: There are no responses
        `);
                    }
                    if (Bot$Alternatives.length == 0) {
                        console.error(`
        Error: There are no alternatives
        `);
                    }
                }else {
                    $$ConfigBot=false;
                    for (i=0;i<Bot$Utterances.length;i++) {
                        if ($$ConfigBot == false){
        if (Bot$EventType == '=') {
        if (item == Bot$Utterances[i]) {
            $$ConfigBot = true;
            return Bot$Responses[i];
        }
        }else {
            if (item.includes(Bot$Utterances[i])) {
                $$ConfigBot = true;
                return Bot$Responses[i];
            }  
        }
        }
                }
                    if (!($$ConfigBot)){
                //Alternative
                return Bot$Alternatives[parseInt(Math.random())*parseInt(Bot$Alternatives.length)];
                    }
                }
                },
                EventType:function(item) {
                    Bot$EventType = item;
                    }
}
}else if(module=='AJAX') {
return {
    GetLinkData:function(link) {
     AJAX$net.open("GET",link);
     } ,ChangeAJAXlink:function(item) {
         AJAX$Link = item;
         }
 }
}else {
    console.error(`
    Use a real module
    1. Check if your spelling is incorrect
    `);
}
}

const AJAX$net = new XMLHttpRequest();
AJAX$net.onload = function() {
AJAX$Result = this.responseText;
if (AJAX$Link = '') {}else {
document.getElementById(AJAX$Link).click();
}
}

function $ChangeAJAXlink(item) {
AJAX$Link = item;
}
console.log(`
HRSCRIPT VERSION 2.14
    HRSCRIPT 2
`);
