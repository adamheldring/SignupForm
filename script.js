// Adam's form assignment script

window.onload = function() {
  var fbButton = document.getElementById('facebook-button')
  var regButton = document.getElementById('register-button');
  var email = document.getElementById('email-field');
  var confirm = document.getElementById('confirm-field');

  function fbClick() {
    alert('Nä, använd formuläret istället.');
  }

  function submitClick(e) {
      if (email.value != confirm.value) {
        e.preventDefault();
        alert('Vänligen bekräfta med samma e-postadess.');
      }
  }

  fbButton.addEventListener('click', fbClick);
  regButton.addEventListener('click', submitClick);
}
