import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaHome,
  FaBlog,
  FaTools,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { BiLogIn } from "react-icons/bi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import {
  MdInfo,
  MdNotificationImportant,
  MdNotifications,
  MdOutlineNotificationImportant,
} from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setReduxUserData } from "../../redux/userSlice";

type Anchor = "top" | "left" | "bottom" | "right";

const icons = [
  <FaHome />,
  <MdNotifications />,
  <FaBlog />,
  <BsFillPersonCheckFill />,
  <FaTools />,
  <FaSignInAlt />,
];

const icons2 = [<MdInfo />, <HiPhone />];

export default function Burger() {
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    right: false,
  });

  // Handling Log-in-out click
  const dispatch = useDispatch();
  const handleClick = (text: any) => {
    console.log(text);
    if (text === "Log Out") {
      dispatch(setReduxUserData({}));
    }
  };

  const userId = useSelector((state: any) => state?.userSlice?.userData?.id);

  const linkRoutes = [
    "/repair",
    "/notifications",
    "/repair/blogs",
    "/repair/professionals",
    "/repair/partpurja",
    "/login",
  ];

  const linkRoutes2 = ["/about", "/contact"];

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "Home",
          "Notification",
          "Blog",
          "Professionals",
          "Part Purja",
          userId ? "Log Out" : "Login",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link href={`${linkRoutes[index]}`}>
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  <div className="text-xl text-[var(--primary-color)] ml-2">
                    {icons[index]}
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  onClick={() => handleClick(text)}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["About Us", "Contact Us"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link href={`${linkRoutes2[index]}`}>
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  <div className="text-xl text-[var(--primary-color)] ml-2">
                    {icons2[index]}
                  </div>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="md:hidden text-[var(--primary-color)]">
      {(["right"] as const).map(
        (
          anchor //modified from original snippet
        ) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <div className="border-2 border-[var(--primary-color)] p-1 rounded-sm bg-[#2591b212]">
                <GiHamburgerMenu />
              </div>
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        )
      )}
    </div>
  );
}
