import React from "react";
import closemenu from './iconclosemenu.svg';

const mobilemodal = () => {
    return ( 
        <div className="mobilemodalwrapper">
            <div className="mobilemodal">
                <div className="modaltop">
                    <h2>Back this project</h2>
                    <img src={closemenu} alt="" />
                </div>
                <p>
                Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                </p>

                <div className="noreward">
                    <h3>Pledge with no reward</h3>
                    <p>
                        Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
                    </p>
            </div>

                <div className="bamboostand">
                    <h3>Bamboo Stand</h3>
                    <h3>Pledge $25 or more</h3>
                    <p>
                        You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.
                    </p>
                    <h1>101 <span>left</span></h1>
            </div>

            <div className="blackedition">
                <h3>Black Edition Stand</h3>
                <h3>Pledge $75 or more</h3>
                <p>
                    You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.
                </p>
                <h1>64 <span>left</span></h1>
            </div>

            <div className="mahogany">
                <h3>Mahogany Special Edition</h3>
                <h3>Pledge $200 or more</h3>
                <p>
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.
                </p>
                <h1>0 <span>left</span></h1>
            </div>
            </div>
        </div>
     );
}
 
export default mobilemodal;