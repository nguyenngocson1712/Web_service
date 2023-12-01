<?php

    $con=mysqli_connect("localhost", "root","")

    or

    die("Connection Failed");

    // echo "<pre>";

    // print_r($con);

    // echo "</pre>";

    $db=mysqli_select_db ($con, "test");