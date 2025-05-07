
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getRegionInfo } from '@/utils/dddMap';
import { Phone } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, "Nome precisa ter pelo menos 2 caracteres"),
  phone: z.string().min(11, "Telefone precisa ter 11 dígitos com DDD")
});

type FormValues = z.infer<typeof formSchema>;

const LeadForm: React.FC = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      phone: ""
    }
  });

  const { watch } = form;
  const firstName = watch("firstName");
  const phone = watch("phone");

  useEffect(() => {
    if (firstName && phone && phone.length >= 2) {
      const ddd = phone.substring(0, 2);
      const regionInfo = getRegionInfo(ddd);
      
      if (regionInfo) {
        setWelcomeMessage(`Êeeeita ${firstName}, ${regionInfo.state} ${regionInfo.phrase}! Continue seu número para entrarmos em contato.`);
        setShowMessage(true);
      } else {
        setShowMessage(false);
      }
    } else {
      setShowMessage(false);
    }
  }, [firstName, phone]);

  function onSubmit(data: FormValues) {
    console.log("Formulário enviado:", data);
    alert(`Obrigado ${data.firstName}! Entraremos em contato pelo número ${data.phone}`);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-neuro-lightPurple/30">
      <h3 className="text-xl font-semibold text-neuro-dark mb-4">Quero saber mais sobre o curso</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Qual seu primeiro nome?</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seu WhatsApp</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neuro-gray" />
                    <Input 
                      placeholder="(DDD) + Número" 
                      className="pl-10" 
                      maxLength={11}
                      {...field} 
                      onChange={(e) => {
                        // Permite apenas números
                        const value = e.target.value.replace(/\D/g, '');
                        field.onChange(value);
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {showMessage && (
            <div className="bg-neuro-lightPurple/20 border-l-4 border-neuro-purple p-4 rounded animate-pulse">
              <p className="text-sm text-neuro-dark">{welcomeMessage}</p>
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-neuro-purple hover:bg-neuro-darkPurple"
          >
            Quero me inscrever
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LeadForm;
