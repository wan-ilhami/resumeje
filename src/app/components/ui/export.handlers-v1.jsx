import { toast } from 'sonner'

let html2pdf

if (typeof window !== 'undefined') {
  import('html2pdf.js').then((module) => {
    html2pdf = module.default
  })
}

const htmlToPdfBlob = async (element, options) => {
  return await html2pdf().set(options).from(element).output('blob')
}

const defaultPdfOptions = {
  margin: [8, 8, 8, 8],
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { 
    scale: 2,
    useCORS: true,
    letterRendering: false,
    logging: false,
  },
  jsPDF: { 
    unit: 'mm', 
    format: 'a4', 
    orientation: 'portrait'
  },
  pagebreak: { 
    mode: ['avoid-all', 'css', 'legacy'],
    before: '.page-break-before',
    after: '.page-break-after'
  }
}

export const exportToPdf = async () => {
  if (typeof window === 'undefined') return
  
  const toastId = toast.loading('Preparing your PDF...')
  
  try {
    const letterElement = document.getElementById('letter-content')
    if (!letterElement) {
      throw new Error('Could not find resume content')
    }

    // Create a wrapper with exact A4 dimensions
    const wrapper = document.createElement('div')
    wrapper.style.width = '210mm'
    wrapper.style.minHeight = '297mm'
    wrapper.style.padding = '8mm'
    wrapper.style.boxSizing = 'border-box'
    wrapper.style.backgroundColor = 'white'
    wrapper.style.fontFamily = 'Calibri, Arial, sans-serif'
    wrapper.style.fontSize = '11pt'
    wrapper.style.lineHeight = '1.5'
    wrapper.style.color = '#000'
    wrapper.style.margin = '0 auto'

    // Clone and append content
    const clone = letterElement.cloneNode(true)
    wrapper.appendChild(clone)

    // Append temporarily to DOM for rendering
    document.body.appendChild(wrapper)

    // Extract resume name
    const fullNameElements = clone.querySelectorAll('div[style*="font-weight: bold"]')
    const fullNameElement = fullNameElements[0]
    const resumeName = fullNameElement?.textContent?.trim() || 'resume'
    const sanitizedName = resumeName.replace(/\s+/g, '_').slice(0, 30)
    const dateStr = new Date().toISOString().split('T')[0]
    const filename = `${sanitizedName}_${dateStr}.pdf`

    toast.loading('Converting resume to PDF...', { id: toastId })
    
    const pdfBlob = await htmlToPdfBlob(wrapper, defaultPdfOptions)
    
    // Remove wrapper from DOM
    document.body.removeChild(wrapper)

    // Trigger download
    const url = URL.createObjectURL(pdfBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    toast.success('Resume downloaded successfully!', { id: toastId })

  } catch (error) {
    console.error('Error generating PDF:', error)
    toast.error(error instanceof Error ? error.message : 'Failed to generate PDF', { id: toastId })
  }
}