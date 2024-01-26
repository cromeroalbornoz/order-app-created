export const OrderRow = ({ order, onShowModal  }) => {
  return (
    <>
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.state.state}</td>
        <td>{order.state.created}</td>
        <td>{order.destination.description}</td>
        <td>
          {order.externalIDs.map((externalID) => externalID.source).join(", ")},{" "}
          {order.externalIDs.map((externalID) => externalID.idValue).join(", ")}
        </td>
        {/*Botón para abrir el modal con el form*/}
        <td>
          <button className="btn btn-primary btn-sm mx-1"
          onClick={() => onShowModal()}
          >Asignar</button>
        </td>
      </tr>
    </>
  );
};
