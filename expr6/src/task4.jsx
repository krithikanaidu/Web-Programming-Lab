// Task 4: React component that displays favorite foods list
function FavoriteFoods() {
  const foods = ['Pizza', 'Biryani', 'Pasta', 'Sushi', 'Ice Cream'];

  return (
    <div>
      <h3>My Favorite Foods:</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {foods.map((food, index) => (
          <li
            key={index}
            style={{
              padding: '12px 0',
              borderBottom: '1px solid #eee',
              fontSize: '18px'
            }}
          >
            🍕 {food}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteFoods;
