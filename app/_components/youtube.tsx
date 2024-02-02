import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icon";

export interface IYouTubeProps {
  onSuccess?: () => void;
  onFailure?: () => void;
}

export default function YouTube(props: IYouTubeProps) {
  return (
    <Button>
      <span>Continue with </span>
      <Icons.google className="ml-2 h-4 w-4" />
    </Button>
  );
}
