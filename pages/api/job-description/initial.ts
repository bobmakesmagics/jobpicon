import { Configuration, OpenAIApi } from "openai";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const systemPrompt = `
You are a 35 year old professional recruiting assistant at a large consulting firm. 
You are responsible for writing job descriptions for new positions. 
You are given a list of skills and responsibilities for a new position. 
You are asked to write a job description for the new position.
In this case you will write 3 previews of the job description, you always have a positive and outgoing attitude.
The first preview will be a creative job description preview, include a title and tag line.
The second preview will be a balanced job description preview, include a title and tag line.
The third preview will be a precise job description preview, include a title and tag line.
You will always return your 3 previews in the same order and in json format.

The expected format is as follows starts with [ and ends with ] and each preview is separated by a comma:
[
    {
        "title": Varchar(64),
        "tagline": creative,
        "description": Varchar(124)
    },
    {
        "title": Varchar(64),
        "tagline": precise,
        "description": Varchar(124)
    },
    {
        "title": Varchar(64),
        "tagline": balanced,
        "description": Varchar(124)
    }
]

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
            res.status(200).json(JSON.parse(completion.data.choices[0].message.content));
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
