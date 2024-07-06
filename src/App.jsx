import { useState } from 'react'

import './App.css'
import { v4 as uuidv4 } from 'uuid';
import PersonalInfo from './components/EditCV/personal'
import Education from './components/EditCV/education'
import Work from './components/EditCV/work'
import Preview from './components/PreviewCV/preview'
import Timeline from './components/reusables/timeline'


function App() {
  const [personals, setPersonals] = useState({
    fname:'',
    lname:'',
    job:'',
    address:'',
    email:'',
    contact:''
  });
  const [editEducations, setEditEducations] = useState([]);
  const [editWorks, setEditWorks] = useState([]);

  function handlePersonal(e) {
    const source = e.target;
    if(source.name === "first-name") {
      setPersonals({...personals, fname:source.value});
    } else if(source.name === "last-name") {
      setPersonals({...personals, lname:source.value});
    } else if(source.name === "job") {
      setPersonals({...personals, job:source.value});
    } else if(source.name === "address") {
      setPersonals({...personals, address:source.value});
    } else if(source.name === "email") {
      setPersonals({...personals, email:source.value});
    } else if(source.name === "contact-number") {
      setPersonals({...personals, contact:source.value});
    }
  }

  function deleteEditEducations(e) {
    const source = e.target;
    const id = source.parentElement.id;
    setEditEducations(editEducations.filter((elId) => elId.id !== id));
  }
  
  function addEditEducations() {
    setEditEducations([...editEducations, {
      id:uuidv4(),
      school:'',
      city:'',
      program:'',
      start:'',
      end:''
    }]);
  }

  function handleEditEducations(e) {
    const source = e.target;
    const parent = source.parentElement;
    const id = parent.id;
    const value = source.value;
    const name = source.name;
    const updated = editEducations.map((edu) => {
      if(edu.id === id) {
        if(name === "school-" + id) {
          edu.school = value;
        } else if(name === "city-" + id) {
          edu.city = value;
        } else if(name === "program-" + id) {
          edu.program = value;
        } else if(name === "start-educ-" + id) {
          edu.start = value;
        } else if(name === "end-educ-" + id) {
          edu.end = value;
        }
        return edu;
      } else {
        return edu;
      }
    });
    setEditEducations(updated);
  }

  function deleteEditWorks(e) {
    const source = e.target;
    const id = source.parentElement.id;
    setEditWorks(editWorks.filter((elId) => elId.id !== id));
  }
  
  function addEditWorks() {
    setEditWorks([...editWorks, {
      id:uuidv4(),
      company:'',
      city:'',
      role:'',
      start:'',
      end:''
    }]);
  }

  function handleEditWorks(e) {
    const source = e.target;
    const parent = source.parentElement;
    const id = parent.id;
    const value = source.value;
    const name = source.name;
    const updated = editWorks.map((work) => {
      if(work.id === id) {
        if(name === "company-" + id) {
          work.company = value;
        } else if(name === "work-city-" + id) {
          work.city = value;
        } else if(name === "role-" + id) {
          work.program = value;
        } else if(name === "start-work-" + id) {
          work.start = value;
        } else if(name === "end-work-" + id) {
          work.end = value;
        }
        return work;
      } else {
        return work;
      }
    });
    setEditWorks(updated);
  }

  return (
    <>
      <section>
        <h1>Personal Information</h1>
        <PersonalInfo onChange={handlePersonal}/>
        <h1>Education</h1>
        {editEducations.map((edu) =>
          <Education key={edu.id} id={edu.id} onClick={deleteEditEducations}
          onChange={handleEditEducations} keyId={edu.id}/>
        )}
        <button onClick={addEditEducations}>Add Education</button>
        <h1>Work Experience</h1>
        {editWorks.map((work) => 
            <Work key={work.id} id={work.id} onClick={deleteEditWorks}
            onChange={handleEditWorks} keyId={work.id}/>
        )}
        <button onClick={addEditWorks}>Add Work Experience</button>
      </section>
      <section>
        <Preview
          fname={personals.fname}
          lname={personals.lname}
          job={personals.job}
          address={personals.address}
          email={personals.email}
          contact={personals.contact}
          timelines1={editEducations.map((edu) => {
            return (
            <Timeline
              key={edu.id}
              start={edu.start}
              end={edu.end}
              place={edu.school}
              programRole={edu.program}
              city={edu.city}
            />);
          })}
          timelines2={editWorks.map((work) => {
            return (
              <Timeline 
                key={work.id}
                start={work.start}
                end={work.end}
                place={work.company}
                programRole={work.role}
                city={work.city}
              />
            );
          })}
        />
      </section>
    </>
  )
}

export default App
