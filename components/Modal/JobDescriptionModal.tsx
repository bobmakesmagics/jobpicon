import { JobDescriptionGoalsContext } from 'components/Context/JobDescriptionGoalsContext';
import React, { useContext } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps): JSX.Element {
  const { jobDSettings, setJobDSettings } = useContext(JobDescriptionGoalsContext);

  if (!isOpen) return null

  function handleButtonClick(parentId, clickedTagIndex) {
    setJobDSettings((prevState) =>
      prevState.map((setting) => {
        if (setting.id === parentId) {
          const updatedTags = setting.tags.map((tag, index) => {
            if (parentId === 4 || parentId === 5) {
              return index === clickedTagIndex
                ? { ...tag, selected: !tag.selected }
                : tag
            } else {
              return index === clickedTagIndex
                ? { ...tag, selected: true }
                : { ...tag, selected: false }
            }
          })

          return { ...setting, tags: updatedTags }
        }
        return setting
      })
    )
  }

  function resetToDefaults() {
    const defaultSettings = [
      {
        id: 1,
        name: 'Audience',
        tags: [
          { name: 'General', selected: false },
          { name: 'Knowledgeable', selected: true },
          { name: 'Expert', selected: false },
        ],
        info: 'Knowledgeable (default): Requires focus to read and understand',
      },
      {
        id: 2,
        name: 'Formality',
        tags: [
          { name: 'Informal', selected: false },
          { name: 'Neutral', selected: true },
          { name: 'Formal', selected: false },
        ],
        info: 'Neutral (default): Restricts slang but allows standard casual expressions.',
      },
      {
        id: 3,
        name: 'Domain',
        tags: [
          { name: 'Academic', selected: false },
          { name: 'Business', selected: false },
          { name: 'General', selected: true },
          { name: 'Technical', selected: false },
          { name: 'Casual', selected: false },
          { name: 'Creative', selected: false },
        ],
        info: 'General (default): Applies most rules and conventions with medium strictness.',
      },
      {
        id: 4,
        name: 'Tone',
        tags: [
          { name: '😐 Neutral', selected: false },
          { name: '🤝 Confident', selected: false },
          { name: '🙂 Joyful', selected: false },
          { name: '✌️ Optimistic', selected: false },
          { name: '😇 Friendly', selected: false },
          { name: '⏰ Urgent', selected: false },
          { name: '📊 Analytical', selected: false },
          { name: '🙌 Respectful', selected: false },
        ],
        info: 'Experimental. How do you want to sound?',
      },
      {
        id: 5,
        name: 'Intent',
        tags: [
          { name: 'Inform', selected: false },
          { name: 'Describe', selected: false },
          { name: 'Convince', selected: false },
          { name: 'Tell A Story', selected: false },
        ],
        info: 'Experimental. What are you trying to do?',
      },
    ]

    setJobDSettings(defaultSettings)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
    >
      <div
        className="relative mx-auto mt-20 w-full max-w-lg rounded-lg bg-white "
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '870px',
          height: '634px',
          overflow: 'hidden',
          padding: '20px 0',
        }}
      >
        <div style={{ width: '100%', height: '50px' }}>
          <div
            style={{ paddingBottom: '6px',paddingLeft:"10px", borderBottom: '.1px solid #d1d5db' }}
            className="jobDescriptionModalDiv"
          >
            <img
              width={'75px'}
              height="75px"
              src="/images/arrow-goal.png"
            ></img>
            <div>
              <h3
                style={{
                  display: 'block',
                  fontSize: '19px',
                  marginTop: '20px',
                  width: 'fit-content',
                }}
                className="text-black"
              >
                Set goals
              </h3>
              <p style={{ margin: '19px 0', fontSize: '11px' }}>
                Get tailored writing suggestions based on your golas and
                audience.
              </p>
            </div>
          </div>

          <div
            className="hide-scrollbar"
            style={{
              maxHeight: 'calc(634px - 50px - 50px)', // Subtract the header height and some padding
              overflowY: 'auto', // Enable vertical scrolling
              padding: '0 0 15px 0',
            }}
          >
            {jobDSettings?.map((elem: any) => (
              <div
                style={{
                  padding: '15px 20px 10px',
                  borderBottom: '.1px solid #d1d5db',
                  gap: '11px',
                }}
                className="jobDescriptionModalDiv"
                key={elem?.id}
              >
                <h3
                  style={{
                    minWidth: '80px',
                    fontSize: '17px',
                    fontWeight: 'bold',
                  }}
                >
                  {elem?.name}
                </h3>

                <div>
                  <span
                    style={{ gap: '6px' }}
                    className="isolate inline-flex flex-wrap rounded-md"
                  >
                    {elem?.tags?.map((el, index) => (
                      <button
                        key={index}
                        type="button"
                        style={{ border: '1px solid #9CA3AF', margin: '0' }}
                        className={`relative ml-2 mb-2 inline-flex items-center rounded px-2 py-1 text-xs font-medium focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                          el.selected
                            ? 'bg-blue-600 text-white hover:bg-blue-400'
                            : 'bg-f3f4f6 hover:bg-e0e0e0 text-blue-600'
                        }`}
                        onClick={() => handleButtonClick(elem.id, index)}
                      >
                        <span className="inline-flex items-center whitespace-nowrap">
                          {el?.name}
                        </span>
                      </button>
                    ))}
                  </span>

                  <p style={{ margin: '12px 0', fontSize: '11px' }}>
                    {elem?.info}
                  </p>
                </div>
              </div>
            ))}
            <div
              style={{
                display: 'flex',
                width: '100%',
                height: '70px',
                backgroundColor: 'whitesmoke',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '22px',
                padding: '30px 20px 35px',
              }}
            >
              <button
                className="buttonRest"
                style={{ fontSize: '14px', fontWeight: 'bold' }}
                onClick={resetToDefaults}
              >
                Reset to defaults
              </button>
              <button
                className="buttonDoneD"
                onClick={() => {
                  onClose()
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
