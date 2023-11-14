import Dashboard from "../screens/Dashboard/Dashboard";
import SelectedItem from "../screens/Dashboard/SelectedItem";
import Login from "../screens/Login/Login";
import Onboarding from "../screens/Onboarding/Onboarding";
import Signup from "../screens/Sign Up/Signup";

export const screens: { name: string; component: any }[] = [
  {
    name: "Onboarding",
    component: Onboarding,
  },
  {
    name: "Dashboard",
    component: Dashboard,
  },
  {
    name: "Login",
    component: Login,
  },
  {
    name: "Signup",
    component: Signup,
  },
  {
    name: "SelectedItem",
    component: SelectedItem,
  },
];
