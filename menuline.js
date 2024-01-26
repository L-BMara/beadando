/*aktuális oldal url-jét kiszedjük, ez alapján visszatérünk egy szövegkiemeléssel arra a linkre ahol épp vagyunk*/
function find_actual_url(){

    let v_url = window.location.href; 
    let r_html = "<b>";

    if (v_url.search("ceginformacio"))
    {
        r_html = r_html + "Céginformáció";
    }
    else if (v_url.search("szolgaltatasok"))
    {
        r_html = r_html + "Szolgáltatásaink";
    }
    else if (v_url.search("kapcsolat"))
    {
        r_html = r_html + "Kapcsolat";
    }
    return r_html = r_html + "</b>"
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

    v_nav.append(v_ceg_a, v_szolg_a, v_kapcs_a);

    v_ceg_a.setAttribute('href', "ceginformacio.html");
    v_ceg_a.textContent = "Céginformáció"

    v_szolg_a.setAttribute('href', "szolgaltatasok.html");
    v_szolg_a.textContent = "Szolgáltatásaink"

    v_kapcs_a.setAttribute('href', "kapcsolat.html");
    v_kapcs_a.textContent = "Kapcsolat";

    /*kiemeli azt ahol épp állunk*/
    if (v_searh_res.search("Céginformáció"))
    {
        document.querySelector("#navig_id").innerHTML = document.querySelector("#navig_id").innerHTML.replace("Céginformáció", v_searh_res);
    }
    else if (v_searh_res.search("Szolgáltatásaink"))
    {
        document.querySelector("#navig_id").innerHTML = document.querySelector("#navig_id").innerHTML.replace("Szolgáltatásaink", v_searh_res);
    }
    else if (v_searh_res.search("Kapcsolat"))
    {
        document.querySelector("#navig_id").innerHTML = document.querySelector("#navig_id").innerHTML.replace("Kapcsolat", v_searh_res);
    }
}


create_menu_line();