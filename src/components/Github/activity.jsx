import React, { useState, useEffect } from 'react'
import '../../assets/components/Github/activity.scss'
import ActivityBox from './activityBox'

const Activity = () => {
  const [activity, setActivity] = useState([])

  async function fetchGitActivityData () {
    const response = await fetch('https://api.github.com/users/xflasar/events')
    const data = await response.json()
    setActivity(formatData(data))
  }
  function formatData (data) {
    const activityTypes = ['PushEvent', 'CreateEvent', 'DeleteEvent']

    return data.map((activity) => {
      if (!(activityTypes.indexOf(activity.type) > -1) || (activity.type === 'CreateEvent' && activity.payload.ref === 'main')) return null

      const activityObj = {
        activityTitle: activity.type,
        public: activity.public,
        created_at: activity.created_at,
        payload: [],
        repo: {
          name: activity.repo.name.split('/')[1],
          url: 'https://github.com/' + activity.repo.name
        }
      }

      if (activity.type === 'PushEvent') {
        activityObj.payload.commits = activity.payload.commits.map((commit) => {
          return {
            message: commit.message,
            url: 'https://github.com/' + commit.url.match(/repos\/(.+)/)?.[1].replace('commits', 'commit')
          }
        })
        activityObj.payload.ref = activity.payload.ref.match(/refs\/heads\/(.+)/)?.[1]
      } else if (activity.type === 'CreateEvent') {
        if (activityObj.payload.createdType === 'repository') {
          activityObj.payload.ref = activityObj.repo.name
        } else {
          activityObj.payload.ref = activity.payload.ref
        }

        activityObj.payload = {
          createdType: activity.payload.ref_type
        }
      } else if (activity.type === 'DeleteEvent') {
        activityObj.payload = activity.payload
      }

      return activityObj
    })
  }

  useEffect(() => {
    fetchGitActivityData()
    const fetchActivityInterval = setInterval(async () => {
      fetchGitActivityData()
    }, 1000 * 60 * 5)

    return () => clearInterval(fetchActivityInterval)
  }, [])

  return (
    <div className="activity-container">
      {activity && (
        <div className="activity-list">
          {activity.map((activity, index) => (
            <ActivityBox key={index} activityData={activity}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default Activity
