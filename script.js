$(document).ready(function() {
	checkText();
	$('.btn-wrap').hide();
});

$('#InputArea').on('keyup', function() {
	checkText();
});

function checkText() {
	let inputVal = $('#InputArea').val();

	if(inputVal) {
		$('#Submit').attr('disabled', false);
	} else {
		$('#Submit').attr('disabled', true);
	}
}

$('#Submit').click(function() {
	let value = $('#InputArea').val();
	let accent = $('input[name="formatAccent"]:checked').val();
	let image = $('input[name="formatAccent"]:checked').attr('data-img');
	let converted = textChange(value, accent);

	$('#OutputText').val(converted);
	$('#OutputImg').attr('src', image);
	$('.btn-wrap').show();
});

$('#Clear').on('click', function() {
	$('textarea').val("");
	$('input[name="formatAccent"]').attr('checked', false);
	// $('#Arnold').attr('checked', true);
	$('#OutputImg').attr('src', "");
});


function textChange(str, style) {
	var newStr = str.toLowerCase().replace(/[a,i,u,e,o]/g, style);

	return newStr;
}

$(".btn-copy").click(function(){
	$("textarea").select();
	document.execCommand('copy');
	$('.valid-feedback').show();
});