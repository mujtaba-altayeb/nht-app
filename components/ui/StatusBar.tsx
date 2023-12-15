"use client";

import { useTheme } from "next-themes";
import {
  BatteryFull,
  Wifi,
  Gem,
  CircleDollarSign,
  Sun,
  Moon,
} from "lucide-react";
import { Badge } from "./badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { Button } from "./button";

export default function StatusBar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center">
      <BatteryFull />
      <Wifi />
      <Button
        variant="outline"
        size="sm"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button size="sm">
            <Gem /> 152
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">
                <span className="flex">
                  <Gem /> 152 Credits left
                </span>
              </h4>
              <p className="text-sm">Recharge your account for extra credits</p>
              <Button>
                <CircleDollarSign /> Recharge
              </Button>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
