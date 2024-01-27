function create_footer ()
{
    let v_html = document.querySelector("body");
    let v_footer = document.createElement("FOOTER");

    v_footer.id="company_footer";
    v_html.appendChild(v_footer);

    document.getElementById('company_footer').classList.add("company_footer");
    v_footer.textContent="ACME";

}


create_footer();