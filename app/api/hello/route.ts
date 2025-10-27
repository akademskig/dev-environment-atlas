export const runtime = 'edge';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name') || 'World';

    return new Response(
        JSON.stringify({
            message: `Hello ${name}!`,
            region: process.env.VERCEL_REGION || 'local',
            timestamp: new Date().toISOString(),
            runtime: 'edge',
        }),
        {
            headers: {
                'content-type': 'application/json',
                'cache-control': 'public, s-maxage=60',
            },
        }
    );
}

