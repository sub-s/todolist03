
import CheckboxItem from "./checkbox";
import DeleteBtn from "./delbtn";

const ItemList = (props) => {
    const {arrayText, deletBtn}  = props;
    console.log(deletBtn, "::::::::deletBtn");
    return (
        <ul>
            {arrayText.map((item)=>(
                <li key={item.id}>
                    <CheckboxItem checked={item.checked} />
                    {item.title}
                    <DeleteBtn del={deletBtn} itemCode={item.id} />
                </li>
            ))}
        </ul>
    )
}

export default ItemList;