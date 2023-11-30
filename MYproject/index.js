// Get all "Read More" buttons
const readMoreBtns = document.querySelectorAll('.card a'); 

// Add click event to each button
readMoreBtns.forEach(button => {

  button.addEventListener('click', e => {

    e.preventDefault();
    
    // Get href of clicked button
    const href = button.getAttribute('href');

    // Navigate to href page
    window.location.href = href;

  });

});

async function registerUser() {
  const userName = document.getElementById('userName').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    // Send a POST request to the backend endpoint
  const data = await fetch('http://localhost:4000/api/user/auth/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName, email, password, phoneNumber }),
})
return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
async function loginUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    // Send a POST request to the backend endpoint
  const data = await fetch('http://localhost:4000/api/user/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
})
return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
