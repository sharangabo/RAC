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