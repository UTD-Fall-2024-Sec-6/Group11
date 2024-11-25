import NavBar from "./components/NavBar";
import HomePage from "./sections/HomePage/HomePage";
import LoginPage from "./sections/login/page";
import SignupPage from "./sections/signup/page";


export default function Home() {
  return (
    // this is where all our components will go
    <div className="App">
      <HomePage/>
      <LoginPage/>
      <SignupPage/>
    </div>
  );
}
