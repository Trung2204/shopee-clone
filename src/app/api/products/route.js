export async function GET() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
