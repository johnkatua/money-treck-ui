import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const CustomFormField = ({ control, name, label, children }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {children}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default CustomFormField
