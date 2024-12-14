import { ConnectDB } from "@/lib/config/db"
import blogModel from "@/lib/models/blogModel";
const { NextResponse } = require("next/server")
// import {writeFile} from 'fs/promises'


ConnectDB();

export async function GET(request) {
    return NextResponse.json({msg:"api working"})
}

export async function POST(request){
    const blogFormData = await request.formData();
    const timestamp = Date.now();

    const blogData = {
        title:blogFormData.get('title'),
        description:blogFormData.get('description'),
        publishedDate:blogFormData.get('publishedDate'),
        author:blogFormData.get('author'),
        category:blogFormData.get('category'),
        
    };
    
    blogModel.create(blogData);
    console.log('post successfully');

    // const image = newBlogData.get('image');
    // const imageByteData = await image.arrayBuffer();
    // const buffer = Buffer.from(imageByteData);
    // const path = `./public/${timestamp}_${image.name}`;
    // await writeFile(path,buffer);
    // const imgUrl = `/${timestamp}_${image.name}`;
    // console.log(imgUrl);
    return NextResponse.json({blogData})
}