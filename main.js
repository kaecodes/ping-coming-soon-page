const emailInput = document.getElementById('email'); 
const notifyBtn = document.getElementById('notify');
const errorMsg = document.getElementById('email-error');  

document.forms['notifyMe'].onsubmit = function(e) {
  const emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
  let submit = true; 

  if (!emailInput.value.match(emailFormat) || emailInput.value == '') {
    emailInput.style.borderColor = 'var(--light-red)'; 
    errorMsg.innerHTML = 'Please provide a valid email address'; 
    errorMsg.style.display = 'block'; 
    e.preventDefault(); 
    submit = false; 
  }

  return submit; 
}