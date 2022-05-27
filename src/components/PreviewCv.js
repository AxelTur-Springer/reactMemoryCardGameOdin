import React from "react";
import ReactToPrint from 'react-to-print';
import '../App.css';

export default class RenderCvPrev extends React.Component{
  constructor(props){
    super(props)
    const {Name,Address,Email,PhoneNumber} = props;
  }
    render(){
    return(
        <div className="FullCvPreviewPage">
          <div>
             <h1>
             Curriculum Vitae
             </h1>
          </div>
          <div>
            <p>Name:  {this.props.Name}</p>
            <p>Email:  {this.props.Email}</p>
            <p>Address:  {this.props.Address}</p>
            <p>Phone Number:  {this.props.PhoneNumber}</p>
          </div>
          <div>

          </div>
        </div>
    )
  }
}
    
export class PreviewCvPlusDownload extends React.PureComponent {
  constructor(props){
    super(props)
    const {name,address,job,PhoneNumber} = props;
  }
  render() {
    return (
      <div>
          <RenderCvPrev 
         Name = {this.props.Name} 
         Address = {this.props.Address} 
         Email ={this.props.Email} 
         PhoneNumber = {this.props.PhoneNumber}
         ref={el => (this.componentRef = el)} />
        <ReactToPrint 
          trigger={() => {
            return <button>Print this out!</button>;
          }}
          content={() => this.componentRef}
        />
      
      </div>
    );
  }
} 
