$(".sp").text(localStorage.getItem("name"));


var buttonStart = $("input[type='button']");
var parentDIv = $("<div class='divGame'></div>");
var imgBall , flag = true , PositionBall;
var myPosition = [285 , 352 , 419, 486 , 553 , 620 , 687 , 754 , 821 , 888];
var myBall = [[],[],[],[],[],[],[],[],[],[]];
var arrRandomBall = ["red","purple","pink","yellow"];
var leftPosition = 90;
var checkWin = 0;
function fallBall(){
        if(checkWin == 5)
            {
                alert("winner");
                location.reload();
            }
        PositionBall = Math.floor(Math.random()*myPosition.length)
        positionRandomBall = Math.floor(Math.random()*4);
        leftPosition = myPosition[PositionBall];
        imgBall = $("<img src = 'img/"+arrRandomBall[positionRandomBall]+".png' class='img'/>");
        checkBorder(leftPosition,myBall);
        imgBall.appendTo(parentDIv).css("left",leftPosition).animate({top:result[0]+"%"},{duration:2000,queue:false,complete:function(){
            myBall[PositionBall].push(imgBall);
            if(myBall[PositionBall].length == 10)
                alert("you lose");
            dropBallHorizintal();
            if(myBall[PositionBall].length >3)
                dropBallVertical();
            fallBall();
        }});
        document.addEventListener('keydown',function(Event){
            topPosition = parseInt(imgBall.css("top"));
            if(Event.keyCode == 37 && leftPosition > 285 && flag && topPosition < (result[1]-59)){
                flag = false;
                leftPosition = parseInt(imgBall.css("left"));
                leftPosition -= 67;
                PositionBall -= 1;
                checkBorder(leftPosition,myBall);
                imgBall.stop().animate({left:leftPosition+"px"},{duration:500,queue:false,complete:function(){flag=true;
                    imgBall.stop().animate({top:result[0]+"%"},{duration:1000,queue:false,complete:function(){
                    myBall[PositionBall].push(imgBall);
                    if(myBall[PositionBall].length == 10)
                        {
                            alert("you lose");
                            location.reload();
                        }
                    dropBallHorizintal();
                    if(myBall[PositionBall].length >3)
                        dropBallVertical();
                    fallBall();
                 }});
                                
                }});
            }
            else if(Event.keyCode ==39  &&  leftPosition < 888 && flag && topPosition < (result[2]-59)){
                flag = false;
                leftPosition = parseInt(imgBall.css("left"));
                leftPosition += 67;
                PositionBall += 1;
                checkBorder(leftPosition,myBall);
                imgBall.animate({left:leftPosition+"px"},{duration:500,queue:false,complete:function(){flag=true;
                    imgBall.stop().animate({top:result[0]+"%"},{duration:1000,queue:false,complete:function(){
                    myBall[PositionBall].push(imgBall);
                    if(myBall[PositionBall].length == 10)
                        {
                            alert("you lose");
                            location.reload();
                        }
                    dropBallHorizintal();
                    if(myBall[PositionBall].length >3)
                        dropBallVertical();
                    fallBall();
                 }});
                }});
            }
        });
}
function checkBorder(temp,_myBall){
    result = [];
    if(temp == 285){
        result[0]=(83-((myBall[0].length) *(9)));
        result[1]=false;
        result[2]=(545-((myBall[1].length) *(59)));
    }
    else if(temp == 352){
        result[0]=(83-((myBall[1].length) *(9)));
        result[1]=(545-((myBall[0].length) *(59)));
        result[2]=(545-((myBall[2].length) *(59)));
    }
    else if(temp == 419){
        result[0]=(83-((myBall[2].length) *(9)));
        result[1]=(545-((myBall[1].length) *(59)));
        result[2]=(545-((myBall[3].length) *(59)));
    }
    else if(temp == 486){
        result[0]=(83-((myBall[3].length) *(9)));
        result[1]=(545-((myBall[2].length) *(59)));
        result[2]=(545-((myBall[4].length) *(59)));
    }
    else if(temp == 553){
        result[0]=(83-((myBall[4].length) *(9)));
        result[1]=(545-((myBall[3].length) *(59)));
        result[2]=(545-((myBall[5].length) *(59)));
    }
    else if(temp == 620){
        result[0]=(83-((myBall[5].length) *(9)));
        result[1]=(545-((myBall[4].length) *(59)));
        result[2]=(545-((myBall[6].length) *(59)));
    }
    else if(temp == 687){
        result[0]=(83-((myBall[6].length) *(9)));
        result[1]=(545-((myBall[5].length) *(59)));
        result[2]=(545-((myBall[7].length) *(59)));
    }
    else if(temp == 754){
        result[0]=(83-((myBall[7].length) *(9)));
        result[1]=(545-((myBall[6].length) *(59)));
        result[2]=(545-((myBall[8].length) *(59)));
    }
    else if(temp == 821){
        result[0]=(83-((myBall[8].length) *(9)));
        result[1]=(545-((myBall[7].length) *(59)));
        result[2]=(545-((myBall[9].length) *(59)));
    }
    
    else{
        result[0]=(83-((myBall[9].length) *(9)));
        result[1]=(545-((myBall[8].length) *(59)));
        result[2]= false;
    }
}
function dropBallVertical(){
    var lengthIndex = myBall[PositionBall].length
    if((myBall[PositionBall][lengthIndex-1].attr("src") == myBall[PositionBall][lengthIndex-2].attr("src")) &&
       (myBall[PositionBall][lengthIndex-2].attr("src") == myBall[PositionBall][lengthIndex-3].attr("src")) &&
      (myBall[PositionBall][lengthIndex-3].attr("src") == myBall[PositionBall][lengthIndex-4].attr("src")))
    {
        for(var i = lengthIndex-1 ; i > lengthIndex-5 ; i--)
            {
                myBall[PositionBall][i].remove();
                myBall[PositionBall].pop();
                
            }
        checkWin++;
        $("input[type = 'text']").val(checkWin);
    }
}
function dropBallHorizintal(){
    var lengthIndex = myBall[PositionBall].length;
    for(var i = 0 ; i<7 ; i++)
        {
            if(myBall[i][lengthIndex-1] != undefined && myBall[i+1][lengthIndex-1] != undefined &&
              myBall[i+2][lengthIndex-1] != undefined && myBall[i+3][lengthIndex-1] != undefined)
                {
                    if((myBall[i][lengthIndex-1].attr("src") == myBall[i+1][lengthIndex-1].attr("src")) &&
                        (myBall[i+1][lengthIndex-1].attr("src") == myBall[i+2][lengthIndex-1].attr("src")) &&
                        (myBall[i+2][lengthIndex-1].attr("src") == myBall[i+3][lengthIndex-1].attr("src")))
                        {
                            for( j = i ; j < i+4 ; j++)
                            {
                                myBall[j][lengthIndex-1].remove();
                                var tempLengthIndex = myBall[j].length;
                                for(k = lengthIndex ; k < tempLengthIndex ;k++)
                                    {
                                        myBall[j][k-1] = myBall[j][k];
                                        myBall[j][k-1].animate({top:"+=9%"},300);
                                    
                                    }
                                if(lengthIndex <= tempLengthIndex)
                                    myBall[j].pop();

                            }
                            checkWin++;
                            $("input[type = 'text']").val(checkWin);
                        }
                }
        }
}
buttonStart.on("click",function(){
        buttonStart.hide()
        parentDIv.appendTo("body").addClass("parentDiv");
        fallBall();
});