import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";
import { useEffect, useState } from 'react';

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleAddNew(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random() * 100
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]

      }
    })
  }

  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,

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

  function handleDelete() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = <SelectedProject onDelete={handleDelete} project={selectedProject} />

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddNew} onCancel={handleCancel} />
    )
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <NoProject onStartAddProject={handleAddProject} />
    )
  }


  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar 
        onStartAddProject={handleAddProject} 
        projects={projectState.projects} 
        onCancel={handleCancel} 
        onSelectProject={handleSelectProject}/>
        {content}
      </main>
    </>
  );
}

export default App;
