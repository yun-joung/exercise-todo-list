import './App.css';
import React from 'react'
import shortid from 'shortid'

function App() {
   const [tarea, setTarea] = React.useState ('')
   const [lista, setlista] = React.useState ([])
   const [edita, setEdita] = React.useState (false)

   const agregarTarea = e => {
    e.preventDefault()
    if(!tarea.trim()){
        console.log('Elmento vacio')
            return
    }
        setlista ([
            ...lista,
            {tarea, id:shortid.generate(), nameLista:tarea}
        ])
        setTarea('')
   }
   const elimiarLista = id => {
       const arrayNew = (lista.filter(item => item.id !== id))
       setlista(arrayNew)
   }
    return (
        <div className="container ">
            <form onSubmit={agregarTarea}>
                <div className="form-row center">
                    <div className="col-10 mb-5 mt-5 ">
                        <h1 className="center">Todos Lista</h1>
                        <input type="text" className="form-control" placeholder="Ingresar tu tarea" 
                        onChange={e => setTarea(e.target.value)}
                        value={tarea} 
                        />
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Agregar Tarea</button>
                    </div>
                </div>
            </form>

            <div className="row center">
                <div className="col-10">
                    <ul className="list-group">
                        {lista.map(item => (
                           <li className="list-group-item" key={item.id}>{item.nameLista}
                           <button type="button" className="btn btn-outline-primary float-right"
                           onClick ={() => elimiarLista(item.id)}>X</button>
                           </li>
                        ))}
                        {lista.length === 0 ? (<li className="list-group-item" >No hay Tarea</li>) :  <li className="list-group-item" >Numero de Tarea:{lista.length}</li>
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default App;
