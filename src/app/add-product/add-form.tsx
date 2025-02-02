"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProductAction } from "../../lib/add-product";
import Link from "next/link";
import { redirect } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(1).max(50),
  category: z.string(), //Todo: select input
  age: z.coerce.number().int(),
  originalPrice: z.string(),
  condition: z.string(), //Todo: select input
});

export type AddForm = z.infer<typeof formSchema>;

export default function AddForm() {
  const form = useForm<AddForm>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: AddForm) => {
    try {
      addProductAction(values);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-black"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Age" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="originalPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Original Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Original price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="condition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Condition</FormLabel>
              <FormControl>
                <Input placeholder="Condition" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between ">
          <Button type="submit">Submit</Button>
          <Button className="rounded-md bg-rose-600 hover:bg-rose-400 p-2 transition-colors text-white">
            <Link href={"/"}>Back</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
