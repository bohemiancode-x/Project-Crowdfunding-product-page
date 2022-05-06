import React from "react";

const Aboutsection = () => {
    return ( 
        <div className="aboutpagewrapper">
            <div className="aboutpage">
            <h1>About this project</h1>
            <p>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>

            <div className="bamboostand">
                <h3>Bamboo Stand</h3>
                <h3>Pledge $25 or more</h3>
                <p>
                You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.
                </p>
                <h1>101 <span>left</span></h1>
                <button>Select Reward</button>
            </div>

            <div className="blackedition">
                <h3>Black Edition Stand</h3>
                <h3>Pledge $75 or more</h3>
                <p>
                    You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.
                </p>
                <h1>64 <span>left</span></h1>
                <button>Select Reward</button>
            </div>

            <div className="mahogany">
                <h3>Mahogany Special Edition</h3>
                <h3>Pledge $200 or more</h3>
                <p>
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.
                </p>
                <h1>0 <span>left</span></h1>
                <button>Out of Stock</button>
            </div>
          </div>
        </div>
     );
}
 
export default Aboutsection;