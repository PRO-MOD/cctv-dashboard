// import React, { useState } from 'react';
// import LoginForm from './components/LoginForm';
// import VideoPlayer from './components/VideoPlayer';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#420000] to-[#7a0000] flex items-center justify-center">
//       {!isAuthenticated ? (
//         <LoginForm onLogin={handleLogin} />
//       ) : (
//         <VideoPlayer onLogout={handleLogout} />
//       )}
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState(null);

  const handleLogin = (camera) => {
    setIsAuthenticated(true);
    setSelectedCamera(camera);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSelectedCamera(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#420000] to-[#7a0000] flex items-center justify-center">
      {!isAuthenticated ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <VideoPlayer onLogout={handleLogout} cameraName={selectedCamera.name} videoSource={selectedCamera.videoSource} />
      )}
    </div>
  );
};

export default App;
