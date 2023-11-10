import React, {lazy, Suspense, useState, useEffect} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
//import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/cart";

//import Grocery from "./component/Grocery";

const Grocery = lazy(() => import("./component/Grocery"));

const About = lazy(() => import("./component/About"));

const AppLayout= () => {

   const [userName, setUserName] = useState();

   //authentication
   useEffect(() => {
     // Make an API call and send username and password
     const data = {
       name: "Megharani Devadiga",
      };
      setUserName(data.name);
      }, []);

return (
   <Provider store={appStore}>
   <UserContext.Provider value={{loggedInUser: userName , setUserName}}>
   <div className="app">
      <Header />
      <Outlet />
   </div>
   </UserContext.Provider>
   </Provider>
   );

};

const appRouter = createBrowserRouter([

   {
      path: "/",
      element: <AppLayout />,
      children: [
  
         {
            path: "/",
            element: <Body />,
         },

         {
            path: "/about",
            element:(
               <Suspense fallback={<h1>Loading...</h1>}>
                   <About />
               </Suspense>
            ),
         },

         {
            path: "/contact",
            element: <Contact/>,
         },
         {
            path: "/cart",
            element: <Cart/>,
         },
         {
            path: "/grocery",
            element: <Suspense fallback={<h1>Loading...!!</h1>}>
               <Grocery/>
            </Suspense>,
         },

         {
            path: "/restaurants/:resId",
            element: <RestaurantMenu/>,
         },
      
      

      ],
      errorElement: <Error />,
   },
   
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={(appRouter)} />);