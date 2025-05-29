export interface Datablog {
    id: number;
    type: string; 
    title: string;
    image: string; 
    date: string;
    author: string;       
    keywords: string[];   
    content: string[];    
    sources?: { title: string; url: string }[];
}
