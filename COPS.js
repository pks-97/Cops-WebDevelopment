var clicks=0;//a variable for storing the current value of the number of clicks and it is initialised as zero
var id=document.querySelector("#butt1");//a variable for extracting the html element which contains the id of button1(butt1)
//a throttle function to restrict the user to increase the value of the number of clicks for 2 seconds to stop sending unnecessary traffic
var throttle = function(func, limit) {
  var inThrottle = undefined;
  return function() {
    var args = arguments,
      context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      return setTimeout(function() {
        return inThrottle = false;
      }, limit);
    }
  };
};
//an eventlistener function which fires when a mouse is clicked on it
id.addEventListener("click",throttle(function(){
    var b1=document.querySelector("#cliks");//a variable for extracting the html element which contains the id of the span which is used to display the number of clicks
    clicks++;//incrementing the number of clicks the user has done
    //in the next line the textcontent of the span which displays the number of clicks on the webpage
   b1.textContent=clicks+"";},2000));//a value of 2000ms is passed as an arguement to the throttle function