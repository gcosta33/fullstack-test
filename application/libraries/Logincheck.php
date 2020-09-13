<?php defined('BASEPATH') OR exit('No direct script access allowed');
class Logincheck {

    protected $CI;

    // We'll use a constructor, as you can't directly call a function
    // from a property definition.
    public function __construct()
    {
            // Assign the CodeIgniter super-object
        $this->CI =& get_instance();
        $this->CI->load->library('session');
        $this->CI->load->helper('url');


        if($this->CI->session->has_userdata('user-name')){
            // print_r($this->CI->session->get_userdata('usker-name'));
            if(uri_string() === "login"){
                redirect('/welcome/');
            }
            return TRUE;
        }else{
            if(uri_string() !== "login"){
                echo "Not log";
            //    die;
            }
        }
    }
    
}