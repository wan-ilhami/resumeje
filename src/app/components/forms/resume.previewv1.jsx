'use client';

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ResumeTemplate from '@/components/forms/resume.templatev1'
import { ResumeExport } from './resume.exportv1'

export default function ResumePreview({ formData }) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <Card className="border-2 border-dashed border-gray-300">
            <CardHeader>
                <CardTitle className="text-lg">Resume Preview</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="bg-gray-50 px-2 py-4 rounded-lg">
                    <div id="letter-content" className="w-full mx-auto">
                        {formData ? (
                            <ResumeTemplate data={formData} />
                        ) : (
                            <div className="text-center py-8 text-gray-500">
                                <p>Loading resume...</p>
                            </div>
                        )}
                    </div>
                </div>

                {formData && (
                    <div className="mt-6">
                        <ResumeExport formData={formData} />
                    </div>
                )}
            </CardContent>
        </Card>
    )
}