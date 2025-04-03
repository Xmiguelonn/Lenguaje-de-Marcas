const profileImage = document.getElementById('nacho');

profileImage.addEventListener('mouseover', () => {
    profileImage.style.boxShadow = '0 0px 1000px rgba(9,9,9,9)';
    profileImage.src = "../imagenes/gtr-35-white.jpg";

});

profileImage.addEventListener('mouseout', () => {
    profileImage.style.boxShadow = 'none';
    profileImage.src = "../imagenes/koenigsegg-jesko-absolut.webp";

});


var chageNameColorButton = document.getElementById('changeNameButton');
var changeDisplayButton = document.getElementById('changeDisplayButton');
var changeFormButton = document.getElementById('changeFormButton');


var fullNameH1 = document.getElementById('fullName');


changeFormButton.addEventListener('click',() =>{

    if(contactForm.style.display==="none"){

        contactForm.style.display="block";
        changeFormButton.textContent="Ocultar formulario";

    } else {


        contactForm.style.display="none";
        changeFormButton.textContent="Mostrar formulario";

    }

});


chageNameColorButton.addEventListener('click',() => {
    console.warn("click ------------");
    alert("los tralaleritos dicen: tralalá!");
    if(fullNameH1.style.color===""){

        fullNameH1.style="color: yellow; ";
        fullNameH1.textContent="1ºDAW";
    
    } else {
    
        fullNameH1.style="";
        fullNameH1.textContent="Miguel A. Postigo";
    
    }
});

changeDisplayButton.addEventListener('click',() => {

    if(fullNameH1.style.display==="block"){

        fullNameH1.style.display="none";

    } else {

        fullNameH1.style.display="block";

    }


} );









/* profileColorName.addEventListener('click', () => {
    const titleName = document.getElementById('fullName')
    if(profileColorName.style.color == 'red'){
        profileColorName.style.color = 'blue';
    } else {
        profileColorName.style.color = 'red';
    }

}); */