import { useState } from 'react';

import styles from './IssuesAdder.module.css';

export default function IssuesAdder({ isVisible }) {
  const [issueNameChange, setIssueNameChange] = useState('');
  const [issueDescriptionChange, setIssueDescriptionChange] = useState('');

  const issueSendHandler = () => {
    if (issueNameChange !== '' && issueDescriptionChange !== '') {
      console.log('Issue send started');
    } else {
      alert('Issue name and issue description must not be empty');
    }
  };
  return (
    <div
      className={styles.modal}
      style={isVisible ? { display: 'inline-block' } : { display: 'none' }}
    >
      <div className={styles.inputsContainerFirst}>
        <label htmlFor="issue-name" className={styles.labels}>
          Name of your issue
        </label>
        <input
          className={styles.input}
          type="text"
          name="issue-name"
          value={issueNameChange}
          placeholder="Enter name of issue"
          onChange={e => setIssueNameChange(e.target.value)}
        />
      </div>
      <div className={styles.inputsContainer}>
        <label htmlFor="issue-description" className={styles.labels}>
          Description of your issue
        </label>
        <textarea
          className={styles.textarea}
          type="text"
          name="issue-description"
          value={issueDescriptionChange}
          placeholder="Enter description of issue"
          onChange={e => setIssueDescriptionChange(e.target.value)}
        />
      </div>
      <button className={styles.button} onClick={issueSendHandler}>
        Send
      </button>
    </div>
  );
}
