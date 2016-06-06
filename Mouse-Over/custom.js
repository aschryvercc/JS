$(document).ready( function() {
	$("a").hover(function(e) {
		/*
		 * Retrieve the tooltip div from the data 
		 * attribute.
		 */ 
		var tooltip = $(this).data("tooltip");
		
		/*
		 * Set the location of the tooltip div to 
		 * the location of the event.
		 */
    		$(tooltip).css({

        		left: e.pageX + 1,
        		top: e.pageY + 1
    		});
			
		/*
		 * Stop any other event animation and 
		 * show the tooltip div.
		 */
		$(tooltip).stop().show(100);
	}, function() {

		/*
		 * Retrieve the tooltip div from the data 
		 * attribute.
		 */
    		var tooltip = $(this).data("tooltip");
		
		/*
		 * Hide the tooltip div.
		 */
   		$(tooltip).hide();
	});
});
