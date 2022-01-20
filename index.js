window.onload = function () {
    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => dataReady(data))
}

function dataReady(data) {
    console.log(data);
}