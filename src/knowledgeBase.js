import workExp from './Components/Data/workExp.json'
import projExp from './Components/Data/projExp.json'
import aboutMe from './Components/Data/aboutMe.json'

const knowledgeBase = `
Work Experience: ${JSON.stringify(workExp, null, 2)}

Project Experience: ${JSON.stringify(projExp, null, 2)}

About Me: ${JSON.stringify(aboutMe, null, 2)}
`;

export default knowledgeBase;
