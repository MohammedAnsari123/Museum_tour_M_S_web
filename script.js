// const thumbnail = document.getElementById("thumbnail");
// const overlay = document.getElementById("overlay");

// // Show overlay when image is clicked
// thumbnail.addEventListener("click", () => {
//     overlay.style.display = "flex";
// });

// // Hide overlay when anywhere is clicked
// overlay.addEventListener("click", () => {
//     overlay.style.display = "none";
// });


const thumbnails = document.querySelectorAll('.thumbnail');
const overlay = document.getElementById('sharedOverlay');
const overlayImage = document.getElementById('overlayImage');
const overlayText = document.getElementById('overlayText');
const closeOverlay = document.getElementById('closeOverlay');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const imgSrc = thumbnail.src;
        const description = thumbnail.parentElement.querySelector('.image-description').textContent;

        overlayImage.src = imgSrc;
        overlayText.textContent = description;
        overlay.style.display = 'flex';
    });
});

closeOverlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Optional: close when clicking outside content
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
});
