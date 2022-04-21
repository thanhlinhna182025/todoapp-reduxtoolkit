import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  searchFilterChange,
  statusFilterChange,
  prioriesFilterChange,
} from "../../redux/filterSlice";
const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [statusTodo, setstatusTodo] = useState("All");
  const [priority, setPriority] = useState();
  const handleChangeSearchText = (e) => {
    setSearchText(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  };
  const handleChangeStatusTodo = (e) => {
    setstatusTodo(e.target.value);
    dispatch(statusFilterChange(e.target.value));
  };
  const handleChangePriority = (value) => {
    setPriority(value);
    dispatch(prioriesFilterChange(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          onChange={handleChangeSearchText}
          value={searchText}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group onChange={handleChangeStatusTodo} value={statusTodo}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          onChange={handleChangePriority}
          value={priority}
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
      </Col>
    </Row>
  );
}
