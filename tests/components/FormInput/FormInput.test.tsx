import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, test, expect, vi } from 'vitest'
import { FormInput } from '../../../src/components'

describe('FormInput Component', () => {
  const mockRegister = vi.fn()

  test('renders input with correct type', () => {
    render(
      <FormInput
        id="test-input"
        placeholder="Label"
        type="password"
        register={mockRegister}
      />,
    )

    const input = screen.getByPlaceholderText('Label') as HTMLInputElement
    expect(input).toHaveAttribute('type', 'password')
  })

  test('renders error message when error prop is provided', () => {
    render(
      <FormInput
        id="test-input"
        placeholder="Test Input with Error"
        error="This field is required"
        register={mockRegister}
      />,
    )

    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  test('register function is called with correct arguments', () => {
    render(
      <FormInput
        id="test-input"
        placeholder="Test Input"
        register={mockRegister}
      />,
    )

    expect(mockRegister).toHaveBeenCalledWith('test-input')
  })
})
