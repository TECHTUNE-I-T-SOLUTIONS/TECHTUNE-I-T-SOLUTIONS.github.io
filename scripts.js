function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        document.body.style.marginLeft = '0';
    } else {
        sidebar.style.width = '250px';
        document.body.style.marginLeft = '250px';
    }
}

// JavaScript code to handle the toggle of hidden sections
function toggleServices() {
    const extendedServices = document.getElementById('extended-services');
    if (extendedServices.style.display === 'none' || extendedServices.style.display === '') {
        extendedServices.style.display = 'block';
    } else {
        extendedServices.style.display = 'none';
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        document.body.style.marginLeft = '0';
    } else {
        sidebar.style.width = '250px';
        document.body.style.marginLeft = '250px';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const ordersPageContent = document.getElementById('order-content');

    // Example order data
    const orders = []; // Replace with actual order data

    if (orders.length === 0) {
        ordersPageContent.innerHTML = `
            <img src="Images/Empty-Cart.png" alt="Empty Cart" class="empty-cart-img">
            <p>No orders yet.</p>
        `;
    } else {
        let ordersHtml = '<ul>';
        orders.forEach(order => {
            ordersHtml += `<li>${order.title}: $${order.price}</li>`;
        });
        ordersHtml += '</ul>';
        ordersPageContent.innerHTML = ordersHtml;
    }
});

// Function to toggle the chat window
function toggleChatWindow() {
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'block';
    } else {
        chatWindow.style.display = 'none';
    }
}


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar.style.left === '0px';
    sidebar.style.left = isOpen ? '-250px' : '0px';
}

function toggleServices() {
    const servicesSection = document.getElementById('services-section');
    const isHidden = servicesSection.style.display === 'none';
    servicesSection.style.display = isHidden ? 'block' : 'none';
}

function toggleChatWindow() {
    const chatWindow = document.getElementById('chatWindow');
    const isVisible = chatWindow.style.display === 'block';
    chatWindow.style.display = isVisible ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    function startCounter(elementId, startValue, endValue, duration) {
        const element = document.getElementById(elementId);
        let currentValue = startValue;
        const increment = Math.ceil((endValue - startValue) / (duration / 100)); // Adjusting increment based on duration
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue > endValue) {
                currentValue = endValue;
            }
            element.textContent = currentValue;

            if (currentValue === endValue) {
                clearInterval(timer);
                setTimeout(() => startCounter(elementId, startValue, endValue, duration), 2000); // Restart after 2 seconds
            }
        }, 100); // Update every 100ms
    }

    // Call the function for each counter element
    startCounter('counter', 500, 1000, 2000, 5000, 3000);
});
