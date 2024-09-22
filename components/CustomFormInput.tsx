import React from "react";
import { FormField, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

import { authFormSchema } from "@/lib/utils";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
const formSchema = authFormSchema("sign-up");
interface FormInputProps {
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder?: string;
  label?: string;
  control: Control<z.infer<typeof formSchema>>;
}
const CustomFormInput = ({
  name,
  placeholder,
  label,
  control,
}: FormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2"></FormMessage>
          </div>
        </div>
      )}
    />
  );
};

export default CustomFormInput;
