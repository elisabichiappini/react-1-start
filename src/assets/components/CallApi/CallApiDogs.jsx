import { useEffect, useState } from 'react';

export default function UsersList() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError ] = useState(null);


  const fetchDogs = async () => {
    try {
        setLoading(true);
        setError(null);


        const response = await fetch("https://dog.ceo/api/breed/beagle/images/random"
        );
        if (!response.ok) {
            throw new Error ('errore nella risposta dal server');
        }
        const data = await response.json();
        setDogImage(data.message);
    } catch(err) {
        setError(err.messsage);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  if(loading) return <p>Caricamento..</p>
  if(error) return <p>Error: {error}</p>

  return (
  <div>
    {dogImage && (
        <img src={dogImage} alt="Cane pastore australiano" style={{ width:"300px" }}/>
    )}
        <button onClick={fetchDogs}>Carica un altro cane</button>
  </div>
  );
}
