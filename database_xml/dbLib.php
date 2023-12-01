<?php

  $db_msg = "";
//kết nối cdsl
function connectDatabase()
{

    $username = "root";

    $password = "";

    try {

        $db = new PDO("mysql:dbname=stats;host=localhost;port=3306", $username, $password);

    } catch (PDOException $e) {

        $db = -1;

        $db_msg = "Khong ket noi duoc co so du lieu" . $e->getMessage();

    }

    return $db;

}


//Ghi vào csdl
function recordSensor($name, $value, $status)
{

    $db = connectDatabase();

    if ($db) {

        $sql = "INSERT  INTO sensors(name, value, status) VALUES (\"$name\", \"$value\", $status)";

        try {

            $r = $db->query($sql);

        } catch (PDOException $e) {

            echo "Loi trong qua trinh gi du lieu" . $e->getMessage();

        }

    } else {

        echo $db_msg;

    }

}

?>