import { useQuery, gql } from '@apollo/client';

const GET_TODOS = gql`
    query getAllTodos {
        getTodos {
            title
            completed
            user {
                name
            }
        }
    }
`;

const App = () => {

    const { loading, error, data } = useQuery(GET_TODOS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>GrapghQl</h1>
            <div className='wrapper'>
                {data?.getTodos?.map((item: any, index: number) => (
                    <div key={index} className='todo'>
                        <p>Title: {item.title}</p>
                        <p>Creator: {item.user.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App;