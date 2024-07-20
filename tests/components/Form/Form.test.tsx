import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Form } from '../../../src/components'
import { describe, expect, test } from 'vitest'

describe('Form Component', () => {
  test('renders the form button', () => {
    render(<Form />)

    expect(screen.getByRole('button', { name: /Enviar/i })).toBeInTheDocument()
  })

  test('shows validation errors when inputs are empty', async () => {
    render(<Form />)

    fireEvent.click(screen.getByRole('button', { name: /Enviar/i }))

    expect(
      await screen.findByText(/El nombre es obligatorio/i),
    ).toBeInTheDocument()
    expect(
      await screen.findByText(/El email es obligatorio/i),
    ).toBeInTheDocument()
    expect(
      await screen.findByText(/El comentario es obligatorio/i),
    ).toBeInTheDocument()
  })

  test('shows email validation error for invalid email', async () => {
    render(<Form />)

    userEvent.type(screen.getByPlaceholderText(/Email/i), 'jonathan@')
    fireEvent.click(screen.getByRole('button', { name: /Enviar/i }))

    expect(
      await screen.findByText(/Debe ser un correo electrónico válido/i),
    ).toBeInTheDocument()
  })
})
