import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export default function BookTable({ books }) {
  return (
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Title</th>
          <th className="border p-2">Author</th>
          <th className="border p-2">Price</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
          <tr key={book._id}>
            <td className="border p-2">{book.title}</td>
            <td className="border p-2">{book.author}</td>
            <td className="border p-2">₹{book.price}</td>
            <td className="border p-2 flex gap-3 justify-center">
              
              {/* Edit */}
              <Link to={`/edit/${book._id}`}>
                <AiFillEdit className="text-blue-600 cursor-pointer" size={22} />
              </Link>

              {/* Delete */}
              <Link to={`/delete/${book._id}`}>
                <AiFillDelete className="text-red-600 cursor-pointer" size={22} />
              </Link>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
