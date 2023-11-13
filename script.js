document.getElementById('goButton').addEventListener('click', function() {
    var input = document.getElementById('urlInput').value;

    // Vérifier si l'entrée est une URL valide, sinon traiter comme une recherche Google
    if (isValidHttpUrl(input)) {
        document.getElementById('webview').src = input;
    } else {
        document.getElementById('webview').src = 'https://www.google.com/search?q=' + encodeURIComponent(input);
    }
});

function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;  
    }

    return url.protocol === "http:" || url.protocol === "https:";
}
