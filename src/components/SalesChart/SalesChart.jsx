import { useState } from 'react';
import './SalesChart.css';

const periods = ['Daily', 'Weekly', 'Monthly'];

const chartData = [
  { label: '07.06', value: 60 },
  { label: '08.06', value: 90 },
  { label: '09.06', value: 45 },
  { label: '10.06', value: 120 },
  { label: '11.06', value: 74 },
  { label: '12.06', value: 150 },
];

const maxVal = 200;

function buildPath(data, width, height) {
  const padding = 0;
  const stepX = (width - padding * 2) / (data.length - 1);
  const points = data.map((d, i) => ({
    x: padding + i * stepX,
    y: height - (d.value / maxVal) * height,
  }));

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const cpx1 = points[i - 1].x + stepX * 0.4;
    const cpy1 = points[i - 1].y;
    const cpx2 = points[i].x - stepX * 0.4;
    const cpy2 = points[i].y;
    d += ` C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${points[i].x} ${points[i].y}`;
  }
  return { linePath: d, points };
}

export default function SalesChart() {
  const [activePeriod, setActivePeriod] = useState('Daily');

  const svgW = 620;
  const svgH = 280;
  const { linePath, points } = buildPath(chartData, svgW, svgH);

  const areaPath = `${linePath} L ${points[points.length - 1].x} ${svgH} L ${points[0].x} ${svgH} Z`;

  const tooltipPoint = points[4];

  return (
    <div className="sales-chart">
      <div className="sales-chart__header">
        <h3 className="sales-chart__title">Sales Performance</h3>
        <div className="sales-chart__periods">
          {periods.map((p) => (
            <button
              key={p}
              className={`sales-chart__period ${p === activePeriod ? 'sales-chart__period--active' : ''}`}
              onClick={() => setActivePeriod(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="sales-chart__body">
        <div className="sales-chart__y-axis">
          {['$200', '$150', '$100', '$50', '$0'].map((label) => (
            <span key={label} className="sales-chart__y-label">{label}</span>
          ))}
        </div>

        <div className="sales-chart__canvas">
          <div className="sales-chart__grid">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="sales-chart__grid-line" />
            ))}
          </div>

          <svg
            viewBox={`0 0 ${svgW} ${svgH}`}
            className="sales-chart__svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#areaFill)" />
            <path d={linePath} fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />

            {/* Tooltip dot */}
            <circle cx={tooltipPoint.x} cy={tooltipPoint.y} r="5" fill="var(--color-primary)" stroke="#fff" strokeWidth="2.5" />
            <line x1={tooltipPoint.x} y1={tooltipPoint.y} x2={tooltipPoint.x} y2={svgH} stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
          </svg>

          {/* Tooltip */}
          <div
            className="sales-chart__tooltip"
            style={{
              left: `${(tooltipPoint.x / svgW) * 100}%`,
              top: `${(tooltipPoint.y / svgH) * 100 - 14}%`,
            }}
          >
            $74
          </div>

          <div className="sales-chart__x-axis">
            {chartData.map((d, i) => (
              <span
                key={d.label}
                className={`sales-chart__x-label ${i === chartData.length - 1 ? 'sales-chart__x-label--active' : ''}`}
              >
                {d.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
