import React from 'react';


type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
  // getCategories?: (categories: string[]) => void // ? если хочу сделать опциональной 
}

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];


const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {

  // if (getCategories) {
  //   getCategories(categories);
  // }

  // getCategories?.(categories); // если функции не будет, не вызовется (categories)


  
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
