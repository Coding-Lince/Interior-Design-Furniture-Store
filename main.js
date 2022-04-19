/*---------------------------------------------------------------------------------------------------------REGISTRATION*/
$(document).ready(function(){
    // flatpickr("#dob", {
    //     dateFormat: "d-m-Y",
    //     "enable": [
    //         // function(date) {
    //         //     return (date.getDay() !== 0);
    //         // }
    //     ],
    //     "locale": {
    //         "firstDayOfWeek": 1
    //     },
    //     maxDate: "today",
       
    // });
    flatpickr("#dob",{
        dateFormat: "d.m.Y",
        maxDate: "today",
    });

});
$(document).ready(function(){
    $("#form-submit").click(function(){
        var fname = $("#fname").val();
        var mname = $("#mname").val();
        var lname = $("#lname").val();
        var mobile = $("#mobile").val();
        var email = $("#email").val();
        var dob  = $("#dob").val();
    
        // console.log(fname);
        // console.log(lname);
        // console.log(mobile);
        // console.log(email);
        // console.log(dob);

        if((fname && mname && lname && mobile && email && dob) == ""){
            $(".error_main #error-msg").text("All Fields are Compulsary");
            $(".error_main").slideDown(800);
        }else{
            if((!validName(fname)) || (!validName(mname)) || (!validName(lname))){
                $(".error_main #error-msg").text("Please Enter Valid Name");
                $(".error_main").slideDown();
            }else{
                if(!validMobile(mobile) || (mobile.length < 10) || (mobile.length > 10)){
                    $(".error_main #error-msg").text("Please Enter Valid Mobile No.");
                    $(".error_main").slideDown();
                }else{
                    if(!validEmail(email)){
                        $(".error_main #error-msg").text("Please Enter Valid Email");
                        $(".error_main").slideDown();
                    }else{
                        $(".error_main #error-msg").text("Form Submited Successfully");
                        $(".error_main").slideDown();
                        
                        setTimeout(function(){
                            $(".error_main").slideUp();
                            $("#reg-form").submit();
                            $('#reg-form')[0].reset();
                        }, 1000);
                    }
                }
            }
        }
    });
    // $("#notify-close").click(function(){
    //     $(".error_main").slideUp();
    // });
    $("#form-cancel").click(function(){
        $("#reg-form")[0].reset();
    });
});
function closeMsg(){
    $(".error_main").slideUp();
}
function validName(input){
    var lettersOnly = /^[A-Za-z]+$/; //regex for alphabet only
    if(input.match(lettersOnly))
    {
      return true;
    }
    else
    {
        return false;
    }
}
function validMobile(input){
    var numbers = /^[0-9]+$/; //regex for numeric only
    if(input.match(numbers))
    {
      return true;
    }
    else
    {
        return false;
    }
}
function validEmail(input){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regex for email
    if(input.match(mailformat))
    {
      return true;
    }
    else
    {
        return false;
    }
}
/*-----------------------------------------------------------------------------------------------------REGISTRATION END*/


/*--------------------------------------------------------------------------------------------INDEX & HOME START*/
$(document).ready(function()
{
	//----------------------SNIPPETS CARDS FOR OWL
	var snippet = [].slice.call(document.querySelectorAll('.hover'));
	if (snippet.length) {
	  snippet.forEach(function (snippet) {
	    snippet.addEventListener('mouseout', function (event) {
	      if (event.target.parentNode.tagName === 'figure') {
	        event.target.parentNode.classList.remove('hover')
	      } else {
	        event.target.parentNode.classList.remove('hover')
	      }
	    });
	  });
	}

	//---------------------OWL-1, 3 PRODUCT
	$('.owl1 .owl-one, .owl3 .owl-three').owlCarousel({
			    loop:true,
			    margin:10,
			    // nav:true,	    
			    dots:false,
			    nav:true,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:2
			        },
			        1000:{
			            items:3
			        }
			    }
			})

	//-----------------------------OWL-2 AD
	$('.owl-two').owlCarousel({
		items: 1,
		// nav:true,
		dots:true,
		loop: true,
		autoplay: true,
		animateIn: 'animate__flipInX',
	    animateOut: 'animate__slideOutDown',
	    // margin:30,
	    // stagePadding:30,
	    smartSpeed:450
	});

	//---------------------------------SHOP
	$('.shop .shop-one, .shop-two, .shop-three').owlCarousel({
			    loop:true,
			    margin:10,
			    // nav:true,	    
			    dots:false,
			    nav:true,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:2
			        },
			        1000:{
			            items:2
			        }
			    }
			})

	//----------------------------------SCROLL UP BUTTON
	$(window).scroll(function(){
		if($(this).scrollTop() > 40)
		{
			$('#topBtn').fadeIn();
		}
		else
		{
			$('#topBtn').fadeOut();
		}
	});

	$("#topBtn").click(function(){
		$('html, body').animate({scrollTop : 0},800);
	});
});


/*-----------------------------------------------------------------------------------------------------INDEX & SHOP END*/



