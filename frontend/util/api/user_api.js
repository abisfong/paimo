export const createUser = formInput => (
 $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user: formInput }
  })
);

export const getUsers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
);

export const getUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const updateUser = (formInput) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${formInput.id}`,
    data: { user: formInput }
  })
);

export const deleteUser = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${id}`
  })
);