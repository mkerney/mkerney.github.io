<footer class="footer" id="actContact">
  <div class="footer-top">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-xs-12 wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
          <h3>Act</h3>
        </div>
        <div class="col-sm-8 col-xs-12 wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
          <form class="contact-form" id="contactForm">
            <div class="row">
              <div class="col-sm-6 col-xs-6">
                <div class="form-group">
                  <label class="sr-only">Area of Inquiry</label>
                  <select class="form-control" name="inquiry">
                    <option value="">Area of Inquiry</option>
                    <option value="Alliance and Partners">Alliance and Partners</option>
                    <option value="Investor Relations">Investor Relations</option>
                    <option value="Media/Press/Public Relations/Industry Analyst">Media/Press/Public Relations/Industry Analyst</option>
                    <option value="Offerings">Offerings</option>
                    <option value="Website Issues/Feedback">Website Issues/Feedback</option>
                    <option value="Careers">Careers </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-xs-6">
                <div class="form-group">
                  <label class="sr-only">First Name</label>
                  <input type="text" class="form-control" id="fName" name="fName" placeholder="First Name*">
                </div>
                <div class="form-group">
                  <label class="sr-only">Last Name</label>
                  <input type="text" class="form-control" id="lNmae" name="lName" placeholder="Last Name*">
                </div>
                <div class="form-group">
                  <label class="sr-only">Company</label>
                  <input type="text" class="form-control" id="company" name="company" placeholder="Company">
                </div>
              </div>
            <!-- </div>

            <div class="row"> -->
              <div class="col-sm-6 col-xs-6">
                <div class="form-group">
                  <label class="sr-only">Email Address</label>
                  <input type="email" class="form-control" id="email" name="email" placeholder="Email Address*">
                </div>
                <div class="form-group">
                  <label class="sr-only">Phone Number</label>
                  <input type="text" class="form-control" id="phone" name="phone" placeholder="Phone Number">
                </div>
                <div class="form-group">
                  <label class="sr-only">Job Title</label>
                  <input type="text" class="form-control" id="title" name="title" placeholder="Job Title">
                </div>
              </div>
            </div>
            <!-- <div class="row">
              <div class="col-sm-6 col-xs-6">
                <div class="form-group">
                  <label class="sr-only">Company</label>
                  <input type="text" class="form-control" id="company" name="company" placeholder="Company">
                </div>
              </div>
              <div class="col-sm-6 col-xs-6">
                <div class="form-group">
                  <label class="sr-only">Job Title</label>
                  <input type="text" class="form-control" id="title" name="title" placeholder="Job Title">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-xs-6">
                <div class="form-group">
                  <label class="sr-only">Phone Number</label>
                  <input type="text" class="form-control" id="phone" name="phone" placeholder="Phone Number">
                </div>
              </div>
            </div> -->
            <div class="row">
              <div class="col-sm-12 col-xs-12">
                <div class="form-group">
                  <label class="sr-only">Comment</label>
                  <textarea class="form-control textarea-control" rows="1" id="comment" name="comment" placeholder="Comment*"></textarea>
                </div>
              </div>
            </div>
            <div class="text-right">
              <button type="submit" class="btn btn-default btn-submit">Contact</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom clearfix">
    <div class="container">
      <ul class="list-inline footer-links">
        <li>
          <a href="support-login.php">Support</a>
        </li>
        <li>
          <a href="partner-login.php">Partners</a>

        </li>
        <li>
          <a href="investor-login.php">Investors</a>
        </li>
        <!-- <li>
          <a href="javascript:void(0);">Careers</a>
        </li> -->
      </ul>
      <ul class="social-links list-inline">
        <!-- <li><a href="javascript:void(0);" class="fa fa-youtube-play"></a></li>
        <li><a href="javascript:void(0);" class="fa fa-facebook"></a></li> -->
        <li><a href="https://www.linkedin.com/company/18190402/" class="fa fa-linkedin"></a></li>
        <li><a href="https://twitter.com/blackswantech" target="_blank" class="fa fa-twitter"></a></li>
      </ul>
    </div>
  </div>
  <div class="footer-privacy">
    <div class="container">
      <ul class="list-inline privacy text-center">
        <li><a href="index.php">&copy; 2017 BlackSwan</a></li>
        <!-- <li><a href="javascript:void(0);">Privacy</a></li>
        <li><a href="javascript:void(0);">Terms</a></li> -->
      </ul>
    </div>
  </div>
</footer>
<!--  Footer Ends  -->

</div>

<!--  JQuery Js  -->
<script src='https://www.google.com/recaptcha/api.js'></script>
<script src="assets/js/jquery.js" type="text/javascript"></script>
<script src="assets/js/jquery.validate.js" type="text/javascript"></script>
<!--  Bootstrap Js  -->
<script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
<script src="assets/js/wow.min.js" type="text/javascript"></script>

    <!--<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>-->
<!--  Custom Js  -->
<script src="assets/js/custom.js" type="text/javascript"></script>

<script>
 $(document).ready(function(){
      $("a").on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();

          // Store hash
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        }
      });
    });
</script>
</body>
</html>