const kannada = require('../src');

const text = 'ವಿದ್ಯಾರ್ತಿ ಕನ್ನಡ ಬಾಷೆಯನ್ನು ಪ್ರೀತಿಸುತ್ತಾನೆ';

console.log('Spelling:', kannada.checkSpelling(text));
console.log('Corrected:', kannada.correctSpelling(text));
console.log('Grammar:', kannada.checkGrammar(text));
console.log('Captions:', kannada.generateCaptions('promotional', 2));
console.log('Dictionary:', kannada.searchWord('ಕನ್ನಡ'));
console.log('Transliteration:', kannada.transliterate('namaskara'));
