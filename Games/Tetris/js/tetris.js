init(10,"mylegend",440,660,main);
 /*   LSystem.screen(LStage.FULL_SCREEN);
    LStageScaleMode.SHOW_ALL;*/
LSystem.screen(LStage.FULL_SCREEN);
//LStageScaleMode.SHOW_ALL;
var loadingLayer,backLayer,graphicsMap,nextLayer,BOX;
var pointText,delText,speedText;
var imglist={};
var imgdata=new Array(
    {name:"backImage",path:"img/bk.jpg"},
    {name:"blue",path:"img/blue.png"},
    {name:"green",path:"img/green.png"},
    {name:"pink",path:"img/pink.png"},
    {name:"red",path:"img/red.png"}
)
var bitmapdataList;
var nowBox;var nextBox;
function pointBox(){
    var x,y;
}
var map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var nodeList;
var speed=50,speedIndex=0,speedMax=50;
var point=0,dels=0;
function myKey(){
    var keyControl;
    var stepindex;
    var step;
    var isTouchDown,istouchMove,touchX,touchY;
    var flag;
}
var test=1;
function main(){
    backLayer=new LSprite();
    backLayer.graphics.drawRect(1,"#000000",[0,0,440,660],"#000000");
    addChild(backLayer);
    loadingLayer=new LoadingSample1();
    backLayer.addChild(loadingLayer);
    LLoadManage.load(
        imgdata,
        function(progress){
            loadingLayer.setProgress(progress);
        },
        gameInit
    );    
}
function gameInit(result){
    imglist=result;
    backLayer.removeChild(loadingLayer);
    loadingLayer=null;

    var title=new LTextField();
    title.x=100;
    title.y=100;
    title.size=50;
    title.color="#ffffff";
    title.text="俄罗斯方块";
    backLayer.addChild(title);
    backLayer.graphics.drawRect(1,"#ffffff",[100,300,240,50]);
    var txtClick=new LTextField();
    txtClick.size=30;
    txtClick.color="red";
    txtClick.text="点击页面开始游戏";
    txtClick.x=(LGlobal.width-txtClick.getWidth())/2;
    txtClick.y=310;
    backLayer.addChild(txtClick);
    backLayer.addEventListener(LMouseEvent.MOUSE_UP,gameToStart);
}
function gameToStart(){
    backLayer.die();
    backLayer.removeAllChild();

    bitmap=new LBitmap(new LBitmapData(imglist["backImage"]));
    backLayer.addChild(bitmap);

    var START_X2 = 300, START_Y2 = 110;
    var START_X1 = 20, START_Y1 = 40;

    graphicsMap=new LSprite();
    graphicsMap.graphics.drawRect(1,'#ffffff',[0,0,240,600]);
    graphicsMap.x=START_X1;
    graphicsMap.y=START_Y1;
    backLayer.addChild(graphicsMap);


    nextLayer=new LSprite();
    nextLayer.x=START_X2;nextLayer.y=START_Y2;
    nextLayer.graphics.drawRect(1,'#ffffff',[0,0,80,80]);
    backLayer.addChild(nextLayer);

    pointText=new LTextField();
    pointText.x=320;
    pointText.y=260;
    pointText.size=30;
    pointText.text=0;
    backLayer.addChild(pointText);
    delText=new LTextField();
    delText.x=320;
    delText.y=400;
    delText.size=30;
    delText.text=0;
    backLayer.addChild(delText);

    speedText=new LTextField();
    speedText.x=320;
    speedText.y=540;
    speedText.size=30;
    speedText.text=1;
    backLayer.addChild(speedText);


    bitmapdataList=[
        new LBitmapData(imglist["red"]),
        new LBitmapData(imglist["pink"]),
        new LBitmapData(imglist["green"]),
        new LBitmapData(imglist["blue"])
    ]
    nodeList = [];
    var i, j, nArr, bitmap;
    for (i = 0; i < map.length; i++) {
        nArr = [];
        for (j = 0; j < map[i].length; j++) {
            bitmap = new LBitmap(bitmapdataList[0]);
            bitmap.x =1+ (bitmap.getWidth()+2) *j;
            bitmap.y =1+ (bitmap.getHeight()+2) *i;
            //graphicsMap.addChild(bitmap);
            nArr[j]={
                "index":-1,"value":0,"bitmap":bitmap
            };
        }
        nodeList[i]=nArr;
    }
    
    BOX=new Box();
    getNewBox();
    
    graphicsMap.addEventListener(LEvent.ENTER_FRAME,onframe);
    if(!LGlobal.canTouch){
        LEvent.addEventListener(LGlobal.window,LKeyboardEvent.KEY_DOWN,onkeydown);
        LEvent.addEventListener(LGlobal.window,LKeyboardEvent.KEY_UP,onkeyup);
    }
    backLayer.addEventListener(LMouseEvent.MOUSE_DOWN,touchDown);
    backLayer.addEventListener(LMouseEvent.MOUSE_UP,touchUp);
    backLayer.addEventListener(LMouseEvent.MOUSE_MOVE,touchMove);
}



function getNewBox() {
    if (nextBox == null) {
        nextBox = BOX.getBox();
    }
    nowBox=nextBox;
    pointBox.x=4;
    pointBox.y=-4;
    nextBox=BOX.getBox();

    nextLayer.removeAllChild();
    var i,j,bitmap;
    for(i=0;i<nextBox.length;i++){
        for(j=0;j<=nextBox[i].length;j++){
            if(nextBox[i][j]==0){
                continue;
            }
            bitmap=new LBitmap(bitmapdataList[nextBox[i][j]-1]);
            bitmap.x =1+ (bitmap.getWidth()+2) *j;
            bitmap.y =1+(bitmap.getHeight()+2) *i;
            nextLayer.addChild(bitmap);
            //graphicsMap.addChild(bitmap);
        }
    }
}


function plusBox(){
    var i,j;
    for(i=0;i<nowBox.length;i++){
        for(j=0;j<nowBox[i].length;j++){
            if(i+pointBox.y<0 || i+pointBox.y>=map.length || j+pointBox.x<0 ||j+pointBox.x>=map[0].length){
                continue;
            }
            map[i+pointBox.y][j+pointBox.x]=nowBox[i][j]+map[i+pointBox.y][j+pointBox.x];
            nodeList[i+pointBox.y][j+pointBox.x]["index"]=map[i+pointBox.y][j+pointBox.x]-1;
        }
    }
}

function minusBox(){
    var i,j;
    for(i=0;i<nowBox.length;i++){
        for(j=0;j<nowBox[i].length;j++){
            if(i+pointBox.y<0 || i+pointBox.y>=map.length || j+pointBox.x<0 ||j+pointBox.x>=map[0].length){
                continue;
            }
            map[i+pointBox.y][j+pointBox.x]=map[i+pointBox.y][j+pointBox.x]-nowBox[i][j];
            nodeList[i+pointBox.y][j+pointBox.x]["index"]=map[i+pointBox.y][j+pointBox.x]-1;
        }
    }
}
function checkPlus(nx,ny){
    var i,j;
    for(i=0;i<nowBox.length;i++){
        for(j=0;j<nowBox[i].length;j++){
            if(i+pointBox.y+ny<0){
                continue;
            }
            else if(i+pointBox.y+ny>=map.length||j+pointBox.x+nx<0||j+pointBox.x+nx>=map[0].length){
                if(nowBox[i][j]==0){
                    continue;
                }
                else{
                    return false;
                }
            }
            if(nowBox[i][j]>0 && map[i+pointBox.y+ny][j+pointBox.x+nx]>0){
                return false;
            }
        }
    }
    return true;
}

function onframe(){
    minusBox();
    if(myKey.keyControl !=null && myKey.stepindex--<0){
        //console.log(myKey.keyControl);
        myKey.stepindex=myKey.step;
        switch(myKey.keyControl){
            case "left":
            if(checkPlus(-1,0)){
                pointBox.x-=1;
                if(LGlobal.canTouch){
                    myKey.keyControl=null;
                    myKey.istouchMove=true;
                    myKey.touchX=0;
                }
            }
            break;
            case "right":
            if(checkPlus(1,0)){
                pointBox.x+=1;
                if(LGlobal.canTouch){
                    myKey.keyControl=null;
                    myKey.istouchMove=true;
                    myKey.touchX=0;
                }
            }
            break;
            case "down":
            if(checkPlus(0,1)){
                pointBox.y+=1;
                if(LGlobal.canTouch){
                    myKey.keyControl=null;
                    myKey.istouchMove=true;
                    myKey.touchY=0;
                }
            }
            break;
            case "up":
            changeBox();
            if(LGlobal.canTouch){
                    myKey.keyControl=null;
                    myKey.stepindex=0;
                }
            break;
        }
    }
    if(speedIndex++>speed){
        speedIndex=0;
        if(checkPlus(0,1)){
            pointBox.y++;
        }
        else{
            plusBox();
            removeBox();
            if(pointBox.y<0){
                gameOver();
                return;
            }
            getNewBox();
        }
    }
    plusBox();
    drawMap();
}

function onkeyup(event){
    if(myKey.keyControl !=null) return;
    if(event.keyCode==37){
        myKey.keyControl="left";
    }
    if(event.keyCode==38){
        myKey.keyControl="up";
    }
    if(event.keyCode==39){
        myKey.keyControl="right";
    }
    if(event.keyCode==40){
        myKey.keyControl="down";
    }
}
function onkeydown(event){
    myKey.keyControl=null;
    myKey.stepindex=0;
}
function touchDown(event){
    myKey.isTouchDown=true;
    myKey.touchX=Math.floor(event.selfX/20);
    myKey.touchY=Math.floor(event.selfY/20);
    myKey.istouchMove=false;
    myKey.keyControl=null;
    myKey.stepindex=0;
}
function touchUp(event){
    //if(!myKey.istouchMove) return;
    myKey.isTouchDown=false;
    if(!myKey.istouchMove) myKey.keyControl="up";
}
function touchMove(event){
    if(!myKey.isTouchDown) return;
    myKey.flag=0;
    var mx=Math.floor(event.selfX/20);
    if(myKey.touchX==0){
        myKey.touchX=mx;
        myKey.touchY=Math.floor(event.selfY/20);
    }
    if(mx>myKey.touchX){
        myKey.keyControl="right";
    }
    if(mx<myKey.touchX){
        myKey.keyControl="left";
    }
    if(Math.floor(event.selfY/20)>myKey.touchY){
        myKey.keyControl="down";
    }
}
function changeBox(){
    var saveBox=nowBox;
    nowBox=[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
    var i,j;
    for(i=0;i<saveBox.length;i++){
        for(j=0;j<saveBox[0].length;j++){
            nowBox[i][j]=saveBox[(3-j)][i];
        }
        if(!checkPlus(0,0)){
            nowBox=saveBox;
        }
    }
}
function drawMap(){
    var i,j;var bitmap;
    graphicsMap.removeAllChild();
    for(i=0;i<map.length;i++){
        for(j=0;j<map[0].length;j++){
            if(nodeList[i][j]["index"]>=0){
                nodeList[i][j]["bitmap"].bitmapData=bitmapdataList[nodeList[i][j]["index"]];
            bitmap = new LBitmap(bitmapdataList[nodeList[i][j]["index"]]);
            bitmap.x =1+j*20;
            bitmap.y =i*20;
            graphicsMap.addChild(bitmap);
            }
            else nodeList[i][j]["bitmap"].bitmapData=null;
        }
        
    }
}

function moveLine(line){
    var i,j;
    for(i=line;i>1;i--){
        for(j=0;j<map[0].length;j++){
            map[i][j]=map[i-1][j];
            nodeList[i][j].index=nodeList[i-1][j].index;
        }
    }
    for(j=0;j<map[0].length;j++){
        map[0][j]=0;
        nodeList[0][j].index=-1;
    }
}
function removeBox(){
    var i,j,count=0;
    for(i=pointBox.y;i<(pointBox.y+4);i++){
        if(i<0 || i>=map.length) continue;
        for(j=0;j<map[0].length;j++){
            if(map[i][j]==0){
                break;
            }
            if(j==map[0].length-1){
                moveLine(i);
                count++;
            }
        }
    }
        if(count==0) return;
        dels+=count;
        if(count==1) point+=1;
        if(count==2) point+=3;
        if(count==3) point+=6;
        if(count==4) point+=10;
        if(speed>5 && dels/10>=(speedMax-speed+5)/5){
            speed--;
        }
        showText();
}

function showText(){
    pointText.text=point;
    delText.text=dels;
    speedText.text=speedMax-speed+1;
}
function gameOver(){
    backLayer.die();
    var txt=new LTextField();
    txt.color="#ff0000";
    txt.size=40;
    txt.text="GAME OVER!";
    txt.x=(LGlobal.width-txt.getWidth())*0.5;
    txt.y=200;
    backLayer.addChild(txt);
}





function Box() {
    var self = this;
    self.box1 = [[0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]];
    self.box2 = [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]];
    self.box3 = [[0, 0, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]];
    self.box4 = [[0, 1, 1, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]];
    self.box5 = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]];
    self.box6 = [[0, 0, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 0]];
    self.box7 = [[0, 0, 0, 0], [0, 0, 1, 0], [0, 1, 1, 0], [0, 1, 0, 0]];
    self.box = [self.box1, self.box2, self.box3, self.box4, self.box5, self.box6, self.box7];
}
Box.prototype = {
    getBox: function () {
        var self = this;
        var num = 7 * Math.random();
        var index = parseInt(num);
        var result = [];
        var colorIndex = 1 + Math.floor(Math.random() * 4);
        var i, j;
        for (i = 0; i < 4; i++) {
            var child = [];
            for (j = 0; j < 4; j++) {
                child[j] = self.box[index][i][j] * colorIndex;
            }
            result[i] = child;
        }
        return result;
    }
}
