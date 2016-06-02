window.onload= function() {
	var converter= new showdown.Converter();
	var pad= document.getElementById("pad");
	var markdownArea= document.getElementById("markdown");

	var convertTextAreaToMarkdown= function() {
		var markdownText= pad.value;
		html= converter.makeHtml(markdownText);
		markdownArea.innerHTML= html;
	}

	pad.addEventListener("input", convertTextAreaToMarkdown);

	convertTextAreaToMarkdown();

	
	var sidenav= document.querySelector(".sidenav"),
	    open= document.querySelector(".open"),
	    close= document.querySelector(".close");

	open.addEventListener("click", function() {
		sidenav.style.width= "300px";
	});


	close.addEventListener("click", function() {
		sidenav.style.width= "0";
	});
}