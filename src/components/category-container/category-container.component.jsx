import './category-container.style.scss';
import CategoryItem from '../category-item/category-item.component';

const CategoryContainer = ({categories}) => {
    return(
        <div className='categories-container' >
      {categories.map((category) => (
      // {categories.map(({title, id, imageUrl}) => (
        <CategoryItem key={category.id} category={category} />
     ))}
    </div>
    )
}

export default CategoryContainer;