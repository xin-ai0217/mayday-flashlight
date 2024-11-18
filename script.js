const flashlight = document.getElementById('flashlight');
const brightnessSlider = document.getElementById('brightness');
const colorSlider = document.getElementById('color');

function updateFlashlight() {
    const brightness = brightnessSlider.value;
    const hue = colorSlider.value;
    
    // Convert brightness percentage to opacity and luminosity
    const opacity = brightness / 100;
    const luminosity = (brightness / 2); // Adjust luminosity based on brightness
    
    // Apply the color and opacity to the full screen
    document.body.style.backgroundColor = `hsl(${hue}, 50%, ${luminosity}%)`;
    flashlight.style.backgroundColor = `hsla(${hue}, 100%, 50%, ${opacity})`;
}

// Add 'change' event listeners in addition to 'input'
brightnessSlider.addEventListener('input', updateFlashlight);
brightnessSlider.addEventListener('change', updateFlashlight);
colorSlider.addEventListener('input', updateFlashlight);
colorSlider.addEventListener('change', updateFlashlight);

// Initialize flashlight with default values
updateFlashlight(); 