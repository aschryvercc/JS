<?php
if($_POST) {
	/*
	 * Get the mail info.
	 */
	$to = $_POST('to');
	$from = $_POST('from');
	$subject = $_POST('subject');
	$message = $_POST('message');
	
	/*
	 * Send the mail. 
	 * This will not work on a local server, without SMPT server setup.
	 */
	mail($to, $subject, $message, $from);
}
>
