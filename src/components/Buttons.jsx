import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Buttons = ({text, onClick}) =>{
    return(
        <>
            <section className="btns__left-right-arrow">
                <FaChevronLeft className="left" onClick={() => onClick('left')} />
                <FaChevronRight className="right" onClick={() => onClick('right')} />
            </section>
            <button type="button" className="btns__btn" onClick={onClick}>{text}</button>
        </>
    )
}

export default Buttons;