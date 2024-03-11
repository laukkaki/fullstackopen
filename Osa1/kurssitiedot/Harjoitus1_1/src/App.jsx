const Header= (props) => {
  console.log('Header component') 
  return(
    <h1>{props.course}</h1>
  )
}

const Content  = (props) => {
  console.log('Content component')
  return(
    <>
      <p>
        {props.partname1} {props.exercises1}
      </p>
      <p>
        {props.partname2} {props.exercises2}
      </p>
      <p>
        {props.partname3} {props.exercises3}
      </p>
    </>
  )
}

const Total = (props) => {
  console.log ('Total component')
  return(
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content partname1={part1} exercises1={exercises1} partname2={part2} exercises2={exercises2} partname3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App
