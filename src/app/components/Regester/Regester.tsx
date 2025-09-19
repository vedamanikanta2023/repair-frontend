import React, { useReducer, useState, ChangeEvent, FormEvent, useEffect } from "react";

// Define state type
interface FormState {
  username: string;
  email: string;
  password: string;
}

// Define action type
type Action =
  | { type: "SET_FIELD"; field: keyof FormState; value: string }
  | { type: "CLEAR" };

const initialState: FormState = {
  username: "",
  email: "",
  password: "",
};

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}

export const Regester: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name as keyof FormState,
      value: e.target.value,
    });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
    setErrors({});
  };

  const validate = (): Partial<FormState> => {
    const newErrors: Partial<FormState> = {};
    if (!state.username.trim()) newErrors.username = "Username is required";
    if (!state.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(state.email))
      newErrors.email = "Email is invalid";
    if (!state.password) newErrors.password = "Password is required";
    else if (state.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/user-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });

      if (!response.ok) {
        const data = await response.json();
        alert("Registration failed: " + data.message);
      } else {
        const data = await response.json();
        alert("Registration successful: " + data.message);
        handleClear();
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.username ? "focus:ring-red-500 border-red-500" : "focus:ring-blue-500"
          }`}
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          // type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.email ? "focus:ring-red-500 border-red-500" : "focus:ring-blue-500"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.password ? "focus:ring-red-500 border-red-500" : "focus:ring-blue-500"
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Clear
        </button>
      </div>
    </form>
  );
};