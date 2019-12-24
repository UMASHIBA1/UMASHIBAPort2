// import React, { useEffect, useState } from "react";

const ColorfulBackground: React.FC = () => {
//   const [renderFlag, changeRenderFlag] = useState(true);

//   useEffect(() => {
//     const timeFlag = setInterval(() => {
//       changeRenderFlag(!renderFlag);
//     }, 300);
//     return () => {
//       clearInterval(timeFlag);
//     };
//   });

  const locationsList = [...Array(3001)]
    .map((value, index) => index - 500)
    .filter(value => {
      if (value % 50 === 0) {
        return true;
      } else {
        return false;
      }
    });

  const getRandomIndex = () => {
    return Math.floor(Math.random() * Math.floor(locationsList.length));
  };

  const createNewD = () => {
    const ll = locationsList;
    const gri = getRandomIndex;
    return `M ${ll[gri()]} ${ll[gri()]} L ${ll[gri()]} ${ll[gri()]} L ${
      ll[gri()]
    } ${ll[gri()]}`;
  };

  const getRandomColor = () => {
    const colors = [
      "--purple-color",
      "--yellow-color",
      "--blue-color",
      "--pink-color"
    ];
    return colors[Math.floor(Math.random() * Math.floor(colors.length))];
  };

  return (
    <div className="maximum-expand colorful-background">
      <svg className="maximum-expand colorful-bg-svg">
        {[...Array(50)].map(() => {
          console.log(createNewD());
          return (
            <path
              d={createNewD()}
              fill="none"
              stroke={`var(${getRandomColor()})`}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default ColorfulBackground;
