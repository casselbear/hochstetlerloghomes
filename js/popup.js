var pageLocation = window.location.href;

console.log(pageLocation);

if (pageLocation === 'https://hochstetlerloghomes.com/' || pageLocation === 'https://hochstetlerloghomes.com/home/' || pageLocation === 'https://www.hochstetlerloghomes.com/' || pageLocation === 'https://www.hochstetlerloghomes.com/home/'){ 
    
    jQuery(document).ready(function($){
        
      window.onload = function (){
        $(".bts-popup").delay(1000).addClass('is-visible');
    	}
      
    	//open popup
    	$('.bts-popup-trigger').on('click', function(event){
    		event.preventDefault();
    		$('.bts-popup').addClass('is-visible');
    	});
    	
    	//close popup
    	$('.bts-popup').on('click', function(event){
    		if( $(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup') ) {
    			event.preventDefault();
    			$(this).removeClass('is-visible');
    		}
    	});
    	//close popup when clicking the esc keyboard button
    	$(document).keyup(function(event){
        	if(event.which=='27'){
        		$('.bts-popup').removeClass('is-visible');
    	    }
        });
        
    });
    
} else {
	$(".bts-popup").removeClass('is-visible');
}

