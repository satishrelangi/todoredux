import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const VisibilityFilter = () => (
  <div className='visfil'>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      <span className='fillis'>All</span>
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      <span className='fillis'>Active</span>
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      <span className='fillis'>Completed</span>
    </FilterLink>
  </div>
)

export default VisibilityFilter
