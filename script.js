const hamburgerEvent = (navigation, close, open, bgColor, logoColor, height, zIndex) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
    document.querySelector('.navbar').style.backgroundColor = bgColor;
    document.querySelector('.navbar__logo a').style.color = logoColor;
    document.querySelector('.navbar').style.height = height;
}

openHam.addEventListener("click", () => hamburgerEvent("flex", "block", "none", "var(--primary-color)", "white", "100vh", "10"));
closeHam.addEventListener("click", () => hamburgerEvent("none", "none", "block", "transparent", "var(--primary-color)", "85px", "10"));




// CONTACT FORM

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const container = document.querySelector('.form__container');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      const fullName = document.getElementById('full-name');
      const email = document.getElementById('email');
      let valid = true;
  
      if (fullName.value.trim() === '') {
        fullName.classList.add('error');
        valid = false;
      } else {
        fullName.classList.remove('error');
      }
  
      if (email.value.trim() === '') {
        email.classList.add('error');
        valid = false;
      } else {
        email.classList.remove('error');
      }
  
      if (valid) {
        // Simulate form submission (replace this with actual form submission logic)
        setTimeout(function() {
          container.innerHTML = '<div class="submitted-message">Message sent, Thank you!</div>';
        }, 1000); // Change the delay time as needed
      }
    });
  });
  

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
  
    
        // Show or hide content based on mode parameter
        if (mode === 'original') {

            // DISPLAY
            document.getElementById('musselContent').style.display = 'block';
            // HIDE
            document.getElementById('speciesContent').style.display = 'none';
            document.getElementById('waterContent').style.display = 'none';

        } else if (mode === 'modified') {
            // DISPLAY
            document.getElementById('speciesContent').style.display = 'block';
            // HIDE
            document.getElementById('musselContent').style.display = 'none';
            document.getElementById('waterContent').style.display = 'none';
        } else if (mode === 'water') {
            // DISPLAY
            document.getElementById('waterContent').style.display = 'block';
            // HIDE
            document.getElementById('speciesContent').style.display = 'none';
            document.getElementById('musselContent').style.display = 'none';

        }



            // Add click event listeners to the buttons
    document.getElementById('mussels').addEventListener('click', function() {
        // Redirect to the original page with mode parameter
        window.location.href = 'campaignpage.html?mode=original';
    });

    document.getElementById('species').addEventListener('click', function() {
        // Redirect to the modified page with mode parameter
        window.location.href = 'campaignpage.html?mode=modified';
    });

    document.getElementById('water').addEventListener('click', function() {
        // Redirect to the modified page with mode parameter
        window.location.href = 'campaignpage.html?mode=water';
    });
});




