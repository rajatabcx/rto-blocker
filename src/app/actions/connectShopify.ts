import { ResponseType } from '@/lib/constants';
import { Response } from '@/lib/types';

const SHOPIFY_CLIENT_ID = process.env.SHOPIFY_CLIENT_ID;
const REDIRECT_URI = `${process.env.NEXT_PUBLIC_TUNNEL_URL}/shopify-callback`;

export async function connectShopify(shop: string): Promise<Response> {
  if (!shop) {
    return {
      message: 'Shop parameter is required',
      type: ResponseType.ERROR,
    };
  }

  const scopes = 'read_customers,write_customers,read_orders';

  const authorizationUrl = `${shop}/admin/oauth/authorize?client_id=${SHOPIFY_CLIENT_ID}&scope=${scopes}&redirect_uri=${REDIRECT_URI}&state=nonce`;
  return {
    message: authorizationUrl,
    type: ResponseType.SUCCESS,
  };
}
