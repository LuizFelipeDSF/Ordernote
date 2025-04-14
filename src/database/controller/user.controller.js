import { z } from "zod";

const userSchema = z.object({
    id: z.number().int().optional(), // autogerado pelo banco
    nome: z.string().min(1, { message: 'Nome é obrigatório' }),
    email: z.string().email({ message: 'Email inválido' }),
    password: z.string().min(6, { message: 'Senha muito curta' }),
    role: z.string().optional(),
    status: z.boolean().optional(), // default = true (1)
    created_at: z.string().datetime().optional(), // gerado automaticamente
  });

const UserController = {
  async createUser(req, res) {
    try {
      const { nome, email, password, role, status ,created_at} = req.body;
      userSchema.parse({ nome, email, password, role, status ,created_at});
      
      return res.status(201).json({ message: 'user created', data: { nome, email, password, role, status ,created_at} });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", details: error.errors });
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  async updateUser(req, res) {
    const { id } = req.params;
    try {
      const { nome, email, password, role, status ,created_at} = req.body;
      userSchema.parse({ nome, email, password, role, status ,created_at});
      
      return res.status(200).json({ message: 'user updated', data: {nome, email, password, role, status} });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", details: error.errors });
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
  async deleteUser(req,res){
    try {
        const {id} = req.params;
        return res.status(200).json({message: 'user deleted', id});
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
},
};

export default UserController;
