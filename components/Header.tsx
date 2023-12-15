import Link from "next/link";
import Container from "./ui/container";
import { Button } from "./ui/button";
import {
  BatteryFull,
  CameraIcon,
  FootprintsIcon,
  Gem,
  Mic,
  Sparkle,
  Sparkles,
  Wifi,
} from "lucide-react";
import { Badge } from "./ui/badge";
import ProfileButton from "./ui/ProfileButton";
import StatusBar from "./ui/StatusBar";
import AIAssistant from "./ui_sections/AIAssistant";

const routes = [
  {
    href: "/",
    label: <CameraIcon />,
  },
  {
    href: "/",
    label: <Sparkle />,
  },
  {
    href: "/",
    label: <FootprintsIcon />,
  },
];

const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-0 px-1 border-b">
      <Container>
        <div className="relative flex items-center justify-between w-full">
          <div className="flex items-center">
            <ProfileButton></ProfileButton>
          </div>
          <AIAssistant />
          <StatusBar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
