import {FC, useRef, useState} from 'react';
import { Todo } from '../models/todo.model';


interface TodoInputFormProps {
    addTodoHandler?: (newTodo: Todo) => void
}

export const TodoInputForm: FC<TodoInputFormProps> = ({addTodoHandler}) => {

    return(
        <div>
            <form >
                <input type="text" placeholder='New Todo'/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}