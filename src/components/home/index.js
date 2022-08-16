import { Link, Routes, Route } from "react-router-dom";

import OwnUserProfile from '../user';

function Home() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>
        <Routes>
          {/* <Route path=":id" element={<UserProfile />} /> */}
          <Route path="me" element={<OwnUserProfile />} />
        </Routes>
    </div>
  )
}

// const Home = () => {
//     return (
//       <div>This is home page</div>
//     )
// }

export default Home;
