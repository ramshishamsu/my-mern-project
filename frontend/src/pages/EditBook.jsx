import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API = "http://localhost:5000/api/books";

export default function EditBook() {
  
    // Get the "id" from the URL
    const { id } = useParams();
   // Used to redirect after updating the book
    const navigate = useNavigate();
    // State to store editable book data
    const [form, setForm] = useState({ title: "", author: "", price: "" });

      // Load the book details when the component opens or when "id" changes
     useEffect(() => {
    axios.get(`${API}`).then((res) => {
           
    // Find the book that matches the URL id
       const book = res.data.find((b) => b._id === id);
           
       // Set the book values into the form fields for editing
     setForm(book);
    });
  }, [id]);

    
  // Form submit handler for updating book details
 const handleSubmit = async (e) => {
    e.preventDefault(); //prevent refreshing
    // Send updated data to backend
    await axios.put(`${API}/${id}`, form);
        
    // After updating redirect to home page
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">✏ Edit Book</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="border p-2 w-full"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <button className="bg-blue-600 text-white p-2 rounded w-full">
          Update Book
        </button>
      </form>
    </div>
  );
}
