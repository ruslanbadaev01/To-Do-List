import React, {useState} from "react";
import { Row,Col,Button,FormControl} from "react-bootstrap";
import uuid from 'react-uuid'
import s from './AddTodo.module.css'

function AddTodo({todo,setTodo}){

    const [value, setValue] = useState('')
   
    function saveTodo(){
        setTodo(
            [...todo,{
                id: {uuid},
                title: value,
                status: true
            }]
        )
        setValue("")
    }
    
    return(
        <Row>
            <Col className={s.addTodoForm} >
                <FormControl placeholder="Add Task" value={value} onChange={(e) => setValue(e.target.value)} ></FormControl>
                <Button onClick={saveTodo} className={s.btn} >Add</Button>
            </Col>
        </Row>
    )
}

export default AddTodo