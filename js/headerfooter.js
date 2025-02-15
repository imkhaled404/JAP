function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.text();
        })
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "/header.html"); // Absolute path
    loadComponent("footer", "/footer.html");
});
