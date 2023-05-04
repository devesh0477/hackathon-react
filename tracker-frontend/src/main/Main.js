import Header from "../header/Header";
import Button from 'react-bootstrap/Button';
import'bootstrap/dist/css/bootstrap.css';
import ListTasks from "./ListTasks";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import moment from 'moment';
import { useRef } from "react";
import $ from 'jquery';

function Main() 
{
    const [name, setName] = useState('');

    const [selectedDate,setSelectedDate] = useState('');

    const [task, setTask] = useState({name:'', hour:0, min:0, comment:'', myKey:0});

    const [week,setWeek] = useState('');
    
    const handleChange = (event) => 
    {
      setName(event.target.value);
    };

    //add handleDateChange
     const handleDateChange = (date) => {
      const startOfWeek = moment(date).startOf('isoWeek');
      const endOfWeek = moment(date).endOf("isoWeek");
      const weekText = startOfWeek.format("D") + "-" + endOfWeek.format("D") + "/" + startOfWeek.format("MM") + "/" + startOfWeek.format("YYYY");
      setSelectedDate(date);
      setWeek(weekText);
     }

     const updateValues = (event) => 
     {
      const task = {name:'', hour:0, min:0, comment:'', myKey:0};
      task.name = name;
      task.hour = event.target.formTaskHour.value;
      task.min = event.target.formTaskMin.value;
      task.comment = event.target.formComment.value;
      return task;
     }

         //update
         const update = (event) => {
          //prevent page reload
            event.preventDefault(); 
            const newTask = updateValues(event);
            if (validate (newTask))
            {
              setTask(newTask);
            }           
         }

         const validate = (task) => {
          let result = true;
          let error = "Missing info:";
          if (task.name.trim() === "") {
            result = false;
            error += " [Task Name]";
          }
        
          if (task.hour === '0' && task.min === '0') {
            result = false;
            error += " [Time Spent]";
          }
        
          if (selectedDate === "") {
            result = false;
            error += " [Date]";
          }
          if (!result) {
            alert(error);
          }
          return result;
        };
        
        const clearButtonRef = useRef(null);

        const clearBoundedElements = () =>
        {
          setSelectedDate('');
          setName('');
        }

        const populate = (data) =>
        {
          setName(data.name);
          $(`#formTaskHour`).val(data.hour);
          $(`#formTaskMin`).val(data.min);
          $(`#formTaskComment`).val(data.comment);
          task.myKey = data.myKey;
        }
    

   return (
     <Container>
       <Header version="1.0" className="general-border" />
       <Row>
         <Col>
           <Form onSubmit={update}>
             <Form.Group>
               <Form.Label>Pick Date</Form.Label>
               <DatePicker
                 className="datePicker"
                 selected={selectedDate}
                 onChange={(date) => handleDateChange(date)}
               />
             </Form.Group>

             <Form.Group>
               <Form.Label>Task Name</Form.Label>
               <Form.Control
                 type="text"
                 onChange={handleChange}
                 value={name}
                 placeholder="Enter name or #"
               />
             </Form.Group>

             <Form.Group controlId="formTaskHour" className="control-inline">
               <Form.Label className="control-block label">
                 {" "}
                 Hour:Min
               </Form.Label>
               <Form.Control
                 type="number"
                 step="1"
                 min="0"
                 max="24"
                 className="control-inline"
                 defaultValue="0"
               />
             </Form.Group>

             <Form.Group controlId="formTaskMin" className="control-inline">
               <Form.Label className="control-dot">:</Form.Label>
               <Form.Control
                 type="number"
                 step="1"
                 min="0"
                 className="control-inline"
                 max="59"
                 defaultValue="0"
               />
             </Form.Group>

             <Form.Group controlId="formComment">
               <Form.Label>Comment</Form.Label>
               <Form.Control type="text" placeholder="Enter Comment" />
               <Form.Text
                 className="text-muted"
                 You
                 can
                 write
                 a
                 short
                 Comment
               />
             </Form.Group>
             <div className="general-border center">
             <Button
               type="submit"
               className="text-uppercase  btn-outline-danger gap"
               variant="none"
             >
               {" "}
               add/update{" "}
             </Button>
             <Button 
               ref = {clearButtonRef}
               type="reset"
               className="text-uppercase  btn-outline-warning"
               variant="none"
             >
               {" "}
               clear{" "}
             </Button>
           </div>
           </Form>
         </Col>
         <Col>
           <ListTasks className="list-border" task = {task} week = {week}  clearButtonRef = {clearButtonRef} clearBoundedElements = {clearBoundedElements} populate = {populate}/>
         </Col>
       </Row>
     </Container>
   );
}

export default Main;