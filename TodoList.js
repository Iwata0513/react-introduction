import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{
    render(){
        //tasks内の各TodoをTodoItemコンポーネントを用いてエレメントにしています。
        //list変数にはTodoItemエレメントの配列が入っています。
        // console.log("test" ,this.props)
        const list = this.props.tasks.map(todo => {
            return <TodoItem　{...todo} key={todo.id} />;
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
