const API_KEY = "4adec9229ebf4530922e68c5aa8df789";
const recipeListEl=document.getElementById("recipe-list");

function displayRecipes(recipes){
  console.log("recipes",recipes)
  recipeListEl.innerHTML="";

recipes.forEach((recipe)=>{
const recipeItemEl = document.createElement("li");
recipeItemEl.classList.add("recipe-item");

const recipeImageEl = document.createElement("img");
recipeImageEl.src = recipe.image
recipeImageEl.alt = recipe.title

const recipeTitleEl = document.createElement("h2");
recipeTitleEl.innerHTML = recipe.title

const recipeIngridientsEl = document.createElement("p");
recipeIngridientsEl.innerHTML = `
 <strong>Ingridients:</strong> ${recipe.extendedIngredients.map(ingredient => ingredient.original).join(", ")}`;

const recipeViewRecipeEl = document.createElement("a");
recipeViewRecipeEl.innerHTML = 'View Recipe';
recipeViewRecipeEl.href = recipe.spoonacularSourceUrl
recipeViewRecipeEl.target = "_blank";

recipeItemEl.appendChild(recipeImageEl);
recipeItemEl.appendChild(recipeTitleEl);
recipeItemEl.appendChild(recipeIngridientsEl);
recipeItemEl.appendChild(recipeViewRecipeEl);

recipeListEl.appendChild(recipeItemEl);
})

}


async function getRecipes() {
 try{ const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=20&apiKey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data.recipes;
}catch (error) {
    console.error("Error fetching recipes:", error);
  }

}

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes)
}

init();
