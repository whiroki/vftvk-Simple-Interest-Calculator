function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    
    if( document.getElementById("principal").value < 1 ) {
            alert( "Please provide your name!" );
            document.getElementById("principal").focus() ;
            return false;
        
    document.getElementById("result").innerHTML ="\<br\>\<br\>If you deposit <mark>"+principal+"</mark><br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>\<br\>";

}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}

