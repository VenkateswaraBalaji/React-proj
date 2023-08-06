import './App.css';
import About from './components/About';
import Home from './components/Home';
// import Showarray from './components/Showarray';
function App() {
    const heading ="My first React App"
    // const fruits = ["Apple","Banana","Grape","Mango"]
    const allow = true
    const myfunc = (e)=>{ // e prevents default reloading of page
      e.preventDefault();
      // alert("Hello");
      // console.log("Clicked times")
      const formdata = new FormData(e.target);
      // console.log(formdata.get) // gets only the first username
      console.log(formdata.getAll("username")) // gets all username in an array
      // console.log(formdata.getAll("username"[1]))//gets the array 1 username
      console.log("form submitted")
    }
//     if (allow){
//   return (
//       <div className="App">
//       <Home heading = {heading}/>
//       <About />
//       <h1>My Fruits</h1>
      
//       <Showarray fruits = {fruits}/>
      
//            </div>    
//  );
// }
// else {
//   return (
//     <div className="App">
//       <h1>You are not allowed</h1>
//     </div>
//   )
// }

return (
  <div className="App">
    {allow ? (
      <>
      <Home heading = {heading}/>
       <About />
        <h1>My Fruits</h1>
        {/* <button onClick={myfunc}>Click Me</button>
      
    <Showarray fruits = {fruits}/>  */}
    
    <form onSubmit={myfunc}>
      <input type='text' name ="username" placeholder='username'/> <br/>
      <input type='text' name ="username" placeholder='username'/> <br/>
      <input type='password' name ="password" placeholder='password'/> <br/>
      <input type='submit' value="submit"/>
     </form>
     </>
    ): (
      <>
      <div>
      <h1>You are not allowed</h1>
        </div> 
        </>
     )}
     </div>
);
}
export default App;

// create a button which on click toggles the backgrounf color of the page
// create a signup form and on submit show all the fields in console
// create a login form anf on submit all the fields in console
// make a conditional rendering, use ternary operator and if else statement
// try to use more components, create teh form in other component and show the data in other component
// fomr.js file -- where the actual form is there and in this file lets have a another component called showdata.js 
// where will show the data
// github link --  github.com/abhi60shek/reactproj