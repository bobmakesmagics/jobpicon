import React from "react";

export function QualificationTags({  active, name }: { active: boolean; name: string }): JSX.Element {
  return (
    <>
      {!active ? (
        <div className="qualificationTag">
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
              d="M12 5v14M5 12h14"
            />
          </svg>

          {name}
        </div>
      ) : (
        <div className="qualificationTagActive">
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
              d="M5 13l4 4L19 7"
            />
          </svg>

          {name}
        </div>
      )}
    </>
  )
}
