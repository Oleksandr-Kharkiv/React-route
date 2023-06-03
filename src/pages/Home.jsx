import { useState, useEffect } from 'react';
import { Container, CountryList, Heading, Loader, Section } from 'components';
import { getCountries } from '../service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchCountrie = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      }
    };
    searchCountrie();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
