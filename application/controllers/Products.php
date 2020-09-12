<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Products extends CI_Controller {

    public function __construct(){
        parent::__construct();
        $this->load->model('Product');
        $this->load->helper('url');

    }

	public function index()
	{
        $result = $this->Product->index();
        if(!empty($result)){
            echo json_encode($result);
        }else{
            echo json_encode($result);
        }
    }
}
