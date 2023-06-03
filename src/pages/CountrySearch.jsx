import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useState, useEffect } from 'react';
import {fetchByRegion} from '../service/country-service'

export const CountrySearch = () => {
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (region === '') {
      return
    }
      const searchCountry = async () => {
      try {
        const data = await fetchByRegion(region);
        setCountry(data);
      } catch (error) {
        setError(error.message);
      } finally {setLoading(false)}
    };
    searchCountry();
  }, [region]);

  return (
    <Section>
      <Container>
        <SearchForm setRegion={setRegion} />
        <CountryList countries={country} />
      </Container>
    </Section>
  );
};
