import { caret_down_icon, more_icon } from "@/assets/icons";
import Image from "next/image";
import React from "react";
import StatusBadge from "./status-badge";
import Button from "./button";
import { avatars, names } from "@/lib/constants";
import AvatarGroup from "./avatar-group";

const DashBoardHeader = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex items-center">
          <h3 className="text-4xl font-bold">Wallet Ledger</h3>
          <Image
            src={caret_down_icon}
            width={24}
            height={24}
            className="ml-1 mr-4"
            alt="arrow down"
          />

          <StatusBadge label="Active" dotColor="bg-green-600" />
        </div>

        <div className="flex gap-3">
          <Button variant="solid">Share</Button>
          <Button variant="transparent">
            <Image src={more_icon} width={28} height={28} alt="more" />
          </Button>
        </div>
      </div>

      <AvatarGroup avatars={avatars} names={names} totalCount={15} />
    </div>
  );
};

export default DashBoardHeader;
