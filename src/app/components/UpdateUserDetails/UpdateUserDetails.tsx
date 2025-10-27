"use client";
import { useGetUserDetailsQuery } from "@/services/app";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useReducer, useRef, useState } from "react";

const INPUT_CHANGE = "INPUT_CHANGE";
const RESET = "RESET";
const EDIT = "EDIT";

const initialState = {
  name: "",
  age: "",
  phoneNumber: "",
  gender: "",
  address: "",
};

const reducer = (
  state: typeof initialState,
  action: { type: string; payload?: { key: string; value: string } | Object }
) => {
  switch (action.type) {
    case RESET:
      return initialState;
    case INPUT_CHANGE:
      if (action.payload) {
        return { ...state, [action.payload.key]: action.payload.value };
      }
      return state;
    case EDIT:
      return { ...action.payload };
    default:
      return state;
  }
};

export const UpdateUserDetails: React.FC = () => {
  const [userDetails, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { data: session, status } = useSession();

  const userId = session?.id || "";

  const { data, error, isLoading } = useGetUserDetailsQuery(userId, {
    skip: !userId,
  });

  const searchParams = useSearchParams();
  const isEdit = searchParams.get("edit");

  const createUpdateUserDetials = async () => {
    try {
    } catch (error) {
      console.error("Error saving user details:", error);
    }
  };

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    dispatch({
      type: INPUT_CHANGE,
      payload: { key: e.target.name, value: e.target.value },
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!userDetails.name.trim()) newErrors.name = "Name is required";
    if (!userDetails.age || Number(userDetails.age) <= 0)
      newErrors.age = "Enter a valid age";
    if (!/^[0-9]{10}$/.test(userDetails.phoneNumber))
      newErrors.phoneNumber = "Enter a valid 10-digit phone number";
    if (!userDetails.gender) newErrors.gender = "Select your gender";
    if (!userDetails.address.trim()) newErrors.address = "Address is required";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      createUpdateUserDetials();
      dispatch({ type: RESET });
      setIsSubmitted(false);
    }
  };

  useEffect(() => {
    if (isEdit && data) {
      dispatch({ type: EDIT, payload: data });
    }
  }, [data]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-16 w-full max-w-md mx-auto flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md"
    >
      {/* Name */}
      <label
        htmlFor="name"
        className="flex flex-col text-sm font-medium text-gray-700"
      >
        Name:
        <input
          id="name"
          name="name"
          value={userDetails.name}
          onChange={handleOnChange}
          className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
        {isSubmitted && errors.name && (
          <span className="text-red-600 text-xs mt-1">{errors.name}</span>
        )}
      </label>

      {/* Age */}
      <label
        htmlFor="age"
        className="flex flex-col text-sm font-medium text-gray-700"
      >
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
        {isSubmitted && errors.age && (
          <span className="text-red-600 text-xs mt-1">{errors.age}</span>
        )}
      </label>

      {/* Phone */}
      <label
        htmlFor="phoneNumber"
        className="flex flex-col text-sm font-medium text-gray-700"
      >
        Phone:
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          value={userDetails.phoneNumber}
          onChange={handleOnChange}
          className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your phone number"
        />
        {isSubmitted && errors.phoneNumber && (
          <span className="text-red-600 text-xs mt-1">
            {errors.phoneNumber}
          </span>
        )}
      </label>

      {/* Gender */}
      <label
        htmlFor="gender"
        className="flex flex-col text-sm font-medium text-gray-700"
      >
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
        {isSubmitted && errors.gender && (
          <span className="text-red-600 text-xs mt-1">{errors.gender}</span>
        )}
      </label>

      {/* Address */}
      <label
        htmlFor="address"
        className="flex flex-col text-sm font-medium text-gray-700"
      >
        Address:
        <input
          id="address"
          name="address"
          value={userDetails.address}
          onChange={handleOnChange}
          className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your address"
        />
        {isSubmitted && errors.address && (
          <span className="text-red-600 text-xs mt-1">{errors.address}</span>
        )}
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="mt-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};
