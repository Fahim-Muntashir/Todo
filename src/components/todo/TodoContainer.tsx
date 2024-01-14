import React from 'react';
import TodoCard from './TodoCard';
import { Button } from '../ui/button';
import AddTodoModal from './AddTodoModal';

const TodoContainer = () => {
    return (
        <div>
            <div className='flex justify-between mb-5'>

                <AddTodoModal></AddTodoModal>
                <button>Filter</button>
            </div>
            <div className='bg-primary-gradient w-full h-full rounded-xl p-[5px]'>

                <div className='bg-white p-5 space-y-5 w-full rounded-lg'>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                </div>

                {/* <div className='bg-white font-bold p-4 text-2xl rounded-md flex justify-center items-center'>
                    <p>
                        There is no Task Pending
                    </p>                </div> */}


            </div>
        </div>
    );
};

export default TodoContainer;