// import React, { useState } from "react";
// import CanvasDraw from "react-canvas-draw";

// const CustomizeCloth = () => {
//   const [color, setColor] = useState("#000000");
//   const [canvasRef, setCanvasRef] = useState(null);

//   return (
//     <div className="flex flex-col items-center p-5 bg-gray-100 rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold mb-2">Sketch Your Cloth Design</h2>

//       {/* Drawing Canvas */}
//       <CanvasDraw
//         ref={(canvas) => setCanvasRef(canvas)}
//         brushColor={color}
//         brushRadius={3}
//         lazyRadius={1}
//         canvasWidth={600}
//         canvasHeight={400}
//         className="border border-gray-400 rounded"
//       />

//       {/* Controls */}
//       <div className="flex gap-3 mt-3">
//         <input
//           type="color"
//           value={color}
//           onChange={(e) => setColor(e.target.value)}
//           className="cursor-pointer"
//         />
//         <button
//           onClick={() => canvasRef?.clear()}
//           className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-700"
//         >
//           Clear
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomizeCloth;

///////////////////////////////////////////

import React, { useState } from "react";
import CanvasDraw from "react-canvas-draw";

const CustomizeCloth = () => {
  const [color, setColor] = useState("#000000");
  const [canvasRef, setCanvasRef] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setUploadedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Sketch Your Cloth Design</h2>

      {/* Uploaded Image Display */}
      {uploadedImage && (
        <img
          src={uploadedImage}
          alt="Uploaded Design"
          className="w-80 h-80 object-contain mb-3 border border-gray-300 rounded"
        />
      )}

      {/* Drawing Canvas */}
      <CanvasDraw
        ref={(canvas) => setCanvasRef(canvas)}
        brushColor={color}
        brushRadius={3}
        lazyRadius={1}
        canvasWidth={600}
        canvasHeight={400}
        className="border border-gray-400 rounded"
      />

      {/* Controls */}
      <div className="flex gap-3 mt-3">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="cursor-pointer"
        />
        <button
          onClick={() => canvasRef?.clear()}
          className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Clear
        </button>
      </div>

      {/* Upload Button */}
      <label className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-700">
        Upload Your Own Design
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default CustomizeCloth;


 