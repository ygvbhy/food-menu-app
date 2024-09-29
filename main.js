import "./style.css";
import FoodList from "./data/FoodList.json";

const btnGroup = document.getElementById("menu-btn");
btnGroup.addEventListener("click", handleMenuClick);

const menuList = document.querySelector("#menu-list");
let htmlText = "";
function handleMenuClick(e) {
  const id = e.target.id;
  htmlText = "";

  if (id !== "all") for (const food of FoodList[id]) setHtml(food);
  else allMenuList();

  innerHtmlMenu();
}

const allMenuList = () => {
  for (const menu in FoodList) {
    for (const food of FoodList[menu]) {
      setHtml(food);
    }
  }
};

const setHtml = (food) => {
  htmlText += `
  <div class="col-6 d-flex justify-content-center">
    <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${food.image}" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${food.name}</h5>
            <p class="card-text">
              ${food.description}
            </p>
            <p class="card-text">
              <small class="text-body-secondary"
                >${food.price}원</small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

const innerHtmlMenu = () => {
  menuList.innerHTML = htmlText;
};

allMenuList();
innerHtmlMenu();
