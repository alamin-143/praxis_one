
    $(document).ready(function() {

        // sticky menu 
        const headerArea = document.querySelector('.header-area');
        window.onscroll = function () {

            var scroll = document.documentElement.scrollTop;

            if(scroll >= 350) {
                headerArea.classList.add('sticky-menu');
            }else {
                headerArea.classList.remove('sticky-menu');
            }
        }

        // mobile menu active
        const menuOpen = document.getElementById('menu_open');
        const menuClose = document.getElementById('menu_close');
        const mobileMenu = document.getElementById('mobile_menu');
        const overlay = document.getElementById('overlay');

        menuOpen.addEventListener('click', ()=> {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
        });
        menuClose.addEventListener('click', ()=> {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
        overlay.addEventListener('click', ()=> {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
        })


        $("#tel").intlTelInput({
        // options here
            allowDropdown: true,
            showFlags: true,
            dropdownContainer: document.body,
            utilsScript: "../js/utils.js",
            initialCountry: "de",
        });
    
        // video popup 
        $('.play-icon').venobox({
            spinner: 'wave',
            autoplay: true
        });

    });






