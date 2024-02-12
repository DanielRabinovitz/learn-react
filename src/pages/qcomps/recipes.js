export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {
  // Make a header and a div to contain multiple lists
  // Then do a map on each recipe to make a list out of the ingredients using a map function

  return (
    <div>

      <h1>Recipes</h1>

      {recipes.map((recipe) => (

        <div key={recipe.id}>

          <h2>{recipe.name}</h2> {/* Use h2 for recipe names to maintain semantic hierarchy */}
          <ul>
            {/*use spread syntax to unpack the set*/}
            {[...recipe.ingredients].map((ingredient, index) => (
              <li key={index}>{ingredient}</li> // Convert Set to Array for mapping and use index as key
            ))}
          </ul>

        </div>

      ))}
    </div>
  );
}