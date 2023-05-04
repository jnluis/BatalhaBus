import React, { useState } from "react";
import Slider from 'react-touch-drag-slider'

// function Home() {

//   return (
//     <>

//     </>
//   );
// }

// export default Home;

// function Home() {
//     const [position, setPosition] = useState(50);
  
//     function handleDrag(event) {
//       const boundingClientRect = event.currentTarget.getBoundingClientRect();
//       const { top, bottom } = boundingClientRect;
//       const mouseY = event.clientY;
//       const percent = ((mouseY - top) / (bottom - top)) * 100;
//       setPosition(percent);
//     }
  
//     return (
//       <div className="h-64 w-8 bg-gray-200 relative">
//         <div
//           className="h-full bg-blue-500 absolute left-0 right-0 top-0 bottom-0"
//           style={{ bottom: `${position}%` }}
//         ></div>
//         <div
//           className="w-8 h-8 bg-white border border-gray-500 rounded-full absolute top-0 left-0 right-0 bottom-0 mx-auto"
//           style={{ bottom: `${position}%` }}
//           draggable="true"
//           onDrag={handleDrag}
//         ></div>
//       </div>
//     );
  
  
// }

// export default Home;

// here we are importing some images
// but the Slider children can be an array of any element nodes, or your own components
import images from './images';

function Home() {
  return (
    <Slider className="bg-white"
      onSlideComplete={(i) => {
        console.log('finished dragging, current slide is', i)
      }}
      onSlideStart={(i) => {
        console.log('started dragging on slide', i)
      }}
      activeIndex={0}
      threshHold={100}
      transition={0.5}
      scaleOnDrag={true}
    >
      {images.map(({ url, title }, index) => (
        <img src={url} key={index} alt={title} />
      ))}
    </Slider>
  )
}

export default Home
