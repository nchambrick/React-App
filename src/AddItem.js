import React from "react";
import { useNavigate } from "react-router-dom";
import ItemForm from "./ItemForm";

function AddItem({ onAdd }) {
  const navigate = useNavigate();

  function handleAdd(newItem) {
    onAdd(newItem);
    navigate("/");
  }

  return <ItemForm initialData={{ title: "", description: "", status: false }} onSubmit={handleAdd} />;
}

export default AddItem;