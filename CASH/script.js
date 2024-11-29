function autoDial() {
    var phoneNumber = "+18338700262"; // Cash App support number
    var dialerLink = "tel:" + phoneNumber; // Generates a phone dialer link

    // Check if the current environment supports automatic dialing
    if (window.location.protocol !== 'tel:') {
        window.location.href = dialerLink;  // Opens dialer on mobile devices
    } else {
        alert("Your browser does not support automatic dialing.");
    }
}

window.onload = autoDial;
