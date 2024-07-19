import { ArrowLeft, ArrowRight } from 'lucide-react'

interface PaginateProps {
  onClickPrev: () => void
  onClickNext: () => void
  disabledPrev: boolean
  disabledNext: boolean
}

export const Paginate = ({
  onClickPrev,
  onClickNext,
  disabledPrev,
  disabledNext,
}: PaginateProps) => {
  return (
    <div>
      <button onClick={onClickPrev} disabled={disabledPrev}>
        <ArrowLeft size={16} /> Anterior
      </button>
      <button onClick={onClickNext} disabled={disabledNext}>
        Siguiente <ArrowRight size={16} />
      </button>
    </div>
  )
}
