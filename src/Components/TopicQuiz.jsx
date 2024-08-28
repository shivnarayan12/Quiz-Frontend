import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./TopicQuiz.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TopicQuiz = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const navigate = useNavigate();
  const name = useSelector((state) => state.mernQuize.userName);

  return (
    <div className="mt-10 mb-10 ">
      <div className="justify-self-center ml-96">
        <h1 className="font-bold text-2xl ml-44 pl-12">Prepare By Topics</h1>
      </div>
      <div className="grid grid-cols-2 w-11/12 p-10 m-auto gap-8 shadow-2xl bgx" >
        {userId ? (
          <Link to="/quiz/html">
            {" "}
            {/* <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">
              <div className="w-3/5 h-full bg-rgb(27,169,76)">
                <h1 className="pt-12 pl-16 topicdivh1 ">HTML</h1>
              </div>
              <img className="w-2/5  rounded-2xl" src="/html-5.gif" alt="" />
            </div> */}

<button class="button-73" role="button">HTML</button>
          </Link>
        ) : (
          <Link to="/register">
            {" "}

             {/* <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl pl-10 flex ">  */}
               {/* <div className="w-3/5 h-full bg-rgb(27,169,76)"> */}
                {/* <h1 className="pt-12 pl-16 topicdivh1 ">HTML</h1> */}
              {/* </div> */}
              {/* <img className="w-2/5  rounded-2xl" src="/html-5.gif" alt="" />  */}
             {/* </div>  */}
             {/* <!-- HTML !--> */}


<button class="button-73" role="button">HTML</button>



          </Link>
        )}
        {userId ? (
          <Link to="/quiz/css">
            {" "}
         
              <button class="button-73" role="button">CSS</button>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
        

            <button class="button-73" role="button">CSS</button>
          </Link>
        )}
        {userId ? (
          <Link to="/quiz/javascript">
            {" "}
         
              <button class="button-73" role="button">JavaScript</button>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
          
               <button class="button-73" role="button">JavaScript</button>
           
          </Link>
        )}

        {userId ? (
          <Link to="/quiz/react">
            {" "}
         
            <button class="button-73" role="button">React</button>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
        

            <button class="button-73" role="button">React</button>

          </Link>
        )}
        {userId ? (
          <Link to="/quiz/redux">
            {" "}
            <button class="button-73" role="button">Redux</button>
       
          </Link>
        ) : (
          <Link to="/register">
            {" "}
          
            <button class="button-73" role="button">Redux</button>
          </Link>
        )}
        {userId ? (
          <Link to="/quiz/mongodb">
            {" "}
            <button class="button-73" role="Mongodb">MongoDB</button>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
          
                        <button class="button-73" role="button">Mongodb</button>

          </Link>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};
