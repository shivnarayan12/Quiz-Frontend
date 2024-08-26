import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizDataFrombackend } from "../Redux/action.js";
import { Quiz } from "../Components/QuizNew/Quiz.jsx";
export const NewQuizPage = () => {

  useEffect(() => {
   
   fetchQuizData();
 }, []);

 const dispatch = useDispatch();

 const [loading , setLoading] = useState(false);
 const [db, setDb] = useState(false);
   const fetchQuizData = () => {
    dispatch(fetchQuizDataFrombackend(setLoading , setData , setDb));
  };
  const [count, setCount] = useState(0);
  const [clickoption, setClickOption] = useState(false);
  const jeet = useSelector((state) => state.mernQuize.QuizData);
  const [data , setData] = useState(jeet);
  var x;

if( !loading && db){

  const handleAnswer = (index, e, el) => {
    if (clickoption == false) {
      if (el.answer[0][index] === el.correctAnswer) {
        setCount(count + 1);
      }
    }
  };

  // ------taking path from window object and compairing with the backend data

  const pathname = window.location.pathname
    .split("/").at(-1).toLowerCase();
      
  const filtertopicwise = data.filter((el) => {
 
     console.log("fdjf",pathname);
    return pathname === el.title.toLowerCase();
  });



  
  const newfilterquestions = filtertopicwise.map((ele , index)=>{
  

    return (
      ele.questionArray
    )
  });

x=newfilterquestions;


console.log("new",newfilterquestions);
  

  const handlecount = (index) => {
    setClickOption(true);
  };

}

  return (
  
    <div>
        {
      !loading && db && (
       
      
    

<Quiz questionArr = {x}/>)
}
      </div>
  )

};