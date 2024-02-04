const c_max_widt = 1185; 
const c_html_body = document.querySelector("body");
const c_comp = "ACME Inc.";
const c_replace = " Inc.";
const c_res_replace = "ACME";

function replaceInc(p_ismobile){
    let v_menuline_comp = document.querySelector("#menu_line").innerHTML;
    if(p_ismobile){
        document.querySelector("#menu_line").innerHTML = v_menuline_comp.replace(c_replace, "");
    } 
    else if(!p_ismobile && document.querySelector("#menu_line").innerHTML.search(c_replace)===-1){
        document.querySelector("#menu_line").innerHTML = v_menuline_comp.replace(c_res_replace, c_comp);     
    }
}

function reset_html (){
    let v_is_mobile = window.matchMedia('(max-width: ' + c_max_widt + 'px) and (min-width: 300px)').matches;

    window.addEventListener('resize', function(event) {
        let v_width = window.innerWidth;
        if (v_width < c_max_widt){
            v_is_mobile = true;
        }
        else {
            v_is_mobile = false;
        }
        replaceInc(v_is_mobile);
    });

    replaceInc(v_is_mobile);
}

reset_html();