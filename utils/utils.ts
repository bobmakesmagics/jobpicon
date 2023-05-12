import { useRouter } from 'next/router'

export const clickedNext = (e, setCurrentStep) => {
  e.preventDefault()
  setCurrentStep((ex) => ex + 1)
}

export const clickedCancel = (e, setCurrentStep) => {
  e.preventDefault()
  setCurrentStep((ex) => ex - 1)
}

export function useRedirectTo() {
  const router = useRouter()

  function redirectTo(path: string) {
    router.push(path)
  }

  return redirectTo
}
