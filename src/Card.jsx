import cachorro from './assets/Foto-de-Cachorro-6.jpeg'

function Card(){


    return(
        <div className="card">
            <img className="card-image" src={cachorro} alt="cachorro" ></img>
            <h2 className="card-title">Mattheus</h2>
            <p className="card-text">Estudo Análise e Desenvolvimento de Sistemas e ando de skate</p>
            <button className="Button">Click Me</button>
        </div>
    );

}

export default Card