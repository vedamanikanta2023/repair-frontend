"use client";
import { ChangeEvent, useReducer, useState } from "react";

const inputChange = "INPUT CHANGE";

const initialState = {
  name: "",
  age: "",
  phonenumber: "",
  gender: "",
  address: "",
};

const reducer = (
  state: typeof initialState,
  action: { type: string; payload: { key: string; value: string } }
) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case inputChange:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return initialState;
  }
};
export default function UserDetails() {
  const [userDetails, useDispatch] = useReducer(reducer, initialState);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    useDispatch({
      type: inputChange,
      payload: { key: e.target.name, value: e.target.value },
    });
  };

  return (
    <form className="mt-16" onSubmit={() => {}}>
      <label>
        Name:
        <input name="name" value={userDetails.name} onChange={handleOnChange} />
      </label>
      <label>
        Age:
        <input name="age" value={userDetails.age} onChange={handleOnChange} />
      </label>
      <label>
        Phone:
        <input
          name="phonenumber"
          value={userDetails.phonenumber}
          onChange={handleOnChange}
        />
      </label>
      <label>
        Gender:
        <input
          name="gender"
          value={userDetails.gender}
          onChange={handleOnChange}
        />
      </label>
      <label>
        Address:
        <input
          name="address"
          value={userDetails.address}
          onChange={handleOnChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
