class CardRecipe extends HTMLElement {
  title = String;
  description = String;
  img = String;
  id = String;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const column = document.createElement("div");
    column.className = "column";
    const card = document.createElement("div");
    card.className = "card";

    // contents of the card
    const image = document.createElement("img");
    image.src = this.getAttribute("image") || "../img/not_found.jpg";
    const title = document.createElement("h2");
    title.textContent = this.getAttribute("title");
    const author = document.createElement("span");
    author.textContent = this.getAttribute("author") || "Unknown";
    const button = document.createElement("button");
    button.onclick = this.getAttribute("link");
    button.textContent = "Go to Recipe";
    image.className = "card-img";
    title.className = "card-title";
    author.className = "card-author";
    button.className = "card-button";

    // append contents
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(button);
    column.appendChild(card);
    return column;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
      width: 16rem;
      background-color: #333;
      box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2); 
      padding: 1.3rem 1rem 1.5rem 1rem;
      margin: 2rem;
      display: flex;
      border: .2rem solid #222;
      border-radius: 1.5rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .card-img {
      height: 12rem;
      object-fit: cover;
      width: 15rem;
      border-radius: 1rem;
    }
    
    .card-title {
      text-align: center;
      font-size: 1.3rem;
      word-wrap: wrap;
      color: white;
      margin-bottom: .2rem;
    }
    
    .card-author {
      color: gray;
      margin-bottom: 1rem;
    }

    .card-button {
      background-color: green;
      color: white;
      border: .1rem solid #04AA6D;
      padding: .5rem;
      border-radius: .5rem;
      transition: 0.3s ease-in-out;
    }
    .card-button:hover {
      background-color: #04AA6D;
      color: black;
    }
    `;
    return style;
  }
}

customElements.define("card-recipe", CardRecipe);
