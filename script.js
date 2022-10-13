function openNav()
{
        document.getElementById("sidebar").style.width = "125px";
       
}
function closeNav()
{
    document.getElementById("sidebar").style.width = "0px";
}


function alerts()
{
    document.getElementById("item1").style.display = "block";
    document.getElementById("item2").style.display = "none";
}
function crumbs()
{
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "block";
}
function buttons()
{
    document.getElementById("item1").style.display = "none";
    document.getElementById("item2").style.display = "none";
    document.getElementById("item3").style.display = "block";

    

}

function navbar()
{
    document.getElementById("item1").style.display = "none";
document.getElementById("item2").style.display = "none";
document.getElementById("item3").style.display = "none";
document.getElementById("item4").style.display = "block";
}