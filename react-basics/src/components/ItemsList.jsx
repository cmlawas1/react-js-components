import './Items.css';

//formats the list of items to be printed
export default function ItemsList(props) {
    let items = props.data;
    console.log(items);

    //prints in console which item was added to cart
    const addToCart = (id) => {
        console.log(items[id-1].name + " is successfully added to cart.");
    }

    //returns the header that is a flex item
    return(
        <>
            <div class = "flex-container">
                {
                    items.map((item) => {
                        return <><div class = "item-container"><img class="item-pic" src={item.image}/><p class="item-name">{item.name}</p><button class="add-to-cart" onClick={() => addToCart(item.id)}>Add to Cart</button></div></>
                    })
                }
            </div>
        </>
    )
}