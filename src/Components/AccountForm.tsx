import { FormWrapper } from "./FormWrapper"

type AccountData = { email: string; password: string }

type AddressFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export function AccountForm({
  email,
  password,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <label className="text-xl">E-Mail</label>
      <input
        required
        autoFocus
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        className="w-[290px] border-2 rounded-lg border-solid border-gray-900"
      ></input>
      <label className="text-xl">Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
        className="border-2 rounded-lg border-solid border-gray-900"
      ></input>
    </FormWrapper>
  )
}
