import { Mic } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Badge } from "../ui/badge";

export default function AIAssistant() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full" size="sm">
          <Mic /> AI
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[350px] text-center items-center">
        <DialogHeader>
          <DialogTitle>AI Analysis</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1">
          <div>Ethnicity: African</div>
          <div>Hairtype: Silky</div>
          <div>Event setting: Party</div>
          <div className="border border-white rounded-md m-1">
            <h3>
              Recommendation:
              <Badge className="select-none text-md" variant="destructive">
                updo
              </Badge>{" "}
            </h3>
          </div>
        </div>
        <DialogFooter>
          <Button className="rounded-full" size="lg" type="submit">
            <Mic /> Record New Input
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
