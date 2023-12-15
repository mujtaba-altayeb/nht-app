import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 justify-center items-center p-2">
        <div className="grid grid-cols-1 grid-rows-1 text-center mx-auto m-0">
          <Skeleton className="rounded-xl w-[180px] h-[180px]" />
        </div>
        <div className="grid grid-cols-1 grid-rows-2 items-center">
          <Skeleton className="w-[180px] h-[80px]" />
          <Skeleton className="rounded-sm w-[180px] h-[50px]" />
        </div>
      </div>
    </Container>
  );
};

export default Loading;
