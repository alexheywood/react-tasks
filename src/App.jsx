import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import { useState } from 'react';

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  
  let content; 

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddNew} />
  }
  else {
    content = <NoProject onStartAddProject={handleAddProject} />
  }

  function handleAddNew(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
        
      }
    })
  }


  function handleAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
        
      }
    })
  }

console.log(projectState)


  return (
    <>
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleAddProject}/>
      {content}
    </main>
    </>
  );
}

export default App;
