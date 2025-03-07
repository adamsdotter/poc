import './color-map.css';

function ColorMap() {
  const colors = [
    '#F8A8B9',
    '#F8C8DC',
    '#F9D1B4',
    '#FFF5A2',
    '#A8D8B9',
    '#A9C9EB',
    '#D6AEDD',
  ];

  return (
    <ul>
      {colors.map((color, index) => (
        <li key={index} style={{ backgroundColor: color }}>
          {color}
        </li>
      ))}
    </ul>
  );
}

export default ColorMap;
