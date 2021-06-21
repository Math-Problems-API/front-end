const mathProblemsURL = 'https://math-problems-api.herokuapp.com/gql';
const query = `query getProblems($problemInput: ProblemInput!) { problems(problemInput: $problemInput) { problem } }`;

const getProblems = problemInput => {
  return fetch(mathProblemsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { problemInput },
    })
  })
    .then(r => r.json())
    .then(json => json.data.problems)
}

export default getProblems;
