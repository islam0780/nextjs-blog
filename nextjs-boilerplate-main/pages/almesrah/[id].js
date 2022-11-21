export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(almesrah => {
      return {
        params: { id: almesrah.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { almesrah : data }
    }
  }
  
  const Details = ({ almesrah  }) => {
    return (
      <div>
        <h1>{ almesrah.name }</h1>
        <p>{ almesrah.email }</p>
        <p>{ almesrah.website }</p>
        <p>{ almesrah.address.city }</p>
      </div>
    );
  }
  
  export default Details;