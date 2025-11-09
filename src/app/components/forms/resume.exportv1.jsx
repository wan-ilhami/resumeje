// src/app/components/forms/resume.export.jsx
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { exportToPdf } from '@/components/ui/export.handlers-v2'
import { Loader2, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export function ResumeExport({ formData }) {
  const [isExporting, setIsExporting] = useState(false)
  const [error, setError] = useState(null)


  const handlePdfExport = async () => {

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

      <Button
        onClick={handlePdfExport}
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