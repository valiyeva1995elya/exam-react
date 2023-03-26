import { Outlet, Link } from "react-router-dom";


const Main = () => {
  return (
    <>
      <header>
        <div>
          <img className="logo-img" src="https://media.istockphoto.com/id/1338920696/vector/sp-letter-linked-business-logo-sp-logo-design-sp-logo-design-for-financial-development.jpg?s=612x612&w=0&k=20&c=JTQ813Rczr4rpUb3lAkN0dEn4PEaZpBjUBlhn4lb_mY=" />
        </div>
        <nav>
          <Link to="/stockPage">Склад</Link>
          <Link to="/addProduct">Добавление товара</Link>
          <Link to="/saleProduct">Продажа товара</Link>
          <Link to="/producrts">Таблица</Link>
          <Link to="/history">История</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Main;
