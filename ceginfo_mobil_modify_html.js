const c_html_body = document.querySelector("body");

function reset_html (){
    let v_menuline_comp = document.querySelector("#menu_line").innerHTML;
    let v_company_title = document.querySelector("#compinfo_title").innerHTML;
    let v_is_mobile = window.matchMedia('(max-width: 820px) and (min-width: 300px)').matches;

    window.addEventListener('resize', function(event) {
        let v_width = window.innerWidth;
        if (v_width < 820){
            v_is_mobile = false;
        }
        else {
            v_is_mobile = false;
        }
    });
    if(v_is_mobile){
        document.querySelector("#menu_line").innerHTML = v_menuline_comp.replace(" Inc.", "");
        document.querySelector("#compinfo_title").innerHTML = v_company_title.replace("</h1>", "</h1><br>");
    }    
}

reset_html();