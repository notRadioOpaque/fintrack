import DashBoardBody from "@/components/dashboard-body";
import DashBoardHeader from "@/components/dashboard-header";

export default function DashBoard() {
  return (
    <div className="flex flex-col w-full gap-7">
      <DashBoardHeader />
      <DashBoardBody />
    </div>
  );
}
