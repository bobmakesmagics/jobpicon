import { NextApiRequest, NextApiResponse } from 'next';
import client from 'clients/data';
import { z } from 'zod';

const waitingListSchema = z.object({
  email: z.string().email(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const inputData = waitingListSchema.parse(req.body);
      const existingEmail = await client.waitingList.findUnique({ where: { email: inputData.email } });

      if (existingEmail) {
        res.status(409).json({ message: 'Email already exists' });
      } else {
        const newEntry = await client.waitingList.create({
          data: {
            email: inputData.email,
          },
        });
        res.status(201).json(newEntry);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}


// user: {
//   firstName: 'John',
//   lastName: 'Doe',
//   email: 'john@example.com',
//   company: 'Google Inc',
//   role: 'recruitment manager',
//   createdAt: '',
//   updatedAt: '',
// }

// skill: {
//   name: "React",
//   experience: 3,
//   requiredExperience: 0  // optional
// }

// screeningQuestion: {
//   required: true,
//   title: "BackgroundCheck",
//   idealAnswer: "Yes",

// }

// jobDescription: {
//   job_title: "Entry Level Software Engineer"; // required
//   company : "ABpoll"; // required
//   workplace_type: "remote"; // required
//   location:"United States"; // required
//   job_type: "Full-time"; // required
//   skills_needed: [skill("react",3), skill("js", 5, 5)] // required,
//   salary: 100000,
//   description: "Blah",
//   companyDescription: "Blah2",
//   screeningQuestions: []

// }