import React, { useState } from 'react'
import Modal from './modal'
import closemodal from './iconclosemodal.svg';
import SuccessModal from './successmodal';

const SetModal = ({openModal, setOpenModal}) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div>
            <Modal open={openModal}>
            <div className="mobilemodalwrapper">
                <div className="mobilemodal">
                    <div className="modaltop">
                        <h2>Back this project</h2>
                        <img onClick={() => setOpenModal(false)}  src={closemodal} alt="" />
                    </div>
                    <p>
                    Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                    </p>

                    
                    <div className="noreward">
                    
                        <div className="input">
                            <input className='radio' name='radio' type="radio" />
                            <h3>Pledge with no reward</h3>
                        </div>
                        
                        <p>
                            Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
                        </p>
                    </div>

                    <div className="bamboostand">
                    <div className="input">
                            <input className='radio' name='radio'  type="radio" />
                            <div className="titles">
                            <h3>Bamboo Stand</h3>
                            <h3>Pledge $25 or more</h3>
                            </div>
                        </div>
                    
                        <p>
                            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.
                        </p>
                        <h1>101 <span>left</span></h1>
                        <div className="enterpledge">
                            <span></span>
                            <p>Enter your pledge</p>
                            <div className="buttons">
                                <input type="number" placeholder='$25' />
                                <button onClick={() => {setModalVisible(true)}}>Continue</button>
                            </div>
                        </div>
                     </div>

                <div className="blackedition">
                    <div className="input">
                    <input className='radio' name='radio'  type="radio" />
                    <div className="titles">
                    <h3>Black Edition Stand</h3>
                    <h3>Pledge $75 or more</h3>
                    </div>
                    </div>
                    
                    <p>
                        You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.
                    </p>
                    <h1>64 <span>left</span></h1>
                    <div className="enterpledge">
                            <span></span>
                            <p>Enter your pledge</p>
                            <div className="buttons">
                                <input type="number" placeholder='$75' />
                                <button>Continue</button>
                            </div>
                    </div>
                </div>

                <div className="mahogany">
                    <div className="input">
                        <input className='radio' name='radio'  type="radio" disabled />
                        <div className="titles">
                            <h3>Mahogany Special    Edition</h3>
                            <h3>Pledge $200 or more</h3>
                        </div>
                    </div>
                    
                    <p>
                        You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.
                    </p>
                    <h1>0 <span>left</span></h1>
                </div>
                    

                 
                </div>
             </div>
            </Modal>
            <SuccessModal
                 modalVisible={modalVisible}
                setModalVisible={setModalVisible}/>
            
        </div>
     );
}
 
export default SetModal;

