import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/components/Github/activityBox.scss'

const ActivityBox = ({ activityData }) => {
  function formatTimestap (timestap) {
    return new Date(timestap).toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }) + ' ' + new Date(timestap).toLocaleDateString(undefined, { month: 'numeric', day: 'numeric', year: 'numeric' })
  }

  const calculateDuration = timestamp => {
    const diffInMilliseconds = new Date() - new Date(timestamp)
    const minutes = diffInMilliseconds / (1000 * 60)
    const hours = minutes / 60
    const days = hours / 24
    return days >= 1 ? `${Math.floor(days)} day${Math.floor(days) > 1 ? 's' : ''}` : hours >= 1 ? `${Math.floor(hours)} hour${Math.floor(hours) > 1 ? 's' : ''}` : `${Math.floor(minutes)} minute${Math.floor(minutes) > 1 ? 's' : ''}`
  }

  function selectRenderBoxType (activityData) {
    if (activityData.activityTitle === 'PushEvent') {
      return (
        <a href={activityData.payload.commits[0].url} target='_blank' rel='noopener noreferrer'>
          <div className='activity-box-header'>
            <h3>{activityData.activityTitle.replace('Event', '')} to {activityData.repo.name}</h3>
            <h4>Branch: {activityData.payload.ref}</h4>
            <h5>{formatTimestap(activityData.created_at)} ({calculateDuration(activityData.created_at)} ago)</h5>
          </div>
          <div className='activity-box-body'>
            <p>{activityData.payload.commits[0].message}</p>
          </div>
        </a>
      )
    } else if (activityData.activityTitle === 'CreateEvent') {
      return (
        <>
          <div className='activity-box-header'>
            <h3>{activityData.activityTitle.replace('Event', 'd')} {activityData.payload.createdType === 'repository' ? 'repository' : 'Branch'} {activityData.repo.name}</h3>
            <h4>({calculateDuration(activityData.created_at)} ago)</h4>
          </div>
        </>
      )
    } else if (activityData.activityTitle === 'DeleteEvent') {
      return (
        <>
          <div className='activity-box-header'>
            <h3>{activityData.activityTitle.replace('Event', 'd')} {activityData.payload.createdType === 'repository' ? `repository ${activityData.repo.name}` : `branch ${activityData.payload.ref}` } </h3>
            <h4>({calculateDuration(activityData.created_at)} ago)</h4>
          </div>
        </>
      )
    }
  }

  return (
    <div className='activity-box'>
    {activityData && selectRenderBoxType(activityData)}
  </div>
  )
}

ActivityBox.propTypes = {
  activityData: PropTypes.object
}

export default ActivityBox
