/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(["require", "exports"], function (require, exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.conf = {
        comments: {
            lineComment: '--',
            blockComment: ['--[[', ']]'],
        },
        brackets: [
            ['{', '}'],
            ['[', ']'],
            ['(', ')'],
            ['do', 'end'],
            ['then', 'end'],
            ['function', 'end'],
            ['repeat', 'until']
        ],
        autoClosingPairs: [
            { open: '{', close: '}' },
            { open: '[', close: ']' },
            { open: '(', close: ')' },
            { open: '"', close: '"' },
            { open: '\'', close: '\'' },
        ],
        surroundingPairs: [
            { open: '{', close: '}' },
            { open: '[', close: ']' },
            { open: '(', close: ')' },
            { open: '"', close: '"' },
            { open: '\'', close: '\'' },
        ],
        folding: {
            markers: {
                start: new RegExp("^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))"),
                end: new RegExp("^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))")
            }
        }
    };
    exports.language = {
        defaultToken: '',
        tokenPostfix: '.lua',
        keywords: [
            'and', 'break', 'do', 'else', 'elseif',
            'end', 'false', 'for', 'function', 'continue', 'if',
            'in', 'local', 'nil', 'not', 'or',
            'repeat', 'return', 'then', 'true', 'until',
            'while', 
        ],
        brackets: [
            { token: 'delimiter.bracket', open: '{', close: '}' },
            { token: 'delimiter.array', open: '[', close: ']' },
            { token: 'delimiter.parenthesis', open: '(', close: ')' }
        ],
        globals: [
            "DockWidgetPluginGuiInfo","os","clonefunction","unreliablehook","UDim","debug","consolecreate","queue_on_teleport","getexecutorname","lz4decompress","crypt_generatekey","unprotect_gui","http_get","Stats","mouse1press","toclipboard","newcclosure","request","Drawing_new","shared","setscriptable","http_request","rconsoletitle","isexecutorclosure","spawn","isourclosure","stats","isfile","getproto","print","cache_replace","debug_getupvalue","RaycastParams","getstack","TweenInfo","cache_invalidate","mousemoveabs","http_post","mouse1click","Vector2int16","collectgarbage","game","Faces","gethiddenproperty","makereadonly","topointer","getnilinstances","syn_secure_protect","gettenv","restorefunction","math","protect_gui","pcall","setclipboard","isreadonly","readfileasync","mouse2click","sethiddenproperty","writefile","base64_encode","getconstant","warn","gcinfo","getscriptclosure","tick","crypt_user_decrypt","getfenv","crypt_decrypt","issynapsefunction","setrenderproperty","consoleerror","base64","setconstant","getinstances","getconstants","getidentity","is_our_closure","Drawing","RotationCurveKey","getrenderproperty","getobjects","buffer","consoleprint","PluginManager","setuntouched","debug_getstack","debug_getconstants","ypcall","xpcall","delfolder","listfiles","keyrelease","_VERSION","getscripthash","cache_iscached","getcallstack","require","base64_decode","Vector3int16","next","fireproximityprompt","islclosure","ImGui_new","rawequal","newproxy","Spawn","lz4compress","utf8","getscriptbytecode","getcaps","debug_setupvalue","isuntouched","getclosurecaps","syn_secure_run","Websocket_connect","fireclickdetector","select","rconsolecreate","Rect","BrickColor","setfenv","iswindowactive","getcallbackvalue","firesignal","tostring","makefolder","cfiresignal","setrawmetatable","restoresignal","isscriptable","pairs","hookmetamethod","assert","getrawmetatable","CatalogSearchParams","isgameactive","OverlapParams","setthreadcontext","rconsoleerror","issignalhooked","gethiddenproperties","coroutine","isfunctionhooked","FloatCurveKey","cloneref","output","loadstring","printidentity","Version","PluginDrag","getprotos","hookfunction","string","mouse2release","debug_setconstant","table","getrunningscripts","Vector3","getupvalue","elapsedTime","consolesettitle","setidentity","ipairs","httpget","setupvalue","isfolder","Region3","setrbxclipboard","getscripts","dumpstring","crypt_encrypt","keypress","getproperties","Random","getupvalues","rconsoleclear","ElapsedTime","makewriteable","set_thread_identity","getinfo","consolewarn","Axes","debug_getinfo","loadfile","syn","PathWaypoint","http","crypt","CFrame","queueonteleport","isrbxactive","gethui","Font","DateTime","consoledestroy","getconnections","checkcaller","task","rconsoledestroy","rconsolename","getcallback","rconsolesettitle","crypt_random","clearconsole","consoleclear","rawlen","wait","consoleerr","rconsoleerr","Color3","printconsole","WebSocket","Enum","Delay","debug_setstack","getthreadinstance","checkclosure","setstack","cache","rconsoleprint","_G","getthreadscript","setthreadidentity","compareinstances","debug_getproto","UserSettings","delfile","get_thread_identity","getthreadcontext","mouse1release","getsynasset","NumberRange","setnamecallmethod","PhysicalProperties","hooksignal","torbxuserdata","getsenv","bit32","getthreadidentity","Ray","NumberSequenceKeypoint","Wait","getcustomasset","replaceclosure","Game","delay","debug_getprotos","cleardrawcache","crypt_generatebytes","CellId","getcallingscript","tonumber","crypt_user_encrypt","getloadedmodules","httppost","consoleinput","mousescroll","Workspace","typeof","readfile","isrenderobj","gethwid","isprotohooked","crypt_derive_password","getrenv","setmetatable","UDim2","mousemoverel","NumberSequence","identifyexecutor","getscriptfunction","crypt_derive_key","rconsolewarn","version","mouse2press","iscclosure","setclosurecaps","getmetatable","type","getgc","restoreproto","hookproto","appendfile","run_on_actor","ColorSequence","debug_getconstant","time","crypt_hash","setreadonly","workspace","firetouchinterest","getfpscap","setfpscap","ColorSequenceKeypoint","Vector2","crypt_hmac","getnamecallmethod","debug_getupvalues","SharedTable","Instance","rconsoleinput","getgenv","getreg","unpack","Region3int16","rawset","dofile","settings","setcaps","error","rawget"
		
        ],
        operators: [
            '+', '-', '*', '/', '%', '^', '#', '==', '~=', '<=', '>=', '<', '>', '=',
            ';', ':', ',', '.', '..', '...'
        ],
        // we include these common regular expressions
        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // identifiers and keywords
                [/[a-zA-Z_]\w*/, {
                        cases: {
                            '@keywords': { token: 'keyword.$0' },
                            '@globals': { token: 'global' },
                            '@default': 'identifier'
                        }
                    }],
                // whitespace
                { include: '@whitespace' },
                // keys
                [/(,)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/, ['delimiter', '', 'key', '', 'delimiter']],
                [/({)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/, ['@brackets', '', 'key', '', 'delimiter']],
                // delimiters and operators
                [/[{}()\[\]]/, '@brackets'],
                [/@symbols/, {
                        cases: {
                            '@operators': 'delimiter',
                            '@default': ''
                        }
                    }],
                // numbers
                [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],
                [/\d+?/, 'number'],
                // delimiter: after number because of .\d floats
                [/[;,.]/, 'delimiter'],
                // strings: recover on non-terminated strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],
                [/'([^'\\]|\\.)*$/, 'string.invalid'],
                [/"/, 'string', '@string."'],
                [/'/, 'string', '@string.\''],
            ],
            whitespace: [
                [/[ \t\r\n]+/, ''],
                [/--\[([=]*)\[/, 'comment', '@comment.$1'],
                [/--.*$/, 'comment'],
            ],
            comment: [
                [/[^\]]+/, 'comment'],
                [/\]([=]*)\]/, {
                        cases: {
                            '$1==$S2': { token: 'comment', next: '@pop' },
                            '@default': 'comment'
                        }
                    }],
                [/./, 'comment']
            ],
            string: [
                [/[^\\"']+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/["']/, {
                        cases: {
                            '$#==$S2': { token: 'string', next: '@pop' },
                            '@default': 'string'
                        }
                    }]
            ],
        },
    };
});