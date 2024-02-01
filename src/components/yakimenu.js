class YakiMenu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
    shadow.appendChild(this.script());
  }

  build() {
    const menu = document.createElement("div");
    menu.className = "menu";
    const container = document.createElement("div");
    container.className = "container";

    const logo = document.createElement("div");
    logo.className = "logo";
    const submenu = document.createElement("div");
    submenu.className = "submenu";

    //logo
    const logo_img = document.createElement("img");
    logo_img.className = "logo-img";
    logo_img.src = "../img/logo.jpg";
    const logo_title = document.createElement("h1");
    logo_title.className = "logo-title";
    logo_title.textContent = "YakiSearch";
    logo.appendChild(logo_img);
    logo.appendChild(logo_title);

    // links menu
    const home_link = document.createElement("a");
    home_link.textContent = "Home";
    home_link.href = "/";
    const recipes_link = document.createElement("a");
    recipes_link.textContent = "Recipes";
    recipes_link.href = "/recipes";
    const yakibot_link = document.createElement("a");
    yakibot_link.textContent = "YakiBot";
    yakibot_link.href = "/yakibot";
    const about_link = document.createElement("a");
    about_link.textContent = "About";
    about_link.href = "/about";
    [home_link, recipes_link, yakibot_link, about_link].forEach((link) => {
      link.classList.add("menu-link");
    });
    submenu.appendChild(home_link);
    submenu.appendChild(recipes_link);
    submenu.appendChild(yakibot_link);
    submenu.appendChild(about_link);

    // menu hamburguer
    const hamburger_menu = document.createElement("div");
    hamburger_menu.className = "hamb-menu";
    hamburger_menu.id = "hamb-menu";
    const hamb_slice_1 = document.createElement("div");
    const hamb_slice_2 = document.createElement("div");
    const hamb_slice_3 = document.createElement("div");
    hamb_slice_1.className = "hamb-slice";
    hamb_slice_2.className = "hamb-slice";
    hamb_slice_3.className = "hamb-slice";
    hamburger_menu.appendChild(hamb_slice_1);
    hamburger_menu.appendChild(hamb_slice_2);
    hamburger_menu.appendChild(hamb_slice_3);

    const hamb_menu_open = document.createElement("div");
    hamb_menu_open.className = "hamb-menu-open";
    hamb_menu_open.id = "sideNav";
    // links menu
    const hamb_close_x = document.createElement("a");
    hamb_close_x.className = "closebtn";
    hamb_close_x.innerHTML = `&times;`;
    hamb_close_x.id = "close-hamb";
    const hamb_home_link = document.createElement("a");
    hamb_home_link.textContent = "Home";
    hamb_home_link.href = "/";
    const hamb_recipes_link = document.createElement("a");
    hamb_recipes_link.textContent = "Recipes";
    hamb_recipes_link.href = "/recipes";
    const hamb_yakibot_link = document.createElement("a");
    hamb_yakibot_link.textContent = "YakiBot";
    hamb_yakibot_link.href = "/yakibot";
    const hamb_about_link = document.createElement("a");
    hamb_about_link.textContent = "About";
    hamb_about_link.href = "/about";
    [
      hamb_home_link,
      hamb_recipes_link,
      hamb_yakibot_link,
      hamb_about_link,
    ].forEach((link) => {
      link.classList.add("hamb-menu-link");
    });
    hamb_menu_open.appendChild(hamb_close_x);
    hamb_menu_open.appendChild(hamb_home_link);
    hamb_menu_open.appendChild(hamb_recipes_link);
    hamb_menu_open.appendChild(hamb_yakibot_link);
    hamb_menu_open.appendChild(hamb_about_link);

    container.appendChild(logo);
    container.appendChild(submenu);
    container.appendChild(hamburger_menu);
    container.appendChild(hamb_menu_open);

    menu.appendChild(container);
    return menu;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `@font-face {
        font-family: 'Poppins';
        src: url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    }
    body {
        font-family: 'Poppins', sans-serif;
    }
    
    .menu {
        overflow: hidden;
        background-color: #333;
        position: fixed;
        top: 0;
        left:0;
        width: 100%;
        padding: .5rem;
    }

    .hamb-menu-open {
        display: none;
        flex-direction: column;
        box-shadow: 0 2rem 2rem 0 rgba(0, 0, 0, 0.5); 
        position: fixed;
        z-index: 1;
        background-color: #333;
        top: 0rem;
        bottom: 0rem;
        left: 10rem;
        right: 0rem;
        width: 0%;
        height: 100%;
        padding-top: 5rem;
        transition: 0.5s
        overflow-x: hidden;
    }

    .hamb-menu-open a {
        padding: .5rem .5rem .5rem 2rem;
        text-decoration: none;
        font-size: 1.5rem;
        color: white;
        display: block;
        transition: 0.3s
    }
    
    .hamb-menu-open a:hover {
        color: #777;
    }

    .hamb-menu-open .closebtn {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: .2rem;
        font-size: 2.5rem;
        margin-right: 4rem;
    }
    
    .container {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }

    .logo {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        margin-left: 5rem
    }
    .logo-img {
        width: 50px;
        border-radius: 60px;
    }
    .logo-title {
        font-size: 1rem;
        color: white
    }

    .submenu {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        margin-right: 6rem;
        align-items: center;
    }
    .menu-link {
        text-decoration: none;
        color: white;
        transition: ease-in 0.3s;
    }
    .menu-link:hover {
        text-decoration: none;
        color: black;
        background-color: white;
        padding: .5rem;
        border-radius: 10px;
        transition: ease-in 0.3s;
    }

    .hamb-menu {
        display:none
    }

    body {
        transition: margin-left .5s;
        padding:20px;
    }

    @media only screen and (max-width: 700px) {
        .submenu {
            display: none
        }

        .hamb-menu {
            display: flex;
            flex-direction: column;
            gap: .2rem;
            margin-right: 6rem;
            cursor: pointer
        }

        .hamb-slice {
            width: 1.5rem;
            border-radius: 1rem;
            height: .2rem;
            background-color: white
        }
    }
    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
      }
    `;
    return style;
  }

  script() {
    const script = document.createElement("script");
    script.textContent = `
    const yakimenu = document.querySelector('yaki-menu').shadowRoot
    window.addEventListener("DOMContentLoaded", (event) => {
        const hamb_menu = yakimenu.getElementById('hamb-menu').addEventListener('click', openNav);
        if (hamb_menu) {
            hamb_menu.addEventListener('click', openNav);
        }
        const close_hamb = yakimenu.getElementById('close-hamb')
        if(close_hamb) {
            close_hamb.addEventListener('click', closeNav);
        }
    })

    function openNav() {
        yakimenu.getElementById("sideNav").style.display = "flex";
        yakimenu.getElementById("sideNav").style.width = "100%";
    }
    
    /* Set the width of the side navigation to 0 */
    function closeNav() {
        yakimenu.getElementById("sideNav").style.width = "0";
        yakimenu.getElementById("sideNav").style.display = "none";
      }
    `;
    return script;
  }
}

customElements.define("yaki-menu", YakiMenu);
