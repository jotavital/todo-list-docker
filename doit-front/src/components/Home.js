import { apiClient } from '../providers/apiClient';

function Home() {
    function logar() {
        console.log("logando");

        apiClient.get('/user').then(response => {
            console.log(response);
        });
    }

    return (

        <>
            <h1>home</h1>

            <button onClick={logar}>testar rota logado</button>
        </>
    );
}

export default Home;