import chevron from "../icons/chevron.svg"

function Chevron({direction, onClick}) {

    let direct = null;
    switch (direction) {
        case 'left':
            direct = {transform: 'rotate(180deg)'};
            break
        case 'top':
            direct = {transform: 'rotate(270deg)'};
            break
        case 'bottom':
            direct = {transform: 'rotate(90deg)'};
            break
        default:
            break;
    }

    return (
        <button onClick={onClick} style={direct} type='button' className='gallery__chevron'>
            <img src={chevron} alt='gallery arrow'/>
        </button>)
}

export default Chevron;