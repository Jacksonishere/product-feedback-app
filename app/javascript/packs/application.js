// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";

var jQuery = require("jquery");
global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;

Rails.start();
Turbolinks.start();
ActiveStorage.start();

document.addEventListener("turbolinks:before-cache", function () {
	const flash_message_element = document.querySelector(".flash");
	if (flash_message_element) {
		flash_message_element.remove();
	}
});

$(document).on("turbolinks:load", function () {
	const filter_btn = $(".filter-toggle");
	//filtered thing in dropdown
	let selected_filter = $(".filter").first();

	//Toggle mobile menu
	$("#ham-btn").on("click", () => {
		$(".intro").toggleClass("show");
	});
	//The exit empty div to close menu
	$(".exit-click").on("click", () => {
		$(".intro").removeClass("show");
	});

	//reusable toggle dropdown menu
	const handleToggle = () => {
		filter_btn.toggleClass("opened");
		$(".filters").fadeToggle(150);
	};

    // only attached to document if filter-btn or profile icon clicked.
    const outsideClickHandler = (e) => {
        console.log("document handler");
        // if the event target, the one who initiated the click isn't the
        if (e.target.id !== "filter-toggle") {
            handleToggle();
        }
        $(document)[0].removeEventListener("click", outsideClickHandler, true);
    }

	//For toggling
	filter_btn.on("click", (e) => {
		// e.stopPropagation();
		if (!filter_btn.hasClass("opened")) {
			$(document)[0].addEventListener(
				"click",
				outsideClickHandler,
				true
			);
		}
		handleToggle();
	});

	//handle filter clicks.
	$(".filter").each((btn, item) => {
		$(item).on("click", () => {
			selected_filter.removeClass("selected");
			selected_filter = $(item);
			selected_filter.addClass("selected");
			filter_btn.text(selected_filter.text());
            $(document)[0].removeEventListener("click", outsideClickHandler);
			handleToggle();
		});
	});

	$(".profile-img").on("click", (e) => {
		e.stopPropagation();
		console.log("clicked");
		$(".sign").toggleClass("toggle");
		$(document)[0].addEventListener(
			"click",
			(e) => {
				if (e.target.id !== "sign" || e.target.id !== "profile-img") {
					$(".sign").removeClass("toggle");
					console.log("NOT sign or profile img");
					$(document).off("click");
				}
			},
			true
		);
	});
});
