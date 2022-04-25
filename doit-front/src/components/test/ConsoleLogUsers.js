import { apiClient } from "../../providers/apiClient";

function ConsoleLogUsers() {
    const mostrarUsuarios = () => {
        console.log('mostrando usuarios');

        apiClient.get('/user').then((response) => {
            console.log(response.data);
        })
    }

    return (
        <button type="button" onClick={mostrarUsuarios}>mostrar usuarios</button>
    );
}

export default ConsoleLogUsers;