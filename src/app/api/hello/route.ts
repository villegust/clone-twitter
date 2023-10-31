export async function GET(requset:Request) {
    return new Response(JSON.stringify({name: "Joe Doe"}))
}

export async function POST(req: Request) {
    const body = await req.json()
    console.log(body)

    return new Response(JSON.stringify({ hello: "world"}))
}