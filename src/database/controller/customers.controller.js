import { z } from "zod";
const customerSchema = z.object({
    id: z.number().int().optional(),
    name: z.string().min(1, { message: 'Nome é obrigatório' }),
    phone: z.string().optional(),
    address_street: z.string().optional(),
    address_number: z.string().optional(),
    address_notes: z.string().optional(),
    created_at: z.string().datetime().optional(),
  });
  
  const CustomerController = {
    async createCustomer(req, res) {
      try {
        const data = customerSchema.parse(req.body);
        return res.status(201).json({ message: 'customer created', data });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ message: "Validation error", details: error.errors });
        }
        return res.status(500).json({ message: 'Internal server error' });
      }
    },
  };
  export default CustomerController;
  