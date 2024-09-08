import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Users = () => {
  const initialUsers = Array.from({ length: 14 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    role: ["Admin", "Doctor", "Patient"][index % 3],
    disabled: false,
  }));

  const [users, setUsers] = useState(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const totalPages = Math.ceil(users.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleUserStatus = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, disabled: !user.disabled } : user
      )
    );
  };

  return (
    <div>
      <section className="users">
        <aside className="sidebar w-64 h-screen fixed top-0 left-0 flex flex-col">
          <Sidebar />
        </aside>
        <main className="flex ml-24 mt-5 p-4 flex-col w-full">
          <h1 className="text-xl font-bold mb-4">Users</h1>
          <div className="overflow-x-auto">
            <table className="min-w-[90vw] bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-4 text-left">ID</th>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Role</th>
                  <th className="py-2 px-4 text-left">Status</th>{" "}
                  {/* Added column */}
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="py-2 px-4">{user.id}</td>
                    <td className="py-2 px-4">{user.name}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`inline-block px-7 py-1 text-white rounded-full ${
                          user.role === "Admin"
                            ? "bg-green-500"
                            : user.role === "Doctor"
                            ? "bg-blue-500"
                            : "bg-gray-500"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => toggleUserStatus(user.id)}
                        className={`px-4 py-2 rounded ${
                          user.disabled
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {user.disabled ? "Enable" : "Disable"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                } rounded`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded"
            >
              Next
            </button>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Users;
