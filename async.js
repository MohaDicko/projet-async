// Tâche 01 : Itération avec Async/Await
async function iterateWithAsyncAwait(array) {
  for (const value of array) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(value);
  }
}

// Tâche 02 : En attente d'un appel
async function waitCall() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Une erreur s'est produite lors de la récupération des données :", error.message);
  }
}

// Tâche 03 : Gestion des erreurs avec Async/Await
async function waitCallWithErrorHandling() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Une erreur s'est produite lors de la récupération des données :", error.message);
  }
}

// Tâche 04 : Chaînage Async/Await
async function chainedAsyncFunctions() {
  await waitCall();
  await waitCallWithErrorHandling();
  await iterateWithAsyncAwait([1, 2, 3]);
}

// Tâche 05 : En attente de demandes simultanées
async function concurrentRequests() {
  const [result1, result2] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos/1'),
    fetch('https://jsonplaceholder.typicode.com/todos/2')
  ]);
  const data1 = await result1.json();
  const data2 = await result2.json();
  console.log("Résultat 1 :", data1);
  console.log("Résultat 2 :", data2);
}

// Tâche 06 : En attente d'appels parallèles
async function parallelCalls(urls) {
  const responses = await Promise.all(urls.map(url => fetch(url)));
  const data = await Promise.all(responses.map(response => response.json()));
  console.log(data);
}