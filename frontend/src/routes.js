/*!
=========================================================
* Material Dashboard React - v1.10.0
=========================================================
* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
import UserProfile from "./views/UserProfile/UserProfile.js";
// import TableList from "./views/TableList/TableList.js";
// import Typography from "./views/Typography/Typography.js";
// import Icons from "./views/Icons/Icons.js";
// import Maps from "./views/Maps/Maps.js";
// import NotificationsPage from "./views/Notifications/Notifications.js";
// import UpgradeToPro from "./views/UpgradeToPro/UpgradeToPro.js";
import CardUI from "./components/CardUI";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    //name: "Asset Labs",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  
  // {
  //   path: "/inventory-reports",
  //   //name: "Reports",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin",
  // },
  {
    path: "/assets",
    //name: "Messages",
    icon: LibraryBooks,
    component: CardUI,
    layout: "/admin",
  },
  {
    path: "/fancy-add-item",
    //name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Invoices",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   //name: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/asset-labs-support",
  //   //name: "Asset Labs Support",
  //   icon: Language,
  //   component: NotificationsPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   //name: "Upgrade to Pro?",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;