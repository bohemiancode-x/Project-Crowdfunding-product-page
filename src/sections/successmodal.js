import React from "react";
import ResponsiveModal from "react-responsive-modal";
import iconCheck from './iconcheck.svg';

const styles = {
    modal: {
      backgroundColor: "transparent",
      boxShadow: "none",
      display: "flex",
      overflow: "none",
      width: "100%",
      padding: "0",
      margin: "0",
      height: "100%",
      minWidth: "100%",
      justifyContent: "center"
    },
    overlay: {
      backgroundColor: "#1cccc",
      padding: 0
    },
    closeIcon: {
      fill: "#fff"
    }
  };

const SuccessModal = (props) => {
    const { setModalVisible, modalVisible } = props;
    return ( 
        <ResponsiveModal
        open={modalVisible}
        onClose={() => setModalVisible(false)}
        styles={styles}
        animationDuration={1000}
        focusTrapped={true}
        closeIconSize={40}
        showCloseIcon={true}
        >
            <div className="container">
                <img src={iconCheck} alt="" />
                <h2>Thanks for your support!</h2>
                <p>
                    Your pledge brings up one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once your campaign is completed.
                </p>
                <button onClick={() => {setModalVisible(false)}}>Got it!</button>
            </div>
        </ResponsiveModal>
     );
}
 
export default SuccessModal;