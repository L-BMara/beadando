function create_footer ()
{
    let v_html = document.querySelector("body");
    let v_footer = document.createElement("FOOTER");
    let v_p = document.createElement("p");

    v_footer.id="company_footer";
    v_html.appendChild(v_footer);

    document.getElementById('company_footer').classList.add("company_footer");
    v_footer.appendChild(v_p);
    v_p.textContent="ACME";
}


create_footer();