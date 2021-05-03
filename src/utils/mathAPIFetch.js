const mathAPIfetch = query => fetch('http://localhost:7890/gql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ query })
});

export default mathAPIfetch;
