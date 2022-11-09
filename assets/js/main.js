const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function encode() {
    // Variablen Definition
    const number = Number(document.getElementById("inputNumber1").value);
    console.log(number);
    const textEntered = document.getElementById("inputClearText").value;
    const textArray = [];
    const textArrayCoded = [];

    // Text in Array verwandeln
    for (let i = 0; i < textEntered.length; i++) {
        textArray.push(textEntered[i].toUpperCase());
    }
    console.log(textArray);

    // Verschlüsseln und push in neues Array
    for (let a = 0; a < textArray.length; a++) {
        if (textArray[a] === " ") {
            textArrayCoded.push(" ");
        } else {
            let index = alphabet.indexOf(textArray[a]);
            console.log(index);
            let indexCode = (index + number) % 26;
            textArrayCoded.push(alphabet[indexCode]);
        }
    }

    console.log(textArrayCoded);
    document.getElementById("outputCodedText").innerHTML = textArrayCoded.join("");

}

function decode() {
    // Variablen Definition
    const numberTwo = Number(document.getElementById("inputNumber2").value);
    console.log(numberTwo);
    const textEntered = document.getElementById("inputCodedText").value;
    const textArrayCode = [];
    const textArrayDecoded = [];

    // Text in Array verwandeln
    for (let i = 0; i < textEntered.length; i++) {
        textArrayCode.push(textEntered[i].toUpperCase());
    }
    console.log(textArrayCode);

    // Entschlüsseln und push in neues Array
    for (let a = 0; a < textArrayCode.length; a++) {
        if (textArrayCode[a] === " ") {
            textArrayDecoded.push(" ");
        } else {
            let index = alphabet.indexOf(textArrayCode[a]);
            console.log("index" + index);
            let indexCode = ((index - numberTwo) % 26);
            if (indexCode < 0) {
                indexCode = indexCode + 26;
            }
            textArrayDecoded.push(alphabet[indexCode]);
            console.log(indexCode);
        }
    }

    console.log(textArrayDecoded);
    document.getElementById("outputDecodedText").innerHTML = textArrayDecoded.join("");

}