$.ajax({
	/*
	 * We are sending an HTTP POST.
	 */ 
	type: "POST",
	/*
	 * Location to a webservice.
	 */
	url: "services/mailService/SendMail",
	/*
	 * Send new data everytime.
	 */
	cache: false,
	/*
	 * Choose JSON for lightweight communication.
	 */
	contentType: "application/json; charser=utf-8",
	/*
	 * The data we are sending. 
	 * Use JSON formatting.
	 */
	data: "{ 'message': '" + messageBody + "'," +
	      "'to': '" + msgTo + "'," +
	      "'from': '" + msgFrom + "'," +
	      "'subject': '" + msgSubject + "'" + 
	      "}",
	/*
	 * JSON formatting.
	 */
	dataType: "json",
	/*
	 * Handle the results of the call.
	 * On:
	 * 	Success - Display success message.
	 * 	Error - Alert the user of the error.
	 */
	complete: function (transport) { 
		if (transport.status == 200) {

			$('#formContainer').html("Success"); 
		}
		else {
			
			alert("Please try again later.");
		}
	}
});
