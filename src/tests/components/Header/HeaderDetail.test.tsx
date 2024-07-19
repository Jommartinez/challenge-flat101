import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useNavigate } from 'react-router-dom'
import { describe, expect, test, vi } from 'vitest'
import { HeaderDetail } from '../../../components'

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}))

describe('HeaderDetail Component', () => {
  test('renders the Logo, button, and name', () => {
    const mockName = 'Titulo'

    render(<HeaderDetail name={mockName} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText(mockName)).toBeInTheDocument()
  })

  test('calls navigate(-1) on button click', () => {
    const mockNavigate = vi.fn()
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)

    const mockName = 'Titulo'

    render(<HeaderDetail name={mockName} />)
    fireEvent.click(screen.getByRole('button'))

    expect(mockNavigate).toHaveBeenCalledWith(-1)
  })
})
