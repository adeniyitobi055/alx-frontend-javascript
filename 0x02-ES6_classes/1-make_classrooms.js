import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const [room_1, room_2, room_3 = [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];

  return [ room_1, room_2, room_3 ];
}
