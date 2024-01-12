import React from 'react';
import useSWR, {mutate} from 'swr'
import fetcher from '../../utils/fetcher'
import TailwindButton from '../TailwindButton/TailwindButton';

const CsrComponent = () => {
    const { data, error } = useSWR('todos/5', fetcher)

    if (error) return <div>Failed to load data</div>
    if (!data) return <div>Loading...</div>
  
    const submitPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json)
            // After the POST request, revalidate and refetch GET data
            mutate('https://jsonplaceholder.typicode.com/posts')
          })
          .catch((error) => {
            console.error('Error in POST request:', error)
          })
      }

    return (
      <div>
        <h1>Data Loaded</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <TailwindButton onClick={submitPost}>Submit</TailwindButton>
      </div>
    )
};

export default CsrComponent;
