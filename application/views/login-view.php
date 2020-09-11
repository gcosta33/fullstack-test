<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<h2>Login</h2>
<?php  
    echo validation_errors();
    echo form_open('login');
?>
<input type="text" name="user" placeholder="Usuario">
<input type="pass" name="pass" placeholder="Senha">
<input type="submit" value="Login">

</form>


  