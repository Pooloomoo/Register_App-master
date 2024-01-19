import React, { useState, useEffect } from 'react';

const TextAreaForm = ({ project, maxCharacters, changeDetail }) => {
  const [projectDetail, setProjectDetail] = useState(project.projectDetail);

  // To send change back to ParentComponent
  const handleChangeDetail = (newData) => {
    changeDetail(newData);
  };

  useEffect(() => {
    setProjectDetail(project.projectDetail || '');
  }, [project.projectDetail]);

  const handleProjectDetailChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxCharacters) {
      setProjectDetail(inputValue);
      handleChangeDetail(inputValue);
    }
  };

  const remainingCharacters = maxCharacters - projectDetail.length;

  return (
    <div>
      <div className="mb-3">
        <textarea
          id="projectDetail"
          className="form-control"
          value={projectDetail}
          style={{ height: '150px' }}
          onChange={handleProjectDetailChange}
          placeholder="Enter project detail"
          maxLength={maxCharacters}
          required
        ></textarea>
        <small className="form-text text-muted">
          {remainingCharacters} characters remaining (max {maxCharacters})
        </small>
      </div>
    </div>
  );
};

export default TextAreaForm;
