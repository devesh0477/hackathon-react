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

function Main() 
{
    const [name, setName] = useState('');

    const [selectedDate,setSelectedDate] = useState('');
    
    const handleChange = (event) => 
    {
      setName(event.target.value);
    };

    //add handleDateChange
     const handleDateChange = (date) => {
      setSelectedDate(date);
     }

   return (
     <Container>
       <Header version="1.0" className="general-border" />
       <Row>
         <Col>
           <Form>
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
           </Form>
         

         
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
               type="reset"
               className="text-uppercase  btn-outline-warning"
               variant="none"
             >
               {" "}
               clear{" "}
             </Button>
           </div>
         </Col>
         <Col>
           <ListTasks className="list-border" />
         </Col>
       </Row>
     </Container>
   );
}

export default Main;