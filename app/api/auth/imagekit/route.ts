import Imagekit from 'imagekit';
import config from '@/lib/config';


const { 
    env: { 
        imagekit: { publicKey, privateKey, urlEndpoint }, 
    }, 
} = config;

const imagekit = new Imagekit( { publicKey, privateKey, urlEndpoint });

export async function GET() {
    return NextResponse.json(imagekit.getAuthenticationParameters());
}