import React from 'react'
import { Button } from '@/components/ui/button'
import { exportToPdf } from '@/components/ui/export.handlers'

const isLetterValid = (formData) => {
  return (
    formData.parentName &&
    formData.parentName.trim() &&
    formData.studentName &&
    formData.studentName.trim() &&
    formData.studentClass &&
    formData.studentClass.trim() &&
    formData.schoolName &&
    formData.schoolName.trim() &&
    formData.address &&
    formData.address.trim() &&
    formData.city &&
    formData.city.trim() &&
    formData.state &&
    formData.state.trim() &&
    formData.postcode &&
    formData.postcode.trim() &&
    formData.reason &&
    formData.reason.trim() &&
    formData.startDate &&
    formData.endDate &&
    formData.signature
  )
}

export function LetterExport({ formData }) {
  const isValid = isLetterValid(formData)

  const handlePdfExport = async () => {
    if (!isValid) return
    await exportToPdf()
  }

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground text-center">
        {isValid 
          ? 'Please review your letter before downloading.'
          : 'Please fill in all required fields to continue.'}
      </p>
      <div className="flex justify-center gap-4">
        <Button 
          onClick={handlePdfExport}
          className="min-w-[200px] min-h-[60px]"
          disabled={!isValid}
        >
          Download PDF
        </Button>
      </div>
    </div>
  )
}