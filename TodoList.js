import React, { Component } from 'react';
import TodoInput from './TodoItem';

class TodoList extends Component{
    render(){
        //tasks内の各TodoをTodoItemコンポーネントを用いてエレメントにしています。
        //list変数にはTodoItemエレメントの配列が入っています。
        const list = this.props.tasks.map(todo => {
            returen <TodoItem{...todo}key={todo.id} />;
        });
        return(
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}
export default TodoList;
