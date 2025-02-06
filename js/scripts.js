async function loadReadme(repoOwner, repoName) {
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/readme`;

    try {
        const response = await fetch(url, {
            headers: { Accept: "application/vnd.github.v3.raw" }
        });

        if (!response.ok) {
            throw new Error(`Failed to load README: ${response.statusText}`);
        }

        const markdown = await response.text();
        document.getElementById("readme-container").innerHTML = marked.parse(markdown);
    } catch (error) {
        console.error(error);
        document.getElementById("readme-container").innerHTML = "Failed to load README.";
    }
}

// Replace with your GitHub username & repo name
loadReadme("your-github-username", "yourgithubrepo1");

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}


function loadSidebar() {
    fetch("../components/contacts_sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading sidebar:", error));
}

document.addEventListener("DOMContentLoaded", loadSidebar);