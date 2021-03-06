// https://www.codewars.com/kata/decode-the-morse-code/train/javascript

const decodeMorse = (morseCode) => {
  const morse = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '': ' ',
    '···−−−···': 'SOS',
    '...---...': 'SOS',
    '--..--': ',',
    '..--..': '?',
    '.----.': '\'',
    '-.-.--': '!',
    '-..-.': '/',
    '-.--.': '(',
    '-.--.-': ')',
    '.-...': '&',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '.-.-.': '+',
    '.-..-.': '"',
    '.--.-.': '@',
    '.-.-.-': '.'
  };
  const decoded = morseCode.split(' ').map(elem => morse[elem]);
  for (let i = 0; i < decoded.length; i += 1) {
    if (decoded[i] === ' ' && decoded[i + 1] === ' ') {
      decoded.splice(i, 1);
    }
  }
  return decoded.join('').trim();
};

console.log((decodeMorse('...---... -.-.--   - .... .  --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-')));
