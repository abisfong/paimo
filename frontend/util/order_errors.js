export default function reverseOrderErrors({ user, auth }) {
  let errors = [];

  for (const key in user)
    errors.push({ key: user[key] });

  for (const key in auth)
    errors.push({ key: auth[key] });

  return errors.sort((firstEl, secondEl) => {
    return Object.keys(secondEl)[0] - Object.keys(firstEl)[0];
  });
}