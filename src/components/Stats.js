export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Add Something to your Packing List 📝</em>
      </footer>
    );

  const numItems = items.length;
  const packed = items.filter((item) => item.packed).length;
  const precentage = Math.round((packed / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? "You have packed everything ✈️... Lets go "
          : `You have ${numItems} items on your list and you have
        packed ${packed} of them. (${precentage}%)`}
      </em>
    </footer>
  );
}
