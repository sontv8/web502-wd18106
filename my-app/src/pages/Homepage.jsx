import React from 'react'

const HomePage = ({ products }) => {
    console.log("Homepage data: ", products);
    return (
        <div>HomePage
            {products.map((item, index) => {
                return (
                    <div key={index + 1}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage