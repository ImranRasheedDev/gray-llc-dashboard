import './StatCard.css';

export default function StatCard({ title, value, icon, accentColor, iconBg }) {
  return (
    <div
      className="stat-card"
      style={{ '--stat-accent': accentColor }}
    >
      <div className="stat-card__header">
        <span className="stat-card__title">{title}</span>
        <div className="stat-card__icon-wrap" style={{ background: iconBg }}>
          {icon}
        </div>
      </div>
      <div className="stat-card__value">{value}</div>
    </div>
  );
}
