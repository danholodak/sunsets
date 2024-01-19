function myFunction(x) {
  x.classList.toggle("change");
  var visible = document.getElementById("menu").style.display == "block";
    if (visible) {
        document.getElementById("menu").style.display='none';
    }
    else 
    {
        document.getElementById("menu").style.display='block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    } 
}, false);

