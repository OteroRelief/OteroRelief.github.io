function checkEm(){
    var email = document.getElementById("email").value;

    if (email.endsWith('@edu.burnabyschools.ca')) {
        document.getElementById("warndialog").innerText = "";
        document.getElementById("ctf").style.visibility = 'visible';
        document.getElementById("ctf").style.height = '100vh';
    } else {
        document.getElementById("warndialog").innerHTML = "Error. Please enter the email provided by your school";
        document.getElementById("ctf").style.visibility = 'collapse';
        document.getElementById("ctf").style.height = '0vh';
    }
}

function loadCheck(){

    var email = document.getElementById("email").value;

    if (email.endsWith('@edu.burnabyschools.ca')) {
        document.getElementById("ctf").style.visibility = 'visible';
        document.getElementById("ctf").style.height = '100vh';
    } else {
        document.getElementById("ctf").style.visibility = 'collapse';
        document.getElementById("ctf").style.height = '0vh';
    }
}