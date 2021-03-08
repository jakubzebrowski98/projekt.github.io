window.addEventListener('scroll', () =>{
    const scrollY = window.scrollY+100;
    console.log(scrollY);
    const height = window.innerHeight;
    scrollOpacity = (scrollY-1000)*-1 / 1000;
    scrollBrightness = (scrollOpacity + 0.2).toString();
//change element while scrolling
    document.querySelector(".slider").style.filter = 'brightness(' + scrollBrightness + ')';

    if(scrollY > 400){
        document.querySelector(".slider_content").classList.add('slider_contentMove');
    }else{
        document.querySelector(".slider_content").classList.remove('slider_contentMove');
    }
    
    if(scrollY > height-50){
        document.querySelector(".header").classList.add('scroll_header');
        document.querySelector(".header_logoImage").classList.add('header_logoImageScale');
        document.querySelector(".scroll_header").classList.remove("scroll_headerReplace")
    }else{
        document.querySelector(".header").classList.remove('scroll_header');
        document.querySelector(".header_logoImage").classList.remove('header_logoImageScale');
    }
});



window.addEventListener("load", () => {
    var slideIndex = 1;
    document.getElementsByClassName("slide_img")[0].classList.add('slide_imgActive');
    document.getElementsByClassName("dot")[0].classList.add('dotActive');

    //next picture

    setInterval(function() {
        if(slideIndex > 3){slideIndex =0};
        showSlide(slideIndex);
        slideIndex +=1;
    }, 4000);

    document.getElementsByClassName("arrow left")[0].addEventListener("click", function(){
        console.log("asdsa");
        if(slideIndex === 0){
            slideIndex = 3;
            showSlide(slideIndex);
            clearInterval();
        }else{
            slideIndex -= 1;
            showSlide(slideIndex);
            clearInterval();
        }
    });

    document.getElementsByClassName("arrow right")[0].addEventListener("click", function(){
        if(slideIndex === 3){
            slideIndex = 0;
            clearInterval();
        }else{
            slideIndex += 1;
            clearInterval();
        }
        showSlide(slideIndex);
    });
    

    function showSlide(slideIndex){
        var dot = document.getElementsByClassName("dot");
        var image = document.getElementsByClassName("slide_img");
        var x = 0;
        for(x = 0;x < 4;x++){
            if(x === slideIndex){
                dot[x].classList.add('dotActive');
                image[x].classList.add('slide_imgActive');
            }else{
                dot[x].classList.remove('dotActive');
                image[x].classList.remove('slide_imgActive');
            }
        }
        
    };
});

//unrolling menu footer on small width

document.querySelector(".about").addEventListener("click",() =>{
    var x = 0;
    var about = document.getElementsByClassName("first");
    for(x = 0;x < document.getElementsByClassName("first").length;x++){
        about[x].classList.toggle('activeFooter');
    }
});
document.querySelector(".candidate").addEventListener("click",() =>{
    var x = 0;
    var candidate = document.getElementsByClassName("second");
    for(x = 0;x < document.getElementsByClassName("second").length;x++){
        candidate[x].classList.toggle('activeFooter');
    }
});
document.querySelector(".student").addEventListener("click",() =>{
    var x = 0;
    var student = document.getElementsByClassName("third");
    for(x = 0;x < document.getElementsByClassName("third").length;x++){
        student[x].classList.toggle('activeFooter');
    }
});
document.querySelector(".biznes").addEventListener("click",() =>{
    var x = 0;
    var biznes = document.getElementsByClassName("four");
    for(x = 0;x < document.getElementsByClassName("four").length;x++){
        biznes[x].classList.toggle('activeFooter');
    }
});
document.querySelector(".shortcuts").addEventListener("click",() =>{
    var x = 0;
    var shortcuts = document.getElementsByClassName("five");
    for(x = 0;x < document.getElementsByClassName("five").length;x++){
        shortcuts[x].classList.toggle('activeFooter');
    }
});

//popup wideo



document.querySelector(".wideo_foreground").addEventListener("click",() =>{
    document.querySelector(".pop_upWideo").classList.toggle("pop_upWideoActive");
    
});
document.querySelector(".pop_upWideo").addEventListener("click",() =>{
    document.querySelector(".pop_upWideo").classList.toggle("pop_upWideoActive");   
});

//rollup nav

document.querySelector(".menu-icon").addEventListener("click",() =>{
    document.querySelector(".nav_box").classList.toggle("navActive");
    document.querySelector(".scroll_header").classList.toggle("scroll_headerReplace")
});
document.querySelector(".nav_box").addEventListener("click",() =>{
    document.querySelector(".nav_box").classList.remove("navActive");
    document.querySelector(".scroll_header").classList.toggle("scroll_headerReplace")
});

//form validation AND SEND BY AJAX

var rodo_button = document.querySelector(".rodo_button");


rodo_button.addEventListener("click", event =>{
    var name = document.querySelector(".name").value;
    var surname = document.querySelector(".surname").value;
    var email = document.querySelector(".email").value;
    var message = document.querySelector(".message").value;
    var checkbox = document.querySelector("#checkbox");
    event.preventDefault();

    const err = valide();
    if(err.length === 0){

        sendMessage();
        
    }else{
        document.querySelector(".err").innerHTML = `
            <ul style="list-style:none;color:red;font-weight: bold;">
                ${err.map(el => `<li>${el}</li>`).join("")}
            </ul>
        `;
    }

    function valide(){

        let formErrors = [];

        if(name.length === 0){
            formErrors.push("Wypełnij poprawnie pole z imieniem");
        }

        if(surname.length === 0){
            formErrors.push("Wypełnij poprawnie pole z nazwiskiem");
        }

        const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
        if (!reg.test(email)) {
            formErrors.push("Wypełnij poprawnie pole z emailem");
        }
        
        if(message.length < 11){
            formErrors.push("Wypełnij poprawnie pole z wiadomością");
        }
        if(!checkbox.checked){
            formErrors.push("Akceptuj regulamin");
        }
        return formErrors;
    };

    function sendMessage(){
        const xhr = new XMLHttpRequest();

        xhr.onload = function(){
            if(this.status === 200){
                document.querySelector(".err").innerHTML = '<p style="color:green">Wiadomość została wysłana</p>';
            }
        }
        
        xhr.open('POST','form.php',true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
        xhr.send('name='+ JSON.stringify({val: name}));
        xhr.send('surname='+ JSON.stringify({val: surname}));
        xhr.send('email='+ JSON.stringify({val: email}));
        xhr.send('message='+ JSON.stringify({val: message}));
    };
});