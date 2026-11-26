import {useState} from 'react'
function Nuevo()
{
    const [contador, setContador] = useState(0);
    const sumar=()=>
    {
        setContador(contador + 1);
    }
    const restar=()=>
    {
        setContador(contador - 1);
    }
    return(
        <div>
            <h1>Contador de Johann Edibert Quispe Flores</h1>
            <h2>{contador}</h2>
            <button onClick={sumar}>
                Clik para aumentar el contador
            </button>
            <br/>
            <button onClick={restar}>
                Clik para disminuir el contador
            </button>
        </div>
    );
}
export default Nuevo;