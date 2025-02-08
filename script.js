// API endpoint for random memes
const API_URL = "https://meme-api.com/gimme";

// DOM elements
const memeImage = document.getElementById("meme-image");
const memeTitle = document.getElementById("meme-title");
const generateBtn = document.getElementById("generate-btn");

// Function to fetch a random meme
async function fetchMeme() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Update the meme image and title
    memeImage.src = data.url;
    memeTitle.textContent = data.title;
  } catch (error) {
    console.error("Error fetching meme:", error);
    memeTitle.textContent = "Failed to load meme. Please try again.";
  }
}

// Event listener for the generate button
generateBtn.addEventListener("click", fetchMeme);

// Fetch a meme when the page loads
fetchMeme();