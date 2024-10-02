import React, { useState, useEffect, useRef } from 'react'
import StatsBox from './StatsBox'
import CommitBox from './CommitBox'
import PropTypes from 'prop-types'
import '../../assets/components/Github/activityBox.scss'
import useToggleOnInteraction from '../../hooks/useToggleOnInteraction'

const ActivityBox = ({ activity }) => {
  const { toggleState, componentRef } = useToggleOnInteraction(true, 5000, 5000)

  return (
    <div ref={componentRef} className="activity-box">
      {toggleState ? (
        <StatsBox />
      ) : (
        <div className='activity-box-container'>
          {activity.length > 0 ? (
            activity.map((activityData, index) => (
              <CommitBox key={index} activityData={activityData} />
            ))
          ) : (
            <p>No recent activity.</p>
          )}
        </div>
      )}
    </div>
  )
}

ActivityBox.propTypes = {
  activity: PropTypes.array.isRequired
}

export default ActivityBox
