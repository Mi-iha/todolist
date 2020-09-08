// check off a specific Todo by clicking on it
$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

// delete Todo by clicking X -> my version
// $('span').click(function() {
// 	$(this).text('Y');
// 	$('li').remove(":contains('Y')");
// });

// fadeout Todo by clicking X -> Colt's version
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// add new Todo to the list when "Enter" is pressed
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// ensure we do not insert an empty Todo
		if ($(this).val() !== '') {
			// grabbing new Todo text from input
			var todoText = $(this).val();
			//create a new li and add to ul
			$('ul').append(
				'<li class="tasktext"><span><i class=\'fas fa-trash-alt\'></i> </span>' + todoText + '</li>'
			);
			// clear Todo text from input box
			$(this).val('');
			trash();
		}
	}
});

// toggle input (Add New Todo) when "+" sign is clicked

$('.fa-plus').click(function() {
	$("input[type='text']").fadeToggle();
});

// make box bigger to fit the text if it is too long

function trash() {
	var entryHeight = $('li').last().css('height');
	$('li span').last().css('lineHeight', entryHeight);
}
