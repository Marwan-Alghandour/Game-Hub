import usePlatforms from "./usePlatforms";

const usePlatfrom = (id?: number) => {
  const {
    data: { results: platforms },
  } = usePlatforms();
  return platforms.find((platform) => platform.id === id);
};

export default usePlatfrom;
