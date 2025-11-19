

function cambiarImg(torta) {

    document.querySelector('#grande').setAttribute('src', 'img/' + torta + '.jpg');
    document.querySelector('h2').textContent = torta;
    document.querySelector('body').setAttribute('class', fruta)

}



