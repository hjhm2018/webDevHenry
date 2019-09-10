
function callDay(){
    var today = new Date();

    var currentHour = today.getHours();

    var greeting;

    if(currentHour >18)
    document.getElementById('output').innerHTML = "Good Evening";
    else if(currentHour>12)
    document.getElementById('output').innerHTML = "Good Afternoon";
    else if(currentHour>0)
    document.getElementById('output').innerHTML = "Good Morning";
    else 
    document.getElementById('output').innerHTML = "Welcome";
}

callDay();