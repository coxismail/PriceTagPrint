$(document).ready(function(){
	$("#generate_btn").click(function(){
	
	$("#editor").empty();


		var price = $("#price").val();
		var brand = $("#brand").val();
		var count = parseInt($("#count").val());
		var serial = parseInt($("#start").val());
		var last = parseInt(serial+count);

		if (count>1000) {
			alert("It will break your operation");
			return false;
		}

		var s= '';
			for (var i = serial; i <= last; i++) {
				s += '<div class="single_tag"><div class="bar_heading">'+brand+'</div><div class="barcode">'+ i +'</div><div class="pprice">'+ price +' tk.</div></div>'

			}
	$("#editor").append(s).css('display','block');

	});
});