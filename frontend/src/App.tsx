import Login from "./Pages/Login/Login.tsx";
import SignUp from "./Pages/Sign Up/SignUp.tsx";
import Home from "./Pages/Home/Home.tsx";
import AllChatRooms from "./Pages/Home/AllChatRooms.tsx";
import DesignerPage from "./Pages/Home/DesignerPage.tsx";
import DeveloperPage from "./Pages/Home/DeveloperPage.tsx";
import FlexPage from "./Pages/Home/FlexPage.tsx";
import DSApage from "./Pages/Home/DSApage.tsx";
import JobPage from "./Pages/Home/JobPage.tsx";
import SideBar from "./Pages/Home/SideBar.tsx";
import ProfilePage from "./Pages/Home/ProfilePage.tsx";
import PostOptions from "./Pages/Home/PostOptions.tsx";
import InboxPage from "./Pages/Home/InboxPage.tsx";
import PostedOpportunities from "./Pages/Home/SubProfilePages/PostedOpportunities.tsx";
import Flexes from "./Pages/Home/SubProfilePages/Flexes.tsx";
import PostedJobs from "./Pages/Home/SubProfilePages/PostedJobs.tsx";
import YourChatrooms from "./Pages/Home/SubProfilePages/YourChatrooms.tsx";
import OthersProfile from "./Pages/Home/OthersProfile.tsx";
import DevOpptur from "./Pages/Home/Specific Post Pages/DevOpptur.tsx";
import DesignOpptur from "./Pages/Home/Specific Post Pages/DesignOpptur.tsx";
import DsaPost from "./Pages/Home/Specific Post Pages/DsaPost.tsx";
import FlexPost from "./Pages/Home/Specific Post Pages/FlexPost.tsx";
import JobPost from "./Pages/Home/Specific Post Pages/JobPost.tsx";

import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import DeveloperView from "./Pages/Home/Specific View Pages/DeveloperView.tsx";
import DesignView from "./Pages/Home/Specific View Pages/DesignView.tsx";
import FlexView from "./Pages/Home/Specific View Pages/FlexView.tsx";
import DSAview from "./Pages/Home/Specific View Pages/DSAview.tsx";

// function App() {

//   const {authUser} = useAuthContext()

//   return (
//     <div className="p-4 h-screen flex items-center bg-[#121212] justify-center">
//       <Routes>
//         <Route path='/' element={authUser ? <Home/>:<Navigate to="/login"/>} />
//       </Routes>
//     </div>
//   )
// }

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="bg-[#121212] min-h-screen">
      <Routes>
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />

        <Route
          path="/"
          element={authUser ? <SideBar /> : <Navigate to="/login" />}
        >
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/home/allchatrooms"
            element={authUser ? <AllChatRooms /> : <Navigate to="/login" />}
          />
          <Route
            path="/developer"
            element={authUser ? <DeveloperPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/developer/:developerOpportunity_id"
            element={authUser ? <DeveloperView /> : <Navigate to="/login" />}
          />
          <Route
            path="/designer"
            element={authUser ? <DesignerPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/designer/:designerOpportunity_id"
            element={authUser ? <DesignView /> : <Navigate to="/login" />}
          />
          <Route
            path="/flex"
            element={authUser ? <FlexPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/flex/:flex_id"
            element={authUser ? <FlexView /> : <Navigate to="/login" />}
          />
          <Route
            path="/dsa"
            element={authUser ? <DSApage /> : <Navigate to="/login" />}
          />
          <Route
            path="/dsa/:dsaStuff_id"
            element={authUser ? <DSAview /> : <Navigate to="/login" />}
          />
          <Route
            path="/job"
            element={authUser ? <JobPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
          >
            <Route
              path="/profile/postedopportunities"
              element={
                authUser ? <PostedOpportunities /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/profile/postedflexes"
              element={authUser ? <Flexes /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile/postedjobs"
              element={authUser ? <PostedJobs /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile/yourchatrooms"
              element={authUser ? <YourChatrooms /> : <Navigate to="/login" />}
            />
          </Route>
          <Route
            path="/postoptions"
            element={authUser ? <PostOptions /> : <Navigate to="/login" />}
          />
          <Route
            path="/postoptions/DevOpptur"
            element={authUser ? <DevOpptur /> : <Navigate to="/login" />}
          />
          <Route
            path="/postoptions/DesginOpptur"
            element={authUser ? <DesignOpptur /> : <Navigate to="/login" />}
          />
          <Route
            path="/postoptions/DsaPost"
            element={authUser ? <DsaPost /> : <Navigate to="/login" />}
          />
          <Route
            path="/postoptions/FlexPost"
            element={authUser ? <FlexPost /> : <Navigate to="/login" />}
          />
          <Route
            path="/inbox"
            element={authUser ? <InboxPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile/:username"
            element={authUser ? <OthersProfile /> : <Navigate to="/login" />}
          />
          <Route
            path="/postoptions/JobPost"
            element={authUser ? <JobPost /> : <Navigate to="/login" />}
          />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
