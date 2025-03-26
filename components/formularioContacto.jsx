"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre es requerido" }).max(50),
  telefono: z.string().min(10, { message: "El teléfono es requerido" }).max(10),
  email: z
    .string()
    .email({ message: "Ingresa un correo válido" })
    .nonempty({ message: "El correo es requerido" }),
  fecha: z.string().min(1, { message: "La fecha es requerida" }),
  mensaje: z.string().min(0).max(300).optional(),
});

export default function FormularioContacto() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      telefono: "",
      email: "",
      fecha: "",
      mensaje: "",
    },
  });

  const onSubmit = async (values, e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (response.ok) {
        form.reset();
        toast("Datos enviados correctamente ✅");
        return;
      } else {
        toast("Error al enviar las datos ❌");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      {loading ? (
        <p className="flex justify-center items-center text-lg text-white">
          Enviando tus datos...
        </p>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-6">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white md:mb-1 text-base md:text-sm">
                    Nombre Completo
                  </FormLabel>
                  <FormControl>
                    <Input {...field} autoComplete="off" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white md:mb-1 text-base md:text-sm">
                    N° Telefono o WhatsApp
                  </FormLabel>
                  <FormControl>
                    <Input {...field} autoComplete="off" maxLength={10} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white md:mb-1 text-base md:text-sm">
                    Correo Electrónico
                  </FormLabel>
                  <FormControl>
                    <Input {...field} autoComplete="off" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fecha"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white md:mb-1 text-base md:text-sm">
                    Fecha de Evento
                  </FormLabel>
                  <FormControl>
                    <Input {...field} autoComplete="off" type="date" />
                  </FormControl>{" "}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white md:mb-1 text-base md:text-sm">
                  Dejanos un mensaje
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    autoComplete="off"
                    placeholder="Opcional"
                    className="min-h-[6.25rem] resize-none overflow-hidden"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant={"secondary"}
            className="montserrat-semibold w-full md:w-fit py-6 px-10 cursor-pointer"
          >
            Enviar Datos
          </Button>
        </form>
      )}
    </Form>
  );
}
