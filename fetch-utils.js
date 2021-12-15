const supabaseUrl = 'https://phyooempvpdfwagpzyjq.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwOTgwNiwiZXhwIjoxOTU1MDg1ODA2fQ.u3XA3DDyRhZVUrzWlZQhrxaHwEQZKHG3uiLvzAiryvY';

const client = supabase.createClient(supabaseUrl, supabaseKey);

export async function getCars() {
    const response = await client
        .from('cars')
        .select();
    return response.data;
}

export async function getPeople() {
    const response = await client
        .from('people')
        .select();
    return response.data;
}

export async function getCountries() {
    const response = await client
        .from('countries')
        .select();
    return response.data;
}

export async function getDogs() {
    const response = await client
        .from('dogs')
        .select();
    return response.data;
}

