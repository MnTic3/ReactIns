import React from 'react';
import ProductCard from 'components/ProductCard';
import aguila from 'media/Products/Aguila.png'
import costenia from 'media/Products/Costeña.png'
import poker from 'media/Products/Poker.png'

function Index() {
    return (
        <section>
            <h1 className="titlePage">Avaible Products</h1>
            <ul className="containerProducts">
                <ProductCard img={aguila} name='Aguila' qLikes='100' qComments='45' qViews='200' />
                <ProductCard img={poker} name='Poker' qLikes='300' qComments='145' qViews='500' />
                <ProductCard img={costenia} name='Costeña' qLikes='200' qComments='115' qViews='260' />
                <ProductCard img={costenia} name='Costeña' qLikes='200' qComments='115' qViews='260' />
                <ProductCard img={costenia} name='Costeña' qLikes='200' qComments='115' qViews='260' />
                <ProductCard img={costenia} name='Costeña' qLikes='200' qComments='115' qViews='260' />
            </ul>
        </section>
    );
};

export default Index;