/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

type Avatar = {
  src: any;
  alt: string;
};

interface AvatarGroupProps {
  avatars: Avatar[];
  names: string[];
  totalCount: number;
}

export default function AvatarGroup({
  avatars,
  names,
  totalCount,
}: AvatarGroupProps) {
  const displayNames = names.slice(0, 3).join(", ");
  const extraCount = totalCount - names.length;

  return (
    <div className="flex items-center">
      <div className="flex -space-x-1.5">
        {avatars.slice(0, 4).map((avatar, idx, arr) => {
          const zIndex = arr.length - idx;
          return (
            <div
              key={idx}
              className={`w-8 h-8 rounded-full ring-2 ring-white overflow-hidden relative`}
              style={{ zIndex }}
            >
              <Image
                src={avatar.src}
                alt={avatar.alt}
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
          );
        })}
      </div>

      <span className="ml-4 text-sm text-gray-600">
        {displayNames}
        {extraCount > 0 && ` +${extraCount} others`}
      </span>
    </div>
  );
}
