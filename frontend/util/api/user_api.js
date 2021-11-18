export const createUser = user => (
 $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);


export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
);

export const fetchUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const updateUser = (id, data) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: { user: data }
  })
);

export const deleteUser = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${id}`
  })
);