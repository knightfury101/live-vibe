import { useMemo } from "react";
import { Hint } from "../hint";
import { Info } from "lucide-react";

interface ChatInfoProps {
  isDelayed: boolean;
  isFollowersOnly: boolean;
}

export const ChatInfo = ({ isDelayed, isFollowersOnly }: ChatInfoProps) => {
  const hint = useMemo(() => {
    if (isFollowersOnly && !isDelayed) {
      return "Only Followers Can Chat";
    }

    if (isDelayed && !isFollowersOnly) {
      return "Messages Are Delayed By 3 Seconds";
    }

    if (isDelayed && isFollowersOnly) {
      return "Only Followers Can Chat. Messages Are Delayed By 3 Seconds.";
    }

    return "";
  }, [isDelayed, isFollowersOnly]);

  const label = useMemo(() => {
    if (isFollowersOnly && !isDelayed) {
      return "Followers Only";
    }

    if (isDelayed && !isFollowersOnly) {
      return "Slow Mode";
    }

    if (isDelayed && isFollowersOnly) {
      return "Followers Only And Slow Mode";
    }

    return "";
  }, [isDelayed, isFollowersOnly]);

  if (!isDelayed && !isFollowersOnly) {
    return null;
  }

  return (
    <div className="p-2 text-muted-foreground bg-white/5 border border-white/10 w-full rounded-t-md items-center flex gap-x-2">
      <Hint label={hint}>
        <Info className="h-4 w-4" />
      </Hint>
      <p className="text-xs font-semibold">{label}</p>
    </div>
  );
};
