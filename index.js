let text = document.getElementById('inputText');
let button = document.getElementById('crypt');
let button1 = document.getElementById('cryptbyIndexOF');

const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
let arrayText = [];
let resultText = [];

let checkAndAdd = inputAction();

function inputAction() {
    return {

        check: window.onload = () => {
            if (text.value === '') {
                return button.disabled = true;
            } else {
                return button.disabled = false;
            }
        },

        addText: () => {
            arrayText.push(text.value);
            resultText = arrayText[arrayText.length - 1].split('');
            console.log(resultText);
        }
    }
}

function cryptText() {
    let key = parseInt(prompt('Give me a key'));
    let cryptText = [];
    for (let i = 0; i < resultText.length; i++) {
        for (let alphabetI = 0; alphabetI < alphabet.length; alphabetI++) {
            if (alphabet[alphabetI] === resultText[i]) {
                let sum = alphabetI + key;
                let index = (alphabetI + (alphabetI + key)) % alphabet.length;
                if (sum < alphabet.length) {
                    cryptText.push(alphabet[sum]);
                } else {
                    cryptText.push(alphabet[index + 1]);
                }
            } else if (resultText[i] === " ") {
                cryptText.push(" ");
                break;
            }
        }
    }
    return console.log(cryptText);
}

function cryptTextByIndexOF(){



}



text.addEventListener("input", checkAndAdd.addText);
text.addEventListener("input", checkAndAdd.check);
button.addEventListener("click", cryptText);
button.addEventListener('click', cryptTextByIndexOF);
