class Search extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
    shadow.appendChild(this.scripts());
  }

  build() {
    const searchbox = document.createElement("div");
    searchbox.className = "search-box";

    const searchtitle = document.createElement("h1");
    searchtitle.className = "search-title";
    searchtitle.textContent = "Let's go searching!";

    const searchparagraph = document.createElement("p");
    searchparagraph.className = "search-paragraph";
    searchparagraph.textContent =
      "Search between diverse types of dishes, health labels, cuisines or meals and find your perfect one!";

    const searchbar = document.createElement("div");
    searchbar.className = "search-bar";
    const searchtext = document.createElement("input");
    searchtext.className = "search-text";
    searchtext.id = "search-text";
    searchtext.placeholder = "Search your recipe here!";
    const searchlink = document.createElement("a");
    searchlink.className = "search-link";
    const searchicon = document.createElement("img");
    searchicon.src = "../img/search.svg";
    searchicon.className = "search-icon";

    // row
    const searchoptions = document.createElement("div");
    searchoptions.className = "search-options";

    // column
    const cuisinecolumn = document.createElement("div");
    cuisinecolumn.className = "searchtype-column";

    // "card"
    const cuisineoption = document.createElement("div");
    cuisineoption.className = "search-option";
    const cuisinelabel = document.createElement("label");
    cuisinelabel.className = "searchtype-label";
    cuisinelabel.textContent = "Cuisine Type";
    const cuisineselect = document.createElement("select");
    cuisineselect.className = "searchtype-select";

    // column
    const mealcolumn = document.createElement("div");
    mealcolumn.className = "searchtype-column";

    const mealoption = document.createElement("div");
    mealoption.className = "search-option";
    const meallabel = document.createElement("label");
    meallabel.className = "searchtype-label";
    meallabel.textContent = "Meal Type";
    const mealselect = document.createElement("select");
    mealselect.className = "searchtype-select";

    // column
    const healthcolumn = document.createElement("div");
    healthcolumn.className = "searchtype-column";

    const healthoption = document.createElement("div");
    healthoption.className = "search-option";
    const healthlabel = document.createElement("label");
    healthlabel.className = "searchtype-label";
    healthlabel.textContent = "Health Label";
    const healthselect = document.createElement("select");
    healthselect.className = "searchtype-select";

    // column
    const dishcolumn = document.createElement("div");
    dishcolumn.className = "searchtype-column";

    const dishoption = document.createElement("div");
    dishoption.className = "search-option";
    const dishlabel = document.createElement("label");
    dishlabel.className = "searchtype-label";
    dishlabel.textContent = "Dish Type";
    const dishselect = document.createElement("select");
    dishselect.className = "searchtype-select";

    searchlink.appendChild(searchicon);

    cuisineoption.appendChild(cuisinelabel);
    cuisineoption.appendChild(cuisineselect);
    cuisinecolumn.appendChild(cuisineoption);
    searchoptions.appendChild(cuisinecolumn);

    mealoption.appendChild(meallabel);
    mealoption.appendChild(mealselect);
    mealcolumn.appendChild(mealoption);
    searchoptions.appendChild(mealcolumn);

    healthoption.appendChild(healthlabel);
    healthoption.appendChild(healthselect);
    healthcolumn.appendChild(healthoption);
    searchoptions.appendChild(healthcolumn);

    dishoption.appendChild(dishlabel);
    dishoption.appendChild(dishselect);
    dishcolumn.appendChild(dishoption);
    searchoptions.appendChild(dishcolumn);

    searchbar.appendChild(searchtext);
    searchbar.appendChild(searchlink);
    searchbox.appendChild(searchtitle);
    searchbox.appendChild(searchparagraph);
    searchbox.appendChild(searchbar);
    searchbox.appendChild(searchoptions);

    return searchbox;
  }

  styles() {
    const styles = document.createElement("style");
    styles.textContent = `
    .search-box {
        display: flex;
        box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, 0.2); 
        border-radius: 2rem;
        background-color: #333;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        flex-direction: column;
    }

    @media screen and (max-width: 1000px) {
        .search-box {
          width: 70%;
        }
      }

    .search-title {
        font-size: 1.7rem;
        color: #fff;
        margin-bottom: -.2rem
    }

    .search-paragraph {
        padding: 1rem;
        color: #fff;
        text-align: center;
        word-wrap: wrap;
        margin-bottom: -.5rem
    }
    
    .search-bar {
        padding: 1rem 2rem 1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 95%;
        gap: 1rem;
    }

    .search-text {
        padding: .7rem;
        border-radius: 1rem;
        border: 0px;
        width: 90%;
        box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, 0.2); 
    }

    .search-icon {
        padding: .2rem;
        cursor: pointer;
        width: 4rem;
        height: 1rem;
        background-color: #be5bea;
        height: 2.5rem;
        filter: invert();
        border-radius: 1rem;
        transition: 0.2s ease-in-out;
    }

    .search-icon:hover {
        background-color: #58246f;
    }

    .search-options {
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        background-color: #fff;
        padding: .5rem;
        border-radius: 1rem;
        margin: 0rem 2rem 1.5rem 2rem;
        box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, 0.2); 
    }
    
    .search-option {
        display: flex;
        flex-direction: column;
        padding: .5rem;
        gap: .3rem;
    }

    .searchtype-label {
        font-size: .7rem;
    }

    .searchtype-select {
        width: 10rem;
        padding: .2rem;
        border-radius: .5rem;
    }
    `;
    return styles;
  }
}

customElements.define("search-menu", Search);
