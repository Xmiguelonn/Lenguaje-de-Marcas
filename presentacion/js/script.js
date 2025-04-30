const profileimage = document.getElementById('profile')

profileimage.addEventListener('mouseover', () => { profileimage.style.boxShadow = '1000px red';
profileimage.src = "../src/danone.jpg";
console.log(profileimage)
});
profileimage.addEventListener('mouseout', () => { profileimage.style.boxShadow = 'none';
profileimage.src = "../src/perfil.jpg";

});