import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useState } from "react";
import { RootState } from "../../store";
import { IProduct } from "../../types";
import { saleProductAction } from "../../actions/productsActions";

const SaleProductPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.product
  );

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    if(products.find(item => item.name.toLowerCase() === name.toLowerCase())){
      dispatch(
        saleProductAction({
          name,
          amount: parseInt(amount),
        })
        )
    }else{
      alert(`Товара ${name} на складе нет!`)
      }
    setName("");
    setAmount("");
  };

  return (
    <div>
      <h1>Продажа товара:</h1>
      <form className="add-product-block" onSubmit={handleClick}>
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
        <button disabled={amount.length === 0}>Add</button>
      </form>
      {products.length >= 1 ? (
        <div>
          <h2>Весь товар на складе:</h2>
          <div className="table-block">
            <table>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Наименование</th>
                  <th>Количество</th>
                  <th>Цена продажи</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>{item.salePrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h2>Товара на складе нет!</h2>
      )}
    </div>
  );
};

export default SaleProductPage;
