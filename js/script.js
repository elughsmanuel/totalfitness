$(document).ready(function() {

    // FOR THE STICKY NAVIGATION
    $('.js--section-one').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }

        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '100px;'
    });

    // MOBILE NAV
    $('.js--mobile-nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav-icon i');

        nav.slideToggle(200)
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }

        else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });

    // Add smooth scrolling to all links
    $(".nav-link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });

    // ANIMATIONS ON SCROLL
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated pulse');
    }, {
        offset: '50%'
    })

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated pulse');
    }, {
        offset: '50%'
    })

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated pulse');
    }, {
        offset: '50%'
    })

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    })

    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    })

    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    })

    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    })

    $('.js--wp-8').waypoint(function(direction) {
        $('.js--wp-8').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    })

    $('.js--wp-9').waypoint(function(direction) {
        $('.js--wp-9').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    })

    $('.js--wp-10').waypoint(function(direction) {
        $('.js--wp-10').addClass('animated zoomIn');
    }, {
        offset: '80%'
    })

    $('.js--wp-11').waypoint(function(direction) {
        $('.js--wp-11').addClass('animated zoomIn');
    }, {
        offset: '80%'
    })

    $('.js--wp-12').waypoint(function(direction) {
        $('.js--wp-12').addClass('animated zoomIn');
    }, {
        offset: '80%'
    })   


});


// BMI CALCULATOR
window.onload = () => {
	let button = document.querySelector("#btn");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let height = parseInt(document
			.querySelector("#height").value);

	/* Getting input from user into weight variable.
	Input is string so typecasting is necessary.*/
	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	// Checking the user providing a proper
	// value or not
	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);

		// Dividing as per the bmi conditions
		if (bmi < 18.5) result.innerHTML =
                `<span>${bmi}</span> (Under Weight) You are under weight for your height.`;

		else if (bmi >= 18.5 && bmi < 25)
			result.innerHTML =
				`<span>${bmi}</span> (Normal) You are a healthy weight for your height.`;

        else if (bmi >= 25 && bmi < 30)
        result.innerHTML =
            `<span>${bmi}</span> (Over Weight) You are a over weight for your height.`;

		else result.innerHTML =
                `<span>${bmi}</span> (Obese)`;
	}
}

