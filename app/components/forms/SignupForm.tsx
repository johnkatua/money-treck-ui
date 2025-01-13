"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomFormField from "./CustomFormField"

const formSchema = z.object({
  username: z.string().min(2).max(50)
})

const SignupForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ""
    }
  })
  return (
    <Form {...form}>
      <form className="px-2 py-2">
        <CustomFormField control={form.control} name="username" label="Username">
          <Input placeholder="Test User" />
        </CustomFormField>
        {/* <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Test User" {...field} required />
              </FormControl>
              <FormDescription>
                This is your public display name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
      </form>
    </Form>
  )
}

export default SignupForm
