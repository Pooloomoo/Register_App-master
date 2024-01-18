import React, { useState } from 'react';

const TextAreaForm = (props) => {
  const maxCharacters = props.maxCharacters;
  const [projectDetail, setProjectDetail] = useState('');


  const handleProjectDetailChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxCharacters) {
      setProjectDetail(inputValue);
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
