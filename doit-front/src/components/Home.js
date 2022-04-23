import { apiClient } from '../providers/apiClient';

function Home() {
    function logar() {

        apiClient.get('/user').then(response => {
            console.log(localStorage.getItem('isUserLogged') === 'true');
        });
    }

    return (

        <>
            <h1>home</h1>

            <h2>{localStorage.getItem('isUserLogged')}</h2>
            <button onClick={logar}>testar rota logado</button>
        </>
    );
}

export default Home;