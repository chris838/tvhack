<link rel="stylesheet" type="text/css" href="//static.zeebox.com/zeeboxjs/v1.5.2-carlton-live2/css/main.css">
<main id="content-container" class="columns small-single" style="-webkit-box-shadow:none">

<div class="column">
  <h1>Log in to zeebox</h1>

  <p class="message">
    Log in to follow and discuss your favourite TV shows, see what friends are watching, and create your personal TV guide.
  </p>
  
  <form class="form form-horizontal wider-labels" data-ui-behaviour="login-form" data-dialog="" data-ui-init-login-form="true">
    <p class="success message">Great, you're logged in. Welcome back!</p>
    <fieldset class="login-fields hide-on-success">
      
      <div class="field">
        <label for="email">Email</label>
        <input type="text" data-validate="required" class="field-large" name="email" id="email" placeholder="Enter your email address">
      </div>
      
      <div class="field">
        <label for="password">Password</label>
        <input type="password" data-validate="required" class="field-large" name="password" id="password" placeholder="Enter your password">
      </div>
      
      <div class="buttons with-gradient indent">
        <p class="error message"></p>
        <p>
          <button type="submit" class="btn btn-inline">Log in</button> Not a zeebox member? <a href="http://uk.zeebox.com/account/signup" data-ui-action="switch-to-signup">Sign up here</a>.
        </p>
      </div>
    </fieldset>
    
    <fieldset class="provider-fields hide-on-success">
      <div class="field">
        <span class="label">or sign in with:</span>
        <button type="button" data-ui-action="twitter" class="btn btn-twitter"><span>Twitter</span></button>
        <button type="button" onclick="login()"  class="btn btn-facebook"><span>Facebook</span></button>
      </div>
    </fieldset>
  </form>


</div>
</main>
