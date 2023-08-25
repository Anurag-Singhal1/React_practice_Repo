import './Item.css';

function Item(props){
    const itemName  = props.name;                 // props.xyz  kuch bhi de skte hai, same bhi

    // sb kuch ek single element ke andar hona chahiye : so, we use  <div> </div>
    return (
        <div>                                      
            <p className="nirma">{itemName}</p>
            {props.children}
        </div>
    );
};

export default Item;