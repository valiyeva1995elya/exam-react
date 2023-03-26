import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct } from "../../types";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../../actions/productsActions";
import { SearchInput } from "../../components";
import { useState } from "react";

const DeleteProductPage = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("")
  
  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.product
  );

  const onSearch = (value: string) => {
    setSearchText(value)
}
var filteredTodos = products.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))


  if (products.length < 1) {
    return <h1>Товара на складе нет!</h1>;
  }

  return (
    <>
      <SearchInput
        search={searchText}
        onSearch={onSearch}
      />
      <div className="table-block">
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Наименование</th>
              <th>Количество</th>
              <th>Закупочная цена</th>
              <th>Цена продажи</th>
              <th>Удалить товар</th>
            </tr>
          </thead>
          {filteredTodos.map((item, index) => (
            <tbody key={item.id}>
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.addPrice}</td>
                <td>{item.salePrice}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(
                        deleteProductAction({
                          id: item.id,
                          name: item.name,
                          amount: item.amount,
                          addPrice: item.addPrice,
                        })
                      );
                    }}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default DeleteProductPage;
