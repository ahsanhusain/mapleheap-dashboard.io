// Quick Demo JS
function openModal() {
  document.getElementById('quick-demo').style.display = 'flex';
}

function closeModal() {
  document.getElementById('quick-demo').style.display = 'none';
}

// Close the modal if the overlay is clicked
window.onclick = function (event) {
  if (event.target === document.getElementById('quick-demo')) {
    closeModal();
  }
};

// price tag
function openTagModal() {
  document.getElementById('price-tag').style.display = 'flex';
}

function closeTagModal() {
  document.getElementById('price-tag').style.display = 'none';
}

// Close the modal if the overlay is clicked
window.onclick = function (event) {
  if (event.target === document.getElementById('price-tag')) {
    closeModal();
  }
};

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