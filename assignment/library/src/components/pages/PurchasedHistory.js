import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PurchasedHistory = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };


  return (
    <div className="container">
      <div className="py-4">
        <h1>Purchased History Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Name</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Address</th>
              <th scope="col">TotalPrice</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.bookname}</td>
                <td>{user.buyer}</td>
                <td>{user.address}</td>

                <td>{user.totalprice}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                   
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchasedHistory;