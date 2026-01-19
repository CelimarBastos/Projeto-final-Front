import './FilterGroup.css';

export function FilterGroup({ title, inputType, options }) {
  return (
    <div className="filter-group">
      <h4 className="filter-group-title">{title}</h4>
      <div className="filter-group-content">
        {options.map((option, index) => (
          <label key={index} className="filter-option">
            <input
              type={inputType}
              name={title}
              value={option.value || option.text}
              className="filter-input"
            />
            <span className="filter-text">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
