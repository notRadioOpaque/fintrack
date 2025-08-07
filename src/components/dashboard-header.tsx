import React from "react";
import StatusBadge from "./status-badge";
import Button from "./button";
import { avatars, names } from "@/lib/constants";
import AvatarGroup from "./avatar-group";
import { Icon } from "@iconify/react";

const DashBoardHeader = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex items-center">
          <h3 className="text-xl sm:text-4xl font-bold">Wallet Ledger</h3>

          <button className="ml-2 mr-4">
            <Icon icon="flowbite:caret-down-solid" className="h-4 w-4" />
          </button>

          <div className="hidden md:block">
            <StatusBadge label="Active" dotColor="bg-green-600" />
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="solid">Share</Button>
          <Button variant="transparent" className="px-3">
            <Icon icon="ri:more-fill" className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <AvatarGroup avatars={avatars} names={names} totalCount={18} />
    </div>
  );
};

export default DashBoardHeader;
