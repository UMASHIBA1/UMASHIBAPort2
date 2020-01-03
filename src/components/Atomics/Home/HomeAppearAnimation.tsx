import React, { useState } from "react";
import "../../../css/Home/HomeAppearAnimation.scss";

const HomeAppearAnimation: React.FC = () => {
  const [willUnmount, changeWillUnmount] = useState(false);

  const unmount = () => {
    changeWillUnmount(true);
  };

  return (
    <React.Fragment>
      {willUnmount ? null : (
        <div className="home-appear-animation">
          <div />
          <div />
          <div />
          <div />
          <div onAnimationEnd={unmount} />
        </div>
      )}
    </React.Fragment>
  );
};

export default HomeAppearAnimation;
