const signupFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to signup');
    }
  }
};

function handleLoginClick(){
  console.log('login')
  document.location.replace('/login')
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

document
  .querySelector('.login')
  .addEventListener('click', handleLoginClick)
