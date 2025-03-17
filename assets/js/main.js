(function () {
    "use strict";

    // Dropdown Menu Toggler For Mobile
    const dropdownMenuToggler = document.querySelectorAll(".nav-dropdown > .nav-link");

    dropdownMenuToggler.forEach((toggler) => {
        toggler?.addEventListener("click", (e) => {
            e.target.closest(".nav-item").classList.toggle("active");
        });
    });

    // Testimonial Slider
    new Swiper(".testimonial-slider", {
        spaceBetween: 24,
        loop: true,
        pagination: {
            el: ".testimonial-slider-pagination",
            type: "bullets",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });

    // Select elements for mobile menu
    const burgerButton = document.querySelector("#nav-toggle"); // The checkbox
    const showButton = document.querySelector("#show-button"); // The burger icon
    const hideButton = document.querySelector("#close-menu-btn"); // The X icon
    const mobileMenu = document.querySelector("#mobile-menu"); // The mobile menu

    // Function to toggle menu visibility and icon state
    const toggleMenu = () => {
        const isOpen = burgerButton.checked;

        // Toggle menu visibility
        mobileMenu.classList.toggle("translate-x-full", !isOpen); 
        mobileMenu.classList.toggle("hidden", !isOpen); 

        // Toggle icon visibility
        showButton.classList.toggle("hidden", isOpen);
        hideButton.classList.toggle("hidden", !isOpen);

        // Prevent scrolling when menu is open
        document.body.style.overflow = isOpen ? "hidden" : "";
    };

    // Add event listener for burger button change (open/close)
    burgerButton?.addEventListener("change", toggleMenu);

    // Ensure the close button ("X") works properly
    hideButton?.addEventListener("click", () => {
        burgerButton.checked = false;
        toggleMenu(); // Update the menu and icons
    });

})();