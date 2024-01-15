import TodoCard from './TodoCard';
import AddTodoModal from './AddTodoModal';
import TodoFilter from './TodoFilter';
import { useGetTodosQuery } from '@/redux/api/api';

const TodoContainer = () => {
    // from local state
    // const { todos } = useAppSelector(state => state.todos)
    //* from server
    const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);

    console.log(todos);

    if (isLoading) {
        return <p>Lodaing</p>
    }



    return (
        <div>
            <div className='flex justify-between mb-5'>

                <AddTodoModal></AddTodoModal>

                <TodoFilter />

            </div>
            <div className='bg-primary-gradient w-full h-full rounded-xl p-[5px]'>

                <div className='bg-white p-5 space-y-5 w-full rounded-lg'>
                    {
                        todos?.map((item) => (
                            <TodoCard {...item}></TodoCard>
                        ))
                    }
                </div>

                {/* <div className='bg-white font-bold p-4 text-2xl rounded-md flex justify-center items-center'>
                    <p>
                        There is no Task Pending
                    </p>                </div> */}


            </div>
        </div >
    );
};

export default TodoContainer;