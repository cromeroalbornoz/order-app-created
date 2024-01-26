
import { useState } from "react";
import Swal from "sweetalert2";

const initialUserForm = {
    username:'',
    dni:'',
    packages:'',
}
export const UserForm = ({ onSubmitForm, onCloseForm }) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const {username, dni, packages}= userForm;

    const  onInputChange = ({target}) => {
        //console.log(target.value)
        const { name, value} = target;
        setUserForm({
            ...userForm,
            [name]:value,
        })
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        if(!username || !dni || !packages){
            Swal.fire({
                title: "Error de confirmación",
                text: "Debe completar todos los campos del formulario",
                icon: "error"
                });
        }else{
            //actualizacion API de Hector
            //updateOrder(userForm)
        }

        console.log(userForm);

        setUserForm(initialUserForm);
    }

    return(
        <form onSubmit={onSubmit}>
            <input
            className="form-control my-3 w-80"
            placeholder="Nombre Transportista"
            name="username"
            value={username}
            onChange={ onInputChange }
            />
            <input
            className="form-control my-3 w-80"
            placeholder="DNI"
            name="dni"
            value={dni}
            onChange={ onInputChange }
            />
            <input
            className="form-control my-3 w-80"
            placeholder="Cantidad de Bultos"
            name="packages"
            value={packages}
            onChange={ onInputChange }
            />
            <button 
                className="btn btn-outline-primary" 
                type="submit">
                Guardar

            </button>
        </form>
    )
};
