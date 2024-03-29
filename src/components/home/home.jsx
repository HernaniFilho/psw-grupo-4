import React, { useEffect, useState } from 'react';
import itemsLoja from '../data/itemsLoja.json';
import './home.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from '../Header/header.jsx';
import Produto from '../Card/card.jsx';

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