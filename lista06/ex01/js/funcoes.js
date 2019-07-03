function trocarImg(bicho, nome) {
    document.getElementById("imgAnimal").src = "img/" + bicho + ".jpg";
    document.getElementById("legenda").innerHTML = nome;

}

function trocarAnimal(bicho) {
    bicho = document.getElementById('legenda').innerHTML.toLowerCase().substr(0,3);
    if (bicho !== 'apa') {
        var num = parseInt(Math.random()*3+1);
        document.getElementById("imgAnimal").src = "img/" + bicho + num + ".jpg"
    }
}