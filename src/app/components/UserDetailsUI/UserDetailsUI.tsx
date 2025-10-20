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

export function UserDetailsUI() {
  const [userDetails, useDispatch] = useReducer(reducer, initialState);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
    useDispatch({
      type: inputChange,
      payload: { key: e.target.name, value: e.target.value },
    });
  };

  return (
    <form
  onSubmit={() => {}}
  className="mt-16 w-full max-w-md mx-auto flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md"
>
  {/* Name */}
  <label htmlFor="name" className="flex flex-col text-sm font-medium text-gray-700">
    Name:
    <input
      id="name"
      name="name"
      value={userDetails.name}
      onChange={handleOnChange}
      className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your name"
    />
  </label>

  {/* Age */}
  <label htmlFor="age" className="flex flex-col text-sm font-medium text-gray-700">
    Age:
    <input
      id="age"
      name="age"
      type="number"
      value={userDetails.age}
      onChange={handleOnChange}
      className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your age"
    />
  </label>

  {/* Phone */}
  <label
    htmlFor="phonenumber"
    className="flex flex-col text-sm font-medium text-gray-700"
  >
    Phone:
    <input
      id="phonenumber"
      name="phonenumber"
      type="tel"
      value={userDetails.phonenumber}
      onChange={handleOnChange}
      className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your phone number"
    />
  </label>

  <label htmlFor="gender" className="flex flex-col text-sm font-medium text-gray-700">
  Gender:
  <select
    id="gender"
    name="gender"
    value={userDetails.gender}
    onChange={handleOnChange}
    className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
  >
    <option value="" disabled>
      Select your gender
    </option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
</label>

  {/* Address */}
  <label htmlFor="address" className="flex flex-col text-sm font-medium text-gray-700">
    Address:
    <input
      id="address"
      name="address"
      value={userDetails.address}
      onChange={handleOnChange}
      className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your address"
    />
  </label>

  {/* Submit Button */}
  <button
    type="submit"
    className="mt-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
  >
    Submit
  </button>
</form>
  );
}
