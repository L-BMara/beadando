const c_orig_widht = 450;
const c_orig_hieight = 905;
const c_modified_widht = 311;
const c_modified_height = 400;


function resetMapSize (p_id, p_ismobile){
    let v_html = document.querySelector("#" + p_id);

    if(p_ismobile){
        document.querySelector("#" + p_id).innerHTML = v_html.innerHTML.replace('width="' + c_orig_widht + '"', 'width="' + c_modified_widht + '"');
        document.querySelector("#" + p_id).innerHTML = v_html.innerHTML.replace('height="' + c_orig_hieight + '"', 'height="' + c_modified_height + '"');
    }    
    else{
        document.querySelector("#" + p_id).innerHTML = v_html.innerHTML.replace('width="' + c_modified_widht + '"', 'width="' + c_orig_widht + '"');
        document.querySelector("#" + p_id).innerHTML = v_html.innerHTML.replace('height="' + c_modified_height + '"', 'height="' + c_orig_hieight + '"');
    }
}

function resetHtml (p_id){
    let v_is_mobile = window.matchMedia('(max-width: ' + c_max_widt + 'px) and (min-width: 300px)').matches;

    window.addEventListener('resize', function(event) {
        let v_width = window.innerWidth;
        if (v_width < c_max_widt){
            v_is_mobile = true;
        }
        else {
            v_is_mobile = false;
        }
        resetMapSize(p_id, v_is_mobile);
    });

    resetMapSize(p_id, v_is_mobile);
}

resetHtml("map");