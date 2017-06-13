var link = decodeURIComponent(window.location.href);
console.log(link);
var params = link.substr(link.indexOf("?")+1);
var arr = params.split(/=|&/);
console.log(arr);
$("p.fullname").append(arr[1].replace(/[+]/g, " "));
$("p.password").append(arr[3].replace(/[+]/g, " "));
$("p.email").append(arr[5].replace(/[+]/g, " "));
$("p.phoneNumber").append(arr[7].replace(/[+]/g, " "));
$(".address").append(arr[9].replace(/[+]/g, " "));
$(".gender").append(arr[10].replace(/[+]/g, " "));

