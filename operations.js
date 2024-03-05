// addBlog.js

document.addEventListener('DOMContentLoaded', function () {
    loadBlogs();
});

function addBlog() {
    var title = document.getElementById('blogTitle').value;
    var author = document.getElementById('authorName').value;
    var content = document.getElementById('blogContent').value;

    if (title && author && content) {
        var blogContainer = document.getElementById('blogsContainer');
        var newBlog = document.createElement('div');
        newBlog.classList.add('box');
        newBlog.innerHTML = `
            <h2>${title}</h2>
            <h3>${author}</h3>
            <p>${content}</p>
            <div class="div-btn">
                <button onclick="deleteBlog(this)" class="box-btn delete">Delete</button>
                <button onclick="editBlog(this)" class="box-btn edit">Edit</button>
            </div>
        `;
        blogContainer.prepend(newBlog);

        saveBlogs();

        // Clear the form fields after adding a blog
        
        document.getElementById('h-2').value = '';
        document.getElementById('blogTitle').value = '';
        document.getElementById('authorName').value = '';
        document.getElementById('blogContent').value = '';
    } 
}


//code for delete 

function deleteBlog(button) {
    var blog = button.closest('.box');
    blog.parentNode.removeChild(blog);

    saveBlogs();
}


//code for edit

function editBlog(button) {
    var blog = button.closest('.box');
    var title = blog.querySelector('h2').innerText;
    var author = blog.querySelector('h3').innerText;
    var content = blog.querySelector('p').innerText;

    // Set the values in the form for editing
    document.getElementById('blogTitle').value = title;
    document.getElementById('authorName').value = author;
    document.getElementById('blogContent').value = content;

    // Remove the blog from the UI
    deleteBlog(button);
}



function saveBlogs() {
    var blogsContainer = document.getElementById('blogsContainer');
    localStorage.setItem('blogs', blogsContainer.innerHTML);
}

function loadBlogs() {
    var blogsContainer = document.getElementById('blogsContainer');
    blogsContainer.innerHTML = localStorage.getItem('blogs') || '';
}
