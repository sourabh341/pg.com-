window.addEventListener('load',()=>{
    const params = (new URL(document.location)).searchParams;
    const naam=params.get('ownername');
    const mobileno=params.get('ownernumber');
    const ownerpath=params.get('address');
    const minrent=params.get('roomrent');
    document.getElementById('username').innerHTML=naam;
    document.getElementById('address').innerHTML=ownerpath;
    document.getElementById('number').innerHTML=mobileno;
    document.getElementById('rent').innerHTML=minrent;
 

})

const image_input= document.querySelector("image_input");
var uploaded_image="";

image_input.addEventListener('change',function(){
    const reader=new FileReader();
    reader.addEventListener('load',() =>{
        uploaded_image = reader.result;
        document.querySelector("#display_image").getElementsByClassName.backgroundImage='url(${uploaded_image})'
    })
})
































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





