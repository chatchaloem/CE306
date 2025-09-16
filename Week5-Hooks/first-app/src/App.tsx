import './App.css'
import NoDepencyEffect from './NoDependency'
import UserFrom from './From-component'
import EmptyDependencyEffect from './EmptyDependencyArray'
import Counter from './Counter-Component'


function App() {

  return(
    <>
      {/* <Counter initialCount={5} /> */}
      {/* <NoDepencyEffect/> */}
      {/* <EmptyDependencyEffect/> */}
      <UserFrom/>
      {/* <Counter/> */}
    </>
  )
}

export default App