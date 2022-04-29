/*var movie = {
    title:"刻在你心底的名字",
    maker:"氧氣電影",
    duration:114,
    actors:[
        {
            name:"陳昊森",
            age:24,
            is_male:true
        },
        {
            name:"曾敬樺",
            age:23,
            is_male:true
        }
    ]
};

document.write(movie.actors[0].name);
*/
//迴圈while
/*var i = 1;
while(i<=5){
    document.write(i);
    document.write("<br/>");
    i=i+1;
}
*/

//密碼檢驗程式
/*var password = 500437;
var input;
var entry_count = 0;
var entry_limit = 3;
var out_of_limit = false;

while(password!=input && !out_of_limit){
    entry_count++;
    if(entry_count<=entry_limit){
        input = prompt("請輸入密碼");
    }
    else{
        out_of_limit = true;
    }
}

if(out_of_limit){
    alert("超過輸入次數");
}
else{
    alert("登入成功");
}*/
//for迴圈
/*while全圈寫法原本是
var i =0;
while(i<10){
    document.write(i)
    document.write("<br/>");
    i++;
}*/
/*var friends = ["小白","小黃","小黑"];
for(var i = 0; i<friends.length; i++){
    document.write(friends[i]);
    document.write("<br/>");
}*/
