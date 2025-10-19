"use client";
import { useReducer, useState } from "react";

const intialState = {
    name: "",
    age: "",
    phonenumber: "",
    gender: "",
    address: "",
  };
function reducer(state:any, action:any) {
}
export default function UserDetails() {
 const [data,useDispatch]= useReducer(reducer,intialState);

  return (
    <form
      onSubmit={()=>{}}
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <label>
        Name:
        <input
          type="text"
          name="username"
        />
      </label>
      <label>
        Age:
        <input
        />
      </label>
      <label>
        Phone:
        <input
          type="number"
          name="age"
        />
      </label>
      <label>
        Gender:
        <input
          type="date"
          name="dob"
        />
      </label>
      <label>
        Address:
        <input
          type="date"
          name="dob"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
