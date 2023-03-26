import { createBrowserRouter } from "react-router-dom";
import { StockPage, ErrorPage, Main, AddProductPage, SaleProductPage, DeleteProductPage, HistoryPage } from "./routes/index";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/saleProduct",
        element: <SaleProductPage />,
      },
      {
        path: "/addProduct",
        element: <AddProductPage />,
      },
      {
        path: "/producrts",
        element: <DeleteProductPage />,
      },
      {
        path: "/stockPage",
        element: <StockPage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
    ],
  },
]);

export default router