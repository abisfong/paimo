export const createSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
);

export const deleteSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);