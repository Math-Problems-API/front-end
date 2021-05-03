const mathAPIfetch = query => fetch('https://math-problems-api.herokuapp.com/gql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ query })
});

export default mathAPIfetch;
