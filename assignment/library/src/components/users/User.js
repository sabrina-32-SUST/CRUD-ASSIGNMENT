import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    bookname: "",
    author: "",
    price: "",  
    isbn: "",
    page:"",
    copy: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Library
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Books Title: {user.bookname}</li>
        <li className="list-group-item">Author Name: {user.author}</li>
        <li className="list-group-item">Price: {user.price}</li>
        <li className="list-group-item">ISBN Number: {user.isbn}</li>
        <li className="list-group-item">Total Page Number: {user.page}</li>
        <li className="list-group-item">Available Copies: {user.copy}</li>


      </ul>
    </div>

  );
};

export default User;