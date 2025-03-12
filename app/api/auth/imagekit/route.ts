import Imagekit from 'imagekit';
import config from '@/lib/config';
import { NextResponse } from 'next/server';
import ImageKit from 'imagekit';


const { 
    env: { 
        imagekit: { publickey, privatekey, urlEndpoint }, 
    }, 
} = config;

const imagekit = new ImageKit({
    publicKey: config.env.imagekit?.publickey || '',  // Corrected
    privateKey: config.env.imagekit?.privatekey || '',  // Corrected
    urlEndpoint: config.env.imagekit?.urlEndpoint || ''  // Corrected
});



export async function GET() {
    return NextResponse.json(imagekit.getAuthenticationParameters());
}





// import ImageKit from 'imagekit';
// import { NextResponse } from 'next/server';
// import config from '@/lib/config';

// const { 
//     imagekit: { publickey, privatekey, urlEndpoint } = {} 
// } = config.env || {};

// const imagekit = new ImageKit({ 
//     publickey, 
//     privatekey, 
//     urlEndpoint
// });

// export async function GET() {
//     return NextResponse.json(imagekit.getAuthenticationParameters());
// }
