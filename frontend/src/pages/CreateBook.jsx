import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000/api/books";

export default function CreateBook() {
  
    // Used for redirecting to another page after successful 
    const navigate = useNavigate();
 
  // State for storing form input values
  // form = { title: "", author: "", price: "" }
  // setForm = function to update form fields
    const [form, setForm] = useState({ title: "", author: "", price: "" });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    
        // Send POST request to API with form data
    await axios.post(API, form);
      // Redirect user to homepage after creating book
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">➕ Add New Book</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="border p-2 w-full"
          placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          placeholder="Author"
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          placeholder="Price"
          type="number"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <button className="bg-green-600 text-white p-2 rounded w-full">
          Save Book
        </button>
      </form>
    </div>
  );
}
