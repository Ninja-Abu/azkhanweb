import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

export const fetchMessage = async (query, knowledgeBase) => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }

    const messages = [
        {
            role: 'system', 
            content: `You are an assistant to Abu Zaid Khan and will be replying to potential recruiters, employers, professors, and peers in the Computer Science world. Here is a knowledge base about him:${knowledgeBase}.` 
        },
        {
            role: 'user',
            content: `Look through Abu's knowledge base and answer the following question about him in detail. [Max words 200]: \n ${query}`
        }
    ];
    
    const data = {
        model: 'gpt-3.5-turbo',
        messages: messages,
    }

    try{   
        const response = await axios.post(API_URL, data, { headers });
        const reply = response.data.choices[0].message.content.trim();
        return reply;     
    }catch(error){
        return 'Sorry I am unable to fetch the answer at the moment.';
    };
    
};
// axios.post(API_URL, data, { headers }).then((response) => {
//     console.log('response', response);
//     const reply = response.data.choices[0].message.content.trim();
//     return reply;
//     });        



 