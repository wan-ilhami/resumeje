// src/app/components/forms/letter.preview.jsx
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LetterTemplate } from '@/components/forms/letter.template'
import { LetterExport } from '@/components/forms/letter.export'
import '@/styles/letter.css'

export default function LetterPreview({ formData, templateSections }) {
  return (
    <Card className="border-2 border-dashed border-gray-300">
      <CardHeader>
        <CardTitle>Letter Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-50 px-2 py-4 rounded-lg">
          <div className="bg-white shadow-lg p-8">
            <div id="letter-content" className="w-full max-w-[24cm] mx-auto bg-white mb-4 [&_*]:text-sm">
              <div className="space-y-6">
                <LetterTemplate data={formData} sections={templateSections} />
                
                {formData.signature && (
                  <div className="signature">
                    <img  
                      src={formData.signature}
                      alt="signature"
                      
                    />
                    <div>
                      ({formData.parentName.trim() ? formData.parentName : 'Parent/Guardian Name'})
                    </div>
                  </div>
                )}

                {!formData.signature && (
                  <div className="signature">
                    <div className="placeholder" >
                      [Signature]
                    </div>
                    <div>
                      ({formData.parentName.trim() ? formData.parentName : 'Parent/Guardian Name'})
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <LetterExport formData={formData} />
        </div>
      </CardContent>
    </Card>
  )
}