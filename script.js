function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="\<br\>\<br\>If you deposit <mark>"+principal+"</mark><br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>\<br\>"

    // Get the value of the input field with id="numb"
    let x = document.getElementById("principal").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 ) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("result").innerHTML = text;
    }


}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}