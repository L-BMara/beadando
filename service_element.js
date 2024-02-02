function setDarkLight ()
{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector("body").innerHTML=document.querySelector("body").innerHTML.replaceAll('fill="#121215"', 'fill="white"');
        document.querySelector("body").style.background="linear-gradient(117deg, #121215 0%, #262629 100%)";
    }
    else{
        document.querySelector("body").innerHTML=document.querySelector("body").innerHTML.replaceAll('fill="white"', 'fill="#121215"');
        document.querySelector("body").style.background="linear-gradient(117deg, #EEEEF0 0%, #CCCCD8 100%)";
    }   
}


function reSetFillColor(){

    if (window.matchMedia('(prefers-color-scheme: dark)'))
    {
        document.querySelector("body").innerHTML=document.querySelector("body").innerHTML.replaceAll('fill="#121215"', 'fill="white"');
        document.querySelector("body").style.background="linear-gradient(117deg, #121215 0%, #262629 100%)";
    }
    else{
        document.querySelector("body").innerHTML=document.querySelector("body").innerHTML.replaceAll('fill="white"', 'fill="#121215"');
        document.querySelector("body").style.background="linear-gradient(117deg, #EEEEF0 0%, #CCCCD8 100%)";
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        setDarkLight();
    });
}

reSetFillColor();