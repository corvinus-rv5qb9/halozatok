var kérdések;
var k = 0;

window.onload = () => {
    letöltés()

}



function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data));
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(k);
}

function kérdésMegjelenítés(k) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[k].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[k].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[k].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[k].answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[k].image;
    document.getElementById("válasz1").style.backgroundColor = "white";
    document.getElementById("válasz2").style.backgroundColor = "white";
    document.getElementById("válasz3").style.backgroundColor = "white";

}


előre = function () {
    k++;
    if (k == kérdések.length) {
        k = 0;
    }

    kérdésMegjelenítés(k);
}

vissza = function () {
    k--;
    if (k == 0) {
        k = kérdések.length;
    }

    kérdésMegjelenítés(k);

}

színezés = function (n) {
    if (n == kérdések[k].correctAnswer) { document.getElementById("válasz" + n).style.backgroundColor = "green" }
    else { document.getElementById("válasz" + n).style.backgroundColor = "red" }
}

function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}

function válaszfeldolgozás(válasz) {
    if (!válasz.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        return válasz.json()
    }
}

function kiiratás(lista) {
    console.log(lista)
    for (var i = 0; i < lista.length; i++) {
        let újElem = document.createElement("div");
        újElem.innerText = lista[i];
        document.getElementById("eredmeny").appendChild(újElem);
    }
}

fetch('/questions/all')
    .then(response => response.json())
    .then(data => console.log(data)
    );



fetch('/questions/4')
    .then(response => response.json())
    .then(data => console.log(data)
    );


fetch('/questions/1')
    .then(response => response.json())
    .then(data => kérdésMegjelenítés(data)
    );