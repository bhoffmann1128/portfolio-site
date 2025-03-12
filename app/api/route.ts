import path  from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server'
 
export async function POST(req: Request) {
    
    const body = await req.json();
    const slug = body.slug;
    const jsonDirectory = path.join(process.cwd(), 'json'); 
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    const content = JSON.parse(fileContents);
    let obj = content.projects.filter((item : any) => item.slug === slug);
    
    
    return new Response(JSON.stringify(obj));
}