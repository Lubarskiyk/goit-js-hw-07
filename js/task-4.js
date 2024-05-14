const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', clickSubmit);

function clickSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };

  if (formData.email === '' || formData.password === '') {
    return alert('All form fields must be filled in');
  }
  console.log(formData);
  form.reset();
}
