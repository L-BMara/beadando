/*fix értékek*/
const c_mobilwidth = 1185;
const c_weight = "700";
const c_norm_weight = "100";


/*aktuális oldal url-jét kiszedjük, ez alapján visszatérünk egy szövegkiemeléssel arra a linkre ahol épp vagyunk*/
function findActualUrl(){

    let v_url = window.location.href; 

    if (v_url.search("ceginformacio") != -1)
    {
        r_html = "Céginformáció";
    }
    else if (v_url.search("szolgaltatasok") != -1)
    {
        r_html = "Szolgáltatásaink";
    }
    else if (v_url.search("kapcsolat") != -1)
    {
        r_html = "Kapcsolat";
    }
    return r_html
}

function setDarkLight (p_element)
{
    /*node ellenőrzés. Sajnos valamiért nem veszi fel a background colort css-ből csak js-ből sytle-al hívva :/ */
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector(p_element).style.background="linear-gradient(117deg, #121215 0%, #262629 100%)";
    }
    else{
        document.querySelector(p_element).style.background="linear-gradient(117deg, #EEEEF0 0%, #CCCCD8 100%)";
    }   
}

function strongLink(p_res, p_is_mobile)
{
    console.log(p_is_mobile);
    if(p_res.search("Céginformáció") != -1 && !p_is_mobile)
    {
        document.getElementById("compinfo_nav").style.fontWeight = c_weight; 
    }
    else if(p_res.search("Szolgáltatásaink") != -1 && !p_is_mobile)
    {
        document.getElementById("support_nav").style.fontWeight = c_weight; 
    }
    else if(p_res.search("Kapcsolat") != -1 && !p_is_mobile)
    {
        document.getElementById("connect_nav").style.fontWeight = c_weight; 
    }
    else{
        document.getElementById("compinfo_nav").style.fontWeight = c_norm_weight; 
        document.getElementById("support_nav").style.fontWeight = c_norm_weight; 
        document.getElementById("connect_nav").style.fontWeight = c_norm_weight; 
    }
}

function createMenuLine (){
    let v_html = document.querySelector("body");
    let v_menu_div = document.createElement("DIV");
    let v_paragraph = document.createElement("p");
    let v_nav = document.createElement("NAV");
    let v_comp_a = document.createElement('a');
    let v_serv_a = document.createElement('a');
    let v_conn_a = document.createElement('a');
    let v_home_a = document.createElement('a');
    let v_searh_res = findActualUrl();
    let v_is_mobile = window.matchMedia('(max-width: ' + c_mobilwidth + 'px) and (min-width: 300px)').matches;

    v_menu_div.id = "menu_line"
    v_html.appendChild(v_menu_div);
    document.getElementById('menu_line').classList.add("menu_line");

    //v_paragraph.id = "company"
    //v_menu_div.append(v_paragraph, v_nav);
    
    //v_paragraph.textContent = "ACME Inc.";
    //v_paragraph.appendChild(v_home_a);

    v_menu_div.append(v_home_a, v_nav);
    v_nav.id = "navig_id";

    v_home_a.setAttribute('href', "index.html");
    v_home_a.id="home";
    //document.getElementById("home").innerHTML = '<i class="fa fa-home"></i>';
    v_home_a.text = "ACME Inc.";

    setDarkLight("body");
    /*váltás miatt event listener így élőben csinálja :)*/
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        setDarkLight("body");
    });

    window.addEventListener('resize', function(event) {
        let v_width = window.innerWidth;

        if (v_width <= c_mobilwidth){
            v_is_mobile = true;
        }
        else {
            v_is_mobile = false;
        }
        strongLink(v_searh_res, v_is_mobile);
    });

    v_nav.append(v_comp_a, v_serv_a, v_conn_a);

    v_comp_a.setAttribute('href', "ceginformacio.html");
    v_comp_a.textContent = "Céginformáció"
    v_comp_a.id="compinfo_nav";

    v_serv_a.setAttribute('href', "szolgaltatasok.html");
    v_serv_a.textContent = "Szolgáltatásaink"
    v_serv_a.id="support_nav";

    v_conn_a.setAttribute('href', "kapcsolat.html");
    v_conn_a.textContent = "Kapcsolat";
    v_conn_a.id="connect_nav";

    /*kiemeli azt ahol épp állunk*/
    strongLink(v_searh_res, v_is_mobile)
}


createMenuLine();