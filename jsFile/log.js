var x;
$("#btn").on("click",function(){
    x=$("#txt").val();
    localStorage.setItem("name",x);
})
