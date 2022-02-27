


const DeleteBtn = (props) => {
    const {del, itemCode} = props;
    console.log("::::::::::::::")
    return  (
        <button onClick={()=>del(itemCode)} > 삭제 </button>
    )
}

export default DeleteBtn;