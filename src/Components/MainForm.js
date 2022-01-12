import React, {useState} from 'react'
import './../CSS/MainForm.css';
import List from './List';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
 
library.add(faTrash);
toast.configure();

function MainForm() {

    const [itemList, setItemList] = useState([]);
    const [inputValue, setInputvalue] = useState('');
    const [id, setId] = useState(0);
    
    const addItem = () => {

        if(!inputValue || /^\s*$/.test(inputValue)){
            toast("you can't input empty value!", {position: toast.POSITION.BOTTOM_CENTER});
            return;
        }
        
        const newItemList = [{id: id, text: inputValue}, ...itemList];
        setId((prevId) => (prevId + 1));
        console.log(...newItemList);
        setItemList(newItemList);
        setInputvalue('');
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
    }

    const handleInputChange = (event) => {
        setInputvalue(event.target.value);
    }

    function deleteItem(key){
        const filteredItems = itemList.filter(item => item.id !== key)
        setItemList(filteredItems);
    }

    return (
        <div className='SubContainer' onSubmit = {handleSubmit}>
            <header>
                <form id="to-do-form">
                    <input onChange = {handleInputChange} type="text" placeholder="Enter Task" value = {inputValue}/>
                    <button onClick = {addItem} type="submit">Add</button>
                    <List deleteItem = {deleteItem} items = {itemList}/>
                </form>
            </header>
        </div>
    )
}

export default MainForm
