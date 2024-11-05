// import React, { useState } from 'react';

// const cameras = [
//   { id: 1, name: 'Camera 1 - Belt', password: 'belt' },
//   { id: 2, name: 'Camera 2 - Airport', password: 'airport' },
//   { id: 3, name: 'Camera 3 - Runway', password: 'runway' },
//   { id: 4, name: 'Camera 4 - AOCC', password: 'Aocc' },
// ];

// const LoginForm = ({ onLogin }) => {
//   const [selectedCamera, setSelectedCamera] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = () => {
//     const camera = cameras.find((cam) => cam.id === parseInt(selectedCamera));
//     if (camera && camera.password === password) {
//       onLogin(camera.id);
//       setErrorMessage('');
//     } else {
//       setErrorMessage('Incorrect camera or password.');
//     }
//   };

//   return (
//     <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
//       <h1 className="text-2xl font-bold text-center text-white mb-6">
//         CCTV Dashboard
//       </h1>
//       <div className="mb-4">
//         <label className="text-white mb-2 block">Select Camera</label>
//         <select
//           className="w-full p-2 bg-gray-700 text-white rounded"
//           value={selectedCamera}
//           onChange={(e) => setSelectedCamera(e.target.value)}
//         >
//           <option value="">Select a Camera</option>
//           {cameras.map((camera) => (
//             <option key={camera.id} value={camera.id}>
//               {camera.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="text-white mb-2 block">Password</label>
//         <input
//           type="password"
//           className="w-full p-2 bg-gray-700 text-white rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       {errorMessage && (
//         <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
//       )}
//       <button
//         className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
//         onClick={handleLogin}
//       >
//         Login
//       </button>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';

const cameras = [
  { id: 1, name: 'Camera 1 - Belt', password: '487609', videoSource: '/belt.mp4' },
  { id: 2, name: 'Camera 2 - Airport', password: '487609', videoSource: '/airport.mp4' },
  { id: 3, name: 'Camera 3 - Runway', password: '487609', videoSource: '/videos/runway.mp4' },
  { id: 4, name: 'Camera 4 - AOCC', password: '487609', videoSource: '/video/Aocc.mp4' },
];

const LoginForm = ({ onLogin }) => {
  const [selectedCamera, setSelectedCamera] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const camera = cameras.find((cam) => cam.id === parseInt(selectedCamera));
    if (camera && camera.password === password) {
      onLogin(camera);  // Pass the entire camera object
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect camera or password.');
    }
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
      <h1 className="text-2xl font-bold text-center text-white mb-6">
        CCTV Dashboard
      </h1>
      <div className="mb-4">
        <label className="text-white mb-2 block">Select Camera</label>
        <select
          className="w-full p-2 bg-gray-700 text-white rounded"
          value={selectedCamera}
          onChange={(e) => setSelectedCamera(e.target.value)}
        >
          <option value="">Select a Camera</option>
          {cameras.map((camera) => (
            <option key={camera.id} value={camera.id}>
              {camera.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="text-white mb-2 block">Password</label>
        <input
          type="password"
          className="w-full p-2 bg-gray-700 text-white rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
      )}
      <button
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
