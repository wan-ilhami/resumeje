// src/app/components/forms/letter.template.jsx
import React from 'react'

const englishMonths = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const formatDate = (dateString) => {
  if (!dateString) {
    return "[date]"
  }
  const date = new Date(dateString)
  const day = date.getDate()
  const month = englishMonths[date.getMonth()]
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}

// Helper function to handle empty fields with placeholders
const getFieldWithPlaceholder = (value, placeholder) => {
  return value && value.trim() ? value : `[${placeholder}]`
}

// Helper function to format absence date text
const getAbsenceDateText = (data) => {
  if (data.dateType === "single") {
    return data.singleDate ? formatDate(data.singleDate) : "[date]"
  }
  
  const startText = data.startDate ? formatDate(data.startDate) : "[start date]"
  const endText = data.endDate ? formatDate(data.endDate) : "[end date]"
  
  return `${startText} to ${endText}`
}

export function LetterTemplate({ data, sections }) {
  const recipient = data.teacherName && data.teacherName.trim() ? data.teacherName : "Teacher on Duty"
  const school = getFieldWithPlaceholder(data.schoolName, "school name")
  const closing = sections && sections.find(s => s.id === "closing")
  
  const dateText = getAbsenceDateText(data)
  const letterDate = data.letterDate ? formatDate(data.letterDate) : "[letter date]"

  return (
    <>
      <div className="address">
        <strong>{getFieldWithPlaceholder(data.parentName, "parent's name")}</strong><br />
        {getFieldWithPlaceholder(data.address, "address")}<br />
        {getFieldWithPlaceholder(data.postcode, "postcode")}, {getFieldWithPlaceholder(data.city, "city")}<br />
        {getFieldWithPlaceholder(data.state, "state")}
      </div>

      <hr className="divider" />

      <div className="recipient-section">
        <div className="recipient-address">
          <strong>{recipient}</strong><br />
          {data.includeSchoolAddress ? (
            <>
              {school}<br />
              {getFieldWithPlaceholder(data.schoolAddress, "school address")}<br />
              {getFieldWithPlaceholder(data.schoolPostcode, "postcode")}, {getFieldWithPlaceholder(data.schoolCity, "city")}<br />
              <div className="flex justify-between">
                <div>{getFieldWithPlaceholder(data.schoolState, "state")}</div>
                <div className="date">{letterDate}</div>
              </div>
            </>
          ) : (
            <div className="flex justify-between">
              <div>{school}</div>
              <div className="date">{letterDate}</div>
            </div>
          )}
        </div>
      </div>

      <div>Sir/Madam,</div>

      <div className="subject">
        NOTIFICATION OF SCHOOL ABSENCE ON {dateText.toUpperCase()}
      </div>

      <div className="content">
        I would like to inform that my child <strong>{getFieldWithPlaceholder(data.studentName, "student's name")}</strong> from class <strong>{getFieldWithPlaceholder(data.studentClass, "class")}</strong> will not be able to attend school on {dateText}.
      </div>

      {data.contents && data.contents.map((content, index) => (
        <div key={index} className="content">
          {index + 2}. {content && content.trim() ? content : `[content ${index + 1}]`}
        </div>
      ))}

      <div className="content">
        {closing?.content || "Your cooperation is highly appreciated"}
      </div>

      <div className="content">
        Thank you.
      </div>

      <div className="signature">
        Yours sincerely,
      </div>
    </>
  )
}