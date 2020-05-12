import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import marked from 'marked';
import 'bootstrap/dist/css/bootstrap.css';


const sanitizeHtml = require('sanitize-html');
marked.setOptions({
  renderer: new marked.Renderer(),
  headerIds: false
}
)



    function convertText (text) {
      sanitizeHtml(text)
      return {__html: text};
    }



class MarkdownPreviewer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      input: `# This is H1 Text \n ## This is H2 Text  \n [This is a link to FreeCodeCamp](https://www.freecodecamp.org/) \n\n   An example of some \`inline code\` and if you want more... \n\n \`\`\`This is the lovely codeblock, which can hold even larger amounts of text\`\`\` \n\n 1. Just \n 1. Numbers \n 1. Here \n\n   >  Block Quotes may be the wave of the future \n \n ![Kitty](https://i.ibb.co/TTDt41Z/cat.png) \n\n **Bold Moves are welcome**`,
      
    }

    this.updatePreview = this.updatePreview.bind(this);
    
    
  }
    updatePreview(event) {
      this.setState({
        input: event.target.value
      })
    }

    

    
  render() {
    
    return (
      <div id="container" className="container-fluid"> 
        <h1 className="head">Markdown Previewer</h1>
        <div className="row">
          
               
        <div id="div-1" className="col-sm-4"> 
        <h3 className="subHead">editor.</h3>
        <textarea id="editor" value={this.state.input} onChange ={this.updatePreview} >
        
        </textarea>
        </div> 
        <div id="div-2" className="col-sm-4">
          <h3 className="subHead">preview.</h3>
          <div id="preview"  dangerouslySetInnerHTML = {convertText(marked(this.state.input))}  />
         </div> 
        <div id="div-3" className="col-sm-4">
        <h3 className="subHead">html.</h3>  
        <div id="code" >
          {marked(this.state.input)}
        </div>
        </div> 
         
        </div>
        <h3 className="foot">Designed by LeiCorre &hearts;</h3>
      </div>
      
    )
  }
  
} 

ReactDOM.render(<MarkdownPreviewer />, document.getElementById("root")) 
export default MarkdownPreviewer;