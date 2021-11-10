import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Book = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            {product.name}
        </div>
    );
};

export default Book;