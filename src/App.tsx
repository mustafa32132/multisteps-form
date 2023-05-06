import { AccountForm } from "./Components/AccountForm"
import { AddressForm } from "./Components/AddressForm"
import { UserForm } from "./Components/UserForm"
import { useMultistepForm } from "./hooks/useMultistepForm"
import { FormEvent, useState } from "react"

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  email: "",
  password: "",
}

function App() {
  // useState hook to store the form data
  const [data, setData] = useState(INITIAL_DATA)
  // Partial<FormData> means that all properties of FormData are optional
  function updateFields(fields: Partial<FormData>) {
    // spread operator to merge the new fields with the existing data
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  const {
    steps,
    currentStepIndex,
    setCurrentStepIndex,
    nextStep,
    backStep,
    isFirstStep,
    isLastStep,
    goTo,
    step,
  } = useMultistepForm([
    // spread operator to pass all properties of data to the form components
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ])

  // Form submission handler
  function onSubmit(e: FormEvent) {
    // prevent the default form submission behavior
    e.preventDefault()
    // if we are not on the last step, go to the next step
    if (!isLastStep) return nextStep()
    // otherwise, submit the form
    alert("Successful Account Creation")
  }
  return (
    <div className="relative bg-white border-2 rounded-lg p-8 m-4 border-solid border-gray-900 font-mono">
      <form onSubmit={onSubmit}>
        <div className="absolute top-2 right-2">
          {currentStepIndex + 1} / {steps.length}
        </div>
        <div className="w-full h-[450px]">{step}</div>
        <div className="m-4 flex  gap-2 justify-end">
          {!isFirstStep && (
            <button
              className="border-2 rounded-lg border-solid border-gray-900 w-20 px-[4px] py-[2px] bg-slate-200"
              type="button"
              onClick={backStep}
            >
              Back
            </button>
          )}

          <button
            className="border-2 rounded-lg border-solid border-gray-900 w-20 px-[4px] py-[2px] bg-slate-200"
            type="submit"
          >
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
