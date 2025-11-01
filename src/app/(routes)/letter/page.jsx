//src/app/(route)/resume.page.jsx
'use client';

import React, { useEffect, useState } from 'react'
import LetterForm from '@/components/forms/letter.form'
import LetterPreview from '@/components/forms/letter.preview'


// Main Resume Component
const ResumePage = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState({
    parentName: "",
    address: "",
    postcode: "",
    city: "",
    state: "",
    teacherName: "",
    schoolName: "",
    schoolAddress: "",
    schoolPostcode: "",
    schoolCity: "",
    schoolState: "",
    includeSchoolAddress: false,
    studentName: "",
    studentClass: "",
    reason: "",
    startDate: null,
    endDate: null,
    signature: null,
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleFormChange = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }))
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className="w-full">
      <header>
        <h1 className='text-4xl font-bold text-center pt-8'>Resume Page</h1>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        <div className="space-y-4">
          <LetterForm
            formData={formData}
            onFormChange={handleFormChange}
          />
        </div>

        {/* Desktop Preview */}
        <div className="hidden lg:block">
          <div className="sticky top-4">
            <LetterPreview
                formData={formData}
                // templateSections={templateSections}
              />
          </div>
        </div>

        {/* Mobile Preview */}
        <div className="lg:hidden space-y-6">
          {/* <LetterPreview
              language={language}
              formData={formData}
              templateSections={templateSections}
            /> */}
        </div>
      </div>
    </div>
  )
}

export default ResumePage