import path  from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server'
 
export async function POST(req: Request) {
    
    //const jsonDirectory = path.join(process.cwd(), 'json'); 
    const fileContents = await fs.readFile('/json/data.json', 'utf8');
    const content = JSON.parse(fileContents);
    let obj = content;
    console.log("JSON OBJECT", obj);
    return new Response(JSON.stringify(obj));
}