// "use client";
// import React from "react";
// import dynamic from "next/dynamic";

// const AnimatedNumbers = dynamic(
//   () => {
//     return import("react-animated-numbers");
//   },
//   { ssr: false }
// );

// const achievementsList = [
//   {
//     metric: "Projects",
//     value: "100",
//     postfix: "+",
//   },
//   {
//     prefix: "~",
//     metric: "Users",
//     value: "100,000",
//   },
//   {
//     metric: "Awards",
//     value: "7",
//   },
//   {
//     metric: "Years",
//     value: "5",
//   },
// ];

// const AchievementsSection = () => {
//   return (
//     <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//       <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
//         {achievementsList.map((achievement, index) => {
//           return (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
//             >
//               <h2 className="text-white text-4xl font-bold flex flex-row">
//                 {achievement.prefix}
//                 <AnimatedNumbers
//                includeComma
//                animateToNumber={achievement.value}
//                fontStyle={{ fontSize: 40 }}
//                locale="en-US"
//                configs={[
//                  { mass: 1, tension: 220, friction: 100 },
//                  { mass: 1, tension: 180, friction: 130 },
//                  { mass: 1, tension: 280, friction: 90 },
//                  { mass: 1, tension: 180, friction: 135 },
//                  { mass: 1, tension: 260, friction: 100 },
//                  { mass: 1, tension: 210, friction: 180 },
//                ]}

//                 />
//                 {achievement.postfix}
//                 {console.log(achievement.value )}
//               </h2>
//               <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AchievementsSection;
"use client";
import React from "react";
import dynamic from "next/dynamic";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

// const AnimatedNumbers = dynamic(
//   () => {
//     return import AnimatedNumbers from 'react-spring'
//   },
//   { ssr: false }
// );

// import {useSpring, animated} from 'react-spring'

// function Number({n}){
// const {number} = AnimatedNumbers.useSpring({
//   from : { number: 0},
//   number: n,
//   delay: 200,
//   config: { mass:1, tension: 20, friction: 10},
// });

// return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
// }

const achievementsList = [
  {
    metric: "Personal Projects",
    value: 10,
    postfix: "+",
  },
  // {
  //   prefix: "~",
  //   metric: "Users",
  //   value: "100,000",
  // },
  // {
  //   metric: "Awards",
  //   value: "7",
  // },
  {
    metric: "Years in Software Industry",
    value: 5,
    postfix: "+",
  },

  {
    metric: "Git Commits ",
    value: 1000,
    postfix: "+",
  },
  {
    metric: "Companies Associated ",
    value: 3,
    postfix: "",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <h2 className="text-4xl font-bold text-white mb-4 pb-4">Lets Crunch Some Numbers</h2>
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div className="sm:border-[#33353F] sm:border rounded-md py-8  flex  flex-wrap items-center justify-center  gap-8">
            {achievementsList.map((achievement, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center  sm:my-0 w-50 mx-4 my-4 border-2 w-80 border-slate-400 border-solid p-4 rounded-lg "
                >
                  <h2 className="text-white text-4xl font-bold flex flex-row">
                    {/* <Number n={achievement.value}/> */}
                    {isVisible ? (
                      <CountUp end={achievement.value} />
                    ) : null}{" "}
                    {achievement.postfix}
                  </h2>
                  <p className="text-[#ADB7BE] text-base">
                    {achievement.metric}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default AchievementsSection;
