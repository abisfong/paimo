export default function createUserInitials(user) {
  const names = user.split(' ');
  return (names[0][0] + names[1][0]).toUpperCase();
}