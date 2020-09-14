<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Products extends CI_Controller {
    

    public function __construct(){
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        // header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization");
       
        parent::__construct();

        $this->load->model('Product');
        $this->load->helper('url');

    }

	public function index()
	{
        $this->load->library('logincheck');
        $result = $this->Product->index();
        if(!empty($result)){
            $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode($result));
        }else{
            $this->output
                ->set_status_header(404, "Error function: " . strtoupper(__FUNCTION__) ."!" );
        }
    }
    public function show($id)
	{
        $result = $this->Product->show($id);
        if(!empty($result)){
            $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode($result));
        }else{
            $this->output
                ->set_status_header(404, "Error function: " . strtoupper(__FUNCTION__) ."!" );
        }
    }
    public function find(){
        $brand = $this->input->get('brand')."%";
        $size = $this->input->get('size')."%";
        $amout = $this->input->get('amout')."%";
        $value = $this->input->get('value')."%";
        $result = $this->Product->get($brand, $size, $amout,$value);
        if(!empty($result)){
            $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode($result));
        }else{
            print_r($result);
            $this->output
                ->set_status_header(404, "Error function: " . strtoupper(__FUNCTION__) ."!"  );
        }

    }
    public function update($id){
        $id_brand = $this->input->post('id_brand');
        $flavor_name = $this->input->post('flavor_name');
        $type_ref = $this->input->post('type_ref');
        $size_ref = $this->input->post('size_ref');
        $amout = $this->input->post('amout');
        $value = $this->input->post('value');
        $result = $this->Product->update($id,$id_brand,$flavor_name,$size_ref,$type_ref,$amout,$value);
        if(!empty($result)){
            $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode($result));
        }else{
            print_r($result);
            $this->output
                ->set_status_header(404, "Error function: " . strtoupper(__FUNCTION__) ."!"  );
        }
    }
    public function create(){
        
        $id_brand = $this->input->post('id_brand');
        $flavor_name = $this->input->post('flavor_name');
        $type_ref = $this->input->post('type_ref');
        $size_ref = $this->input->post('size_ref');
        $amout = $this->input->post('amout');
        $value = $this->input->post('value');
        $result = $this->Product->create($id_brand,$flavor_name,$size_ref,$type_ref,$amout,$value);
        if(!empty($result)){
            $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode($result));
        }else{
            print_r($result);
            $this->output
                ->set_status_header(404, "Error function: " . strtoupper(__FUNCTION__) ."!"  );
        }
    }
    public function delete($id){
        $result = $this->Product->delete($id);
        if(!empty($result)){
            $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode($result));
        }else{
            print_r($result);
            $this->output
                ->set_status_header(404, "Error function: " . strtoupper(__FUNCTION__) ."!"  );
        }
    }
    
}
