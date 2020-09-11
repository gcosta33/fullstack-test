<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

    public function __construct(){
        parent::__construct();
        $this->load->model('Users');
        $this->load->helper('url');

    }

	public function index()
	{      
        $this->load->helper('form');
        $this->load->library('form_validation');
        $this->form_validation->set_rules('user','Usuario','required');
        $this->form_validation->set_rules('pass','Senha','required');
        if($this->form_validation->run()==false){
            $this->load->view('login-view');
        }else{
            $data['users'] = ['user'=>$this->input->post('user'),'pass'=>$this->input->post('pass')];
            self::login($data['users']);
        }
    }
    private function login($users){
        if(!empty($users)){
            
            $users = $this->Users->login($users['user'],$users['pass']);
            // Verica se retornou o Login
            if(!empty($users)){
                $this->load->library('session');
                $this->session->set_userdata('user',$users->user);    
                redirect('/welcome/');
                
            }else{
                //login false
                $this->load->view('login-view');
            }
        }else{
            $this->load->view('login-view');
        }
    }
}
