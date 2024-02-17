export async function GET() {
  try {
    return new Response(JSON.stringify('Hello World'), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message ?? error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
