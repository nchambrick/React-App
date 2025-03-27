import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemForm from "./ItemForm";

function EditItem({items, onUpdate}){
    const {id} = useParams();
    const navigate = useNavigate();
    const item = items.find((i) => i.id === parseInt(id))

    if(!item) return <p>Item not found</p>

    function handleUpdate(updatedItem){
        onUpdate(updatedItem)
        navigate("/");

    }

    return <ItemForm initialData={item} onSubmit = {handleUpdate}/>
}

export default EditItem;