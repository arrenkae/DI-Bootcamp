import { useDispatch } from 'react-redux';
import { useState, useRef, memo } from "react";
import { editCategory } from './categorySlice';

const EditCategory = ({category}) => {
    const [errorMsg, setErrorMsg] = useState('');
    const [display, setDisplay] = useState('none');
    const inputRef = useRef();
    const dispatch = useDispatch();

    const toggleInput = () => {
        if (display === 'none') {
            setDisplay('inline');
        } else {
            setDisplay('none');
        }
    }

    const showError = (message) => {
        setErrorMsg(message);
        setTimeout(() => { setErrorMsg('') }, 3000);
    }

    return (
        <>
        <button onClick={toggleInput}>✎</button>
        <div style={{display}}>
            <input type="text" ref={inputRef} defaultValue={category.name}/>
            <button onClick={() => {
                if (inputRef.current.value) {
                    dispatch(editCategory({categoryId: category.id, newName: inputRef.current.value}));
                    toggleInput();
                } else {
                    showError('Please enter the new category name');
                }
            }}>Save</button>
            <span className='error'>{errorMsg}</span>
        </div>
        </>
    )
};

export default memo(EditCategory);