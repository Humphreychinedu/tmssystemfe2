import './App.css';
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useEffect, useState } from 'react';


function App() {
  const [emp, setEmp] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getEmp = async () => {
      const empFromServer = await fetchEmp();
      setEmp(empFromServer)
    }


    const getbookings = async () => {
        const bookingFromServer = await fetchBooking();
        setBookings(bookingFromServer)
    }
    getEmp();
    getbookings();
  }, [])
  

  const addEmp = async (emp) => {
    const res = await fetch('https://travel-management-system-be.herokuapp.com/management/employee', 
    {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(emp)
    })
  
    const data = await res.json()
    setEmp([...emp, data])
  }

  const fetchEmp = async  () => {
    const res = await fetch('https://travel-management-system-be.herokuapp.com/management/employee',
     );
    const data = await res.json();
    return data;
  }

  const fetchBooking = async  () => {
    const res = await fetch('https://travel-management-system-be.herokuapp.com/management/booking',
     );
    const data = await res.json();
    return data;
  }

  return (
    <Router>
    <Topbar />
      <div className="container">
        <Sidebar />
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/users" element={<UserList employee={emp} />} />
          <Route path="/user/:userId" element={<User />}/>
          <Route path="/newUser" element={<NewUser onAddEmp={addEmp} />}/>
          <Route path="/products" element={<ProductList booking={bookings}/>}/>
          <Route path="/product/:productId" element={<Product />}/>
          <Route path="/newproduct" element={<NewProduct />}/>
        </Routes>  
      </div> 
      </Router> 
  );
}
export default App;
 
