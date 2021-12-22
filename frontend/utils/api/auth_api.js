export const createSession = formInput => (
  $.ajax({
    url: '/api/auth',
    method: 'POST',
    data: { user: formInput }
  })
);

export const deleteSession = () => (
  $.ajax({
    url: '/api/auth',
    method: 'DELETE'
  })
);