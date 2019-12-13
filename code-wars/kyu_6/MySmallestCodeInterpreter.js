// url https://www.codewars.com/kata/526156943dfe7ce06200063e/train/javascript
// solution https://www.codewars.com/kata/my-smallest-code-interpreter-aka-brainf-star-star-k/solutions/javascript?show-solutions=1
function brainLuck(code, input){
    var data = [],
        pos  = 0,
        ipos = 0,
        output = [],
        skipping = 0,
        backwards = 0;

    var COMMANDS = {
        '>': function() { ++pos },
        '<': function() { --pos },
        '+': function() { data[pos] = ((data[pos] || 0) + 1) % 256 },
        '-': function() { data[pos] = ((data[pos] || 0) + 255) % 256 },
        '.': function() { output.push(data[pos]) },
        ',': function() { data[pos] = (input[ipos++] || '').charCodeAt() },
        '[': function() { if (!data[pos]) { skipping = 1 } },
        ']': function() { if (data[pos]) { backwards = 1 } }
    };

    for (var cpos=0,l=code.length; cpos <= l; ++cpos) {
        if (skipping) {
            if (code[cpos] === '[') { skipping++ }
            if (code[cpos] === ']') { skipping-- }
        } else if (backwards) {
            cpos -= 2;
            if (code[cpos] === ']') { backwards++ }
            if (code[cpos] === '[') { backwards-- }
        } else {
            code[cpos] && COMMANDS[code[cpos]]();
        }
    }

    return String.fromCharCode.apply(null, output)
}

// Inspired from real-world Brainf**k, we want to create an interpreter of that language which will support the following instructions (the machine memory or 'data' should behave like a potentially infinite array of bytes, initialized to 0):
//
// > increment the data pointer (to point to the next cell to the right).
// < decrement the data pointer (to point to the next cell to the left).
// + increment (increase by one, truncate overflow: 255 + 1 = 0) the byte at the data pointer.
// - decrement (decrease by one, treat as unsigned byte: 0 - 1 = 255 ) the byte at the data pointer.
//     . output the byte at the data pointer.
//     , accept one byte of input, storing its value in the byte at the data pointer.
//     [ if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command.
// ] if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command.
//     The function will take in input...
//
// the program code, a string with the sequence of machine instructions,
//     the program input, a string, eventually empty, that will be interpreted as an array of bytes using each character's ASCII code and will be consumed by the , instruction
// ... and will return ...
//
// the output of the interpreted code (always as a string), produced by the . instruction.

// Echo until byte(255) encountred
// Test.assertEquals(
//     brainLuck(',+[-.,+]','Codewars'+String.fromCharCode(255)),
//     'Codewars'
// );
//
// // Echo until byte(0) encountred
// Test.assertEquals(
//     brainLuck(',[.[-],]','Codewars'+String.fromCharCode(0)),
//     'Codewars'
// );
//
// // Two numbers multiplier
// Test.assertEquals(
//     brainLuck(',>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.', String.fromCharCode(8,9)),
//     String.fromCharCode(72)
// );
