import { supabase } from "../../../lib/supabase";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({ message: "Form submitted successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
