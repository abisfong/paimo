export const search = (input) => (
  $.ajax({
    method: 'GET',
    url: `/api/users?name=${encodeURIComponent(input)}`
  })
);