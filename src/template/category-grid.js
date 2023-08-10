import { Link } from 'react-router-dom';

function CategoryGridList(props) {
  const data = [
    { id: 1, name: 'Automotive', url: '#' },
    { id: 2, name: 'Communication Services', url: '#' },
    { id: 3, name: 'Consumer Packaged Goods', url: '#' },
    { id: 4, name: 'Education', url: '#' },
    { id: 5, name: 'Financial Services', url: '#' },
    { id: 6, name: 'Healthcare', url: '#' },
    { id: 7, name: 'Tours & Travel Software', url: '#' },
    { id: 8, name: 'Industrial and Manufacturing', url: '#' },
    { id: 9, name: 'Logistics and Distribution', url: '#' },
    { id: 10, name: 'Media and Entertainment', url: '#' },
  ];

  return (
    <>
      <div className={`category-grid-style ${props.className || ''}`}>
        {data.map((item, ind) => (
          <div key={ind} className="category-list-item">
            {props.link ? (
              <Link to={item.url}>{item.name}</Link>
            ) : (
              <span>{item.name}</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default CategoryGridList;
