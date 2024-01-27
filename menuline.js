/*aktuális oldal url-jét kiszedjük, ez alapján visszatérünk egy szövegkiemeléssel arra a linkre ahol épp vagyunk*/
function find_actual_url(){

    let v_url = window.location.href; 

    if (v_url.search("ceginformacio"))
    {
        r_html = "Céginformáció";
    }
    else if (v_url.search("szolgaltatasok"))
    {
        r_html = "Szolgáltatásaink";
    }
    else if (v_url.search("kapcsolat"))
    {
        r_html = "Kapcsolat";
    }


    return r_html
}

function set_dark_light (p_element)
{
    /*node ellenőrzés. Sajnos valamiért nem veszi fel a background colort css-ből csak js-ből sytle-al hívva :/ */
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector(p_element).style.background="linear-gradient(117deg, #121215 0%, #262629 100%)";
    }
    else{
        document.querySelector(p_element).style.background="linear-gradient(117deg, #EEEEF0 0%, #CCCCD8 100%)";
    }   
}

function create_menu_line (){
    let v_html = document.querySelector("body");
    let v_menu_div = document.createElement("DIV");
    let v_paragraph = document.createElement("p");
    let v_nav = document.createElement("NAV");
    let v_ceg_a = document.createElement('a');
    let v_szolg_a = document.createElement('a');
    let v_kapcs_a = document.createElement('a');
    let v_searh_res = find_actual_url();

    v_menu_div.id = "menu_line"
    v_html.appendChild(v_menu_div);
    document.getElementById('menu_line').classList.add("menu_line");

    v_paragraph.id = "company"
    v_menu_div.appendChild(v_paragraph);
    
    v_paragraph.textContent = "ACME Inc."

    v_nav.id = "navig_id";
    v_menu_div.appendChild(v_nav);
    document.getElementById('navig_id').classList.add("menuline_navig");

    set_dark_light("body");
    /*váltás miatt event listener így élőben csinálja :)*/
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        set_dark_light("body");
    });

    v_nav.append(v_ceg_a, v_szolg_a, v_kapcs_a);

    v_ceg_a.setAttribute('href', "ceginformacio.html");
    v_ceg_a.textContent = "Céginformáció"
    v_ceg_a.id="compinfo_nav";

    v_szolg_a.setAttribute('href', "szolgaltatasok.html");
    v_szolg_a.textContent = "Szolgáltatásaink"
    v_szolg_a.id="support_nav";

    v_kapcs_a.setAttribute('href', "kapcsolat.html");
    v_kapcs_a.textContent = "Kapcsolat";
    v_kapcs_a.id="connect_nav";

    /*kiemeli azt ahol épp állunk*/
    if(v_searh_res.search("Céginformáció")===0)
    {
        document.getElementById("compinfo_nav").style.fontWeight = "700"; 
    }
    else if(v_searh_res.search("Szolgáltatásaink")===0)
    {
        document.getElementById("support_nav").style.fontWeight = "700"; 
    }
    else if(v_searh_res.search("Kapcsolat")===0)
    {
        document.getElementById("connect_nav").style.fontWeight = "700"; 
    }
}


create_menu_line();