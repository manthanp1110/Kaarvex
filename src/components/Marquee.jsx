const items = [
  'Artificial Intelligence', 'Machine Learning', 'Computer Vision',
  'Natural Language Processing', 'MLOps & Pipelines', 'AI Web Apps',
  'Deep Learning', 'Data Engineering', 'Model Deployment',
  'Artificial Intelligence', 'Machine Learning', 'Computer Vision',
  'Natural Language Processing', 'MLOps & Pipelines', 'AI Web Apps',
  'Deep Learning', 'Data Engineering', 'Model Deployment',
];

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

const Marquee = () => (
  <div className="marquee-section">
    <div className="marquee-track">
      {items.map((item, i) => (
        <div className="marquee-item" key={i}>
          <StarIcon />
          {item}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
