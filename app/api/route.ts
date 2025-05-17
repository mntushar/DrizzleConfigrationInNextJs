import BrandServices from "@/service/test";

export async function POST(request: Request) {
  try {

    const data = await request.json()
    const result = await new BrandServices()
    .insert(data);

    return new Response(JSON.stringify(result), { status: 200 });
  }
  catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
}