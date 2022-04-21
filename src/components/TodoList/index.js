import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../redux/todolistSlice";
import { v4 as uuidv4 } from "uuid";
import { todosRemainingSelector } from "../../redux/selectors";
export default function TodoList() {
  const todolist = useSelector(todosRemainingSelector);
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [prioriry, setPrioriry] = useState("Medium");

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        complete: false,
        prioriry: prioriry,
      })
    );
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todolist.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            prioriry={todo.prioriry}
            completed={todo.completed}
            id={todo.id}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            onChange={(e) => {
              setTodoName(e.target.value);
            }}
            value={todoName}
          />
          <Select
            defaultValue="Medium"
            onChange={(value) => setPrioriry(value)}
            value={prioriry}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
