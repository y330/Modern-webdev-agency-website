import React from 'react';
import './Snackbar.scss';

type SnackbarProps = {
  message: string;
  type?: 'success' | 'error';
  open: boolean;
  onClose: () => void;
};

const Snackbar: React.FC<SnackbarProps> = ({ message, type = 'success', open, onClose }) => {
  if (!open) return null;
  return (
    <div className={`snackbar snackbar--${type}`} onClick={onClose}>
      <span>{message}</span>
      <button className="snackbar__close" onClick={onClose}>&times;</button>
    </div>
  );
};

export default Snackbar;
