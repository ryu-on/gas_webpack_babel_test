import {React} from 'react';
import ReactDOM from 'react-dom';
import '/login.css';

class Hello extends React.Component{
	render(props){
		return <h1>Hello! {props.name}</h1>;
	}
}
