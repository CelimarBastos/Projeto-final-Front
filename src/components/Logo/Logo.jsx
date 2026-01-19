import './Logo.css';

export function Logo({ white = false }) {
  return (
    <div className={`logo ${white ? 'logo-white' : ''}`}>
      <img
        src={white ? '/logo-footer.svg' : '/logo-header.svg'}
        alt="Drip Store Logo"
        width="253"
        height="44"
      />
    </div>
  );
}
