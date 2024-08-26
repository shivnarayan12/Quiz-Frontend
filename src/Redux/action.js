import * as types from "./actiontype.js";
import axios from "axios";

// Create quiz in redux store
export const quizRequest = () => {
  return {
    type: types.CREATE_QUIZ_REQUEST,
  };
};

export const quizSuccess = (quiz) => {
  return {
    type: types.CREATE_QUIZ_SUCCESS,
    payload: quiz,
  };
};

export const quizFailure = (error) => {
  return {
    type: types.CREATE_QUIZ_FAILURE,
    payload: error,
  };
};

const getCurrentQuizRequest = (payload) => {
  return {
    type: types.GET_CURRENT_QUIZ_REQUEST,
    payload,
  };
};
const getCurrentQuizSuccess = (payload) => {
  return {
    type: types.GET_CURRENT_QUIZ_SUCCESS,
    payload,
  };
};
const getCurrentQuizFailure = (payload) => {
  return {
    type: types.GET_CURRENT_QUIZ_FAILURE,
    payload,
  };
};
const getCountSuccess = (payload) => {
  return {
    type: types.GETCOUNTDATA,
    payload,
  };
};

//---------- login user ----------

export const loginUserName = (payload) => {
  return {
    type: types.GETUSERNAME,
    payload,
  };
};
export const loginUser = (payload) => {
  return {
    type: types.GETUSERID,
    payload,
  };
};

export const Logouthandleraction = (payload) => {
  return {
    type: types.LOGOUTUSER,
    payload,
  };
};

export const loginAdminId = (payload) => {
  return {
    type: types.GETADMINID,
    payload,
  };
};
export const loginAdminName = (payload) => {
  return {
    type: types.GETADMINNAME,
    payload,
  };
};

// ----------------------- action creator function for  details of user  for admin page ---------------

const getAllUserDataRequest = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_REQUEST,
    payload,
  };
};

const getAllUserDataSuccess = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_SUCCESS,
    payload,
  };
};

const getAllUserDataFailure = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_FAILURE,
    payload,
  };
};

// ----------------------- details of user  for admin page  and delete user by admin ---------------

export const getAllUserDataFromBackend = (payload) => (dispatch) => {
  dispatch(getAllUserDataRequest());
  axios
    .get("https://quiz-1-ql1e.onrender.com/getuser")
    .then((res) => {
      dispatch(getAllUserDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getAllUserDataFailure());
    });
};

export const deleteUserByAdmin = (payload) => (dispatch) => {
  axios
    .delete(`https://quiz-1-ql1e.onrender.com/${payload}`)
    .then((response) => {
      dispatch(getAllUserDataFromBackend());
    })
    .catch((error) => {
      console.log("error");
    });
};

// ----------post quiz--------------

export const postQuizObj = (obj)=> async (dispatch)=> {
  console.log("hello" , obj);
await  axios
    .post("https://quiz-1-ql1e.onrender.com/admin", obj)
    .then((res) => {
      console.log("question send done",res)
      console.log("hello");
     
    })
    .catch((err) => {
      console.log(err)
    });
};

// export const postQuizObj = (obj) => async (dispatch) => {
//   dispatch({ type: types.POST_QUIZ_REQUEST }); // Dispatch request action

//   try {
//     const response = await axios.post('https://quiz-1-ql1e.onrender.com/admin', obj);
//     dispatch({
//       type: types.POST_QUIZ_SUCCESS,
//       payload: response.data, // Send response data to the reducer
//     });
//     // Optionally show success notification or perform additional actions
//   } catch (error) {
//     dispatch({
//       type: types.POST_QUIZ_FAILURE,
//       payload: error.message || 'An error occurred', // Send error message to the reducer
//     });
//     // Optionally show error notification or perform additional actions
//   }
// };

// ----------------------------- fetching quiz data subject wise -------------

const fetchQuizRequest = (payload) => {
  return {
    type: types.FETCH_QUIZ_REQUEST,
    payload,
  };
};
const fetchQuizSuccess = (payload) => {
  return {
    type: types.FETCH_QUIZ_SUCCESS,
    payload,
  };
};
const fetchQuizFailure = (payload) => {
  return {
    type: types.FETCH_QUIZ_FAILURE,
    payload,
  };
};
export const fetchQuizDataFrombackend = (setLoading , setData , setDb) => async (dispatch) => {
  setLoading(true);
  setDb(true)
  await axios
    .get("https://quiz-1-ql1e.onrender.com/quiz")
    .then((res) =>{ 
     
      localStorage.setItem('data',JSON.stringify(res.data));
      
      console.log("response" , res.data);
      setData(res.data);
      dispatch(fetchQuizSuccess(res.data))
      setLoading(false);
    
    })
    
    .catch((err) => console.log(err));
};


export const getQuiz = (params) => (dispatch) => {
  axios
    .get(`https://quiz-1-ql1e.onrender.com/quiz/${params.id}`)
    .then((res) => {
    
      dispatch(fetchQuizSuccess(res.data));
    })
    .catch((err) => {
    });
};

//------------posting the user quiz result ------------

//  -----------posting user result ------------

export const postUserResult = (ans) => {
  return {
    type: types.SET_USER_RESULT_SUCCESS,
    payload: ans,
  };
};

// ------action creator function and axios function =-------

const postUserResultRequest = (ans) => {
  return {
    type: types.POST_USER_RESULT_SUCCESS,
    payload: ans,
  };
};
const postUserResultSuccess = (ans) => {
  return {
    type: types.POST_USER_RESULT_SUCCESS,
    payload: ans,
  };
};
const postUserResultFailure = (ans) => {
  return {
    type: types.POST_USER_RESULT_SUCCESS,
    payload: ans,
  };
};
export const postQuizResult = (obj) => (dispatch) => {
  const { quizId, userId, quizResult } = obj;
  dispatch(postUserResultRequest());
  axios
    .post(`https://quiz-1-ql1e.onrender.com/userResult/${userId}`, obj)
    .then((res) => {
      dispatch(postUserResultSuccess(res.data));
    })
    .catch((err) => {
      dispatch(postUserResultFailure(err));
    });
};
