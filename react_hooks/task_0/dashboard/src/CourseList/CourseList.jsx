import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import WithLogging from '../HOC/WithLogging';

const CourseList = ({ courses = [] }) => {
  return (
    <>
    
    </>
  );
};

const CourseListWithLogging = WithLogging(CourseList);

// CourseList.propTypes = {
//   courses: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       credit: PropTypes.number.isRequired,
//     })
//   ),
// };

export default CourseList;