import Container from "react-bootstrap/esm/Container";
import { useContext } from "react";
import {prjContext} from '../App';

const About = () => {
    {
        const identifer = useContext(prjContext);
        return (<Container>This is Hackathon projevt V1.0 for {identifer}</Container>);
    }
}

export default About;