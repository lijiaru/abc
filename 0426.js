/*var hungry = true;
if(hungry){
    document.write("我就去吃飯");
}
*/
/*var rainy = true;
if(rainy){
    document.write("我就開車去上班");
}
else{
    document.write("我就走路去上班");
}
*/
/*var score = 40;
if(score==100){
    document.write("我就給你1000元");
}
else if(score>=80){
    document.write("我就給你500元");
}
else if(score>=60){
    document.write("我就給你300元");
}
else{
    document.write("你就給我300元");
}*/
/*var score = 100;
var rainy = true;
if(score==100 && rainy){
    document.write("我就給你1000元");
}
else{
    document.write("你就給我100元");
}
*/
//如果你考100分或今天下雨,我給你1000元,否則你給我100元
/*var score = 90;
var rainy = true;
if(score==100 || rainy){
    document.write("我給你1000元");
}
else{
    document.write("你給我100元");
}*/
//如果你考100分或今天沒有下雨,我給你1000元,否則你給我100元
/*var score = 90;
var rainy = false;
if(score==100 || !rainy){
    document.write("我給你1000元");
}
else{
    document.write("你給我100元");
}
*/
/*function max_num(num1,num2,num3){
    if(num1>=num2 &&num1>=num3){
        return num1;
    }
    else if(num2>=num1 && num2>=num3){
        return num2;
    }
    else{
        return num3;
    }
}
document.write(max_num(9,70,5));
*/
//物件
var person = {
    name:"小儒",
    age:33,
    is_male:false
};

document.write(person.is_male);