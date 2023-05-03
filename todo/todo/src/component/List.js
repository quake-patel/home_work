import { RiDeleteBinLine } from 'react-icons/ri';


const List = (props) => {

    return (
        <div className="list-wrapper">
            <div className="list-text">
                <div>{props.item}</div>
                <button onClick={() => { props.deleteText(props.index) }} className='btn-delete'><RiDeleteBinLine /></button>
            </div>
        </div>
    )
}

export default List;