import axiosInstance from '../utils/axiosInstance'
import React from 'react';

const SsrComponent = ({ data }) => {
  return (
    <div>
      <h1>Server-Side Rendered Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export async function getServerSideProps () {
  try {
    // Replace with your API endpoint
    const res = await axiosInstance.get('/todos/5')
    const data = res.data // Using .data to get the actual data from axios response

    return {
      props: { data } // will be passed to the page component as props
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: { data: null } // Return null data on error
    }
  }
}

export default SsrComponent
