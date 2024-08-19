// Select all elements with the class "project"
const projects = document.querySelectorAll('.project');

// Loop through each project and add a click event listener
projects.forEach(project => {
    project.addEventListener("click", function() {
        // Construct the URL based on the element's ID
        const url = `https://pedrorebello1.github.io/${project.id}/`;
        
        // Open the URL in a new tab
        window.open(url, '_blank');
    });
});
