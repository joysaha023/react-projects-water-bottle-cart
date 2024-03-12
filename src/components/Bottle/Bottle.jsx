import PropTypes from 'prop-types';
import './Bottle.css'

const Bottle = ({bottle, handleClickBottle}) => {
    const {name, img, price} = bottle;
    return (
        <div className='bottle'>
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() => handleClickBottle(bottle)}>Buy</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleClickBottle: PropTypes.func.isRequired
}

export default Bottle;