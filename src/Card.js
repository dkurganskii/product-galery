import React from 'react';

const Card = ({ product }) => {
    let title = JSON.stringify(product.title)
    let price = JSON.stringify(product.price)
    let priceMin = JSON.stringify(product.price_min)
    let priceMax = JSON.stringify(product.price_max)

    let variants = Object.keys(product['variants']).length;

    price = price.slice(0, -2)
    priceMin = priceMin.slice(0, -2)
    priceMax = priceMax.slice(0, -2)

    let name = /^[^-]*/.exec(title)
    name = name.toString().substring(1)

    let description = /\-(.*)/.exec(title)[1]
    description = description.toString().substring(0, description.length - 1)

    const isDiscount = price !== priceMax ? true : false

    const styles = {
        discountPrice: {
            color: 'orange',
            paddingRight: '5px',
            fontWeight: 'bold'
        },
        maxPrice: {
            color: 'grey',
            textDecoration: 'line-through',
            fontWeight: 'bold'
        },
        card: {
            maxHeight: '100%',
            maxWidth: '100%',
            minHeight: '100px'
        }
    }

    const PiceWithDiscount = () => {
        return (
            <span style={styles.discountPrice}>${price}</span>
        )
    }

    const MaxPrice = () => {
        return (
            <span style={styles.maxPrice}>${priceMax}</span>
        )
    }

    const ShowPrice = () => {
        if (isDiscount) {
            return (
                <span><PiceWithDiscount /> <MaxPrice /></span>
            )
        }
        return (
            <div><b>${price}</b></div>
        )
    }

    return (
        <div>
            <div className="card bg-light border-0 ">
                <div className="card-body">
                    <img className="mb-3" style={styles.card} src={product.featured_image} alt={product.name} />
                </div>
            </div>
            <div className='mb-5 mt-2' style={{ lineHeight: 1.6 }}>
                <p style={{ fontWeight: '600', fontSize: '18px', letterSpacing: '0px' }}>{name}</p>
                <p> {description}</p>
                <p> {variants} {variants > 1 ? 'Colors' : 'Color'} Available</p>
                <div><ShowPrice /></div>
            </div>
        </div>

    )
}
export default Card;