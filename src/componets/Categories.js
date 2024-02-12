import { ScrollView } from "react-native";
import Category from "./Category";
import PropTypes from 'prop-types';

Categories.propTypes = {
  categories: PropTypes.string,
  activeCategory: PropTypes.string,
  setActiveCategory: PropTypes.any,
};

export default function Categories({
  activeCategory,
  setActiveCategory,
  categories,
}) {
  return (
    <ScrollView
    // don't show horizontal scroll indicator 
      showsHorizontalScrollIndicator={false}
      className="space-x-4"
      contentContainerStyle={{ paddingHorizontal: 5 }}
      horizontal={true}
    >
      {categories.map((item) => (
        <Category
          key={item.idCategory}
          item={item}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          snapToAlignment="start"
          snapToInterval={350}
        />
      ))}
    </ScrollView>
  );
}
