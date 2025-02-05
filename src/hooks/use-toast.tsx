// src/hooks/use-toast.ts
import { useState } from "react"

// Define a Toast type for better typing
export type Toast = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  // Add a toast to the list
  const addToast = (toast: Toast) => {
    setToasts((prevToasts) => [...prevToasts, toast])
  }

  // Remove a toast by its id
  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  // Optionally, you could add a function to clear all toasts
  const clearToasts = () => setToasts([])

  return {
    toasts,
    addToast,
    removeToast,
    clearToasts,
  }
}
