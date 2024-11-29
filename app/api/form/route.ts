import { sendEmail } from "@/lib/sendMail";

// Define the handler for creating a task group
export async function POST(request: Request) {
    try {
      // Parse the request body
      const { name, email, message }  = await request.json();
  
      const result = await sendEmail({ name, email, message });

      if (result.success) {
        return Response.json({ message: 'Email sent successfully' }, { status: 200 });
      } else {
        return Response.json({ error: result.message }, { status: 500 });
      }
    } catch (error:any) {
      return Response.json({ error: error.message },  { status: 400 });
    }
  }
  