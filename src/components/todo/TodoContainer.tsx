import React from 'react';
import TodoCard from './TodoCard';

const TodoContainer = () => {
    return (
        <div>
            <div>
                <button>Add todo</button>
                <button>Filter</button>
            </div>
            <div className='bg-green-500 w-full h-full rounded-xl p-5 space-y-5'>
                {/* <div className='bg-white font-bold p-4 text-2xl rounded-md flex justify-center items-center'>
                    <p>
                        There is no Task Pending
                    </p>                </div> */}
            </div>
        </div>
    );
};

export default TodoContainer;