async function getStuff() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

export default async function page({
  params,
}: {
  params: { hairstyleid: string };
}) {
  const recipes = await getStuff();
  return (
    <iframe
      className="grid text-center p-2 m-1 w-full h-full"
      src="https://www.youtube.com/embed/DFMz-A4E0nw?si=ylhypaKcmZ_asPtZ"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
}
