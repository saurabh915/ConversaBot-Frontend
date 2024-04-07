import React, { useRef, useState } from "react";
import "./chatbot.css";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
const ChatBot = () => {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [ordersl, setOrdersl] = useState([
    { orderNumber: "001", orderDate: "2024-04-01", deliveryDate: "2024-04-10" },
    { orderNumber: "002", orderDate: "2024-04-02", deliveryDate: "2024-04-12" },
    { orderNumber: "003", orderDate: "2024-04-03", deliveryDate: "2024-04-15" },
  ]);
  const btnref = useRef();
  const inptref = useRef();
  const [inputText, setInputText] = useState("");
  const [orders, setOrders] = useState(false);
  const [account, setAccount] = useState(false);
  const [cart, setCart] = useState(false);
  const navigate = useNavigate();
  const handleIconClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = (event) => {
    setDetails({ ...details, [event.target.id]: inputText });
    inptref.current.disabled = true;
    setInputText("");
    btnref.current.disabled = true;
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const ManageOrder = () => {
    setAccount(false);
    setOrders(true);
    setCart(false);
  };
  const ManageAccount = () => {
    setAccount(true);
    setOrders(false);
    setCart(false);
  };
  const ManageCart = () => {
    setAccount(false);
    setOrders(false);
    setCart(true);
  };

  const [details, setDetails] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
  });

  // Function to handle edit
  const handleEdit = (field) => {
    let f1 = document.getElementById("chatfield");
    btnref.current.id = field;
    btnref.current.disabled = false;
    f1.focus();
    f1.disabled = false;
  };

  return (
    <>
      <div className="chatbot-icon" onClick={handleIconClick}></div>
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">CONVERSABOT</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                >
                  X
                </button>
              </div>
              <div className="modal-body">
                <div className="chatbot-messages">
                  <div className="category">
                    <button className="btn btn-primary" onClick={ManageOrder}>
                      Manange Orders
                    </button>
                    <button className="btn btn-primary" onClick={ManageAccount}>
                      Manage Account
                    </button>
                    <button className="btn btn-primary" onClick={ManageCart}>
                      Manage Cart
                    </button>
                  </div>

                  {orders ? (
                    <div>
                      <h4>Order list</h4>
                      <table className="orders-table">
                        <thead>
                          <tr>
                            <th>Order Number</th>
                            <th>Order Date</th>
                            <th>Delivery Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ordersl.map((order, index) => (
                            <tr key={index}>
                              <td>{order.orderNumber}</td>
                              <td>{order.orderDate}</td>
                              <td>{order.deliveryDate}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : account ? (
                    <div className="container">
                      <h4>Account Details</h4>
                      <div className="field">
                        <p>
                          <strong>Name : </strong> {details.name}
                        </p>

                        <div onClick={() => handleEdit("name")}>
                          <EditIcon />
                        </div>
                      </div>
                      <div className="field">
                        <p>
                          <strong>Email : </strong> {details.email}
                        </p>

                        <div onClick={() => handleEdit("email")}>
                          <EditIcon />
                        </div>
                      </div>
                      <div className="field">
                        <p>
                          <strong>Phone Number : </strong> {details.phoneNumber}
                        </p>

                        <div onClick={() => handleEdit("phoneNumber")}>
                          <EditIcon />
                        </div>
                      </div>
                    </div>
                  ) : cart ? (
                    <div>cart</div>
                  ) : null}
                </div>

               {account?
                <div className="chatbot-input mt-3">
                <input
                  disabled={true}
                  ref={inptref}
                  type="text"
                  value={inputText}
                  id="chatfield"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Edit selected field details"
                />

                <button
                  ref={btnref}
                  id="sendbtn"
                  onClick={handleSendMessage}
                  className=" btn-primary ml-2"
                >
                  Send
                </button>
              </div>:null}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
