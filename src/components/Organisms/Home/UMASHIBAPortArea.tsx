import React, { ReactNode, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "../../../css/Home/UMASHIBAPortArea.scss";
import {
  CHANGE_FOCUSED_AREA,
  CHANGE_HOME_FIRST_ARRIVED
} from "../../../redux/constants/homeTypes";
import { DispatchType } from "../../../redux/store";
import pink_design from "../../../statics/pink_design.svg";
import { useTypedSelector } from "../../../typing/redux/hooks";
import HomeDisappearAnimation from "../../Atomics/Home/HomeDisappearAnimation";
import HomeH1 from "../../Atomics/Home/HomeH1";


type AnimateAProps = JSX.IntrinsicElements['a'] & {
  children: ReactNode;
  AnimationComponent: React.VFC;
}


const AnimateA: React.VFC<AnimateAProps> = ({children, AnimationComponent,  ...rest}) => {
  const history = useHistory();

  const dispatch: DispatchType = useDispatch();
  const [isDisappearContent, changeIsDisappearContent] = useState(false);
  const floatThis = () => {
    dispatch({ type: CHANGE_FOCUSED_AREA, payload: "umashibaPort" });
  };

  const disappearContent = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    changeIsDisappearContent(true);
    
  };

  const homeArrivedFlagToTrue = () => {
    dispatch({ type: CHANGE_HOME_FIRST_ARRIVED, payload: false });
  };

  const onDisappearFC = () => {
    homeArrivedFlagToTrue();
    if (rest.href) {
      history.push(rest.href);
    } else {
      console.error("no href");
    }
  };

  return(
    <React.Fragment>
    <a
    {...rest}
    onClick={disappearContent}
    onMouseOver={floatThis}
  >
    {children}
    </a>
      {/* <HomeDisappearAnimation
      color="pink"
      isStartAnimation={isDisappearContent}
      animationEndFC={onDisappearFC}
    /> */}
    {isDisappearContent && <AnimationComponent  />}
    </React.Fragment>
  );
}

const UMASHIBAPortArea: React.FC = () => {
  const homeFirstArrived = useTypedSelector(
    state => state.homeState.homeFirstArrived
  );

  return (
      <AnimateA 
      href="/umashiba"
      id="umashiba-port-area"
      className="home-area home-area-cursor"
      AnimationComponent={HomeDisappearAnimation}
      >
        <>
          <HomeH1
            isAnimate={homeFirstArrived}
            className="umashiba-port-home-h1 home-area-cursor"
          >
            UMASHIBA Port
          </HomeH1>
          <img alt="UMASHIBA Portエリア背景" src={pink_design} />
        </>
      </AnimateA>
  );
};

export default UMASHIBAPortArea;
