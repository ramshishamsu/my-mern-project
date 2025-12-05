import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookTable from "../components/BookTable";

const API = "http://localhost:5000/api/books";

export default function HomePage() {
 
   // books = state variable (array)
  // setBooks = function used to update books
    const [books, setBooks] = useState([]);
 
    // Function to load books from backend API
  const loadBooks = async () => {
    
        // API call (GET request)
    const res = await axios.get(API);
    setBooks(res.data);
  };
  
  // useEffect runs automatically when the component first loads
  // [] means "run only once" (on page load)
  useEffect(() => { loadBooks(); }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">📚 Book Records</h1>

        <Link
          to="/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          ➕ Add Book
        </Link>
      </div>

      <BookTable books={books} reload={loadBooks} />
    </div>
  );
}
