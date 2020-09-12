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
        public function create($brands,$flavor_name = NULL,$size_ref,$type_ref,$amout,$value){
            $sql="
            INSERT INTO `products` (`Id`, `id_brand`, `flavor_name`, `id_size`, `id_type`, `amout`, `value`)
            VALUES( NULL, ? , ?, ? , ? , ?, ?)
            ";
            $values = array($brands,$flavor_name,$size_ref,$type_ref,$amout,$value);
            if($this->db->query($sql,$values)){
                return "sucess";
            }else{
                return "failed";
            };
        }

    }
?>
