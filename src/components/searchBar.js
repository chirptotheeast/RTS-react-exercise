import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios"
import * as searchActions from '../store/actions/searchAction'

 
export default function SearchBar(){

    const dispatch = useDispatch()
    const [userInput, setUserInput] = useState("")

   const userInputHandler = (e) => {
        setUserInput(e.target.value)
    }

     const submitHandler = (e) => {
      e.preventDefault();
    axios
        .get(`http://hn.algolia.com/api/v1/search?query=${userInput}`)
        .then((res) => {
        dispatch(searchActions.searchHistory(userInput, res.data.hits));
      });
  };

    return (
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search Hacker News"
            onChange={(e) => userInputHandler(e)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }


