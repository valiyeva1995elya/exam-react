import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct } from "../../types";
import {Chart} from "../../components/index"

const StockPage = () => {
  
  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.product
  );
  const totalSum = useSelector<RootState, number>(
    (state) => state.products.totalSum
  );

 

  if (products.length < 1) {
    return (
      <div className="stock-block">
        <h1>Товара на складе нет!</h1>
        <p>
          Общая сумма денег на складе: <b>{totalSum} тг.</b>
        </p>
      </div>
    );
  } else {
  
  const allProducts = products.reduce((a, b) => a + b.amount, 0);
  const minPrice = products.reduce((a, b) =>
    a.salePrice < b.salePrice ? a : b
  );
  const maxPrice = products.reduce((a, b) =>
    a.salePrice > b.salePrice ? a : b
  );
  const maxAmoint = products.reduce((a, b) => (a.amount > b.amount ? a : b));
  const minAmoint = products.reduce((a, b) => (a.amount < b.amount ? a : b));
  

  return (
    <div className="stock-block">
      <h1>Информация о складе:</h1>
      <p>
        Количество всего товара на складе: <b>{allProducts}</b> шт.
      </p>
      <p>
        Самый дорогой товар: <b>{maxPrice.name}</b> -{" "}
        <b>{maxPrice.salePrice}</b> тг.
      </p>
      <p>
        Самый дешевый товар: <b>{minPrice.name}</b> -{" "}
        <b>{minPrice.salePrice}</b> тг.
      </p>
      <p>
        Товара <b>{maxAmoint.name}</b> больше всего на складе, количество{" "}
        <b>{maxAmoint.amount}</b> шт.
      </p>
      <p>
        Товара <b>{minAmoint.name}</b> меньше всего на складе, количество{" "}
        <b>{minAmoint.amount}</b> шт.
      </p>
      <p>
        Общая сумма денег на складе: <b>{totalSum}</b> тг.
      </p>
      <div>
      <Chart />
      </div>
    </div>
  );
  }
};

export default StockPage;
