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
            <td><input type="text" className="form-control" value={data.item1} onChange={changeItem} ></input></td>
            <td><input type="text" className="form-control" value={data.item2} onChange={changeItem} ></input></td>
            <td><input type="text" className="form-control" value={data.item3} onChange={changeItem} ></input></td>
            <td><input type="text" className="form-control" value={data.item4} onChange={changeItem} ></input></td>
            <td><input type="text" className="form-control" value={data.item5} onChange={changeItem} ></input></td>
            <td><input type="text" className="form-control" value={data.item6} onChange={changeItem} ></input></td>
            <td><input type="text" className="form-control" value={data.item7} onChange={changeItem} ></input></td>
            <td>
            <button className="btn btn-danger btn-sm" onClick={deleteRow}>Delete</button></td>
        </tr>
    )
}

export default hr;