window.onload = init;

function init(){

	$('#btn-submit').on('click', function(event){
		event.preventDefault();

		required_check();
	});
}

function required_check() {

	var required_inputs = $('.required input, .required textarea');

	$.each(required_inputs, function(input_index, req_input) {
		
		var required_container = $(req_input).closest('.input-container');
		var input_label = $(required_container).find('.label-text').text();

		var feedback = $(required_container).find('.feedback');

		var input_val = $(req_input).val().trim();

		console.log("Label:"+input_label);
		console.log("Value:"+input_val);

		$(feedback).fadeOut(0);

		if(input_val=='') {

			console.log('empty value')

			$(required_container).addClass('has-error');
			$(required_container).removeClass('has-success');


			$(feedback).text('A value is required for "'+input_label+'"');

		} else {
			console.log('entered value');

			$(required_container).addClass('has-success');
			$(required_container).removeClass('has-error');

			$(feedback).text('The entered value for "'+input_label+'" is acceptable.');
		}

		$(feedback).fadeIn(300);


	});

	var required_checkbox_containers = $('.required-checkbox');

	$.each(required_checkbox_containers, function(req_check_container_index, req_check_container){

		var required_checkboxes = $(req_check_container).find('input[type=checkbox]');
		var checkbox_feedback = $(req_check_container).find('.feedback');
		var checkbox_label = $(req_check_container).find('.label-text').text();
		var check_counter = 0;

		$(checkbox_feedback).fadeOut(0);

		$.each(required_checkboxes, function(req_check_index, req_check){
			console.log($(req_check).prop('checked'));

			if($(req_check).prop('checked')) {
				check_counter++;
			}

		});

		if(check_counter>0) {
			// This is a success
			$(req_check_container).addClass('has-success');
			$(req_check_container).removeClass('has-error');
			$(checkbox_feedback).text('The entered value for "'+checkbox_label+'" is acceptable.');

		} else {
			$(req_check_container).removeClass('has-success');
			$(req_check_container).addClass('has-error');
			$(checkbox_feedback).text('A value is required for "'+checkbox_label+'"');

		}

		$(checkbox_feedback).fadeIn(300);
	});
}

function ValidateEmail(inputText) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(inputText.value.match(mailformat)){
		document.form1.text1.focus();
		return true;
		}
	else {
		alert("Success!");
		document.form1.text1.focus();
	return false;
	}
}