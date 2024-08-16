import React from "react";
import './Producto.css'
function Producto({oferta}){
    

    return (
        <div  className=" ">
            <h1  className=" bg-celestico text-orange-500">Zapato de Tacon</h1>
           {
            oferta && <h2>Zapato en oferta</h2>
           }
            <h3>Talla 23</h3>
            <h4>Color negro</h4>
        </div>
    )

}

export default Producto