import React, { useEffect, useState } from 'react';
import './Cursor.css'; // Import the CSS file for styling

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
      console.log(position)
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [position]);

  return (
    <div className="cursor" style={{ left: position.x, top: position.y }}></div>
  );
};

export default Cursor;
