import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API = "http://localhost:5000/api/books";

export default function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await axios.delete(`${API}/${id}`);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-3 text-red-600">⚠ Delete Book?</h1>
      <p className="mb-4">Are you sure you want to delete this book?</p>

      <div className="flex justify-center gap-4">
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>

        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
