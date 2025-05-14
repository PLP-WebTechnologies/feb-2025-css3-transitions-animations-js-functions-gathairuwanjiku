// DOM Elements
const box = document.getElementById('animated-box');
const button = document.getElementById('action-btn');
const colorPicker = document.getElementById('color-picker');

// 1. Check for saved preferences
if(localStorage.getItem('boxColor')) {
    box.style.background = localStorage.getItem('boxColor');
    colorPicker.value = localStorage.getItem('boxColor');
}

// 2. Button click handler
button.addEventListener('click', function() {
    // Toggle bounce animation
    box.classList.toggle('bounce-effect');
    
    // Save animation state
    localStorage.setItem('animationState', 
        box.classList.contains('bounce-effect') ? 'on' : 'off');
});

// 3. Color picker handler
colorPicker.addEventListener('input', function() {
    box.style.background = this.value;
    localStorage.setItem('boxColor', this.value);
});

// 4. Load saved animation state
if(localStorage.getItem('animationState') === 'on') {
    box.classList.add('bounce-effect');
}