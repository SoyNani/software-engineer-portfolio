export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    demoUrl?: string;
    githubUrl?: string;
    isFeatured?: boolean;
    image?: string; 
    category?: string; 
}
