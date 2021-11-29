export default function reverseOrderToastMessages({ user, auth }) {
  let messages = [];

  for (const key in user)
    messages.push({ key: user[key] });

  for (const key in auth)
    messages.push({ [key]: auth[key], type: 'error' });

  return messages.sort((firstEl, secondEl) => {
    return Object.keys(firstEl)[0] - Object.keys(secondEl)[0];
  });
}