<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

    public function __construct(){
        parent::__construct();
        $this->load->helper('url');

    }

	public function index()
	{

		$this->load->library('logincheck');

        $this->load->helper('form');
        $this->load->library('form_validation');
        $this->form_validation->set_rules('user','Usuario','required');
        $this->form_validation->set_rules('pass','Senha','required');
        if($this->form_validation->run()==false){
            $this->load->view('login-view');
        }else{
            $data['users'] = ['user'=>$this->input->post('user'),'pass'=>$this->input->post('pass')];
            self::login($data);
        }
    }

    public function login(){

        $this->load->model('Users');
        $user = $this->input->post('user');
        $pass = $this->input->post('pass');
        if(!empty($user) && !empty($pass)){

            $users = $this->Users->login($user,$pass);
            // Verica se retornou o Login
            if(!empty($users)){
                $this->load->library('session');
                $this->session->set_userdata('user-name',$users->user);
                $this->output->set_status_header(200);
                redirect('/welcome/');

            }else{
                //login false
                $this->output->set_status_header(404);
                redirect('/login/');
            }
        }else{
            $this->output->set_status_header(404);
            redirect('/login/');
        }
    }
    // public function isLogin(){
    //     $this->load->library('session');
    //     if($this->session->get_userdata('user-name')){
    //         print_r($this->session->get_userdata('user-name'));
    //         // redirect('/welcome/');
    //         return;
    //     }else{
    //         // redirect('/login/');
    //     }

    // }
}
