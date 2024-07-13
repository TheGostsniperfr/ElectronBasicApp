function loadPage(page) {
  fetch('../views/' + page)
    .then(response => response.text())
    .then(data => {
      const contentDiv = document.getElementById('content');

      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = data;

      const scripts = tempDiv.querySelectorAll('script');
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.type = 'module';
        if (script.src) {
          newScript.src = script.src;
        } else {
          newScript.innerHTML = script.innerHTML;
        }
        document.body.appendChild(newScript);
      });

      tempDiv.querySelectorAll('script').forEach(script => script.remove());
      contentDiv.innerHTML = tempDiv.innerHTML;
    })
    .catch(error => console.error('Error loading page:', error));
}

window.loadPage = loadPage;

// Load the home page by default
window.onload = () => {
  console.log("test");
  loadPage('home.html');
};
