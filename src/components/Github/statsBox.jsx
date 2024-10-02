import React, { useState, useEffect } from 'react';
import '../../assets/components/Github/statsBox.scss'

const StatsBox = () => {
  const [stats, setStats] = useState({
    repos: 32,
    commits: 553,
    lastActivity: '29/8/2024'
  });
  const username = 'xflasar'

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const [userResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`)
        ]);

        const user = await userResponse.json();

        setStats(prevStats => ({
          ...prevStats,
          repos: user.public_repos,
          lastActivity: new Date(user.updated_at).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          })
        }));
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    }

    //fetchGitHubStats();
  }, [username]);

  return (
    <div className="github-stats-box">
      <h3>GitHub Stats</h3>
      <div className="stats-container">
        <div className="stat-item">
          <span className="icon">{/* Icon for Repos */}</span>
          <div className="stat-details">
            <p className="stat-name">Repositories</p>
            <p className="stat-value">{stats.repos}</p>
          </div>
        </div>
        <div className="stat-item">
          <span className="icon">{/* Icon for Commits */}</span>
          <div className="stat-details">
            <p className="stat-name">Commits</p>
            <p className="stat-value">{stats.commits}</p>
          </div>
        </div>
        <div className="stat-item">
          <span className="icon">{/* Icon for Followers */}</span>
          <div className="stat-details">
            <p className="stat-name">Last Active</p>
            <p className="stat-value">{stats.lastActivity}</p>
          </div>
        </div>
        <div className="stat-item">
          <span className="icon">{/* Icon for Stars */}</span>
          <div className="stat-details">
            <p className="stat-name">Not Implemented</p>
            <p className="stat-value">{stats.stars}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
