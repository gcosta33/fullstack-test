<?php

    class Product extends CI_Model
    {
        function __construct()
        {
            $this->load->database();
        }

        public function index(){
            $query = $this->db->query("
            SELECT 
                products.id,
                brands.name,
                flavor_name,
                sizes.size_ref,
                types_soda.type_ref,
                amout,
                value 
            FROM products
            LEFT JOIN brands ON brands.id =  products.id_brand
            LEFT JOIN sizes ON sizes.id = products.id_size
            LEFT JOIN types_soda ON types_soda.id =  products.id_type
            ");
            return $query->result_array();

        }
        public function show($id){
        $sql = "SELECT * from products WHERE id = ?";
            $query = $this->db->query($sql,array($id));
            return $query->row();
        }
        public function get($brand = "%", $size = "%", $amout = "%",$value = "%"){
            $sql = "
            SELECT 
                products.id,
                brands.name,
                flavor_name,
                sizes.size_ref,
                types_soda.type_ref,
                amout,
                value 
            FROM products
            LEFT JOIN brands ON brands.id =  products.id_brand
            LEFT JOIN sizes ON sizes.id = products.id_size
            LEFT JOIN types_soda ON types_soda.id =  products.id_type
            WHERE brands.name LIKE ? AND sizes.size_ref LIKE ? AND amout LIKE ? AND value LIKE ?
            ";
            $where= array($brand, $size, $amout,$value);
            $query = $this->db->query($sql,$where);
            return $query->result_array();
        }
        public function create($id_brand,$flavor_name = NULL,$size_ref,$type_ref,$amout,$value){
            $sql="
            INSERT INTO `products` (`Id`, `id_brand`, `flavor_name`, `id_size`, `id_type`, `amout`, `value`)
            VALUES( NULL, ? , ?, ? , ? , ?, ?)
            ";
            $values = array($id_brand,$flavor_name,$size_ref,$type_ref,$amout,$value);
            if($this->db->query($sql,$values)){
                return "sucess";
            }else{
                return NULL;
            };
        }
        public function update($id,$id_brand = NULL,$flavor_name = NULL,$size_ref = NULL,$type_ref = NULL,$amout = NULL,$value = NULL){
            $sql="UPDATE `products` SET ";
            $values = array(
                empty($id_brand)? NULL: "id_brand" =>$id_brand,
                empty($flavor_name)? NULL: "flavor_name" =>$flavor_name,
                empty($size_ref)? NULL : "id_size" =>$size_ref,
                empty($type_ref)? NULL: "id_type" =>$type_ref,
                empty($amout)? NULL: "amout" =>$amout,
                empty($value)? NULL: "value" =>$value);
            
            if($this->db->update('products', array_filter($values), array('id' => $id))){
                return "sucess";
            }else{
                return NULL;
            };
        }
        public function delete($ids){    
            foreach ($ids as $id) {
                $this->db->delete('products',array('id'=>$id));
            }
        }

    }
?>
