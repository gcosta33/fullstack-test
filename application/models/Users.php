<?php

    class Users extends CI_Model
    {
        function __construct()
        {
            $this->load->database();
        }

        function login($user,$pass)
        {
            $md5 = md5($user.$pass);
            $query = $this->db->query("SELECT users.user FROM users WHERE MD5(CONCAT(users.user,users.pass)) = '{$md5}'");
            return $query->row();
        }
        
    }
?>
