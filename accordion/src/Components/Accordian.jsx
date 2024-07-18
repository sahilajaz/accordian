import data from "../Data"
import { useState } from "react"

const Accordian = () => {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setMultipleSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    const handleSingleSelection = (id) => {
        const checkingId = id === selected ? null : id
        setSelected(checkingId)
    }

    const settingMultipleSelection = () => {
        setMultipleSelection(prevSelection => !prevSelection)
    }

    const handleMultipleSelection = (id) => {
        const cpyArr = [...multiple]
        const currentIdIndex = cpyArr.indexOf(id)
        currentIdIndex === -1 ? cpyArr.push(id) : cpyArr.splice(currentIdIndex, 1)
        setMultiple(cpyArr)
    }

    const dataArray = data.map((el) => 
        <div className="items" key={el.id}>
            <div className="title" onClick={enableMultiSelection ? () => handleMultipleSelection(el.id)
                : () => handleSingleSelection(el.id)}>
                <h3>{el.question}</h3>
                <span>+</span>
            </div>
            {
                enableMultiSelection ? (
                    multiple.indexOf(el.id) !== -1 && (
                        <div className="content">{el.answer}</div>
                    )
                ) : (
                    selected === el.id && (
                        <div className="content">{el.answer}</div>
                    )
                )
            }
        </div>
    )

    return (
        <div className="wrapper">
            <button className="selectionBtn" onClick={settingMultipleSelection}>
                {enableMultiSelection ? "Enable single Selection" : "Enable multiple Selection"}
            </button>
            <div className="accordian">
                {dataArray}
            </div>
        </div>
    )
}

export default Accordian
