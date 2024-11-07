import { ShopifyAccessTokenResponse } from '@/lib/types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const shop = searchParams.get('shop');
  const code = searchParams.get('code');

  if (!shop || !code) {
    return NextResponse.json(
      { error: 'Missing shop or code parameter' },
      { status: 400 }
    );
  }

  try {
    const tokenResponse: ShopifyAccessTokenResponse = await fetch(
      `https://${shop}/admin/oauth/access_token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: process.env.SHOPIFY_CLIENT_ID,
          client_secret: process.env.SHOPIFY_CLIENT_SECRET,
          code: code,
        }),
      }
    ).then((res) => res.json());

    console.log('Token Response');
    console.log(tokenResponse);

    const { access_token } = tokenResponse;

    console.log('Tokens');
    console.log({ access_token });
    return NextResponse.json({ success: true, shop }, { status: 200 });
  } catch (error) {
    console.error('Error in Shopify callback:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
