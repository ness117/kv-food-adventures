$(document).ready(function() {

	var $form = $('.form');
	var $foodList = $('#checklist');
	var $button = $('#still-hangry');

	$button.on('click', function(event) {
		event.preventDefault();

		var newItem = '<li><input type="checkbox" class="checkbox" />' + $("input:text").val() + '</li>';
		$foodList.append(newItem);
	});

});