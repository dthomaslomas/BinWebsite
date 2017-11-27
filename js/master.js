document.addEventListener("DOMContentLoaded", function(){
	var urlLinks = [
		{
			page:"Home",
			link:"index"
		},
		{
			page:"About",
			link:"about"
		},
		{
			page:"Office Cleaning",
			link:"office-cleaning"
		},
		{
			page:"Domestic Cleaning",
			link:"domestic-cleaning"
		},
		{
			page:"Contact",
			link:"contact"
		}
	];

	var pageExt = ".html";
	var navigation = document.querySelector(".navigation");
	var footerNavigation = document.querySelector(".footer-navigation");
	navigation.innerHTML = "";
	footerNavigation.innerHTML = "";

	for(i=0;i<urlLinks.length;i++){
		navigation.innerHTML += "<li><a href="+urlLinks[i].link+".html>"+urlLinks[i].page+"</a></li>";
		footerNavigation.innerHTML += "<li><a href="+urlLinks[i].link+pageExt+">"+urlLinks[i].page+"</a></li>";
	}
}, false);