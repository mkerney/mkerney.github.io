
<!--  Include Header  -->
<?php include 'includes/header.php'; ?>
<!--  Include Footer  -->
<?php include 'includes/sidebar.php'; ?>
<!--  Home Slider Wrapper Ends  -->

<div class="content-wrapper clearfix">
    <div class="about-wrapper">
        <div class="about-banner no-bg">
            <h2>Support Login</h2>
        </div>
        <div class="about-content">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <form class="form-signin" id="loginForm">
                            <h2 class="form-signin-heading">Please login</h2>
                            <div class="alert alert-danger custom-error" style="display:none;">This login/password combination is not valid.</div>
                            <label>User Name</label>
                            <input type="email" class="form-control" id="loginUsername" name="loginUsername" placeholder="Email Address" required="" autofocus="" />
                            <label>Password</label>
                            <input type="password" class="form-control" id="loginPassword" name="loginPassword" placeholder="Password" required=""/>      
                            <!-- <div class="g-recaptcha" data-sitekey="6Lep3zsUAAAAAFAwls9rAeNUQDJSKes9tU80N0b9"></div> -->
                            <!-- <label class="checkbox">
                              <input type="checkbox" value="remember-me" id="loginRememberMe" name="loginRememberMe"> Remember me
                            </label> -->
                            <button class="btn btn-lg btn-primary btn-block btn-login" type="submit">Login</button>   
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<!--  Include Footer  -->
 <?php include 'includes/footer.php'; ?> 