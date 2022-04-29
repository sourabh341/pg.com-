function hello(){
    alert("not available");
}

function login(){
  
    var username = document.getElementById("user_name").value;
    var useremail = document.getElementById("user_email").value;
    if(username.length != 0 && useremail.length != 0){
        alert("logined in ");
        return ;
    }
    else{
        alert("failed");
    }
    
}
function memberLogin(){
    var memberName = document.getElementById("mem-name").value;
    var memberMObileNumber = document.getElementById("mem_mobile_number").value;
    var memberAddress = document.getElementById("member_address").value;
    var memberImage = document.getElementById("room_img").value;
    if(memberName!=0 && memberAddress!=0 ){
            alert("your detail will soon display on home page ");
    }
  
    else
    {
        alert("failed");
    }
    
} 


