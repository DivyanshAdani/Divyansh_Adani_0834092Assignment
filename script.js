/*
	WEB 303 Assignment 1 - jQuery
	Divyansh Adani
*/


$(document).ready(function(){
	$("#yearly-salary , #percent").on("keyup" , calculateAmount);
	function calculateAmount(){
		var salary = ($("#yearly-salary").val());
		var percent = ($("#percent").val());
		var amount = (salary * percent/100).toFixed(2);
		$("#amount").text("$" + amount);
	}
	calculateAmount();
})