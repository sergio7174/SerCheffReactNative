import { useState, useEffect } from "react";
import { getRecipesDetail } from "../services/api";
import {useTailwind} from 'tailwind-rn';

export default function UseRecipeDetailScreenHook({route}) {

    const tailwind = useTailwind(); // to use tailwind with style
    const [recipeDetail, setRecipeDetail] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const recipe = route.params;
  
    useEffect(() => {
      const recipeDetail = async () => {
        // getRecipesDetail from service Api
        const response = await getRecipesDetail(recipe.idMeal); // recipe line 27
        if (!response) {
          setLoading(true);
        } else {
          setRecipeDetail(response?.meals);
          setLoading(false);
        }
      };
      recipeDetail();
    }, [recipe.idMeal]);

   return{tailwind, recipeDetail, setRecipeDetail, loading, setLoading, recipe};
}