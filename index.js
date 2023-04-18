function validateForm() {
        var today = new Date();
        var name = document.forms["message-form"]["full-name"].value;
        var date = document.forms["message-form"]["birth-date"].value;
        var gender = document.forms["message-form"]["gender"].value;
        var messages = document.forms["message-form"]["messages"].value;
        
        if (name == "" ||  date == "" || gender == "" || messages == "") {
        alert("Tidak boleh kosong")
        return false;
        }

        document.getElementById('sender-time').innerText = today;
        document.getElementById('sender-full-name').innerText = name;
        document.getElementById('sender-birth-date').innerText = date;
        document.getElementById('sender-gender').innerText = gender;
        document.getElementById('sender-messages').innerText = messages;
        return false;
    }
    
    var slideIndex = 1;
    showSlides(slideIndex)

    function plusSlides(n) {
        showIndex(slideIndex += n);
    }

    const slides = document.querySelectorAll("img-slideshow");
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("img-slideshow");
        if (n > slides.length) {slideIndex = 1;}
        if (n < 1) {slideIndex = imgList.length;}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }