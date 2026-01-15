import { supabase } from "../../../lib/supabase";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await supabase
      .from("contact_messages")
      .insert([{ name, email, message }]);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
