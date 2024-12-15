// services/api.js
export const updateParticipantInDatabase = async (table, id, updateData) => {
  try {
    const response = await fetch(`https://feastly-server2.vercel.app/api/data/${table}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });


    if (!response.ok) {
      throw new Error('Failed to update data');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateCheckbox = async (table, id, restaurant, data) => {
  try {
    const response = await fetch(`https://feastly-server2.vercel.app/api/data/${table}/${id}/${restaurant}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });

    console.log('Réponse du serveur :', response);

    if (!response.ok) {
      throw new Error('Failed to update data');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const fetchCheckboxData = async (table, id) => {
  try {
    const response = await fetch(`https://feastly-server2.vercel.app/api/data/${table}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    throw error;
  }
};


export const fetchGuestData = async (table, id) => {
  try {
    const response = await fetch(`https://feastly-server2.vercel.app/api/data/${table}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    throw error;
  }
};

export const fetchResult = async (table) => {
  try {
    const response = await fetch(`https://feastly-server2.vercel.app/api/data/${table}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    throw error;
  }
};