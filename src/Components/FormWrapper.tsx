import { ReactNode } from "react"

type FormWrapperProps = {
  title: string
  children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="grid text-center m-0 mb-8 text-5xl">{title}</h2>
      <div className="grid GAC gap-4 justify-start">{children}</div>
    </>
  )
}
