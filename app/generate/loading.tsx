import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 justify-center items-center p-3">
        <div className="grid grid-cols-1 grid-rows-1 text-center mx-auto m-0">
          <Skeleton className="rounded-xl w-[180px] h-[180px]" />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 text-center items-center">
          <Skeleton className="rounded-sm w-[180px] h-[50px]" />
          <div className="grid grid-cols-4 p-3">
            <Skeleton className="w-[50px] h-[50px]" />
            <Skeleton className="w-[50px] h-[50px]" />
            <Skeleton className="w-[50px] h-[50px]" />
            <Skeleton className="w-[50px] h-[50px]" />
          </div>
          <Skeleton className="rounded-sm w-[180px] h-[50px]" />
        </div>
      </div>
    </Container>
  );
};

export default Loading;
