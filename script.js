// Define the URL of the API endpoint
const apiUrl = 'https://sampleapis.com/api-list/coffee';

// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display the fetched data on the webpage
function displayData(posts) {
    const container = document.getElementById('posts-container');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        container.appendChild(postElement);
    });
}

// Fetch data when the page loads
window.onload = async function() {
    const posts = await fetchData();
    displayData(posts);
};