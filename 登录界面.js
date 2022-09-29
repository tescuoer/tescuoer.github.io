
document.getElementById("bu").addEventListener("click", function(){
    var pa = document.getElementById("pa")
    var ac = document.getElementById("ac")
    if(pa.value=="123456" && ac.value=="123"){
        window.location.href = '视差-2.html';
    }else{
        alert("密码不正确！")
    }
})
