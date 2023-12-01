<?php

    include 'dbconnection.php';

   

    $result = mysqli_query($con, 'select * from books');

    
// tạo tài liệu
    $xml = new DOMDocument("1.0","UTF-8");
// bật đinh dạng
    $xml -> formatOutput = true;
// tạo element
    $books = $xml -> createElement("books");
// thêm element vào xml
    $xml -> appendChild($books);

    while($row = mysqli_fetch_array($result)){

        $book = $xml -> createElement("book");

        $books -> appendChild($book);

        $name = $xml -> createElement("name", $row['name']);

        $book -> appendChild($name);

        $price = $xml -> createElement("price", $row['price']);

        $book -> appendChild($price);

    }

    // xuất tài liệu XML ra trình duyệt để kiểm tra, dùng Developer tool để xem

    echo "<xmp>" . $xml -> saveXML() . "</xmp>";

    // xuất ra tập tin kết quả

    $xml -> save("reports.xml");

?>