import { bannerlogin } from "../../componentes/bannerlogin/bannerlogin.js";

export function login() {
    let div = document.createElement('div');
    div.className = "div_banner2";

    // Título
    let h2 = document.createElement('h2');
    h2.textContent = "Geeta.";
    h2.className = "titulo";
    div.appendChild(h2);

    // Párrafo 1 en negrita
    let p1 = document.createElement('p');
    p1.className = "p1";
    p1.innerHTML = "Create your fashion in your own way";
    div.appendChild(p1);

    // Párrafo 2 normal
    let p2 = document.createElement('p');
    p2.className = "p2";
    p2.textContent = "Each men and women has their own style, Geeta help you to create your unique style. ";
    div.appendChild(p2);

    // Botón de Login
    let loginBtn = document.createElement('a');
    loginBtn.textContent = "Login";
    loginBtn.className = "btn-login";
    loginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        div.classList.add("ocultar");
        document.body.appendChild(bannerlogin());
    });
    div.appendChild(loginBtn);

    // Span con el texto OR en negrita 
    let spanOr = document.createElement('span');
    spanOr.innerHTML = "OR";
    spanOr.className = "span-or";
    div.appendChild(spanOr);

    // Botón Register
    let registerBtn = document.createElement('button');
    registerBtn.textContent = "Register >";
    registerBtn.className = "btn-register";
    div.appendChild(registerBtn);

    return div;
}

// Agrega al body
document.body.appendChild(login());
