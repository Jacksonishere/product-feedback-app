$(document).on("turbolinks:load", function () {
	//Toggle mobile menu
	$("#ham-btn").on("click", () => {
        console.log("opening mobile menu");
		$(".intro").toggleClass("show");
	});
	//The exit empty div to close menu
	$(".exit-click").on("click", () => {
		$(".intro").removeClass("show");
	});

/**
 * FILTER TOGGLE FUNCTIONALITY
 */
	const filter_btn = $(".filter-toggle");
	//filtered thing in dropdown
	let selected_filter = $(".filter").first();

	//reusable toggle dropdown menu
	const handleToggle = () => {
		filter_btn.toggleClass("opened");
        $(".filters").toggleClass("opened");
		// $(".filters").fadeToggle(150);
	};

	// only attached to document if filter-btn or profile icon clicked.
	const outsideClickHandler = (e) => {
		console.log("document handler");
		// if the event target, the one who initiated the click isn't the
		if (e.target.id !== "filter-toggle") {
			handleToggle();
		}
		$(document)[0].removeEventListener("click", outsideClickHandler, true);
	};

	//For toggling
	filter_btn.on("click", (e) => {
		// e.stopPropagation();
		if (!filter_btn.hasClass("opened")) {
			$(document)[0].addEventListener("click", outsideClickHandler, true);
		}
		handleToggle();
	});

	//handle filter clicks.
	$(".filter").each((btn, item) => {
		$(item).on("click", (e) => {
            e.stopPropagation();
			selected_filter.removeClass("selected");
			selected_filter = $(item);
			selected_filter.addClass("selected");
			filter_btn.text(selected_filter.text());
		});
	});

/**
 * MOBILE SIGNOUT TOGGLE FUNCTIONALITY
 */

	const profile_btn = $(".profile-img");
    const signout_link = $("#sign-out");

	// only attached to document if filter-btn or profile icon clicked.
	const outsideSignOutClickHandler = (e) => {
		console.log("document handler");
		if (e.target.id !== "profile-img") {
			signout_link.removeClass("toggle");
		}
		$(document)[0].removeEventListener("click", outsideSignOutClickHandler, true);
	};

	profile_btn.on("click", (e) => {
		if (!signout_link.hasClass("toggle")) {
			$(document)[0].addEventListener("click", outsideSignOutClickHandler, true);
		}
		signout_link.toggleClass("toggle");
	});

/**
 * CATEGORY SELECT IN FORM FUNCTIONALITY
 */
    const selec_toggle = $(".category-toggle");
    
    const selec_options = $(".category-otions");
    
    let selected_cate = $(".category-options .category").first();

    //reusable toggle dropdown menu
    const handleCateSelectToggle = () => {
        selec_toggle.toggleClass("opened");
        selec_options.toggleClass("opened");
        // $(".filters").fadeToggle(150);
    };

});
