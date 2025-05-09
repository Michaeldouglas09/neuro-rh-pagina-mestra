
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getRegionInfo } from '@/utils/dddMap';
import { Phone, Mail, User } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

const formSchema = z.object({
  firstName: z.string().min(2, "Nome precisa ter pelo menos 2 caracteres"),
  email: z.string().email("Insira um e-mail válido"),
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
      email: "",
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
    
    // Show toast notification
    toast.success(`Obrigado ${data.firstName}! Entraremos em contato em breve.`);
    
    // Redirect to form
    window.open("https://form.jotform.com/251227913997670", "_blank");
  }

  return (
    <div className="bg-white p-6 rounded-xl">
      <h3 className="text-xl font-semibold text-neuro-dark mb-4">Garanta seu lugar no treinamento</h3>
      <p className="text-sm text-gray-600 mb-6">Preencha para receber todas as informações e garantir sua vaga com desconto especial.</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neuro-gray" />
                    <Input placeholder="Seu nome" className="pl-10" {...field} />
                  </div>
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
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neuro-gray" />
                    <Input placeholder="exemplo@email.com" className="pl-10" {...field} />
                  </div>
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
                <FormLabel>WhatsApp</FormLabel>
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
            Quero garantir minha vaga
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LeadForm;
