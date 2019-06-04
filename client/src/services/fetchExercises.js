export default async function fetchExercises(fetchAdress) {
    let res = await fetch(fetchAdress);
    return await res.json();
}