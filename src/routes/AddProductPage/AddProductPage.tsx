import React from "react";
import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import { createProductAction } from "../../actions/productsActions";


const AddProductPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [addPrice, setAddPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [amount, setAmount] = useState("");

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createProductAction(
      {
        name,
        addPrice: parseInt(addPrice),
        salePrice: parseInt(salePrice),
        amount: parseInt(amount),
      }
    )
  );
  setName("")
  setAddPrice("")
  setSalePrice("")
  setAmount("")
  };

  return (
    <div >
      <h1>Закуп товара на склад:</h1>
      <form 
        className="add-product-block" 
        onSubmit={handleClick}
      >
        <input
          placeholder="Наименование"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Количество"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          placeholder="Закупочная цена"
          value={addPrice}
          onChange={(e) => setAddPrice(e.target.value)}
        />
        <input
          placeholder="Цена продажи"
          value={salePrice}
          onChange={(e) => setSalePrice(e.target.value)}
        />
        <button >Добавить</button>
      </form>
    </div>
  );
};

export default AddProductPage;
