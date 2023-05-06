import { FormWrapper } from "./FormWrapper"

//
type AddressData = {
  street: string
  city: string
  state: string
}

type AccountFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({
  street,
  city,
  state,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="User Address">
      <label className="text-xl text-green-400">Street</label>
      <input
        required
        autoFocus
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
        className="w-[290px] border-2 rounded-lg border-solid border-gray-900"
      ></input>
      <label className="text-xl">City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
        className="border-2 rounded-lg border-solid border-gray-900"
      ></input>
      <label className="text-xl">State</label>
      <input
        required
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
        className="border-2 rounded-lg border-solid border-gray-900"
      ></input>
    </FormWrapper>
  )
}
