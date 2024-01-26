import React, { useState } from "react";
import { getOrder } from "./services/getOrder";
import { OrderTable } from "./components/OrderTable";
import { Navbar } from "./components/NavBar";
import { ModalForm } from "./components/ModalForm";
import { useAppContext } from "./context/orderContext";
import { UserForm } from "./components/UserForm";

export const OrderApp = () => {
  const orders = getOrder();
  const createdOrders = orders.filter(
    (item) => item.state && item.state.state === "CREATED"
  );

  const { userData, setUserDataContext } = useAppContext();

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/*Navbar*/}
      
        <Navbar />
      
      {/*Container*/}
      <div className="container">
        <div className="card my-3 p-1">
          <h2 className="display-6 card-header text-left">Pedidos Creados</h2>
          {createdOrders.length > 0 ? (
            <OrderTable orders={createdOrders} onShowModal={handleShowModal}/>
          ) : (
            <p className="my-3 p-1">No hay pedidos creados sin asignar.</p>
          )}
        </div>
      </div>
      
      {/*Pagination*/}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a
              className="page-link"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      {/* ModalForm */}
      <ModalForm showModal={showModal} handleClose={handleCloseModal} />
    </>
  );
};
