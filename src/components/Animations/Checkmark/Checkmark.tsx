import './Checkmark.scss';

const Checkmark = () => {
  return (
    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path className="shield" fill="none" d="M32 2 L58 14 V32 C58 46 44 58 32 62 C20 58 6 46 6 32 V14 Z" />
      <path className="check" fill="none" d="M20 33 L30 43 L45 22" />
    </svg>
  );
};

export default Checkmark;
