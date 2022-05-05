<?php
$name= $_POST['ownername'];
$email= $_POST['owneremail'];
$mobile= $_POST['ownernumber'];
$address= $_POST['address'];
$rent= $_POST['roomrent'];
$conn = new mysqli('localhost','root','test');
if($conn->connect_error){
    die('connection failed :'.$conn->connect_error);
}else{
    $stmt=$conn->prepare("Insert into registration(name,email,mobile,address,rent) values(?,?,?,?,?)");
    $stmt->bind_param("ssisi",$name,$email,$mobile,$address,$rent);
    $stmt->execute();
    echo"registration successfully...";
    $stmt->close();
    $conn->close();
}


?>