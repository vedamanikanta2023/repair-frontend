import { useState } from "react";

export default function UserDetails() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate inputs
  const validate = () => {
    let newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.age) {
      newErrors.age = "Age is required.";
    } else if (formData.age <= 0) {
      newErrors.age = "Age must be greater than 0.";
    }

    if (!formData.dob) newErrors.dob = "Date of birth is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");
      // you can send data to backend here
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h1>User Details</h1>

      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}

      <label>
        Date of Birth:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </label>
      {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}