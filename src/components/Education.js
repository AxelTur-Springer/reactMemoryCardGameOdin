import React from "react";

export default class EducationComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.ShowEducationForm = this.ShowEducationForm.bind(this)
    }
    ShowEducationForm(e){
        const FormBody = e.target.parentNode.children[2]
        FormBody.style.display = "block"
    }
    render(){
        return(
            <div>            
              <div>
                <h2>Education</h2>
              </div>
              <button onClick={this.ShowEducationForm}>Add Education</button>
            <form action="" className="EducationForm">
              <div>
                <p>Institute</p>
                <input type="text" placeholder='Institute' onChange={this.onWrite}/>
              </div>
              <div>
                <p>From</p>
                <input type="date" placeholder='From'onChange={this.onWrite}/>
              </div>
              <div>
                <p>To</p>
                <input type="date" placeholder='To'onChange={this.onWrite}/>
              </div>
              <div>
                <p>Grade Of Achievment</p>
                <input type="text" placeholder='Title' onChange={this.onWrite} />
              </div>
              <button type="submit"> send</button>
            </form>
            </div>
        )
    }
}