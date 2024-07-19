import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, test, expect, vi } from 'vitest'
import { Paginate } from '../../../src/components'

describe('Paginate Component', () => {
  test('renders buttons correctly', () => {
    render(
      <Paginate
        onClickPrev={() => {}}
        onClickNext={() => {}}
        disabledPrev={false}
        disabledNext={false}
      />,
    )

    expect(screen.getByText('Anterior')).toBeInTheDocument()
    expect(screen.getByText('Siguiente')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Anterior/i })).toContainHTML(
      '<svg',
    )
    expect(screen.getByRole('button', { name: /Siguiente/i })).toContainHTML(
      '<svg',
    )
  })

  test('calls onClickPrev when Previous button is clicked', () => {
    const mockOnClickPrev = vi.fn()

    render(
      <Paginate
        onClickPrev={mockOnClickPrev}
        onClickNext={() => {}}
        disabledPrev={false}
        disabledNext={false}
      />,
    )

    fireEvent.click(screen.getByText('Anterior'))
    expect(mockOnClickPrev).toHaveBeenCalled()
  })

  test('calls onClickNext when Next button is clicked', () => {
    const mockOnClickNext = vi.fn()

    render(
      <Paginate
        onClickPrev={() => {}}
        onClickNext={mockOnClickNext}
        disabledPrev={false}
        disabledNext={false}
      />,
    )

    fireEvent.click(screen.getByText('Siguiente'))
    expect(mockOnClickNext).toHaveBeenCalled()
  })

  test('disables Previous button when disabledPrev is true', () => {
    render(
      <Paginate
        onClickPrev={() => {}}
        onClickNext={() => {}}
        disabledPrev={true}
        disabledNext={false}
      />,
    )

    expect(screen.getByText('Anterior')).toBeDisabled()
  })

  test('disables Next button when disabledNext is true', () => {
    render(
      <Paginate
        onClickPrev={() => {}}
        onClickNext={() => {}}
        disabledPrev={false}
        disabledNext={true}
      />,
    )

    expect(screen.getByText('Siguiente')).toBeDisabled()
  })
})
