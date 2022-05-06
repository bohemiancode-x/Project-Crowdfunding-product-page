import React, { useState } from "react";
import SetModal from "./setmodal";
import mastercraftlogo from './logomastercraft.svg'
import iconbookmark from './iconbookmark.svg'

const Sectionone = () => {
const [openModal, setOpenModal] = useState(false);

    return ( 
        <div className="Sectionone">
            {" "}
            {openModal && openModal && ( <SetModal
          openModal={openModal}
          setOpenModal={() => setOpenModal(false)}
             />
            )}

            <div className="mastercraft">
                <div className="mastercraftlogo"><img src={mastercraftlogo} alt="" /></div>
                <h1> Mastercraft Bamboo Monitor Riser</h1>
                <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                <div className="buttons">
                    <button  onClick={() => setOpenModal(true)}>Back this project</button>
                    <span className="bookmark"><img src={iconbookmark} alt="" /></span>
                </div>
            </div>
            <div className="stats">
                <div>
                    <h1>$89,914</h1>
                    <p>of $100,000 backed</p>
                </div>
                <span></span>
                <div>
                    <h1>5,007</h1>
                    <p>total backers</p>
                </div>
                <span></span>
                <div>
                    <h1>56</h1>
                    <p>days left</p>
                </div>
                <span className="progress"><div className="length"></div></span>
            </div>
        </div>
     );
}
 
export default Sectionone;