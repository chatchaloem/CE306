import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = process.env.PORT || 8080;

// ✅ สร้าง instance ของ PrismaClient
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Prisma API!');
});

// CREATE USER
app.post('/users', async (req, res) => {
  const { email, name } = req.body;
  try {
    // ✅ ใช้ prisma.user (ไม่ใช่ Prisma.user)
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    res.status(201).json(user);
  } catch (error: any) {
    if (error.code === 'P2002') { // Prisma error code for unique constraint violation
      res.status(409).json({ error: 'User with this email already exists.' });
    } else {
      res.status(500).json({ error: 'Failed to create user.', details: error.message });
    }
  }
});

// READ USERS
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch users.', details: error.message });
  }
});

app.listen(port, () => {
  console.log('✅ Server is running on http://localhost:' + port);
});
