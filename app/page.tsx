import { createClient } from '@/utils/supabase/server';

export default async function Instruments() {

  const supabase = await createClient();
  const { data: instruments } = await supabase.from("instruments").select();

  return (
  <div>
    <h1 style={{fontSize:'36px'}}>Hello Moussa</h1>
    <pre>{JSON.stringify(instruments, null, 2)}</pre>
  </div>
  )
}