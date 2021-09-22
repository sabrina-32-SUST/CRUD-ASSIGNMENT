import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Buybooks = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    bookname: "", 
    buyer: "",
    address:"",
      
    copy: "",
    totalprice: "",

  });

  const {  bookname,buyer,address, copy,totalprice } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/purchased");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Select Book</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Book  name"
              name="bookname"
              value={bookname}
              onChange={e => onInputChange(e)}
            />
          </div>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Buyer Name"
              name="buyer"
              value={buyer}
              onChange={e => onInputChange(e)}
            />
                    

          </div>
         
         
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Buyer Address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
                    

          </div>
         
    
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="How many copy?"
              name="copy"
              value={copy}
              onChange={e => onInputChange(e)}
            />

          </div>
          <div className="form-group">
            <input
              type="numeric"
              className="form-control form-control-lg"
              placeholder="Enter Total Price"
              name="totalprice"
              value={totalprice}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-primary btn-block">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Buybooks;