// testting if page is connected
// alert("this is working");

function sendEmail() {
    var link = "mailto:"
             + "?cc="
             + "&subject=" + escape(document.getElementById("mySubject").value)
             + "&body=" + escape(document.getElementById('myText').value)

    window.location.href = link;
};
