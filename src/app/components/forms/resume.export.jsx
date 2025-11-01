// src/app/components/forms/resume.export.jsx
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { exportToPdf } from '@/components/ui/export.handlers-v1'
import { Loader2, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Helper to check if a string exists and is not empty
const isValidString = (str) => Boolean(str?.trim())

// Helper to check if an array has at least one valid item
const hasValidItem = (arr, validator) => {
  return Array.isArray(arr) && arr.some(validator)
}

const isResumeValid = (formData) => {
  // 1. Check all required contact information fields
  const hasValidContact =
    isValidString(formData.fullName) &&
    isValidString(formData.jobTitle) &&
    isValidString(formData.email) &&
    isValidString(formData.phone) &&
    isValidString(formData.state) &&
    isValidString(formData.professionalSummary)

  // 2. Check education - at least one with school AND degree
  const hasValidEducation = hasValidItem(
    formData.education,
    (edu) => isValidString(edu.school) && isValidString(edu.degree)
  )

  // 3. Check experience - at least one with company AND position
  const hasValidExperience = hasValidItem(
    formData.experience,
    (exp) => isValidString(exp.company) && isValidString(exp.position)
  )

  // 4. Check skills - at least one with category AND skills
  const hasValidSkills = hasValidItem(
    formData.skills,
    (skill) => isValidString(skill.category) && isValidString(skill.skills)
  )

  // 5. Optional but if filled, validate projects
  const projectsValid = !formData.projects.some(proj => proj.title && !proj.technologies && !proj.description)

  // 6. Optional but if filled, validate certifications
  const certificationsValid = formData.certifications.every(cert => !cert || isValidString(cert))

  // 7. Optional but if filled, validate languages
  const languagesValid = formData.languages.every(lang => !lang || isValidString(lang))

  // All required sections must be valid
  return (
    hasValidContact &&
    hasValidEducation &&
    hasValidExperience &&
    hasValidSkills &&
    projectsValid &&
    certificationsValid &&
    languagesValid
  )
}

// Helper to identify which sections are missing
const getMissingFields = (formData) => {
  const missing = []

  if (!isValidString(formData.fullName)) missing.push('Full Name')
  if (!isValidString(formData.jobTitle)) missing.push('Job Title')
  if (!isValidString(formData.email)) missing.push('Email')
  if (!isValidString(formData.phone)) missing.push('Phone')
  if (!isValidString(formData.state)) missing.push('state')
  if (!isValidString(formData.professionalSummary)) missing.push('Professional Summary')

  if (!formData.education.some(edu => isValidString(edu.school) && isValidString(edu.degree))) {
    missing.push('Education')
  }

  if (!formData.experience.some(exp => isValidString(exp.company) && isValidString(exp.position))) {
    missing.push('Experience ')
  }

  if (!formData.skills.some(skill => isValidString(skill.category) && isValidString(skill.skills))) {
    missing.push('Skills')
  }

  return missing
}

export function ResumeExport({ formData }) {
  const [isExporting, setIsExporting] = useState(false)
  const [error, setError] = useState(null)
  const isValid = isResumeValid(formData)
  const missingFields = getMissingFields(formData)

  const handlePdfExport = async () => {
    if (!isValid) return

    setIsExporting(true)
    setError(null)

    try {
      await exportToPdf(formData)
    } catch (err) {
      console.error('Failed to export PDF:', err)
      setError('Failed to generate PDF. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="space-y-4">
      {isValid ? (
        <Alert className="border-gray-200 bg-gray-50">
          <CheckCircle2 className="h-5 w-5 text-gray-700" />
          <AlertTitle className="text-gray-900">Ready to Download</AlertTitle>
          <AlertDescription className="text-gray-700">
            Your resume is complete and ready to export as PDF.
          </AlertDescription>
        </Alert>
      ) : (
        <Alert className="border-gray-300 bg-gray-50">
          <AlertCircle className="h-5 w-5 text-gray-600" />
          <AlertTitle className="text-gray-900">Missing Required Fields</AlertTitle>
          <AlertDescription className="text-red-600">
            {missingFields.join(', ')}
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Export Failed</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Button
        onClick={handlePdfExport}
        disabled={!isValid || isExporting}
        size="lg"
        className="w-full"
      >
        {isExporting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Generating PDF...
          </>
        ) : (
          'Download Resume PDF'
        )}
      </Button>
    </div>
  )
}