export function banner(){
    let div = document.createElement('div');
    div.className = "div_banner";

    let span = document.createElement('span');
    span.textContent = "Geeta.";
    div.appendChild(span);

    let aBoton = document.createElement('a');
    aBoton.href = "pages/login/login.html"
    aBoton.className = "a_boton";
    aBoton.textContent = "SHOW NOW";
    div.appendChild(aBoton);

    return div;
}