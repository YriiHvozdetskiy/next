const BaseUrl = 'https://api.sciepro.sheep.fish/api';

export async function POST(request) {
   console.log('request route',request);
   const {email, password} = await request.json();

   console.log('Sending request to:', `${BaseUrl}/auth/login`);
   console.log('Request body:', JSON.stringify({email, password}));

   try {
      const backendResponse = await fetch(`${BaseUrl}/auth/login`, {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({email, password}),
      });

      console.log('Backend response status:', backendResponse.status);
      console.log('Backend response headers:', JSON.stringify(Object.fromEntries(backendResponse.headers)));

      const responseText = await backendResponse.text();
      console.log('Backend response text:', responseText);

      let data;
      try {
         data = JSON.parse(responseText);
      } catch (error) {
         console.error('Error parsing JSON:', error);
         data = {detail: 'Invalid JSON response from server'};
      }

      if (backendResponse.ok) {
         return new Response(JSON.stringify({token: data.token}), {
            status: 200,
            headers: {'Content-Type': 'application/json'},
         });
      } else {
         return new Response(JSON.stringify({error: data.detail || 'Authentication failed'}), {
            status: backendResponse.status,
            headers: {'Content-Type': 'application/json'},
         });
      }
   } catch (error) {
      console.error('Fetch error:', error);
      return new Response(JSON.stringify({error: 'Server error', detail: error.message}), {
         status: 500,
         headers: {'Content-Type': 'application/json'},
      });
   }
}