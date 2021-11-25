export const createSession = user => (
  $.ajax({
    url: '/api/auth',
    method: 'POST',
    data: { user }
  })
);

export const deleteSession = user => (
  $.ajax({
    url: '/api/auth',
    method: 'DELETE'
  })
);