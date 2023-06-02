
const headerContact = $(".header-contact")
const headerMenu = $(".container-header-menu")


window.addEventListener("scroll", (event) => {
	let scroll = this.scrollY;
	console.log(scroll)
	if(scroll > 0 ){
		$(".header-contact").hide();
		headerMenu.addClass("scroll")
	}else{
		$(".header-contact").show();
		headerMenu.removeClass("scroll")
	}
});