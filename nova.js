// Nova.js

  function nova.html.getCurrentTime() {
   var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ms = d.getMilliseconds();
  
    document.write(document.body.innerHTML = h+":"+m+":"+s+":"+ms);
}

 function nova.html.getLocation() {
  var b = getElementById("geo")
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation);
	}else{
   b.innerHTML = "Location is not used";
}

  function maths.nova.switcher(a,b) {
   var c = a * b;
   var d = c / a;
   if(a > b){
    var 1 = Math.sqrt(a);
   } else {
     return a;
	}
   if(c > a & b){
	var 2 = Math.sqrt(c);
   } else {
	return c;
	}
   if(d > a & c){
	var 3 = Math.sqrt(d);
   } else {
	return d;
	}
   if(b > c & a){
	var 4 = Math.sqrt(b);
    } else {
	return b;
	}
   if(a & b > c & d){
	document.write(1,4);
	document.write("Those are your numbers");
    } else {
	document.write(2,3);
	document.write("These are your numbers");
	}
}