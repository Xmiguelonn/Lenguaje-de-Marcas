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

var fullNameH1 = document.getElementById('fullName');

chageNameColorButton.addEventListener('click',() => {
    console.warn("click ------------");
    alert("los tralaleritos dicen: tralalá!");
    fullNameH1.style = "color: black; font-style: italic;";
});

const profileColorName = document.getElementById('boton');

/* profileColorName.addEventListener('click', () => {
    const titleName = document.getElementById('fullName')
    if(profileColorName.style.color == 'red'){
        profileColorName.style.color = 'blue';
    } else {
        profileColorName.style.color = 'red';
    }

}); */