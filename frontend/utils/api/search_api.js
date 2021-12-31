export const search = (input, currentSelections) => (
  $.ajax({
    method: 'GET',
    url: `/api/users?name=${encodeURIComponent(input)}`
  })
);