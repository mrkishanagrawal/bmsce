$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.accordion-heading').click(function(){

        $('.accordion .accordion-content').slideUp();

        $(this).next('.accordion-content').slideDown();

    });

});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

//validation

function validation(){

  var user = document.getElementById('fname').value;
  var event = document.getElementById('emails').value;
  var venue = document.getElementById('number').value;
  




  if(fname == ""){
       document.getElementById('username').innerHTML =" ** Please fill the username field";
       return false;
  }
  if((fname.length <= 2) || (user.length > 20)) {
       document.getElementById('username').innerHTML =" ** Name lenght must be between 2 and 20";
       return false;  
  }
  if(!isNaN(fname)){
       document.getElementById('username').innerHTML =" ** only characters are allowed";
       return false;
  }


  if(number == ""){
       document.getElementById('uno').innerHTML =" ** Please fill the Mobile Number  field";
       return false;
  }
  if(isNaN(number)){
       document.getElementById('uno').innerHTML =" ** user must write digits only not characters";
       return false;
  }
  if(number.length!=10){
       document.getElementById('uno').innerHTML =" ** number must be 10 digits only";
       return false;
  }

  if(emails == ""){
       document.getElementById('emailids').innerHTML =" ** Please fill the email id` field";
       return false;

  }
  if(emails.indexOf('@') <= 0 ){
       document.getElementById('emailids').innerHTML =" ** @ Invalid Email";
       return false;
  }

  
}

