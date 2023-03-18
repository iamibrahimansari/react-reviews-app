import './sass/app.scss';
import './sass/main.scss';

import employees from './components/data';
import ProfileImg from './components/ProfileImg';
import About from './components/About';
import Buttons from './components/Buttons';
import {useState} from 'react';

const App = () => {
  const [emp, setEmp] = useState(employees[0]);
  const {img, ...rest} = emp;

  const handleClick = (indicator = 'surprise-btn') =>{
    const index = employees.indexOf(emp);
    let randomEmp = employees[parseInt(Math.random() * employees.length)];
    while(randomEmp === emp){
      randomEmp = employees[parseInt(Math.random() * employees.length)];
    }
    switch(indicator){
      case 'left':
        setEmp(index ?  employees[index - 1] : employees[employees.length - 1]);
        break;
      case 'right':
        setEmp(index !== employees.length - 1 ?  employees[index + 1] : employees[0]);
        break;
      default:
        setEmp(randomEmp);
    }
  }

  return (
    <div className="App">
      <header className="profile-img">
        <ProfileImg {...img} />
      </header>
      <main className="emp-information">
        <About {...rest} />
      </main>
      <footer className="btns">
        <Buttons text="Surprise Me" onClick={handleClick} />
      </footer>
    </div>
  );
}

export default App;
