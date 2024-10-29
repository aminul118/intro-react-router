import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className="text-center space-y-4">
      <Header ></Header>
      <h1>This is the home components</h1>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
