const матн = "Эй, санам! Ман Туро дӯст медорам!";


let index = 0;

function навис() {
    document.body.innerText = матн.slice(0, index);
    index++;

    if(index > матн.length){
        index = 0;
    }

}

setInterval(навис, 200);