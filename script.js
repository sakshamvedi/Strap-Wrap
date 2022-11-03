function openNav()
{
        document.getElementById("sidebar").style.width = "125px";
       
}
function closeNav()
{
    document.getElementById("sidebar").style.width = "0px";
}


function submit()
{
    
    if(document.getElementById("form_data1").value != document.getElementById("form_data2").value )
    {
       document.getElementById("straps").style.display = "block";
    }
    else
    {
        document.getElementById("straps").style.display = "none";
    }

}



function alerts()
{
    document.getElementById("item1").style.display = "block";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "none";
document.getElementById("item4").style.display = "none";
}
function crumbs()
{
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "block";
    document.getElementById("item3").style.display = "none";
document.getElementById("item4").style.display = "none";
}
function buttons()
{
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "block";
    document.getElementById("item4").style.display = "none";

    

}

function navbar()
{
    document.getElementById("item1").style.display = "none";
document.getElementById("item2").style.display = "none";
document.getElementById("item3").style.display = "none";
document.getElementById("item4").style.display = "block";

}


function formly()
{
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "none";
    document.getElementById("item4").style.display = "none";
    document.getElementById("item5").style.display = "block";
    document.getElementById("item6").style.display = "none";

}

function card()
{
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "none";
    document.getElementById("item4").style.display = "none";
    document.getElementById("item5").style.display = "none";
    document.getElementById("item6").style.display = "block";
}



function avatars()
{
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "none";
    document.getElementById("item4").style.display = "none";
    document.getElementById("item5").style.display = "none";
    document.getElementById("item6").style.display = "none";
    document.getElementById("item7").style.display = "block";
}
