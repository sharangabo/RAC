// Array to store blog posts
const posts = []; 

// Add blog post
function addPost(title, content) {
  posts.push({
    title: title,
    content: content
  });
}

// Display posts
function showPosts() {
  let output = '';
  for(let i = 0; i < posts.length; i++) {
    output += `
      <h2>${posts[i].title}</h2>
      <p>${posts[i].content}</p>
    `;
  }
  document.getElementById('blog').innerHTML = output;
}

// Handle form submit
document.getElementById('addPostForm').onsubmit = function(e) {
  e.preventDefault();
  
  let title = document.getElementById('titleInput').value;
  let content = document.getElementById('contentInput').value;
  
  addPost(title, content);
  showPosts();
}