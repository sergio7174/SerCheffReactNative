
import PropTypes from 'prop-types';

fetchAllCategories.propTypes = {
    setCategories: PropTypes.string,
  getAllCategories: PropTypes.string,
};


 // function to get the AllCategories
 export async function fetchAllCategories (setCategories,getAllCategories) {
    try {
        const result = await getAllCategories();
        setCategories(result.categories);
      } catch (error) {
        console.log(error);
      }
  };