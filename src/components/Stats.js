export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list! 💼</em>
      </footer>
    );

  const numItems = items.length; // derived state

  // derived state is a state that is calculated from other state
  // it is not stored in the state, but it is calculated from the state
  const packedItems = items.filter((item) => item.packed).length; // derived state

  const percentage = Math.round((packedItems / numItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Masha2llah you got everything! Have a safe flight ✈️🎉"
          : `💼 You have ${numItems} items on your list and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
