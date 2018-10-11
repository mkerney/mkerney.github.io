/*--  Toggle Sidebar  --*/
$(document).on('click', '.btn-sidebar-toggle', function () {
    $("body").toggleClass("sidebar-open");
});
$(document).on('click', '.sidebar-overlay', function () {
    $("body").removeClass("sidebar-open");
});
$(document).on('click', '.search-toggle', function () {
//    alert();
    $(this).next().toggleClass('show');
    $(this).children('i').hide();
    $('.search-overlay').addClass('show');
    $('.btn-sidebar-toggle').hide();
});
$(document).on('click', '.close-search', function () {
    $('.search-overlay').removeClass('show');
    $(this).parents('li.no-hover').find('.search-toggle i').show();
    $(this).parents('.search-bar').toggleClass('show');
    $('.btn-sidebar-toggle').show();
});
$(document).on('click', '.search-overlay', function () {
    $(this).removeClass('show');
    $('.search-toggle i').show();
    $('.search-bar').toggleClass('show');
    $('.btn-sidebar-toggle').show();
});
$(document).ready(function () {
    var heightMarket = $('.market-right').height();
    $('.market-left').height(heightMarket);
});
$(document).ready(function () {
    $(document).on('click', '.btn-play', function () {
        $(this).hide();
        $(this).parents('.story').children('img').hide();
        $(this).parent('.content').children('video').show();
    });
});
/* =================================
 ===  WOW ANIMATION             ====
 =================================== */

new WOW().init();

/**
 * Form Validation For Add User Form
 */
$(document).ready(function () {
    $('.carousel').carousel({
      pause: null
    })

    $(document).on('click', '.btn-submit', function () {
       // alert('submit button clicked');
        var that = this;
        $(this).parents('#contactForm').validate({
            rules: {
                // inquiry: {
                //     required: true
                // },
                fName: {
                    required: true
                },
                lName: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                // company: {
                //     required: true
                // },
                // title: {
                //     required: true
                // },
                // phone: {
                //     required: true
                // },
                comment: {
                    required: true
                }
            },
            messages: {
                // inquiry: {
                //     required: "Inquiry is required."
                // },
                fName: {
                    required: "First Name is required."
                },
                lName: {
                    required: "Last Name is required."
                },
                email: {
                    required: "Email is required.",
                    email: "Please enter a valid email"
                },
                // company: {
                //     required: "Company is required."
                // },
                // title: {
                //     required: "Job Title is required."
                // },
                // phone: {
                //     required: "Phone Number is required."
                // },
                Comment: {
                    required: "Comment is required."
                }
            },
            submitHandler: function () {
                var formData = $("#contactForm").serialize();
                // alert('submit is working');
                $.ajax({
                    type: "POST",
                    url: "submit_1.php",
                    data: formData,
                    cache: false,
                    success: function (response) {
                      //  if (response == 200) {
                            $("#contactForm")[0].reset();
                            $(that).parents("#contactForm").append("<div class='clearfix'></div><div class='success-info mail-sent'>Thanks for contacting us, Our team will contact you soon.</div>")
                            setTimeout(function () {
                               $('.success-info').remove();
                           }, 10000);
                        //}
                       //  else {
//                            alert('else is working');
                       // }
                    }
                });
				
				
            }
        });
      


    });
    
    
    
    
    /*Login Form Validations*/
    $(document).on('click', '.btn-login', function () {
       // alert('submit button clicked');
        var formData = $(this).parents("#loginForm").serialize();
        var that = this;
        $(this).parents('#loginForm').validate({
            rules: {
                loginUsername: {
                    required: true,
                    email: true
                },
                loginPassword: {
                    required: true
                }
            },
            messages: {
                loginUsername: {
                    required: "Username is required."
                },
                loginPassword: {
                    required: "Password is required."
                }
            },
            submitHandler: function () {
				 
                $('.custom-error').toggle();
				
            }
        });
      


    });
});
