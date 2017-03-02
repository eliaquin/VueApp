function BuscarObjeto(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", encodeURI(url), true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send();

    xhr.onerror = function () {
        callback(0);
    };
    xhr.onload = function () {
        if (xhr.status === 200)
            callback(JSON.parse(xhr.responseText));
        else
            callback(0);
    }
}

function GuardarObjeto(url, objeto, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", encodeURI(url), true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send(JSON.stringify(objeto));

    xhr.onerror = function () {
        callback(0);
    };
    xhr.onload = function () {
        if (xhr.status === 200)
            callback(JSON.parse(xhr.responseText));
        else
            callback(0);
    }
}