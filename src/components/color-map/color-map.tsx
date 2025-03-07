import './color-map.scss';
import tokens from '../../assets/design-tokens.json';

function ColorMap() {
  const colorGroups = tokens.global.xx.global.color;

  return (
    <>
      <h1>Color map</h1>
      <div className="color-map">
        {Object.entries(colorGroups).map(([key, value]) => (
          <div key={key}>
            <h2>{key}</h2>
            <ul>
              {Object.entries(value).map(([shade, value]) => (
                <li
                  key={shade}
                  style={{ backgroundColor: value.value }}
                  title={value.value}
                >
                  {shade}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default ColorMap;
