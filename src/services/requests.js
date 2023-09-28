// Todas las funciones que tengan awaits necesitan que sean definidas como async
export async function requestGoals() {
    const response = await fetch('/goals.json');
    const goals = await response.json();
    return goals;
}

export async function createGoals() {
    const response = await fetch('/goals.json');
    const goalCreated = await response.json();
    console.log('Goal Created!', goalCreated)
    return goalCreated;
}

export async function updateGoals() {
    const response = await fetch('/goals.json');
    const goalUpdated = await response.json();
    console.log('Goal Updated!', goalUpdated)
    return goalUpdated;
}

export async function deleteGoals() {
    const response = await fetch('/goals.json');
    const goalDeleted = await response.json();
    console.log('Goal Deleted!', goalDeleted.id)
    return goalDeleted.id;
}


