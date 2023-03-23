import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // fungsi yg dijalanin tiap kali render
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('gak bisa ambil data cuy');
        }
        return res.json();
      })
      .then((dat) => {
        setData(dat);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]); // array dependency buat nentuin kapan fungsi dijalanin (saat suatu state berubah)

  return { data, isPending, error };
}
export default useFetch;
