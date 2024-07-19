import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, test, expect, vi } from 'vitest'
import { InputSearch } from '../../../src/components/InputSearch/InputSearch'

describe('InputSearch Component', () => {
  test('renders input with correct placeholder and value', () => {
    render(<InputSearch handleSearch={vi.fn()} localSearchTerm="Pilot" />)
    const inputElement = screen.getByPlaceholderText(
      'Buscar...',
    ) as HTMLInputElement
    expect(inputElement).toHaveValue('Pilot')
  })

  test('calls handleSearch on input change', () => {
    const mockHandleSearch = vi.fn()

    render(<InputSearch handleSearch={mockHandleSearch} localSearchTerm="" />)

    const inputElement = screen.getByPlaceholderText(
      'Buscar...',
    ) as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: 'New value' } })

    expect(mockHandleSearch).toHaveBeenCalledTimes(1)
  })
})
