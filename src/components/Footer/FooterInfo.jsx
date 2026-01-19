import { NavLink } from 'react-router-dom';
import './FooterInfo.css';

export function FooterInfo({ title, informations }) {
  return (
    <div className="footer-info">
      <h4 className="footer-info-title">{title}</h4>
      <ul className="footer-info-list">
        {informations.map((item, index) => (
          <li key={index}>
            <NavLink to={item.link} className="footer-info-link">
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
