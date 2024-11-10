import Login from "./Pages/Login/Login.tsx"
import SignUp from "./Pages/Sign Up/SignUp.tsx"
import Home from "./Pages/Home/Home.tsx"
import AllChatRooms from "./Pages/Home/AllChatRooms.tsx"
import DesignerPage from "./Pages/Home/DesignerPage.tsx"
import DeveloperPage from "./Pages/Home/DeveloperPage.tsx"
import FlexPage from "./Pages/Home/FlexPage.tsx"
import DSApage from "./Pages/Home/DSApage.tsx"
import JobPage from "./Pages/Home/JobPage.tsx"
import SideBar from "./Pages/Home/SideBar.tsx"
import ProfilePage from "./Pages/Home/ProfilePage.tsx"
import PostOptions from "./Pages/Home/PostOptions.tsx"
import InboxPage from "./Pages/Home/InboxPage.tsx"
import PostedOpportunities from "./Pages/Home/SubProfilePages/PostedOpportunities.tsx"
import Flexes from "./Pages/Home/SubProfilePages/Flexes.tsx"
import PostedJobs from "./Pages/Home/SubProfilePages/PostedJobs.tsx"
import YourChatrooms from "./Pages/Home/SubProfilePages/YourChatrooms.tsx"
import OthersProfile from "./Pages/Home/OthersProfile.tsx"


import { Toaster } from "react-hot-toast"
import { Navigate, Route, Routes } from "react-router-dom"
import { useAuthContext } from "./context/AuthContext"

// function App() {
  
//   const {authUser} = useAuthContext()

//   return (
//     <div className="p-4 h-screen flex items-center bg-[#121212] justify-center">
//       <Routes>
//         <Route path='/' element={authUser ? <Home/>:<Navigate to="/login"/>} />
//         <Route path='/login' element={authUser ? <Navigate to="/"/>:<Login/>} />
//         <Route path='/signup' element={authUser ? <Navigate to="/"/>:<SignUp/>} />
//       </Routes>
//       <Toaster/>
//     </div>
//   )
// }

function App(){
  return (
    <div className="bg-[#121212]  min-h-screen">
      <Routes>
        <Route path="/" element={<SideBar/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/home/allchatrooms" element={<AllChatRooms/>}/>
          <Route path="/developer" element={<DeveloperPage/>}/>
          <Route path="/designer" element={<DesignerPage/>}/>
          <Route path="/flex" element={<FlexPage/>}/>
          <Route path="/dsa" element={<DSApage/>}/>
          <Route path="/job" element={<JobPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}>
            <Route path="/profile/postedopportunities" element={<PostedOpportunities/>}/>
            <Route path="/profile/postedflexes" element={<Flexes/>}/>
            <Route path="/profile/postedjobs" element={<PostedJobs/>}/>
            <Route path="/profile/yourchatrooms" element={<YourChatrooms/>}/>
          </Route>
          <Route path="/postoptions" element={<PostOptions/>}/>  
          <Route path="/inbox" element={<InboxPage/>}/>
          <Route path="/profile/:username" element={<OthersProfile/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App

