import * as React from 'react'
import Home from '../components/Home/Home'
import Footer from '../components/Footer/Footer'
import '../assets/index.scss'

const projects = [
  {
    projectName: "BDO Grind Tracker 1",
    projectDescription: "The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.",
    projectLink: "https://www.google.com",
    projectImage: "https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg",
    projectSkills: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    projectName: "BDO Grind Tracker 2",
    projectDescription: "The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.",
    projectLink: "https://www.google.com",
    projectImage: "https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg",
    projectSkills: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    projectName: "BDO Grind Tracker 3",
    projectDescription: "The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.",
    projectLink: "https://www.google.com",
    projectImage: "https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg",
    projectSkills: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    projectName: "BDO Grind Tracker 4",
    projectDescription: "The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.",
    projectLink: "https://www.google.com",
    projectImage: "https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg",
    projectSkills: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    projectName: "BDO Grind Tracker 5",
    projectDescription: "The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.",
    projectLink: "https://www.google.com",
    projectImage: "https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg",
    projectSkills: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    projectName: "Project 6",
    projectDescription: "The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.",
    projectLink: "https://www.google.com",
    projectImage: "https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg",
    projectSkills: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    projectName: "Project 7",
    projectDescription: "The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.",
    projectLink: "https://www.google.com",
    projectImage: "https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg",
    projectSkills: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB"]
  },
  {
    projectName: "Project 8",
    projectDescription: "The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.",
    projectLink: "https://www.google.com",
    projectImage: "https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg",
    projectSkills: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB"]
  },
  {
    projectName: "Project 9",
    projectDescription: "The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.",
    projectLink: "https://www.google.com",
    projectImage: "https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg",
    projectSkills: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB"]
  },
  {
    projectName: "Project 8",
    projectDescription: "The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.",
    projectLink: "https://www.google.com",
    projectImage: "https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg",
    projectSkills: ["Vue.js", "Java", "PostgreSQL"]
  },
  {
    projectName: "Project 9",
    projectDescription: "The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.",
    projectLink: "https://www.google.com",
    projectImage: "https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg",
    projectSkills: ["Vue.js", "Java", "PostgreSQL"]
  },
  {
    projectName: "Project 10",
    projectDescription: "The Black Desert Online Grinding Tracker is a comprehensive utility designed for avid players of the MMORPG, Black Desert Online. This project facilitates seamless tracking and management of in-game grinding sessions. It encompasses features such as session-specific data storage, experience gains, item drops, earnings monitoring, and a marketplace module to observe fluctuations in marketplace items. By offering the capacity to edit, delete, and analyze sessions, players can elevate their gameplay experience and make well-informed decisions during their Black Desert Online escapades.",
    projectLink: "https://www.google.com",
    projectImage: "https://template.pro/wp-content/uploads/2015/11/Lorempixel.jpg",
    projectSkills: ["Vue.js", "Java", "PostgreSQL"]
  }
]

const skills = [
  { name: 'React.js', url: 'https://reactjs.org/', startDate: '2023-03-5' },
  { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5', startDate: '2021-06-15' },
  { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', startDate: '2021-06-15' },
  { name: 'Node.js', url: 'https://nodejs.org/en/', startDate: '2023-03-5' },
  { name: 'Java', url: 'https://www.w3schools.com/java/', startDate: '2023-08-1' },
  { name: 'Vue.js', url: 'https://vuejs.org/', startDate: '2023-08-1' },
  { name: 'MongoDB', url: 'https://www.mongodb.com/', startDate: '2023-02-15' },
  { name: 'PostgreSQL', url: 'https://www.postgresql.org/', startDate: '2023-08-1' }
]

export default function App() {
  return (
    <div className="App">
      <main>
        <Home projects={projects} skills={skills} />
      </main>
      <Footer />
    </div>
  )
}
