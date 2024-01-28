const c_html_body = document.querySelector("body");

function reset_html (){
    let v_menuline_comp = document.querySelector("#menu_line").innerHTML;
    let v_company_title = document.querySelector("#ceginfo_title").innerHTML;

    document.querySelector("#menu_line").innerHTML = v_menuline_comp.replace(" Inc.", "");
   
    document.querySelector("#ceginfo_title").innerHTML = v_company_title.replace("</h1>", "</h1><br>");

}

reset_html();