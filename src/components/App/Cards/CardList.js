import CardItem from "./CardItem";

export default function CardList() {
  const asd = ['asd', 'qwe', 'zxc', 'rty', 'fgh', 'vbn'];
  return(
    <>
      {asd.map((item, i) =>
      <CardItem key={i} label={item} />
      )}
    </>
  );
}