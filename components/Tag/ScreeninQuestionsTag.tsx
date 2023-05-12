import { TextField } from 'components/ImportantComponent/Fields';
import Comboboxes from 'components/SelectField/Comboboxes';
import React from "react";
import { qualifications, screeningQuestions } from 'utils/lists';

interface ScreeningQuestionsTagProps {
  id: number;
  active: boolean;
  name: string;
  leftSide: string;
  rightSide: string;
  idealAnswer: boolean;
  clickledQualificationTag: (e: any, id: number, active: boolean, index: number, type: string) => void;
  index: number;
}

export function ScreeningQuestionsTag(props: ScreeningQuestionsTagProps): JSX.Element {
  const {
    id,
    active,
    name,
    leftSide,
    rightSide,
    idealAnswer,
    clickledQualificationTag,
    index,
  } = props

  if (rightSide) {
    return (
      <div className="screeningQuestions-card-big">
        <div className="screeningQuestions-top-part">
          <div className="title-container">{name}</div>
          <button
            className="absolute-xbutton"
            onClick={(e) => clickledQualificationTag(e, id, active, index, "remove")}
          >
            <span className="xbutton">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="screeningQuestions-bottom-part">
          <div className='main-div-comboboxes'>
            <Comboboxes leftSide={leftSide} type={'text'} />
          </div>
          <div className='main-div-comboboxes'>
            <Comboboxes leftSide={rightSide} type={'number'} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {' '}
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span style={{ fontWeight: '500' }}>Must-have qualification</span>
          </div>
        </div>
      </div>
    )
  } else if (leftSide) {
    return (
      <div className="screeningQuestions-card-big">
        <div className="screeningQuestions-top-part">
          <div className="title-container">{name}</div>
          <button
            className="absolute-xbutton"
            onClick={(e) => clickledQualificationTag(e, id, active, index, "remove")}
          >
            <span className="xbutton">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="screeningQuestions-bottom-part">
          <div className='main-div-comboboxes'>
            <Comboboxes leftSide={leftSide} type={'text'} />
          </div>
          {id !== 7 && (
            <div>
              <span style={{ color: '#00000099', fontSize: '13px' }}>
                Ideal answer:
              </span>{' '}
              <h2 style={{ fontSize: '14px', fontWeight: '500' }}>
                {idealAnswer ? 'No' : 'Yes'}
              </h2>
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {' '}
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span style={{ fontWeight: '500' }}>Must-have qualification</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="screeningQuestions-card-big">
      <div className="screeningQuestions-top-part">
        <div className="title-container">{name}</div>
        <button
          className="absolute-xbutton"
          onClick={(e) => clickledQualificationTag(e, id, active, index, "remove")}
        >
          <span className="xbutton">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="screeningQuestions-bottom-part">
        <div>
          <span style={{ color: '#00000099', fontSize: '13px' }}>
            Ideal answer:
          </span>{' '}
          <h2 style={{ fontSize: '14px', fontWeight: '500' }}>Yes</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {' '}
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span style={{ fontWeight: '500' }}>Must-have qualification</span>
        </div>
      </div>
    </div>
  )
}
