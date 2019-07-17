/*
var functionNameOrStuctureName = (function (stdlib, env, heap) {
    "use asm";
    return {};
})();
*/
/*
function MyAsmModule(stdlib, foreign, heap) {
    "use asm";

    // module body...

    return {
        export1: f1,
        export2: f2,
        // ...
    };
}
*/

(function (window) {
    "use strict";

    var buffer = new ArrayBuffer(1024 * 1024 * 8);
    var NTP = 25;

    var myASMModule = (function (stdlib, env, heap) {
        "use asm";


        function funcASM1(a, b) {
            a = a | 0;
            b = b | 0;

            return (a + b) | 0;
        }

        function funcASM2(a, b) {
            a = a | 0;
            b = b | 0;

            return (a - b) | 0;
        }

        return {
            funcASM1: funcASM1,
            funcASM2: funcASM2
        };
    })(
        {
            Uint8Array:  Uint8Array,
            Int8Array:   Int8Array,
            Uint16Array: Uint16Array,
            Int16Array:  Int16Array,
            Uint32Array: Uint32Array,
            Int32Array:  Int32Array,
            Float32Array:Float32Array,
            Float64Array:Float64Array,
            Math:        Math
        },
        { 
            NTP:NTP
        },
        buffer 
    );

    window.myASMModule = myASMModule;
})(window);