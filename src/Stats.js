export function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You got everything packed up"
          : `Mate you have ${numItems} items,you already have packed ${numPacked} items ${" "}
        ${percentagePacked}%`}
      </em>
    </footer>
  );
}
