import { createRoot } from 'react-dom/client';

let nama;
const Welcome = props => {
    return <h1>Selamat datang {props.nama}</h1>;
};

const App = function () {
    return nama == null ? <button>Login</button> : <Welcome nama={nama} />;
};

const app = document.getElementById('app');

createRoot(app).render(<App />);
