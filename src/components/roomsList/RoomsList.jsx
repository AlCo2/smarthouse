import { useRef, useState, useEffect } from 'react';

export default function RoomsList() {
  const roomsListRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState('kitchen');
  useEffect(() => {
    const roomsList = roomsListRef.current;

    const handleMouseDown = (e) => {
      setIsDown(true);
      setStartX(e.pageX - roomsList.offsetLeft);
      setScrollLeft(roomsList.scrollLeft);
    };

    const handleMouseLeave = () => {
      setIsDown(false);
    };

    const handleMouseUp = () => {
      setIsDown(false);
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - roomsList.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the speed of scrolling here
      roomsList.scrollLeft = scrollLeft - walk;
    };

    roomsList.addEventListener('mousedown', handleMouseDown);
    roomsList.addEventListener('mouseleave', handleMouseLeave);
    roomsList.addEventListener('mouseup', handleMouseUp);
    roomsList.addEventListener('mousemove', handleMouseMove);

    return () => {
      roomsList.removeEventListener('mousedown', handleMouseDown);
      roomsList.removeEventListener('mouseleave', handleMouseLeave);
      roomsList.removeEventListener('mouseup', handleMouseUp);
      roomsList.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDown, startX, scrollLeft]);

  return (
    <div className="roomsList">
      <ul ref={roomsListRef}>
        <li onClick={()=>setSelectedRoom('livingroom')} className={selectedRoom==='livingroom'?'selectedRoom':'roomsNotSelected'}><p>livingroom</p></li>
        <li onClick={()=>setSelectedRoom('kitchen')} className={selectedRoom==='kitchen'?'selectedRoom':'roomsNotSelected'}><p>Kitchen</p></li>
        <li onClick={()=>setSelectedRoom('Bedroom')} className={selectedRoom==='Bedroom'?'selectedRoom':'roomsNotSelected'}><p>Bedroom</p></li>
        <li onClick={()=>setSelectedRoom('Bathroom')} className={selectedRoom==='Bathroom'?'selectedRoom':'roomsNotSelected'}><p>Bathroom</p></li>
      </ul>
    </div>
  );
}