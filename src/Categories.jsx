/* eslint-disable react/prop-types */

const Categories = ({ categories, filterItems, currentBtn }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        console.log('currentBtn: ', currentBtn)
        return (
          <button
            type='button'
            // className='btn'
            key={category}
            onClick={() => filterItems(category)}
            className={index === currentBtn ? 'btn btn-active' : 'btn'}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;