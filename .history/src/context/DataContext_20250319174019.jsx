/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext(); // ✅ Export Context

export const DataProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [user, setUser] = useState(null);
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    // add to cart
    const addToCart = (product) => {
        let updatedCart = [...cart];
        const existingProduct = updatedCart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
            toast.success("Cart Updated!");
        } else {
            updatedCart.push({ ...product, quantity: 1 });
            toast.success("Product added to cart!");
        }
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // add Order
    const orderNow = (product) => {
        let updatedCart = [...cart];
        const existingProduct = updatedCart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
            toast.success("Cart Updated!");
            navigate('/checkout')
        } else {
            updatedCart.push({ ...product, quantity: 1 });
            toast.success("Product added to cart!");
            navigate('/checkout')
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    // user login or not

    // set localstorage data after login
    const loginData = (data) => {
        const userStore = localStorage.setItem("signUp", JSON.stringify(data));
        setUser(userStore)
    }

    // get data
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("signUp"));
        setUser(user);
    }, [user]);
    // logout data

    const logOut = () =>{
        localStorage.removeItem('signUp')
        setUser('')
        navigate('/')
    }




    // user login or not
    /* useEffect(() => {
        const order = JSON.parse(localStorage.getItem("order"));
        setOrder(order);
    }, []); */


    return (
        <DataContext.Provider value={{ setUser, user, loginData,logOut }}>
            {children}
        </DataContext.Provider>
    );
};