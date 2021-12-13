console.log("homepage");
$(document).on("turbolinks:load", function () {
	const filter_btn = $(".filter-toggle");
	//filtered thing in dropdown
	let selected_filter = $(".filter").first();

	//Toggle mobile menu
	$("#ham-btn").on("click", () => {
		$(".intro").toggleClass("show");
        console.log(rand);
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

	//For toggling
	filter_btn.on("click", (e) => {
		console.log("filter btn clicked", e);
		e.stopPropagation();

		//add event listener only when we open dropdown
		if (!filter_btn.hasClass("opened")) {
			//listen for click outside buttons in dropdown. if clicked anywhere else but buttons, add class then unbind listener.
			$(document).on("click", (e) => {
				if (!$(e.target).hasClass("filter")) {
					filter_btn.removeClass("opened");
					$(".filters").fadeOut(150);
					$(document).off("click");
				}
			});
		}
		//dropdown toggle clicked when open alrdy. unbind the listener.
		else {
			console.log("shouldnt add event handler to listen for outside click if dropdown opened alrdy");
			$(document).off("click");
		}
		//regardless we want to
		handleToggle();
	});

	//handle filter clicks.
	$(".filter").each((btn, item) => {
		$(item).on("click", () => {
			selected_filter.removeClass("selected");
			selected_filter = $(item);
			selected_filter.addClass("selected");
			filter_btn.text(selected_filter.text());
			handleToggle();
		});
	});

	$(".profile-img").on("click", (e) => {
		e.stopPropagation();
		console.log("clicked");
		$(".sign").toggleClass("toggle");
		$(document).on("click", (e) => {
			if (e.target != $(".sign")) {
				$(".sign").removeClass("toggle");
				console.log("unbinding");
				$(document).off("click");
			}
		});
	});
});
