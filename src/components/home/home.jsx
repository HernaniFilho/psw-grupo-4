import React, { useContext, useEffect, useState } from 'react';
import itemsLoja from '../data/itemsLoja.json';
import {CarrinhoContext} from '../../context/CarrinhoContext.js';
import './home.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from '../Header/header.jsx';


function Produto(prod) {
    const {addToCarrinho, itemsCarrinho, removeFromCarrinho} = useContext(CarrinhoContext);
    const qtdeItemsCarrinho = itemsCarrinho[prod.id];
    return (
        <>
            <div className="card h-100">
                <img className="card-img-top" src={prod.imgUrl} alt=""></img>
                <div className="card-body d-flex flex-column justify-content-between align-items-stretch">
                    <h5 className="card-title">{prod.nome}</h5>
                    <p className="card-text">{prod.descricao}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">R${prod.preco}</small>
                        {qtdeItemsCarrinho === 0 ? ( /*Notação merda 2*/
                            <button type="button" className="btn btn-outline-primary" onClick={() => addToCarrinho(prod.id)}>Adicionar</button>
                        ) : 
                            <div className="d-flex align-items-center flex-column g-1">
                                <div className="d-flex align-items-center justify-content-between gap-3">
                                    <button type="button" className="btn btn-primary" onClick={() => removeFromCarrinho(prod.id)}>-</button>
                                    <span className="fs-5">{qtdeItemsCarrinho}</span>
                                    <button type="button" className="btn btn-primary" onClick={() => addToCarrinho(prod.id)}>+</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}


function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(itemsLoja);
    }, []);


    return(
        <>
            <Header></Header>
            <div className="py-4 px-2">
                <main>
                    <section className="container-fluid m-0">
                        <h2 className="mb-4 text-left">Loja</h2>
                        <div className="row g-3">
                            {items.map((item) => (
                                <div key="item.id" className="col-md-4 col-lg-3 d-flex">
                                    <Produto /*Notação de merda */ {...item}/> 
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
export default Home;