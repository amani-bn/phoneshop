'use strict';
alert('welcome to wishes shop');
var userName=prompt('enter ur name');

while (userName === '') {
    userName = prompt('enter ur name');
}
var userPhone=prompt('enter ur phone');
var userPrice=prompt('enter ur price');
displayuserinfo(userName,userPhone,userPrice);
function displayuserinfo(uname,uphone,uprice){
    alert('welcome ... ' +uname+ ' ! your phone number is ' + uphone+'   ! and this ur price ' +uprice +'$');

}

// var name = prompt('enter ur name to save it in store data base ');
// var phone = prompt('enter ur phone to save it in store data base ');
// var price = prompt('enter ur price');
// document.write('<h1>' + 'ur name is ' + name + '</h1>');
// document.write('<h1>' + 'ur phone is ' + phone + '</h1>');
// document.write('<h1>' + 'ur price is ' + price + '</h1>');



typeofphone(userPrice);

function typeofphone(userPrice){

    if (userPrice > 500) {
        alert('u buy iphone');
        alert('u take extra points in next time later on ');
    }
    else {
        alert('u buy samsung');
    }
    var start = prompt('Enter the number of pics');
    for (var i = 1; i <= start; i++) {
        document.write(i + '<img src="https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg">');
        
    }
    
}


