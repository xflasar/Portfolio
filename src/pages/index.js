import * as React from 'react'
import Home from '../components/Home/Home'
import Footer from '../components/Footer/Footer'
import '../assets/index.scss'

// rewtire this to have ether id, image, caption or change how we render the projects
const projects = [
  {
    projectName: 'BDO Grind Tracker 1',
    projectDescription: 'The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.',
    projectLink: 'https://www.google.com',
    projectImage: 'https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg',
    projectSkills: ['HTML5', 'CSS3', 'JavaScript'],
    Tag: 'Personal Project'
  },
  {
    projectName: 'BDO Grind Tracker 2',
    projectDescription: 'The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.',
    projectLink: 'https://www.google.com',
    projectImage: 'https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg',
    projectSkills: ['HTML5', 'CSS3', 'JavaScript'],
    Tag: 'Personal Project'
  },
  {
    projectName: 'BDO Grind Tracker 3',
    projectDescription: 'The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.',
    projectLink: 'https://www.google.com',
    projectImage: 'https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg',
    projectSkills: ['HTML5', 'CSS3', 'JavaScript'],
    Tag: 'Personal Project'
  },
  {
    projectName: 'BDO Grind Tracker 4',
    projectDescription: 'The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.',
    projectLink: 'https://www.google.com',
    projectImage: 'https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg',
    projectSkills: ['HTML5', 'CSS3', 'JavaScript'],
    Tag: 'Freelance Project'
  },
  {
    projectName: 'BDO Grind Tracker 5',
    projectDescription: 'The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.',
    projectLink: 'https://www.google.com',
    projectImage: 'https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg',
    projectSkills: ['HTML5', 'CSS3', 'JavaScript'],
    Tag: 'Freelance Project'
  },
  {
    projectName: 'Project 6',
    projectDescription: 'The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.',
    projectLink: 'https://www.google.com',
    projectImage: 'https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg',
    projectSkills: ['HTML5', 'CSS3', 'JavaScript'],
    Tag: 'Freelance Project'
  },
  {
    projectName: 'Project 7',
    projectDescription: 'The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.',
    projectLink: 'https://www.google.com',
    projectImage: 'https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg',
    projectSkills: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB'],
    Tag: 'Freelance Project'
  },
  {
    projectName: 'Project 8',
    projectDescription: 'The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.',
    projectLink: 'https://www.google.com',
    projectImage: 'https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg',
    projectSkills: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB'],
    Tag: 'Side-Small Project'
  },
  {
    projectName: 'Project 9',
    projectDescription: 'The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.',
    projectLink: 'https://www.google.com',
    projectImage: 'https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg',
    projectSkills: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB'],
    Tag: 'Side-Small Project'
  },
  {
    projectName: 'Project 8',
    projectDescription: 'The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.',
    projectLink: 'https://www.google.com',
    projectImage: 'https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg',
    projectSkills: ['Vue.js', 'Java', 'PostgreSQL'],
    Tag: 'Side-Small Project'
  },
  {
    projectName: 'Project 9',
    projectDescription: 'The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.',
    projectLink: 'https://www.google.com',
    projectImage: 'https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg',
    projectSkills: ['Vue.js', 'Java', 'PostgreSQL'],
    Tag: 'Side-Small Project'
  },
  {
    projectName: 'Project 10',
    projectDescription: 'The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.',
    projectLink: 'https://www.google.com',
    projectImage: 'https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg',
    projectSkills: ['Vue.js', 'Java', 'PostgreSQL'],
    Tag: 'Side-Small Project'
  }
]

const skills = [
  { name: 'React.js', url: 'https://reactjs.org/', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', startDate: '2023-03-5' },
  { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png', startDate: '2021-06-15' },
  { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', startDate: '2021-06-15' },
  { name: 'Node.js', url: 'https://nodejs.org/en/', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', startDate: '2023-03-5' },
  { name: 'Java', url: 'https://www.w3schools.com/java/', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png', startDate: '2023-08-1' },
  { name: 'Vue.js', url: 'https://vuejs.org/', image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', startDate: '2023-08-1' },
  { name: 'MongoDB', url: 'https://www.mongodb.com/', image: 'https://png2.cleanpng.com/sh/7139acc613f224cb0921e4fac74b1fe1/L0KzQYm3VMA0N5hxiZH0aYP2gLBuTf1wdph0fNQ2bnBndX7xk71veJ4yhAJubj32f8b5gBUudZDpfd42YX7qhb3okvp0NZ1qedg2NXHmRIXrWfVnOJRofKc3MkS2RYSAUMIyPWM3UKM9M0a5SYm9U75xdpg=/kisspng-mongodb-node-js-npm-open-source-model-angularjs-leaf-5ac44d9ef0ccd5.2435370215228143669863.png', startDate: '2023-02-15' },
  { name: 'PostgreSQL', url: 'https://www.postgresql.org/', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png', startDate: '2023-08-1' }
]

export default function App () {
  return (
    <div className="App">
      <main>
        <Home projects={projects} skills={skills} />
      </main>
      <Footer />
    </div>
  )
}
