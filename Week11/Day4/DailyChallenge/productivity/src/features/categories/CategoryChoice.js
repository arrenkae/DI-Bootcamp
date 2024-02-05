import { useSelector } from 'react-redux';
import { memo } from 'react';

const CategoryChoice = ({category, setCategory}) => {
    const categories = useSelector(state => state.categories.categories);
    
    return (
        <>
        <option value={-1}>---Select category---</option>
        {categories.length > 0 ? 
            categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>
            ) : null
        }
        </>
    )
};

export default memo(CategoryChoice);