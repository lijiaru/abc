/*var friends = ["小黃","小藍","小綠","小紫"];
for(var q=0; q<friends.length; q++){
    document.write(friends[q]);
    document.write("<br/>");
}*/
//製作一個問答程式
/*var question = [
    {
        prompt:"香蕉是什麼顏色?\n(a)紅色\n(b)綠色\n(c)黃色",
        answer:"c"
    },
    {
        prompt:"草莓是什麼顏色?\n(a)紅色\n(b)紫\n(c)黃",
        answer:"a"
    },
    {
        prompt:"1公尺等於幾公分?\n(a)1\n(b)10\n(c)100",
        answer:"c"
    }
]
var score = 0;
for(var i =0;i<question.length;i++){
    var input=prompt(question[i].prompt);
    if(input==question[i].answer){
        score++;
        alert("答對了!");
    }
    else{
        alert("答錯了!");
    }
}
alert("總共答對了"+score+"題!");*/
/*二維陣列及巢狀迴圈
var number = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
];*/
/*巢狀迴圈
for(var i = 0;i<4;i++){
    for(var j =0;j<3;j++){
        document.write("i:"+i+",j:"+j);
        document.write("<br/>");
    }
}*/
/*巢狀迴圈跑二維陣列
for(var i = 0;i<number.length;i++){
    for(var j =0;j<number[i].length;j++){
        document.write(number[i][j]);
    }
    document.write("<br/>");
}*/
/*class phone {
    constructor(number,year,is_waterproof){
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof;
    }
    phone_age(){
        return 2021 - this.year;
    }
}
var phone1 = new phone("123",2020,false);
var phone2 = new phone("456",2018,false);
document.write(phone1.phone_age());*/