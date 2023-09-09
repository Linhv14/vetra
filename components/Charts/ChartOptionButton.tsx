import React from 'react'

type ChartOptionButtonProps = {
  isOpen: boolean
  chartID: string
  onClose: () => void
}

const ChartOptionButton: React.FC<ChartOptionButtonProps> = ({
  isOpen,
  chartID,
  onClose,
}) => {
  const optionButtonRef = React.useRef<HTMLDivElement | null>(null)

  const handleOuterClick = (e: MouseEvent) => {
    const targetNode = e.target as Node
    if (
      optionButtonRef.current &&
      !optionButtonRef.current.contains(targetNode)
    ) {
      onClose()
    }
  }

  const downloadChartAsImage = (chartID: string) => {
    ApexCharts.exec(chartID, 'dataURI').then(
      ({imgURI, blob}: {imgURI: string; blob: Blob}) => {
        const downloadLink = document.createElement('a')
        downloadLink.href = imgURI
        downloadLink.download = `${chartID}.png`
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
      },
    )
  }

  React.useEffect(() => {
    if (isOpen) {
      console.log('[ChartOptionButton/Effect]: Listening outer click event')
      document.addEventListener('click', handleOuterClick)
    }

    return () => {
      console.log('[ChartOptionButton/Effect]: Clean up click event')
      document.removeEventListener('click', handleOuterClick)
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return (
    <div
      ref={optionButtonRef}
      className="bg-white absolute right-full top-0 -translate-x-1 rounded-md p-4 gap-3 flex-col flex z-10 drop-shadow-md">
      <button className="block text-sm whitespace-nowrap hover:text-primary">
        View Detail
      </button>
      <button
        onClick={() => {
          downloadChartAsImage(chartID)
        }}
        className="block text-sm whitespace-nowrap hover:text-primary">
        Download
      </button>
    </div>
  )
}

export default ChartOptionButton
