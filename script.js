const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const copyBtn = document.getElementById("copyBtn");
let check = /^[a-z :.¿?¡!",\n]*$/;


function encrypt() {

	let rawText = document.getElementById("rawText").value;

	if (check.test(rawText)) {
        
		rawText = rawText.replace(/e/g, "enter");
	    rawText = rawText.replace(/i/g, "imes");
	    rawText = rawText.replace(/a/g, "ai");
	    rawText = rawText.replace(/o/g, "ober");
	    rawText = rawText.replace(/u/g, "ufat");

	    document.getElementById("result").innerHTML = rawText;
	    document.getElementById("result").style.backgroundImage = "none";
        document.getElementById("restrictions").style.animationName = "";

	} else {
        /*document.getElementById("restrictions").style.animationName = "checkAnimation";*/
	}
    
}

function decrypt() {

	let rawText = document.getElementById("rawText").value;

	if (check.test(rawText)) {
		
	    rawText = rawText.replace(/enter/g, "e");
	    rawText = rawText.replace(/imes/g, "i");
	    rawText = rawText.replace(/ai/g, "a");
	    rawText = rawText.replace(/ober/g, "o");
	    rawText = rawText.replace(/ufat/g, "u");

	    document.getElementById("result").innerHTML = rawText;
	    document.getElementById("result").style.backgroundImage = "none";

    } else {
    	/*document.getElementById("restrictions").style.animationName = "checkAnimation";*/
    }

}

function copyResult() {
    
    let copyText = document.getElementById("result");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

}

function checkAnimation() {

	let rawText = document.getElementById("rawText").value;

	if (check.test(rawText)) {
		document.getElementById("restrictions").style.animationName = "";
	} else {
		document.getElementById("restrictions").style.animationName = "checkAnimation";
	}

}

encryptBtn.onclick = encrypt;
decryptBtn.onclick = decrypt;
copyBtn.onclick = copyResult;
