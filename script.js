document.addEventListener('DOMContentLoaded', function() {
    // Order Page Content
    const ordersPageContent = document.getElementById('order-content');
    const orders = []; // Replace with actual order data

    if (orders.length === 0) {
        ordersPageContent.innerHTML = `
            <img src="Images/Empty-Cart.png" alt="Empty Cart" class="empty-cart-img">
            <p>You've no orders yet.</p>
            <p>Add an item to your cart and it'll reflect here.</p>
        `;
    } else {
        let ordersHtml = '<ul>';
        orders.forEach(order => {
            ordersHtml += `<li>${order.title}: $${order.price}</li>`;
        });
        ordersHtml += '</ul>';
        ordersPageContent.innerHTML = ordersHtml;
    }

    // Animate dots in the loading screen
    let dotIndex = 0;
    const dots = document.querySelectorAll('.dot');
    setInterval(() => {
        dots.forEach(dot => dot.style.opacity = 0.3);
        dots[dotIndex].style.opacity = 1;
        dotIndex = (dotIndex + 1) % dots.length;
    }, 500);


    setInterval(createFallingBook, 300);

    // Animated Computers
    function createAnimatedComputer() {
        const computer = document.createElement('div');
        computer.classList.add('animated-computer');
        computer.style.left = Math.random() * 100 + 'vw';
        computer.style.animationDuration = Math.random() * 2 + 4 + 's';
        computer.textContent = '💻';
        document.body.appendChild(computer);

        setTimeout(() => {
            computer.remove();
        }, 5000);
    }

    setInterval(createAnimatedComputer, 1000);
});

// Sidebar Toggle Function
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar.style.left === '0px';
    sidebar.style.left = isOpen ? '-250px' : '0px';
}

// Toggle Services Section
function toggleServices() {
    const servicesSection = document.getElementById('services-section');
    const isHidden = servicesSection.style.display === 'none';
    servicesSection.style.display = isHidden ? 'block' : 'none';
}

// Toggle Chat Window
function toggleChatWindow() {
    const chatWindow = document.getElementById('chatWindow');
    const isVisible = chatWindow.style.display === 'block';
    chatWindow.style.display = isVisible ? 'none' : 'block';
}

// Notification Display
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("newsletter-notification").style.display = "block";
    }, 20000);
});

function hideNotification() {
    document.getElementById("newsletter-notification").style.display = "none";
}

function openSignUpForm() {
    window.location.href = "signup.html";
    hideNotification();
}

document.addEventListener('DOMContentLoaded', function() {
    // Handle password update form submission
    document.getElementById('password-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Password updated successfully! (Simulated)');
        // Later, link to backend for actual password change
    });

    // Handle OTP verification
    document.getElementById('otp-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('OTP verified successfully! (Simulated)');
        // Later, link to backend for actual OTP verification
    });

// Function to generate a random captcha image
function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.querySelector('.captcha-image').textContent = captcha;
}

// Handle Captcha verification
document.getElementById('captcha-input').addEventListener('blur', function() {
    const userCaptcha = this.value;
    const generatedCaptcha = document.querySelector('.captcha-image').textContent;
    
    if (userCaptcha === generatedCaptcha) {
        alert('Captcha verified successfully!');
    } else {
        alert('Captcha verification failed. Please try again.');
    }
});

// Initialize Captcha on page load
window.onload = function() {
    generateCaptcha();
};
});

let hoverTimer;

function showMoreDropdown() {
    hoverTimer = setTimeout(() => {
        document.getElementById("moreDropdown").style.display = "block";
    }); // Shows dropdown after 2 seconds of hovering
}

function toggleMoreDropdown() {
    const dropdown = document.getElementById("moreDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

document.querySelector('.more-option').addEventListener('mouseleave', () => {
    clearTimeout(hoverTimer); // Cancels the hover effect if the mouse leaves
    document.getElementById("moreDropdown").style.display = "none";
});

document.getElementById('forgot-password-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('password-recovery-splash').style.display = 'flex';
});

document.getElementById('send-recovery-link').addEventListener('click', function() {
    const recoveryEmail = document.getElementById('recovery-email').value;
    if (recoveryEmail) {
        alert('A recovery link has been sent to ' + recoveryEmail);
        document.getElementById('password-recovery-splash').style.display = 'none';
    } else {
        alert('Please enter your email address.');
    }
});

document.getElementById('cancel-recovery').addEventListener('click', function() {
    document.getElementById('password-recovery-splash').style.display = 'none';
});

// Function to show the splash screen
function openSplashScreen(mode) {
    const splashScreen = document.getElementById("splash-screen");
    const signUpFields = document.getElementById("sign-up-fields");
    const loginFields = document.getElementById("login-fields");
    const splashTitle = document.getElementById("splash-title");

    splashScreen.classList.remove("hidden");

    if (mode === 'signup') {
        splashTitle.textContent = "SIGN UP";
        signUpFields.classList.remove("hidden");
        loginFields.classList.add("hidden");
    } else if (mode === 'login') {
        splashTitle.textContent = "LOGIN";
        loginFields.classList.remove("hidden");
        signUpFields.classList.add("hidden");
    }
}

// JavaScript for handling splash screens
function openSignUpSplash() {
    const signupSplash = document.getElementById("signup-splash");
    signupSplash.style.display = "flex";
    signupSplash.scrollIntoView({ behavior: "smooth" }); // Scroll to the splash screen
}

function openLoginSplash() {
    document.getElementById("login-splash").style.display = "flex";
}

function openRecoverySplash() {
    document.getElementById("recovery-splash").style.display = "flex";
}

function closeSplash(id) {
    document.getElementById(id).style.display = "none";
}

// Function to handle sending the recovery link
function sendRecoveryLink() {
    const recoveryEmail = document.getElementById("recovery-email").value;
    alert(`A recovery link has been sent to ${recoveryEmail}`);
    closeSplash('recovery-splash');
    openLoginSplash(); // Re-open the login splash screen after sending the recovery link
}

// Add an event listener to close the splash screen when clicking outside the content
document.querySelectorAll(".splash-screen").forEach(screen => {
    screen.addEventListener("click", (e) => {
        if (e.target === screen) {
            screen.style.display = "none";
        }
    });
});

// Function to handle login submission
function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Simulate successful login without validating details
    alert('Login successful!'); // This can be removed or replaced
    window.location.href = "main-index.html"; // Redirect to the main homepage
}

// Ensure the form calls the handleLogin function when submitted
document.querySelector('.login-form').addEventListener('submit', handleLogin);

// Logout conformation
function confirmLogout() {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
        window.location.href = "index.html"; // Redirect to index.html after confirmation
    }
}

function filterProducts() {
    const selectedCategory = document.getElementById("category-select").value;
    const products = document.querySelectorAll(".laptop");

    products.forEach(product => {
        if (selectedCategory === "all" || product.getAttribute("data-category") === selectedCategory) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// Function to handle dynamic number counting
function animateCount(id, start, end, duration) {
    const element = document.getElementById(id);
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current === end) {
            clearInterval(timer);
            setTimeout(() => animateCount(id, 500, 5000, duration), 2000); // Restart after 2 seconds
        }
    }, stepTime);
}

// Start the counting effect for each element
document.addEventListener("DOMContentLoaded", () => {
    animateCount("dynamic-number", 500, 5000, 3000);
    animateCount("dynamic-number-books", 500, 5000, 3000);
    animateCount("dynamic-number-accessories", 500, 5000, 3000);
});
