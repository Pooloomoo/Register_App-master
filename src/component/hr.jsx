function hr(props) {
    const {index, data} = props;

    function changeItem(event) {
        console.log("Change Item " + index);
        const newItem = {
            id : data.id,
            item: event.target.value,
            createAt: data.createAt,
        }
        props.changeHandler(index, newItem);
    }

    function deleteRow(event) {
        console.log("Delete Row " + index);
        props.deleteHandler(index);
    }

    // let status = index % 2;
    return(
        <tr>
            <td>{data.id}</td>
            <td>{data.item1}</td>
            <td>{data.item2}</td>
            <td>{data.item3}</td>
            <td>{data.item4}</td>
            <td>
            <button className="btn btn-warning text-light d-md-block">EDIT</button>
            <button className="btn btn-danger btn-sm" onClick={deleteRow}>Delete</button></td>
        </tr>
    )
}

export default hr;