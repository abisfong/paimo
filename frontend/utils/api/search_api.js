export const search = (input, selectionIds) => (
  $.ajax({
    method: 'GET',
    url: `/api/users?name=${encodeURIComponent(input)}&selection_ids=${selectionIds.join(',')}`
  })
);