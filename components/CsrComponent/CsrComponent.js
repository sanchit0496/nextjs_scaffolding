import React, { useState, useEffect } from 'react';
import useSWR from 'swr'
import fetcher from '../../utils/fetcher'

const CsrComponent = () => {
    const { data, error } = useSWR('todos/5', fetcher)

    if (error) return <div>Failed to load data</div>
    if (!data) return <div>Loading...</div>
  
    return (
      <div>
        <h1>Data Loaded</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    )
};

export default CsrComponent;
