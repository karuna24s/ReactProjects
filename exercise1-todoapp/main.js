var TODOS = ["buy food", "make food", "eat food"];

var TodoApp = React.createClass({
	
    render: function(){
        return(
        	<div>
        	   <input type="input"/>
        	   <h3>{this.props.todos}</h3>
        	   <button onClick={}>Add to List</button>
        	</div>)
        ;
    },
});

React.render(<TodoApp todos={TODOS} />, document.getElementById('content'));









// var TODOS = [" buy food", " make food", " eat food"];

// var AddItemToolbar = React.createClass({
// 	getInitialState: function() {
// 		return {text: ""};
// 	},
// 	onChange: function(event) {
//         var text = event.target.value;
//         this.setState({ text: text });
// 	},
// 	onClick: function(){
//         this.props.onClick(this.state.text);
// 	},
// 	onKeydown: function(){
// 		this.props.onKeydown(this.state.text);
// 	},
// 	render: function(){
// 		return(
// 			<div>
//                 <input type="text" value={this.state.text} onChange={this.onChange} placeholder="enter item"/>
//                 <input type="submit" onClick={this.onClick} value="add"/>
//             </div>
// 			);
// 	},
// });

// var TodoApp = React.createClass({
// 	getInitialState: function () {
// 		return { todos: [" buy food", " make food", " eat food"] };
// 	},

// 	onClick : function(text) {
// 		this.setState({ todos: this.state.todos.concat(text) });
// 	},
//     render: function(){
//         return(
//         	<div>
//                <AddItemToolbar onClick={this.onClick}/>
//                <div className="list_container">
//                   <div className="list-item">{this.state.todos}</div>
//                   var listItem = this.state.todos
//                </div>
//         	</div>

//         	);
//     },
// });

// React.render(<TodoApp />, document.getElementById('content'));
