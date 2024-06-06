document.addEventListener("DOMContentLoaded", function () {
    function gotowhatsapp(id) {
        let images = document.getElementById("images" + id).innerText;
        let names = document.getElementById("names" + id).innerText;
        let imgLink = document
            .getElementById("imgLink" + id)
            .getAttribute("src");
        console.log(imgLink); // Output: /images/1.jpeg
        var url =
            "https://wa.me/+2349032491755?text=" +
            "image No: " +
            images +
            "%0a" +
            "image: " +
            imgLink +
            "%0a" +
            "names: " +
            names +
            "%0a" +
            "Message: I WANT TO KNOW MORE ABOUT IT" +
            "%0a";
        window.open(url, "_blank").focus();
    }
    // Make the function accessible from the global scope
    window.gotowhatsapp = gotowhatsapp;
});