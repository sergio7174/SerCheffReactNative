
import PropTypes from 'prop-types';

fetchRecipes.propTypes = {
  setRecipes: PropTypes.string,
  activeCategory: PropTypes.string,
  getRecipes: PropTypes.any,
};


 // function to get the recipes
 export async function fetchRecipes (activeCategory,getRecipes, setRecipes) {
    try {
      const result = await getRecipes(activeCategory);
      setRecipes(result);
    } catch (error) {
      console.log(error);
    }
  };