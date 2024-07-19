import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, test, expect, vi } from 'vitest'
import { FormInput } from '../../../components'

describe('FormInput Component', () => {
  const mockRegister = vi.fn()

  test('renders label and input field by default', () => {
    render(<FormInput id="test-input" label="Label" register={mockRegister} />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Label' })).toBeInTheDocument()
  })

  test('renders textarea when type is "textarea"', () => {
    render(
      <FormInput
        id="test-textarea"
        label="Textarea"
        type="textarea"
        register={mockRegister}
      />,
    )

    expect(
      screen.getByRole('textbox', { name: 'Textarea' }),
    ).toBeInTheDocument()
  })

  test('renders input with correct type', () => {
    render(
      <FormInput
        id="test-input"
        label="Label"
        type="password"
        register={mockRegister}
      />,
    )

    const input = screen.getByLabelText('Label') as HTMLInputElement
    expect(input).toHaveAttribute('type', 'password')
  })

  test('renders error message when error prop is provided', () => {
    render(
      <FormInput
        id="test-input"
        label="Test Input with Error"
        error="This field is required"
        register={mockRegister}
      />,
    )

    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  test('register function is called with correct arguments', () => {
    render(
      <FormInput id="test-input" label="Test Input" register={mockRegister} />,
    )

    expect(mockRegister).toHaveBeenCalledWith('test-input')
  })
})
