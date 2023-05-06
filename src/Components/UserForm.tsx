import { FormWrapper } from "./FormWrapper"

// This is the same as the UserFormProps type in addressForm.tsx
type UserData = {
  firstName: string
  lastName: string
  age: string
}

// This is the same as the UserFormProps type in accountForm.tsx
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

// This is the same as the UserForm function in addressForm.tsx
export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label className="text-xl">First Name</label>
      <input
        required
        autoFocus
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
        className="border-2 rounded-lg border-solid border-gray-900"
      ></input>
      <label className="text-xl">Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
        className="border-2 rounded-lg border-solid border-gray-900"
      ></input>
      <label className="text-xl">Age</label>
      <input
        required
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
        className="border-2 rounded-lg border-solid border-gray-900"
        min={18}
      ></input>
    </FormWrapper>
  )
}
