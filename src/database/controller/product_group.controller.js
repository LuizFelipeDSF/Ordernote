import { z } from "zod";
const productGroupSchema = z.object({
    id: z.number().int().optional(),
    name: z.string().min(1, { message: 'Nome do grupo é obrigatório' }),
    icon: z.string().optional(),
  });
  
  const ProductGroupController = {
    async createProductGroup(req, res) {
      try {
        const data = productGroupSchema.parse(req.body);
        return res.status(201).json({ message: 'product group created', data });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ message: "Validation error", details: error.errors });
        }
        return res.status(500).json({ message: 'Internal server error' });
      }
    },
  };

  export default ProductGroupController;
  