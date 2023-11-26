// PROFILE DROPDOWN
const profile = document.querySelector('._profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

profile.addEventListener('click', function(){
    dropdownProfile.classList.toggle('show');
})


window.addEventListener('click', function(e){
    if(e.target !== profile){
        if(e.target !== dropdownProfile){
            if(dropdownProfile.classList.contains('show')){
                dropdownProfile.classList.remove('show');
            }
        }
    }
})