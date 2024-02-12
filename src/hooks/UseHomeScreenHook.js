import { useEffect, useState } from "react";
import { getAllCategories, getRecipes } from "../services/api";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from 'tailwind-rn';
import { fetchRecipes } from "function/HomeScreen/fetcrecipes";
import { fetchAllCategories } from "function/HomeScreen/fetchAllCategories";

export default function HomeScreenHook () {

    const tailwind = useTailwind();
    // to control 
    const [activeCategory, setActiveCategory] = useState("Beef");
    const [categories, setCategories] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");
  
    const navigation = useNavigation();
  
    useEffect(() => {
      // function to get the categories
      // call the function to get categories
      fetchAllCategories(setCategories,getAllCategories);
    }, []);
  
    useEffect(() => {
     
      // call the function to get the recipes on activeCategory
      fetchRecipes(activeCategory,getRecipes, setRecipes);
     
    }, [activeCategory]);// get the recipe, everytime activeCategory change
  
   
    return { tailwind, activeCategory, setActiveCategory, categories, setCategories,    
             recipes, setRecipes, query, setQuery, navigation}

}