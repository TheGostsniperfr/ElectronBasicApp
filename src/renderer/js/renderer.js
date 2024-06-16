function loadPage(page) {
    fetch('pages/' + page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Load the home page by default
window.onload = () => {
    loadPage('home.html');
};
