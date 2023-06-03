import { Section, Container, CountryInfo, Loader } from 'components';
import { useLocation, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCountry } from '../service/country-service';

export const Country = () => {
const [country, setCountry] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  console.log(location);
  const { countryId } = useParams();
  
  useEffect(() => {
    setLoading(true)
    const searchCountry = async () => {
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {setLoading(false)}
    };
    searchCountry();
  }, [countryId]);

  const { flag, capital, countryName, id, languages, population } = country;

  return (
    <Section>
      <Container>
        <Link to={location.state??'/'}>Повернутись назад</Link>
        {loading && <Loader />}
        {error ? <h2>Виникла помилка:{error}</h2> :
          <CountryInfo flag={flag} capital={capital} countryName={countryName} id={id} languages={languages} population={population} />}
      </Container>
    </Section>
  );
};
