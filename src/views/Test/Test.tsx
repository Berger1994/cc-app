import React from 'react';

export default function Test() {

    return (
        <>
        Test
        </>
    )
}

/*
function Test() {
    const { isLoading, error, data } = useQuery("repoData", () =>
      fetch(
        "https://api.github.com/repos/tannerlinsley/react-query"
      ).then((res) => res.json())
    );
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    if (isLoading) return (<span>Loading...</span>);
    if (error) return (<span>An error has occurred: ${error}</span>);
  
  
    const onSubmit = (data: any) => console.log(data);
  
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('firstName')} /> {}
          <input {...register('lastName', { required: true })} />
          {errors.lastName && <p>Last name is required.</p>}
          <input {...register('age', { pattern: /\d+/ })} />
          {errors.age && <p>Please enter number for age.</p>}
          <input type="submit" />
        </form>
      </div>
    );
  }
*/  