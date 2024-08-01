const API_KEY = "4adec9229ebf4530922e68c5aa8df789";
const recipeListEl=document.getElementById("recipe-list");

function displayRecipes(){



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
  console.log(recipes);
  displayRecipes()
}

init();
