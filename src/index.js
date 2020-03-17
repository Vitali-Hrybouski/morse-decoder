const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = "";
    let tenElement = expr.match(/[0-9*]{10}/gm);

    tenElement.forEach(element => {
        let morse = "";
        if (element === "**********") result += " ";
        else {
            let twoElement = element.match(/[0-9*]{2}/gm);
            twoElement.forEach(e => {
                if (e === "10") morse += ".";
                if (e === "11") morse += "-";
            });
            result += MORSE_TABLE[morse];
        }
    });
    return result;
}

module.exports = {
    decode
}
