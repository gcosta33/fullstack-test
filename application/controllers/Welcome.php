<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {
	
	public function __construct(){
		parent::__construct();
		
	}
	public function index()
	{
		
		$this->load->library('logincheck');
		$this->load->library('session');
		$this->load->helper('url');
	
	
		$this->load->library('session');
        $data['user'] = $this->session->get_userdata('user-name');

		$this->load->view('welcome_message',$data);
		if($this->session->has_userdata('user')){
		}else{
			// redirect('/login/');

		}
	}
	public function test()
    {
        $this->load->view('dashboard');
    }
}
