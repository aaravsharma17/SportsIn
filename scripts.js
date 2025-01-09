// Modal Registration Logic
const registerBtn = document.getElementById('registerBtn');
const registerNowBtn = document.getElementById('registerNow');
const modal = document.getElementById('registrationModal');
const closeBtn = document.querySelector('.close-btn');

// Open the modal
registerBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

registerNowBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close the modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});



// Theme Switching Logic
const themeSelect = document.getElementById('theme');
themeSelect?.addEventListener('change', () => {
    document.body.setAttribute('data-theme', themeSelect.value);
});

// Placeholder for profile data (Simulated from registration)
document.getElementById('profile-name')?.textContent = "John Doe";
document.getElementById('profile-age')?.textContent = "25";
document.getElementById('profile-height')?.textContent = "180 cm";
document.getElementById('profile-sport')?.textContent = "Football";
