import useTrailers from "../hooks/useTrailers";
interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  const extractedData = data?.results[0];

  if (isLoading || !extractedData) return null;

  if (error) throw error;

  return (
    <video
      src={extractedData.data[480]}
      poster={extractedData.preview}
      controls
    />
  );
};

export default GameTrailer;
