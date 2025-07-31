import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Login from './pages/Login';
import RootLayout from './layouts/RootLayout';
import AuthLayout from './layouts/AuthLayout';
import Signup from './pages/Signup';
import "./App.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: "/products", element: <Products />,
      },
      {
        path: "/categories", element: <Categories />,
      },
      {
        path: "/cart", element: <Cart />,
      },
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: "login", element: <Login />,
      }, {
        path: "signup", element: <Signup />,
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
