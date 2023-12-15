import React, { useState } from 'react';

const DependentDropdowns = ({ data }) => {
  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedSubtopic, setSelectedSubtopic] = useState('');

  const divisions = data.map((item) => item.name);

  const classes =
    selectedDivision &&
    data.find((item) => item.name === selectedDivision)?.classes.map(
      (classItem) => classItem.name
    );

  const subjects =
    selectedClass &&
    data
      .find((item) => item.name === selectedDivision)
      .classes.find((classItem) => classItem.name === selectedClass)?.subjects.map(
        (subjectItem) => subjectItem.name
      );

  const topics =
    selectedSubject &&
    data
      .find((item) => item.name === selectedDivision)
      .classes.find((classItem) => classItem.name === selectedClass)
      .subjects.find((subjectItem) => subjectItem.name === selectedSubject)?.topics.map(
        (topicItem) => topicItem.name
      );
      
  const subtopics =
    selectedTopic &&
    data
      .find((item) => item.name === selectedDivision)
      .classes.find((classItem) => classItem.name === selectedClass)
      .subjects.find((subjectItem) => subjectItem.name === selectedSubject)
      .topics.find((topicItem) => topicItem.name === selectedTopic)?.subtopics.map(
        (subtopicItem) => subtopicItem.name
      );

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
    setSelectedClass('');
    setSelectedSubject('');
    setSelectedTopic('');
    setSelectedSubtopic('');
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedSubject('');
    setSelectedTopic('');
    setSelectedSubtopic('');
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setSelectedTopic('');
    setSelectedSubtopic('');
  };

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
    setSelectedSubtopic('');
  };

  const handleSubtopicChange = (e) => {
    setSelectedSubtopic(e.target.value);
  };

  return (
    <div>
      <label>Division:</label>
      <select value={selectedDivision} onChange={handleDivisionChange}>
        <option value="">Select Division</option>
        {divisions.map((division, index) => (
          <option key={index} value={division}>
            {division}
          </option>
        ))}
      </select>

      <label>Class:</label>
      <select value={selectedClass} onChange={handleClassChange} disabled={!selectedDivision}>
        <option value="">Select Class</option>
        {classes &&
          classes.map((classItem, index) => (
            <option key={index} value={classItem}>
              {classItem}
            </option>
          ))}
      </select>

      <label>Subject:</label>
      <select value={selectedSubject} onChange={handleSubjectChange} disabled={!selectedClass}>
        <option value="">Select Subject</option>
        {subjects &&
          subjects.map((subjectItem, index) => (
            <option key={index} value={subjectItem}>
              {subjectItem}
            </option>
          ))}
      </select>

      <label>Topic:</label>
      <select value={selectedTopic} onChange={handleTopicChange} disabled={!selectedSubject}>
        <option value="">Select Topic</option>
        {topics &&
          topics.map((topicItem, index) => (
            <option key={index} value={topicItem}>
              {topicItem}
            </option>
          ))}
      </select>

      <label>Subtopic:</label>
      <select value={selectedSubtopic} onChange={handleSubtopicChange} disabled={!selectedTopic}>
        <option value="">Select Subtopic</option>
        {subtopics &&
          subtopics.map((subtopicItem, index) => (
            <option key={index} value={subtopicItem}>
              {subtopicItem}
            </option>
          ))}
      </select>
    </div>
  );
};

export default DependentDropdowns;
