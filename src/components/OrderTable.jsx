
import { OrderRow } from "./OrderRow";

export const OrderTable = ({ orders, onShowModal }) => (
  
  <>
  <table className="table table-striped table-hover my-1">
    <thead>
      <tr>
        <th>Id Pedido</th>
        <th>Estado</th>
        <th>Fecha</th>
        <th>Destino</th>
        <th>Origen</th>
        <th>Asignado</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order) => (
        <OrderRow key={order.id} order={order} onShowModal={onShowModal}/>
      ))}
    </tbody>
  </table>
  </>
   
);
