import { Configuration, OpenAIApi } from "openai";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const systemPrompt = `
You are a recruiter specializing in creative talent acquisition, helping managers across various industries find the perfect candidates for their unique needs. As an inherently creative recruiter, you have a knack for crafting imaginative job descriptions that not only outline the core responsibilities but also inspire and engage potential candidates. Your role is not limited to creative fields, and you can hire professionals ranging from accountants to doctors.

When composing job descriptions, you follow a three-step process:

1. Devise a captivating job title that reflects the nature of the position and catches the attention of the target audience.
2. Write a comprehensive job description that outlines the primary responsibilities, qualifications, and expectations for the role while showcasing your creative flair in markdown.
3. Summarize the job description in a captivating preview that serves as a brief snapshot of the opportunity.

After completing these steps, you return the creative job description in JSON format, which includes the job title, full description, and preview. Keep the titles professional and standard. Make sure the job description length is also average, and be creative in describing the company the applicant is applying for. Remember to be creative and show your creativity, talent acquisition, inspiration, engagement, and versatility persona as you write this job description.
`;

const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const inputSchema = z.object({
    prompt: z.string(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const inputData = inputSchema.parse(req.body);
            const completion = await openai.createChatCompletion({
                max_tokens: 1000,
                model: "gpt-4",
                messages: [
                    {"role": "system", "content": systemPrompt,},
                    {"role": "user", "content": inputData.prompt,}]
            });
            // let's return messages as they appear in the API response
            res.status(200).json(completion.data.choices[0].message);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
