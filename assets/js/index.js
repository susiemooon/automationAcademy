import _ from 'lodash';
import './base.scss';
import imgC from './images/companies.png';


var companies = document.getElementById('imgCompanies');
companies.src = imgC;
var slideIndex = 0;
var dotsIndex = 0;
showSlides();


function showSlides() {
    var i;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var dots1 = document.getElementsByClassName("dot1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        
    }
    slideIndex++;
    
    if (slideIndex > slides.length/2) {slideIndex = 1} 
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active1", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    slides[slideIndex-1+(slides.length/2)].style.display = "block";
    dots[dotsIndex].className += " active";
    dots1[dotsIndex].className += " active1";
    
    dotsIndex+=4;
    if(dotsIndex>dots.length)
    dotsIndex=0;  
            
    setTimeout(showSlides, 4000); 
}

//document.body.appendChild(component());